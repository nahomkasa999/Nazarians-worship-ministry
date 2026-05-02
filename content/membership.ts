export interface MembershipBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface ContributionTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface UsagePoint {
  title: string;
  description: string;
}

export const membershipBenefits: MembershipBenefit[] = [
  {
    title: "Weekly Vocal Exercises",
    description: "Access our growing library of vocal warm-ups and advanced training videos released every week.",
    icon: "Music",
  },
  {
    title: "Detailed Study Notes",
    description: "Get comprehensive PDF notes for every teaching and session to deepen your understanding.",
    icon: "FileText",
  },
  {
    title: "Music Theory Lessons",
    description: "Structured lessons on music theory specifically tailored for worship leaders and musicians.",
    icon: "BookOpen",
  },
  {
    title: "Exclusive Community",
    description: "Join a dedicated group of worshipers for support, feedback, and shared growth.",
    icon: "Users",
  },
];

export const contributionTiers: ContributionTier[] = [
  {
    name: "Partner",
    price: "100 ETB",
    description: "A more significant contribution to help us expand our reach and quality.",
    features: ["All Supporter features", "Direct Q&A Sessions", "Early Access"],
    recommended: true,
  },
];

export const moneyUsage: UsagePoint[] = [
  {
    title: "Content Production",
    description: "High-quality video recording, audio engineering, and editing for our weekly trainings.",
  },
  {
    title: "Resource Development",
    description: "Creating and translating study materials and music theory resources for the community.",
  },
  {
    title: "Ministry Outreach",
    description: "Supporting local worship teams and organizing training workshops in different locations.",
  },
  {
    title: "Platform Maintenance",
    description: "Keeping our digital platforms secure and accessible for all members worldwide.",
  },
];
