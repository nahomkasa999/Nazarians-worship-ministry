import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin } from "better-auth/plugins";
import nodemailer from "nodemailer";
import { db } from "./prisma";

const appUrl = process.env.BETTER_AUTH_URL ?? "http://localhost:3000";
const trustedOrigins = [
  appUrl,
  ...(process.env.BETTER_AUTH_TRUSTED_ORIGINS?.split(",").map((origin) => origin.trim()) ?? []),
].filter(Boolean);

/**
 * Temporary SMTP sender.
 * We are pausing Resend until a verified custom sending domain is available.
 * To return to Resend, swap this function's sendMail call for the Resend API.
 */
async function sendEmailWithSmtp(input: {
  to: string;
  subject: string;
  html: string;
}) {
  const logPrefix = "[auth-email]";
  console.info(`${logPrefix} sendEmailWithSmtp: start`, {
    to: input.to,
    subject: input.subject,
    htmlLength: input.html.length,
  });

  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const from = process.env.SMTP_FROM_EMAIL?.trim() || smtpUser;

  if (!smtpUser || !smtpPass || !from) {
    console.warn(`${logPrefix} abort: SMTP not configured`, {
      hasSmtpUser: Boolean(smtpUser),
      hasSmtpPass: Boolean(smtpPass),
      hasFrom: Boolean(from),
    });
    return;
  }

  console.info(`${logPrefix} config`, {
    provider: "smtp",
    smtpService: process.env.SMTP_SERVICE?.trim() || "gmail",
    from,
  });

  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE?.trim() || "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
  const response = await transporter.sendMail({
    from,
    to: input.to,
    subject: input.subject,
    html: input.html,
  });

  console.info(`${logPrefix} outcome: success`, {
    messageId: response.messageId ?? "(no message id)",
    accepted: response.accepted,
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
      await sendEmailWithSmtp({
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
      await sendEmailWithSmtp({
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

