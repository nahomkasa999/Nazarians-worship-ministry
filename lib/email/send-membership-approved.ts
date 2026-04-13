import nodemailer from "nodemailer";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function notesToHtml(notes: string | undefined): string {
  if (!notes?.trim()) return "";
  const blocks = notes
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);
  return blocks.map((b) => `<p>${escapeHtml(b).replace(/\n/g, "<br />")}</p>`).join("");
}

function notesToPlain(notes: string | undefined): string {
  if (!notes?.trim()) return "";
  return notes
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean)
    .join("\n\n");
}

/** Safe href for HTML double-quoted attributes; invalid URLs become `#`. */
function hrefAttr(raw: string): string {
  try {
    return escapeHtml(new URL(raw).href);
  } catch {
    return "#";
  }
}

function resourceItemsHtml(): string[] {
  const items: string[] = [];
  const telegram = process.env.MEMBERSHIP_TELEGRAM_URL?.trim();
  if (telegram) {
    items.push(
      `<li><a href="${hrefAttr(telegram)}">Join our Telegram group</a></li>`,
    );
  }
  const secondaryUrl = process.env.MEMBERSHIP_SECONDARY_URL?.trim();
  if (secondaryUrl) {
    const label =
      process.env.MEMBERSHIP_SECONDARY_LABEL?.trim() || "Community link";
    items.push(
      `<li><a href="${hrefAttr(secondaryUrl)}">${escapeHtml(label)}</a></li>`,
    );
  }
  return items;
}

function resourceItemsPlain(): string[] {
  const items: string[] = [];
  const telegram = process.env.MEMBERSHIP_TELEGRAM_URL?.trim();
  if (telegram) {
    items.push(`- Join our Telegram group: ${telegram}`);
  }
  const secondaryUrl = process.env.MEMBERSHIP_SECONDARY_URL?.trim();
  if (secondaryUrl) {
    const label =
      process.env.MEMBERSHIP_SECONDARY_LABEL?.trim() || "Community link";
    items.push(`- ${label}: ${secondaryUrl}`);
  }
  return items;
}

type SmtpSendResult =
  | { sent: true }
  | { sent: false; reason: "missing_env" | "smtp_error"; message: string };

