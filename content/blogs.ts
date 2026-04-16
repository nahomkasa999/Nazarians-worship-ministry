export interface Blog {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  body: string;
}

export const blogs: Blog[] = [
  {
    id: "discipline-secret-place",
    image: "/images/defult-image.jpg",
    title: "THE DISCIPLINE OF THE SECRET PLACE",
    subtitle: "Practical steps to maintaining a consistent teaching life in a busy city.",
    body: "In the noise of Addis Ababa, finding a \"secret place\" for teaching and prayer is a challenge. We provide a framework for students and professionals to build a sustainable daily rhythm of study.",
  },
  {
    id: "architecture-authentic-altar",
    image: "/images/defult-image.jpg",
    title: "THE ARCHITECTURE OF AN AUTHENTIC ALTAR",
    subtitle: "Understanding the internal structure of worship beyond the physical sanctuary.",
    body: "We often focus on the physical aesthetics of our gathering places, but the true altar is built in the spirit. This post explores the biblical requirements for a heart that serves as a dwelling place for God.",
  },
  {
    id: "harmonizing-tradition-renewal",
    image: "/images/defult-image.jpg",
    title: "HARMONIZING TRADITION AND RENEWAL",
    subtitle: "Navigating the rich history of Ethiopian worship in a modern digital age.",
    body: "How do we maintain the reverence of our ancient liturgical roots while embracing the tools of the modern ministry? A look at the evolution of sound and spirit in the Nazarian community.",
  },
];
