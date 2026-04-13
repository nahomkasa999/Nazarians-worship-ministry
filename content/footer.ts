export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "NAVIGATION",
    links: [
      { label: "HOME", href: "/" },
      { label: "ABOUT", href: "/about" },
      { label: "EVENTS", href: "/events" },
      { label: "BLOG", href: "/blog" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "COURSES", href: "/courses" },
      { label: "JOIN", href: "/community" },
      { label: "CONTACT", href: "/contact" },
    ],
  },
  {
    title: "SOCIAL",
    links: [
      { label: "YOUTUBE", href: "https://youtube.com" },
      { label: "TELEGRAM", href: "https://t.me" },
      { label: "INSTAGRAM", href: "https://instagram.com" },
    ],
  },
];
