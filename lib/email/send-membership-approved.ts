import { Resend } from "resend";
import { maskResendApiKeyForLog } from "@/lib/email/resend-debug";

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

export type MembershipApprovedEmailResult =
  | { sent: true }
  | { sent: false; reason: "missing_env" | "resend_error" | "exception"; message: string };

/**
 * Sends welcome email after membership approval. Returns whether Resend accepted the send;
 * callers can surface failures to admins without rolling back approval.
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

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!apiKey || !from) {
    const message =
      "RESEND_API_KEY or RESEND_FROM_EMAIL is not set; welcome email was skipped.";
    console.warn(`${logPrefix} abort: missing env`, {
      hasApiKey: Boolean(apiKey),
      hasFrom: Boolean(from),
      apiKey: maskResendApiKeyForLog(apiKey),
      from: from || "(not set)",
    });
    return { sent: false, reason: "missing_env", message };
  }

  const subject =
    process.env.MEMBERSHIP_APPROVAL_SUBJECT?.trim() ||
    "Welcome — your community membership is approved";

  const replyTo =
    process.env.MEMBERSHIP_REPLY_TO?.trim() ||
    process.env.RESEND_REPLY_TO?.trim() ||
    undefined;

  console.info(`${logPrefix} config`, {
    apiKey: maskResendApiKeyForLog(apiKey),
    from,
    subject,
    replyTo: replyTo ?? "(none)",
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
<body style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
  <p>Hi ${safeName},</p>
  <p>Your membership request has been <strong>approved</strong>. We’re glad to have you with us.</p>
  ${telegramOnFile}
  ${resourcesBlockHtml}
  ${notesHtml}
  <p><strong>What you can do next</strong></p>
  <ul>
    <li>Join the channels above to stay connected with the community.</li>
    <li>Check the website for events, courses, and updates.</li>
    <li>Reply to this email if you have questions.</li>
  </ul>
  ${extraHtml ? `<div>${extraHtml}</div>` : ""}
  <p>— Nazarian Worship</p>
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

  try {
    console.info(`${logPrefix} calling Resend.emails.send…`);
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: input.to,
      subject,
      html,
      text,
      ...(replyTo ? { replyTo } : {}),
    });
    if (error) {
      const message =
        typeof error === "object" && error && "message" in error &&
        typeof (error as { message?: unknown }).message === "string" ?
          (error as { message: string }).message
        : "Resend returned an error.";
      console.error(`${logPrefix} Resend API returned error object:`, error);
      try {
        console.error(`${logPrefix} Resend error (JSON):`, JSON.stringify(error));
      } catch {
        /* non-serializable */
      }
      console.error(`${logPrefix} outcome: failed (resend_error)`, { message });
      return { sent: false, reason: "resend_error", message };
    }
    console.info(`${logPrefix} outcome: success`, {
      resendEmailId: data?.id ?? "(no id in response)",
      to: input.to,
    });
    return { sent: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error sending email.";
    console.error(`${logPrefix} outcome: exception`, {
      message,
      err:
        err instanceof Error ?
          { name: err.name, stack: err.stack?.split("\n").slice(0, 5).join("\n") }
        : err,
    });
    return { sent: false, reason: "exception", message };
  }
}
