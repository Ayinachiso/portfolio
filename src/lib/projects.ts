export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  type: string;
  status: "Live" | "Private" | "In progress" | "Placeholder";
  year: string;
  client: string;
  stack: string[];
  liveUrl?: string;
  privacy: string;
  featured: boolean;
  reviewNotes?: string[];
};

export const projects: Project[] = [
  {
    slug: "deafly",
    title: "Deafly",
    summary:
      "An accessibility-focused classroom platform for deaf and hard-of-hearing students, with live captions, simplified language, and Nigerian Sign Language support.",
    role: "Full-stack developer",
    type: "Accessibility technology",
    status: "Live",
    year: "Review needed",
    client: "Independent project",
    stack: ["React", "TypeScript", "Accessibility", "Live captions"],
    liveUrl: "https://deafly-liart.vercel.app/",
    privacy: "Public preview",
    featured: true,
    reviewNotes: ["Confirm year and exact implemented feature list before publishing."],
  },
  {
    slug: "siwes-recommender",
    title: "SIWES Placement Recommendation System",
    summary:
      "A final-year thesis project that matches students with suitable industrial-training companies using academic profiles, skills, tools, and preferences.",
    role: "Researcher and full-stack developer",
    type: "Explainable recommendation system",
    status: "Live",
    year: "Review needed",
    client: "Academic project",
    stack: ["React", "Recommendation systems", "Explainability"],
    liveUrl: "https://siwes-recommender.vercel.app/",
    privacy: "Public preview",
    featured: true,
    reviewNotes: ["Confirm stack, methodology wording, and thesis year."],
  },
  {
    slug: "superted-innovators",
    title: "SuperTed Innovators",
    summary:
      "A business website for solar systems, smart-home automation, CCTV, access control, and related services.",
    role: "Web designer and developer",
    type: "Business website",
    status: "Live",
    year: "Review needed",
    client: "Client project",
    stack: ["Frontend development", "Responsive design", "Business website"],
    liveUrl: "http://supertedinnovators.com.ng/",
    privacy: "Public website",
    featured: true,
    reviewNotes: ["Confirm your role, stack, and launch year."],
  },
  {
    slug: "swingsxstore",
    title: "SwingsXStore",
    summary:
      "An ecommerce and business-management platform. The case study will clearly separate personal contribution from broader team work.",
    role: "Contributor - details pending review",
    type: "Ecommerce platform",
    status: "Live",
    year: "Review needed",
    client: "Team project",
    stack: ["Ecommerce", "Business management", "Responsive UI"],
    liveUrl: "https://www.swingsxstore.com/",
    privacy: "Public website",
    featured: true,
    reviewNotes: ["Needs exact contribution boundaries before public case study is finalized."],
  },
  {
    slug: "swings-crm",
    title: "Swings CRM",
    summary:
      "A CRM product for small businesses with customer, lead, call, and ticket-management capabilities.",
    role: "Contributor - details pending review",
    type: "SaaS / CRM",
    status: "Live",
    year: "Review needed",
    client: "Team project",
    stack: ["CRM", "SaaS", "Customer management"],
    liveUrl: "https://www.swingscrm.com/",
    privacy: "Public website",
    featured: true,
    reviewNotes: ["Confirm your role, feature ownership, and stack before publishing."],
  },
  {
    slug: "utilipay",
    title: "UtiliPay",
    summary:
      "A full-stack community payments and utility-management platform for estate dues, electricity, and related resident payments.",
    role: "Full-stack developer",
    type: "Fintech / utility management",
    status: "Private",
    year: "Review needed",
    client: "Independent project",
    stack: ["Full-stack development", "Payments", "Admin systems"],
    privacy: "Not publicly deployed",
    featured: true,
    reviewNotes: ["No live URL should be shown until deployment is approved."],
  },
  {
    slug: "personalised-celebration-website",
    title: "Personalised Celebration Website",
    summary:
      "An interactive Valentine’s Day website created for a family celebration, demonstrating personalised web experiences for birthdays, anniversaries, and special moments.",
    role: "Designer and developer",
    type: "Interactive personal website",
    status: "Live",
    year: "Review needed",
    client: "Personal project",
    stack: ["Interactive UI", "Responsive design", "Personalised web"],
    liveUrl: "https://to-the-absolute-love-of-my-life.vercel.app/",
    privacy: "Use approved or obscured media only",
    featured: false,
    reviewNotes: ["Family photos must remain placeholders until approved public media is provided."],
  },
  {
    slug: "html-email-design-development",
    title: "HTML Email Design and Development",
    summary:
      "Responsive, branded HTML email design and development for campaigns, announcements, and transactional communication.",
    role: "Email designer and developer",
    type: "HTML email",
    status: "Placeholder",
    year: "Review needed",
    client: "Service showcase",
    stack: ["HTML email", "Responsive email", "Brand systems"],
    privacy: "Placeholder examples until approved samples are uploaded",
    featured: false,
    reviewNotes: ["Add approved email examples and supported client-testing notes later."],
  },
];
