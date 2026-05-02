export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Membership", href: "/membership" },
  { label: "Blog", href: "/blog" },
  { label: "Courses", href: "/courses" },
];
