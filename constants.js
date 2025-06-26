export const METADATA = {
  author: "Mohammed Faizan Ahmed",
  title: "Portfolio | Mohammed Faizan Ahmed",
  description:
    "Backend developer, problem solver, and UI/UX tinkerer. Building clean, scalable solutions and exploring the world of code and coffee.",
  siteUrl: "https://your-portfolio-url.com/",
  twitterHandle: "",
  keywords: [
    "Mohammed Faizan Ahmed",
    "Backend Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://your-image-url.com/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "C++ enthusiast | UI tinkerer | Backend builder | Problem solver",
  "Crafting clean code & cleaner coffee shop lists ☕",
  "Developer. Designer. Dreamer.",
];

export const SOCIAL_LINKS = [
  {
    name: "github",
    url: "https://github.com/AhmedFaizanDev",
  },
  // Add LinkedIn and email if available
];

export const SKILLS = {
  languagesAndTools: [
    "c",
    "cpp",
    "python",
    "java",
    "javascript",
    "html",
    "css",
    "nodejs",
    "docker",
    "expo",
    "figma",
    "git",
    "github",
    "neovim",
    "oauth2",
    "n8n",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["room-db", "sqlite", "firebase"],
  other: ["api-integration", "cloud-basics"],
};

export const PROJECTS = [
  {
    name: "CafeKulture (Ongoing)",
    description: "A mobile app to track cafes you visit and your cafe wishlist. Features user-generated cafe lists, wishlist tracking, experience sharing, and cafe discovery using APIs (Foursquare/Yelp) and Mapbox for maps. Designed in Figma by yours truly 😉",
    tech: ["expo", "react-native", "room-db", "firebase", "mapbox"],
    gradient: ["#F14658", "#DC2537"],
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp"
  },
  {
    name: "n8n Automation Assistant (Research Stage)",
    description: "Building an AI assistant to convert plain English automation requests into n8n JSON workflows. Exploring node documentation parsing and GPT-based pipeline integration.",
    tech: ["n8n", "nodejs", "openai-apis"],
    gradient: ["#FFA62E", "#EA4D2C"],
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp"
  },
  {
    name: "Scheduling Assistant App",
    description: "Supports multi-user OAuth2 login for team scheduling, tasks, and reminders. Backend designed to be deployable and demo-ready for teams.",
    tech: ["oauth2", "react-native", "nodejs"],
    gradient: ["#000066", "#6699FF"],
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/inshorts-blur.webp"
  },
  {
    name: "Digital Marketing Website Backend",
    description: "Developed backend APIs for a client website during an internship. API-first architecture with authentication, data management, and basic analytics.",
    tech: ["nodejs", "rest-apis"],
    gradient: ["#142D46", "#2E4964"],
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp"
  },
  {
    name: "Python Projects",
    description: "CLI utilities, basic automation scripts, and mini DSA projects for learning.",
    tech: ["python"],
    gradient: ["#FFA62E", "#EA4D2C"],
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp"
  },
];

export const WORK_CONTENTS = {
  GRAPEVINE: [
    {
      title: "Grapevine",
      description:
        "Grapevine is your anonymous office chat, letting coworkers speak openly, share gossip and connect without filters. Building on that same belief, Round1 AI brings it to hiring using AI-driven interviews to replace guesswork with genuine and meaningful conversations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Connect anonymously. Share freely.
        </div>
      ),
    },
    {
      title: "Pioneering",
      description:
        "Hiring was broken — manual, biased, and slow. We launched Round1 AI to fix that: authentic voice interviews, built-in bias checks and real-time insights. Today, it powers thousands of interviews each week, letting teams hire smarter, faster and fairer.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Elevate",
      description:
        "The early web app struggled with slow performance and zero retention. I rebuilt it from the ground up with a sleek UI, faster load times and SEO-optimized. Then seeded a rich content layer to spark discovery. The payoff? 6x more impressions and 10x the organic installs all without ads, just momentum.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
  ],
  DUKAAN: [
    {
      title: "Dukaan",
      description:
        "Dukaan is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],
  // AVIATE: [
  //   {
  //     title: "Aviate",
  //     description:
  //       "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Finding the right job isn&apos;t fate, it&apos;s navigation
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Innovation",
  //     description:
  //       "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Frontend Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
  // SPACENOS: [
  //   {
  //     title: "Spacenos",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         We build apps that solve problems for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Trailblazing",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Web Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
};

export const GTAG = "G-5HCTL2TJ5W";