type SmtpEmailInput = {
  logPrefix: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

async function sendThroughSmtp(input: SmtpEmailInput): Promise<SmtpSendResult> {
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const from = process.env.SMTP_FROM_EMAIL?.trim() || smtpUser;

  if (!smtpUser || !smtpPass || !from) {
    const message =
      "Missing SMTP config. Set SMTP_USER, SMTP_PASS, and SMTP_FROM_EMAIL in your deployment environment (Vercel).";
    console.warn(`${input.logPrefix} abort: missing SMTP env`, {
      hasSmtpUser: Boolean(smtpUser),
      hasSmtpPass: Boolean(smtpPass),
      hasFrom: Boolean(from),
    });
    return { sent: false, reason: "missing_env", message };
  }

  console.info(`${input.logPrefix} config`, {
    provider: "smtp",
    smtpService: process.env.SMTP_SERVICE?.trim() || "gmail",
    from,
    subject: input.subject,
    replyTo: input.replyTo ?? "(none)",
  });

  try {
    console.info(`${input.logPrefix} calling Nodemailer transporter.sendMail...`);
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE?.trim() || "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
    const info = await transporter.sendMail({
      from,
      to: input.to,
      subject: input.subject,
      html: input.html,
      text: input.text,
      ...(input.replyTo ? { replyTo: input.replyTo } : {}),
    });
    console.info(`${input.logPrefix} outcome: success`, {
      messageId: info.messageId ?? "(no message id)",
      accepted: info.accepted,
      to: input.to,
    });
    return { sent: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown SMTP send error.";
    console.error(`${input.logPrefix} outcome: exception`, {
      message,
      err:
        err instanceof Error ?
          { name: err.name, stack: err.stack?.split("\n").slice(0, 5).join("\n") }
        : err,
    });
    return { sent: false, reason: "smtp_error", message };
  }
}

export type MembershipApprovedEmailResult =
  | { sent: true }
  | { sent: false; reason: "missing_env" | "smtp_error" | "exception"; message: string };

/**
 * Sends welcome email after membership approval via SMTP (Nodemailer).
 *
 * Temporary provider note:
 * - We are using SMTP now because Resend requires a verified custom sender domain.
 * - To switch back later, replace the transporter.sendMail(...) call with Resend API call,
 *   then use RESEND_API_KEY + RESEND_FROM_EMAIL env values.
 *
 * Returns whether the send was accepted; callers can surface failures to admins
 * without rolling back approval.
 */
export async function sendMembershipApprovedEmail(input: {
  to: string;
  fullName: string;
  telegram?: string | null;
}): Promise<MembershipApprovedEmailResult> {
  const logPrefix = "[membership-email]";
  console.info(`${logPrefix} sendMembershipApprovedEmail: start`, {
    to: input.to,
    fullName: input.fullName?.slice(0, 80) ?? "",
    hasTelegram: Boolean(input.telegram?.trim()),
  });

  const subject =
    process.env.MEMBERSHIP_APPROVAL_SUBJECT?.trim() ||
    "Welcome — your community membership is approved";

  const replyTo =
    process.env.MEMBERSHIP_REPLY_TO?.trim() ||
    process.env.SMTP_REPLY_TO?.trim() ||
    undefined;

  console.info(`${logPrefix} resources`, {
    hasMembershipTelegramUrl: Boolean(process.env.MEMBERSHIP_TELEGRAM_URL?.trim()),
    hasMembershipSecondaryUrl: Boolean(process.env.MEMBERSHIP_SECONDARY_URL?.trim()),
  });

  const safeName = escapeHtml(input.fullName.trim() || "there");
  const plainName = (input.fullName.trim() || "there").replace(/\r?\n/g, " ");
  const telegramOnFile =
    input.telegram?.trim() ?
      `<p>We have your Telegram username on file as <strong>@${escapeHtml(input.telegram.trim())}</strong> — use it when you join our channels if asked.</p>`
    : "";

  const telegramOnFilePlain =
    input.telegram?.trim() ?
      `We have your Telegram username on file as @${input.telegram.trim()} — use it when you join our channels if asked.\n\n`
    : "";

  const resourceListHtml = resourceItemsHtml();
  const resourcesBlockHtml =
    resourceListHtml.length > 0 ?
      `<p><strong>Your resources</strong></p><ul>${resourceListHtml.join("")}</ul>`
    : "<p><strong>Your resources</strong></p><p>We’ll send you links and updates here as soon as they’re configured.</p>";

  const resourceListPlain = resourceItemsPlain();
  const resourcesBlockPlain =
    resourceListPlain.length > 0 ?
      `Your resources:\n${resourceListPlain.join("\n")}`
    : "We’ll send you links and updates as soon as they’re configured.";

  const notesHtml = notesToHtml(process.env.MEMBERSHIP_WELCOME_NOTES);
  const notesPlain = notesToPlain(process.env.MEMBERSHIP_WELCOME_NOTES);
  const extraHtml = process.env.MEMBERSHIP_WELCOME_EXTRA_HTML?.trim() ?? "";

  const html = `
<!DOCTYPE html>
<html>
<body style="margin:0; padding:24px; background:#f5f7fb; font-family:Inter,Segoe UI,Arial,sans-serif; color:#111827;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden;">
    <tr>
      <td style="padding:24px 28px; background:#0f172a; color:#f8fafc;">
        <h1 style="margin:0; font-size:22px; line-height:1.3;">Nazarian Worship Ministry</h1>
        <p style="margin:8px 0 0; font-size:14px; color:#cbd5e1;">Membership approval update</p>
      </td>
    </tr>
    <tr>
      <td style="padding:28px; line-height:1.6; font-size:15px;">
        <p style="margin-top:0;">Hi ${safeName},</p>
        <p>Your membership request has been <strong>approved</strong>. We are glad to have you with us.</p>
        ${telegramOnFile}
        ${resourcesBlockHtml}
        ${notesHtml}
        <p><strong>What you can do next</strong></p>
        <ul>
          <li>Join the channels above to stay connected with the community.</li>
          <li>Check the website for events, teachings, and updates.</li>
          <li>Reply to this email if you have questions.</li>
        </ul>
        ${extraHtml ? `<div>${extraHtml}</div>` : ""}
        <p style="margin-bottom:0;">- Nazarian Worship Ministry</p>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  const text = [
    `Hi ${plainName},`,
    "",
    "Your membership request has been approved. We’re glad to have you with us.",
    "",
    telegramOnFilePlain + resourcesBlockPlain,
    notesPlain ? `\n${notesPlain}\n` : "",
    "What you can do next:",
    "- Join the channels above to stay connected with the community.",
    "- Check the website for events, courses, and updates.",
    "- Reply to this email if you have questions.",
    "",
    "— Nazarian Worship",
  ]
    .join("\n");

  console.info(`${logPrefix} payload sizes`, {
    htmlChars: html.length,
    textChars: text.length,
    subjectChars: subject.length,
  });

  return sendThroughSmtp({
    logPrefix,
    to: input.to,
    subject,
    html,
    text,
    replyTo,
  });
}

export type MembershipRequestReceivedEmailResult = SmtpSendResult;

export async function sendMembershipRequestReceivedEmail(input: {
  to: string;
  fullName: string;
}): Promise<MembershipRequestReceivedEmailResult> {
  const logPrefix = "[membership-request-email]";
  const subject =
    process.env.MEMBERSHIP_REQUEST_SUBJECT?.trim() ||
    "We received your membership request";
  const safeName = escapeHtml(input.fullName.trim() || "there");
  const plainName = (input.fullName.trim() || "there").replace(/\r?\n/g, " ");

  const html = `
<!DOCTYPE html>
<html>
<body style="margin:0; padding:24px; background:#f5f7fb; font-family:Inter,Segoe UI,Arial,sans-serif; color:#111827;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden;">
    <tr>
      <td style="padding:24px 28px; background:#0f172a; color:#f8fafc;">
        <h1 style="margin:0; font-size:22px; line-height:1.3;">Nazarian Worship Ministry</h1>
        <p style="margin:8px 0 0; font-size:14px; color:#cbd5e1;">Membership request received</p>
      </td>
    </tr>
    <tr>
      <td style="padding:28px; line-height:1.6; font-size:15px;">
        <p style="margin-top:0;">Hi ${safeName},</p>
        <p>Thank you for your interest in joining our community. We have received your request successfully.</p>
        <p>Our team will review it soon. You will receive another email once your request is approved.</p>
        <p style="margin-bottom:0;">- Nazarian Worship Ministry</p>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  const text = [
    `Hi ${plainName},`,
    "",
    "Thank you for your interest in joining our community.",
    "We received your membership request successfully.",
    "",
    "Our team will review it soon. You will receive another email once your request is approved.",
    "",
    "- Nazarian Worship Ministry",
  ].join("\n");

  return sendThroughSmtp({
    logPrefix,
    to: input.to,
    subject,
    html,
    text,
  });
}
