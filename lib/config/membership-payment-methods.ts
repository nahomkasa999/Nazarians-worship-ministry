export type MembershipPaymentMethodId = "telebirr" | "cbe";

export type MembershipPaymentMethod = {
  id: MembershipPaymentMethodId;
  label: string;
  accountName: string;
  accountNumber: string;
  notes?: string;
};

function env(k: string): string {
  return process.env[k]?.trim() ?? "";
}

const bankLabel = env("PAYMENT_METHOD_LABEL") || "Commercial Bank of Ethiopia";
const bankName = env("PAYMENT_ACCOUNT_NAME") || "Nazarian Worship Ministry";
const bankNumber = env("PAYMENT_ACCOUNT_NUMBER") || "";
const telebirrLabel = env("PAYMENT_TELEBIRR_LABEL") || "Telebirr";
const telebirrName = env("PAYMENT_TELEBIRR_ACCOUNT") || bankName;
const telebirrNumber = env("PAYMENT_TELEBIRR_ACCOUNT_NUMBER") || "09xxxxxxxx";
const parsedAmount = Number(env("PAYMENT_AMOUNT_BIRR"));

export const MEMBERSHIP_PAYMENT_AMOUNT_BIRR = Number.isFinite(parsedAmount) && parsedAmount > 0
  ? parsedAmount
  : null;

export const MEMBERSHIP_PAYMENT_METHODS: MembershipPaymentMethod[] = [
  {
    id: "telebirr",
    label: telebirrLabel,
    accountName: telebirrName,
    accountNumber: telebirrNumber,
    notes: env("PAYMENT_TELEBIRR_NOTES") || "Use your name as the payment note if possible.",
  },
  {
    id: "cbe",
    label: bankLabel,
    accountName: bankName,
    accountNumber: bankNumber || "1000xxxxxxx",
  },
];

