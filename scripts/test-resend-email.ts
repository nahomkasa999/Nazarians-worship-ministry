/**
 * Tests the same SMTP path as membership approval emails.
 *
 * Usage (from project root):
 *   bun run test:email
 *   bun run test:email -- recipient@example.com
 *
 * Env:
 *   SMTP_USER, SMTP_PASS, SMTP_FROM_EMAIL (required)
 *   TEST_EMAIL_TO — default recipient if no CLI arg
 *
 * Loads `.env` from the project root via dotenv.
 */
import "dotenv/config";
import { sendMembershipApprovedEmail } from "../lib/email/send-membership-approved";

function firstArgRecipient(): string | undefined {
  const args = process.argv.slice(2).filter((a) => !a.startsWith("-"));
  return args[0]?.trim() || undefined;
}

async function main() {
  console.info("=== SMTP / membership email test ===\n");

  const recipient =
    firstArgRecipient() ||
    process.env.TEST_EMAIL_TO?.trim() ||
    process.env.SMTP_FROM_EMAIL?.trim() ||
    process.env.SMTP_USER?.trim();

  console.info("Environment:", {
    SMTP_SERVICE: process.env.SMTP_SERVICE?.trim() || "gmail",
    SMTP_USER: process.env.SMTP_USER?.trim() || "(not set)",
    SMTP_PASS: process.env.SMTP_PASS?.trim() ? "(set)" : "(not set)",
    SMTP_FROM_EMAIL: process.env.SMTP_FROM_EMAIL?.trim() || "(not set)",
    recipient: recipient || "(not set)",
    MEMBERSHIP_TELEGRAM_URL: process.env.MEMBERSHIP_TELEGRAM_URL ? "(set)" : "(not set)",
  });

  if (!recipient) {
    console.error(
      "\nNo recipient. Pass an email as an argument, or set TEST_EMAIL_TO, or set SMTP_FROM_EMAIL.\n" +
        "Example: bun run test:email -- you@gmail.com\n",
    );
    process.exit(1);
  }

  if (!process.env.SMTP_USER?.trim() || !process.env.SMTP_PASS?.trim()) {
    console.error("\nMissing SMTP_USER or SMTP_PASS in .env\n");
    process.exit(1);
  }

  console.info("\nCalling sendMembershipApprovedEmail (same code as admin approve)…\n");

  const result = await sendMembershipApprovedEmail({
    to: recipient,
    fullName: "Resend test user",
    telegram: "test_username",
  });

  console.info("\n=== Result ===");
  console.info(JSON.stringify(result, null, 2));

  if (!result.sent) {
    console.error("\nTest FAILED:", result.message);
    process.exit(1);
  }

  console.info("\nTest PASSED — check the inbox (and spam) for:", recipient);
  process.exit(0);
}

main().catch((err) => {
  console.error("\nUnhandled error:", err);
  process.exit(1);
});
