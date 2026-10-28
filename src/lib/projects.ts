export type ProjectMedia = {
  src: string;
  kind: "image" | "video";
  label: string;
  alt: string;
  width?: number;
  height?: number;
  poster?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  details: string;
  role: string;
  category: string;
  status: "Live" | "Ongoing" | "Completed";
  visibility: string;
  stack: string[];
  logo: string;
  media?: ProjectMedia[];
  emptyMediaNote?: string;
  liveUrl?: string;
  liveLinkLabel?: string;
  storeLinks?: { label: string; url: string }[];
};

const content = (filename: string) => `/images/content/${filename}`;
const logo = (filename: string) => `/images/logos/${filename}`;

export const projects: Project[] = [
  {
    slug: "deafly",
    title: "Deafly",
    summary:
      "A classroom accessibility idea shaped by a simple question: how can every student follow the lesson?",
    details:
      "Watching an ISWIS episode featuring deaf advocate Alexis sent me down a research rabbit hole about accessibility in Nigerian schools. After speaking with deaf people, I started building Deafly: a low-connectivity classroom accessibility system designed to reduce dependence on human interpreters. The prototype features functional live transcription and captions, while simulating the broader sign-language experience. It's an ambitious project, but everyone deserves to understand what's happening in class without waiting for someone else to explain.",
    role: "Founder, product designer & developer",
    category: "Accessibility / assistive technology",
    status: "Live",
    visibility: "Public",
    stack: ["React", "TypeScript", "Full-stack development", "Accessibility"],
    logo: logo("deafly.jpeg"),
    media: [
      {
        src: content("deafly1.jpeg"),
        kind: "image",
        label: "Inclusive classroom landing page",
        alt: "Deafly classroom landing page with captioning and accessibility features",
        width: 1280,
        height: 646,
      },
      {
        src: content("deafly2.jpeg"),
        kind: "image",
        label: "Student sign-in experience",
        alt: "Deafly sign-in screen for students",
        width: 1280,
        height: 645,
      },
      {
        src: content("deafly3.jpeg"),
        kind: "image",
        label: "Classroom learning interface",
        alt: "Deafly classroom interface with learning content and sign language support",
        width: 1280,
        height: 651,
      },
      {
        src: content("deafly_vid.mp4"),
        kind: "video",
        label: "Deafly product walkthrough",
        alt: "Video walkthrough of the Deafly platform",
        poster: content("deafly1-poster.webp"),
      },
    ],
    // Insert here for the live URL for this project.
    liveUrl: "https://deafly-liart.vercel.app/",
    liveLinkLabel: "Visit Deafly",
  },
  {
    slug: "siwes-recommender",
    title: "SIWES Placement Recommendation System",
    summary:
      "My final-year project turns the search for industrial training into a better-matched recommendation.",
    details:
      "Finding an industrial training placement was so stressful that I decided my final-year project would be about making sure other students didn't have to suffer the same fate. I built a hybrid recommendation system combining machine learning, content-based filtering, and rules to match students with suitable companies. With 1,031 placement records and a Random Forest F1 score of 0.761, this was research, full-stack development, and a little personal revenge against the internship search process.",
    role: "Researcher, product designer & developer",
    category: "Education technology / machine learning",
    status: "Live",
    visibility: "Public",
    stack: ["TF-IDF", "Random Forest", "React", "FastAPI", "PostgreSQL"],
    logo: logo("siwes.jpeg"),
    media: [
      {
        src: content("siwes1.jpeg"),
        kind: "image",
        label: "Placement matching landing page",
        alt: "SIWES placement recommendation landing page",
        width: 1280,
        height: 632,
      },
      {
        src: content("siwes2.jpeg"),
        kind: "image",
        label: "Placement recommendations",
        alt: "SIWES placement recommendation results interface",
        width: 1280,
        height: 638,
      },
    ],
    // Insert here for the live URL for this project.
    liveUrl: "https://siwes-recommender.vercel.app/",
    liveLinkLabel: "Try the recommendation system",
  },
  {
    slug: "swings-crm",
    title: "Swings CRM Website",
    summary:
      "A public-facing home for PPS’s CRM product, built independently from the private application.",
    details:
      "This was my introduction to Framer Motion, PHP contact forms, and the realization that a website can have a lot of moving parts. I independently researched, wrote, designed, animated, and developed the entire SwingsCRM website. I built a functional contact form that sends emails and integrated Google Maps for location-based directions to the office. From the copy to the code, every detail was mine. Quite literally a one-woman production team.",
    role: "Product designer & developer",
    category: "Business software / CRM",
    status: "Live",
    visibility: "Public website · private CRM application",
    stack: ["Frontend", "Backend", "Responsive web"],
    logo: logo("swingscrm.jpeg"),
    media: [
      {
        src: content("swingscrm1.jpeg"),
        kind: "image",
        label: "Swings CRM overview",
        alt: "Swings CRM overview with customer relationship management features",
        width: 1280,
        height: 645,
      },
      {
        src: content("swingscrm2.jpeg"),
        kind: "image",
        label: "Swings CRM workspace",
        alt: "Swings CRM workspace and customer management interface",
        width: 1280,
        height: 613,
      },
    ],
    // Insert here for the live URL for this project.
    liveUrl: "https://www.swingscrm.com/",
    liveLinkLabel: "Visit Swings CRM",
  },
  {
    slug: "utilipay",
    title: "UtiliPay",
    summary:
      "A home-grown fix for estate payments that used to arrive as WhatsApp screenshots and Excel rows.",
    details:
      "My mum chaired our estate, and I somehow became the unofficial payment reconciliation department. Residents sent payment screenshots to WhatsApp, and we manually transferred everything into Excel. Surely there was a better way? I built UtiliPay to manage community dues, utilities, receipts, and reconciliation. Then came the real challenge: not everyone wants another app. That inspired WhatsApp and USSD payment workflows. What started as helping my mum became an entire fintech product.",
    role: "Founder, product designer & developer",
    category: "Fintech / community management",
    status: "Ongoing",
    visibility: "Public project site · private core application",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Paystack"],
    logo: logo("utilipay.jpeg"),
    media: [
      {
        src: content("utilipay1.jpeg"),
        kind: "image",
        label: "UtiliPay community payments homepage",
        alt: "UtiliPay website introducing community payments and utility management",
        width: 1280,
        height: 644,
      },
      {
        src: content("utilipay2.jpeg"),
        kind: "image",
        label: "UtiliPay resident payment flow",
        alt: "UtiliPay resident interface for making and managing payments",
        width: 1280,
        height: 640,
      },
    ],
    // Insert the public project website URL here to activate this button.
    liveUrl: "https://utili-pay-green.vercel.app/",
    liveLinkLabel: "Visit the UtiliPay project site",
  },
  {
    slug: "iswis-dilemma-platform",
    title: "ISWIS Dilemma Manager",
    summary:
      "A love of the ISWIS podcast turned into a practical idea for handling listener dilemmas.",
    details:
      "I love the I Said What I Said podcast. Apparently, listening wasn't enough, so I built them an entire dilemma management platform. Listeners can submit stories through a public form, while a private dashboard handles reviewing, shortlisting, internal notes, and tracking used submissions. I designed and developed everything independently. Nobody commissioned it; I just thought it would be useful. Some people send fan mail. I send functional software.",
    role: "Full-stack developer",
    category: "Media technology / workflow automation",
    status: "Completed",
    visibility: "Public submission form · private admin interface",
    stack: ["Frontend", "Backend", "Workflow automation"],
    logo: logo("iswis.jpeg"),
    media: [
      {
        src: content("iswis1.jpeg"),
        kind: "image",
        label: "Dilemma submission form",
        alt: "Mobile I Said What I Said dilemma submission form",
        width: 843,
        height: 1280,
      },
      {
        src: content("iswis2.jpeg"),
        kind: "image",
        label: "Dilemma submission options",
        alt: "Mobile view of the I Said What I Said listener dilemma form",
        width: 861,
        height: 1280,
      },
    ],
    // Insert the public dilemma submission form URL here to activate this button.
    liveUrl: "https://siwes-recommender.vercel.app/login",
    liveLinkLabel: "Visit the public ISWIS dilemma form",
  },
  {
    slug: "superted-innovators",
    title: "SuperTed Innovators",
    summary:
      "A considered, responsive website that gives the business a clear home online.",
    details:
      "A business needs a proper digital introduction, and that's what I built for SuperTed Innovators. I designed and developed a responsive informational website that presents the business clearly and makes its services easy to explore. Nothing unnecessarily complicated, just a clean, functional website that does its job. The interesting part? I built the initial site in roughly 30 minutes. Sometimes the assignment doesn't need three weeks and seventeen meetings.",
    role: "Product designer & developer",
    category: "Business / corporate website",
    status: "Live",
    visibility: "Public",
    stack: ["Web design", "Responsive development", "Information architecture"],
    logo: logo("ted.jpeg"),
    media: [
      {
        src: content("ted1.jpeg"),
        kind: "image",
        label: "SuperTed services homepage",
        alt: "SuperTed Innovators website presenting solar and smart-home services",
        width: 1280,
        height: 644,
      },
      {
        src: content("ted2.jpeg"),
        kind: "image",
        label: "SuperTed project services",
        alt: "SuperTed Innovators website with service information and project imagery",
        width: 1280,
        height: 648,
      },
    ],
    // Insert here for the live URL for this project.
    liveUrl: "http://supertedinnovators.com.ng/",
    liveLinkLabel: "Visit SuperTed Innovators",
  },
  {
    slug: "swingsxstore-website",
    title: "SwingsXStore Website",
    summary:
      "The full-stack website I built independently for a retail and online-selling platform.",
    details:
      "Swingsxstore helps businesses simplify sales, inventory, and store management. I independently developed its animated, responsive informational website, including a functional contact experience. I also contributed to the mobile application, building screens and implementing backend logic for selected features alongside the development team. The app is now available on both the App Store and Google Play. One product, two platforms, and two very different development experiences",
    role: "Full-stack developer",
    category: "Digital platform / ecommerce website",
    status: "Live",
    visibility: "Public website",
    stack: ["Full-stack web development", "Ecommerce", "Responsive UI"],
    logo: logo("swingsxstore.jpeg"),
    media: [
      {
        src: content("swingsxstore1.jpeg"),
        kind: "image",
        label: "SwingsXStore ecommerce homepage",
        alt: "SwingsXStore ecommerce website homepage",
        width: 1280,
        height: 641,
      },
      {
        src: content("swingsxstore2.jpeg"),
        kind: "image",
        label: "SwingsXStore shopping experience",
        alt: "SwingsXStore website showing product discovery and shopping features",
        width: 1280,
        height: 628,
      },
    ],
    // Insert here for the live URL for this project.
    liveUrl: "https://www.swingsxstore.com/",
    liveLinkLabel: "Visit the SwingsXStore website",
  },
  {
    slug: "swingsxstore-mobile-app",
    title: "SwingsXStore Mobile App",
    summary:
      "My contribution to the retail app, built with a team and available on both major app stores.",
    details:
      "SwingsXStore also has a mobile app for retail operations. I contributed to its development as part of a team, separate from my independent work on the website. The public listings describe tools for point-of-sale, sales, and inventory management; no mobile app screenshots were included with the portfolio assets.",
    role: "Development contributor · team project",
    category: "Digital platform / mobile application",
    status: "Live",
    visibility: "Public iOS and Android listings",
    stack: ["Mobile application", "Point of sale", "Inventory management"],
    logo: logo("swingsxstore.jpeg"),
    media: [
      {
        src: content("swingsxstore1.jpeg"),
        kind: "image",
        label: "SwingsXStore mobile app overview",
        alt: "SwingsXStore app overview screenshot",
        width: 1280,
        height: 641,
      },
      {
        src: content("swingsxstore2.jpeg"),
        kind: "image",
        label: "SwingsXStore mobile app shopping experience",
        alt: "SwingsXStore app screen showing shopping and store tools",
        width: 1280,
        height: 628,
      },
    ],
    // Insert here for the live URL for this project.
    storeLinks: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/swingsxstore/id6757529770",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.titamtech.swingsxstore",
      },
    ],
  },
  {
    slug: "personalised-celebration-website",
    title: "Celebration Sites",
    summary:
      "Personal stories and milestones turned into one-of-a-kind digital experiences, made with their recipients in mind.",
    details:
      "Some people send birthday messages, my clients choose to build personalized websites. I build entire websites. I've designed highly personalized digital experiences for birthdays, Valentine's Day, and other special occasions, complete with custom layouts, animations, and little details that actually mean something to the recipient. Nothing is random; every element has a reason for being there. These projects aren't publicly accessible because they contain personal memories and photographs. But trust me, the attention to detail is borderline unreasonable.",
    role: "Founder, product designer & developer",
    category: "Creative web development / personalized experiences",
    status: "Completed",
    visibility: "Selected previews shown · live experiences private",
    stack: ["Interactive UI", "Responsive design", "Personalized web"],
    logo: logo("celebrationsites.jpg"),
    media: [
      {
        src: content("celebrationsites1.jpeg"),
        kind: "image",
        label: "Celebration site — introduction",
        alt: "Personalized celebration website introduction page",
        width: 1280,
        height: 640,
      },
      {
        src: content("celebrationsites2.jpeg"),
        kind: "image",
        label: "Celebration site — story page",
        alt: "Personalized celebration website story page",
        width: 1280,
        height: 642,
      },
      {
        src: content("celebrationsites3.jpeg"),
        kind: "image",
        label: "Celebration site — memories",
        alt: "Personalized celebration website memories page",
        width: 1280,
        height: 585,
      },
      {
        src: content("celebrationsites4.jpeg"),
        kind: "image",
        label: "Celebration site — mobile view",
        alt: "Mobile view of a personalized celebration website",
        width: 802,
        height: 1280,
      },
    ],
    // Insert here for the live URL for this project.
  },
  {
    slug: "candlecave",
    title: "CandleCave",
    summary:
      "A candle storefront with the tools behind the scenes to keep its products and content current.",
    details:
      "Thirty minutes to build an e-commerce platform? Yeah! I did that. At a Payaza hackathon, I built CandleCave, a candle storefront complete with a content management system and checkout integration linked to Payaza's Shopaza platform. I handled the design and development, making sure it looked good and actually worked. And yes, I won the hackathon. Not bad for something built in less time than it takes some people to choose a font.",
    role: "Product designer & developer",
    category: "Ecommerce / web development",
    status: "Completed",
    visibility: "Private",
    stack: ["Ecommerce", "Content management", "Shopaza by Payaza"],
    logo: logo("candlecave.jpeg"),
    media: [
      {
        src: content("candlecave1.jpeg"),
        kind: "image",
        label: "Candle Cave storefront",
        alt: "Candle Cave scented candle ecommerce homepage",
        width: 1280,
        height: 652,
      },
      {
        src: content("candlecave2.jpeg"),
        kind: "image",
        label: "Candle product page",
        alt: "Candle Cave product detail page for a scented candle",
        width: 1280,
        height: 646,
      },
    ],
  },
  {
    slug: "6figure-club",
    title: "Six Figure Club",
    summary:
      "A client website for a community helping freelancers grow international careers.",
    details:
      "Six Figure Club needed a website that could showcase its community and make managing content ridiculously simple. So I built one, including a custom content manager that lets administrators update individual content sections without touching code. And if I do say so myself, it's one of the most intuitive content managers I've built. No unnecessary complexity, no developer required for every little change. Just a website that works for the people running it.",
    role: "Product designer & developer",
    category: "Community platform / web development",
    status: "Live",
    visibility: "Public",
    stack: ["Web development", "Content management", "Community website"],
    logo: logo("6figureclub.jpeg"),
    media: [
      {
        src: content("6figureclub1.jpeg"),
        kind: "image",
        label: "Six Figure Club community homepage",
        alt: "Six Figure Club website introducing its international freelance career community",
        width: 1280,
        height: 638,
      },
      {
        src: content("6figureclub2.jpeg"),
        kind: "image",
        label: "Six Figure Club application process",
        alt: "Six Figure Club application process page",
        width: 1280,
        height: 654,
      },
      {
        src: content("6figureclub_vid.mp4"),
        kind: "video",
        label: "Six figure club content manager walkthrough",
        alt: "Video walkthrough of the Six Figure Club content manager",
        poster: content("6figureclub1-poster.webp"),
      },
    ],
    // Insert the public Six Figure Club website URL here to activate this button.
    liveUrl: "https://the6figureclub.vercel.app/",
    liveLinkLabel: "Visit Six Figure Club",
  },
  {
    slug: "in-your-early-twenties-email",
    title: "In Your Early Twenties — Email Campaign",
    summary:
      "A visual email campaign for a series about figuring out your early twenties, one story at a time.",
    details:
      "Most emails are fighting for attention in an inbox nobody particularly wants to open but, I can change that, I can build customized emails tailored to your brand. For In Your Early Twenties, a podcast about navigating life in your twenties, I independently designed and built an email campaign template for reaching out to prospective podcast guests. From the layout and branding to the content and implementation, I handled everything. The goal was simple: make an invitation feel personal, intentional, and worth responding to, rather than another email destined for the archives.",
    role: "Product designer & developer",
    category: "Email design / digital communications",
    status: "Completed",
    visibility: "Public portfolio showcase",
    stack: ["Email campaign design", "Typography", "Visual communication"],
    logo: logo("IYE20.jpg"),
    media: [
      {
        src: content("IYE20.jpg"),
        kind: "image",
        label: "In Your Early Twenties campaign email",
        alt: "Full-length In Your Early Twenties campaign email design",
        width: 750,
        height: 1280,
      },
    ],
    // Insert here for the live URL for this project.
  },
];
