-- Add EXPIRED membership status
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_enum e
    JOIN pg_type t ON t.oid = e.enumtypid
    WHERE t.typname = 'MembershipStatus' AND e.enumlabel = 'EXPIRED'
  ) THEN
    ALTER TYPE "MembershipStatus" ADD VALUE 'EXPIRED';
  END IF;
END $$;

