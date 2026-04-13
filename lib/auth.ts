import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin } from "better-auth/plugins";
import { maskResendApiKeyForLog } from "@/lib/email/resend-debug";
import { db } from "./prisma";

const appUrl = process.env.BETTER_AUTH_URL ?? "http://localhost:3000";
const trustedOrigins = [
  appUrl,
  ...(process.env.BETTER_AUTH_TRUSTED_ORIGINS?.split(",").map((origin) => origin.trim()) ?? []),
].filter(Boolean);

async function sendEmailWithResend(input: {
  to: string;
  subject: string;
  html: string;
}) {
  const logPrefix = "[auth-email]";
  console.info(`${logPrefix} sendEmailWithResend: start`, {
    to: input.to,
    subject: input.subject,
    htmlLength: input.html.length,
  });

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey || !from) {
    console.warn(`${logPrefix} abort: Resend not configured`, {
      hasApiKey: Boolean(apiKey),
      hasFrom: Boolean(from),
      apiKey: maskResendApiKeyForLog(apiKey),
    });
    return;
  }

  console.info(`${logPrefix} config`, {
    apiKey: maskResendApiKeyForLog(apiKey),
    from,
  });

  console.info(`${logPrefix} POST https://api.resend.com/emails …`);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [input.to],
      subject: input.subject,
      html: input.html,
    }),
  });

  const responseText = await response.text();
  if (!response.ok) {
    console.error(`${logPrefix} HTTP error`, {
      status: response.status,
      statusText: response.statusText,
      body: responseText.slice(0, 2000),
    });
    throw new Error(`Resend request failed (${response.status}): ${responseText}`);
  }

  console.info(`${logPrefix} outcome: success`, {
    status: response.status,
    bodyPreview: responseText.slice(0, 500),
  });
}

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  trustedOrigins,
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    sendResetPassword: async ({ user, url }) => {
      await sendEmailWithResend({
        to: user.email,
        subject: "Reset your password",
        html: `<p>Hello ${user.name ?? "there"},</p><p>Click <a href="${url}">here</a> to reset your password.</p>`,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: false,
    sendOnSignIn: false,
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmailWithResend({
        to: user.email,
        subject: "Verify your email",
        html: `<p>Hello ${user.name ?? "there"},</p><p>Click <a href="${url}">here</a> to verify your email.</p>`,
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    },
  },
  plugins: [
    admin({
      defaultRole: "user",
      adminRoles: ["admin"],
    }),
  ],
});

