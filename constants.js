export const METADATA = {
  author: "Mohammed Faizan Ahmed",
  title: "Portfolio | Mohammed Faizan Ahmed",
  description:
    "Backend developer, problem solver, and UI tinkerer. Crafting clean code, scalable apps, and meaningful solutions — one project and one cup of coffee at a time.",
  siteUrl: "https://your-portfolio-url.com/",
  twitterHandle: "",
  keywords: [
    "Mohammed Faizan Ahmed",
    "Backend Developer",
    "Problem Solver",
    "Automation Developer",
    "Portfolio",
  ].join(", "),
  image: "https://your-image-url.com/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  { name: "Home", ref: "home" },
  { name: "Skills", ref: "skills" },
  { name: "Projects", ref: "projects" },
  { name: "Experience", ref: "work" },
  { name: "Contact", ref: "contact" },
];
export const TYPED_STRINGS = [
  "Backend Developer | Automation | AI/ML",
  "Building APIs, Workflows & Systems",
  "Scalable. Reliable. Efficient.",
];



export const SOCIAL_LINKS = [
  {
    name: "github",
    url: "https://github.com/AhmedFaizanDev",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/mohdfaizanahmed/",
  },
  {
    name: "mail",
    url: "mailto:info2faizanahmed@gmail.com",
  },
  {
    name: "discord",
    url: "https://discord.com/users/521143247960277003",
  },
];

export const SKILLS = {
  languages: [
    "C",
    "cplusplus",
    "Python",
    "Java",
    "Bash",
    "HTML",
    "CSS",
  ],

  developerTools: [
    "Git",
    "GitHub",
    "Docker",
    "Vim",
    // "OAuth",
    "n8n-color",
    "Figma",
    "Postman",
  ],

  frameworksAndLibraries: [
    "Vue.js",
    "TailwindCSS",
    "Django",
    "Pandas",
    "Matplotlib",
    "seaborn-1",
    "scikit-learn",
    // "Flask"
  ],

  databases: [
    "SQLite",
    "PostgresSQL",
  ],
};
export const PROJECTS = [
  {
    name: "OpenCV Spotify Controller",
    description:
      "A computer vision-based tool that controls Spotify using hand gestures captured via webcam. Built with OpenCV and Python, it detects predefined gestures to play, pause, skip tracks, and adjust volume — all hands-free. Perfect for staying in the flow without touching a keyboard.",
    tech: ["python", "opencv-svgrepo-com", "mediapipe_icon"],
    gradient: ["#00C9FF", "#92FE9D"],
    image: "/projects/OpenCV Spotify Controller.webp",
    blurImage: "/projects/blur/OpenCV Spotify Controller.webp",
  },
  {
    name: "Python BitTorrent Client",
    description:
      "A BitTorrent client built from scratch in Python to explore the fundamentals of peer-to-peer networking. Supports parsing .torrent files, peer discovery, chunked file downloading, and data assembly. Built using socket programming and multithreading to manage multiple peer connections concurrently.",
    tech: ["python", "Socket.io"],
    gradient: ["#FF512F", "#DD2476"],
    image: "/projects/Python BitTorrent Client.webp",
    blurImage: "/projects/blur/Python BitTorrent Client.webp",
  },
  {
    name: "RAG-based Personalized AI Chatbot",
    description:
      "Developed a Retrieval-Augmented Generation (RAG) based AI chatbot that emulates emotional, affectionate texting patterns. Built using n8n, OpenAI APIs, Pinecone (for vector memory), and Airtable as a lightweight DB. The bot retains context, recalls details from past chats, and maintains a unique personality.",
    tech: ["n8n-color", "openai-svgrepo-com", "pinecone", "Airtable_Logo", "html", "css"],
    gradient: ["#7F00FF", "#E100FF"],
    image: "/projects/RAG-based Personalized AI Chatbot.webp",
    blurImage: "/projects/blur/RAG-based Personalized AI Chatbot.webp",
  },
];


export const WORK_CONTENTS = {
  INTERNSHIP: [
    {
      title: "Backend Developer Intern",
      description:
        "Worked as a Backend Developer Intern for a Digital Marketing Website. Developed an API-first backend architecture, implemented secure authentication, handled data management, and integrated basic analytics functionalities. Collaborated closely with the frontend team to deliver seamless features.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Backend Developer Intern
        </div>
      ),
    },
  ],
  OPEN_SOURCE: [
    {
      title: "Open Source Contributor",
      description:
        "Contributed to open-source projects during Hacktoberfest. Worked on bug fixes, and documentation enhancements for community-driven projects.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Hacktoberfest Contributor
        </div>
      ),
    },
  ],
    PERSONAL: [
    {
      title: "CafeKulture (Founder)",
      description:
        "Founder and solo developer of CafeKulture — a mobile app for tracking cafes you visit and managing a personal wishlist. It helps users document experiences, discover new spots, and curate their cafe journey with a focus on delivering a simple and delightful experience for coffee lovers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Founder
        </div>
      ),
    },
    {
      title: "TuneScout (Ideation Stage)",
      description:
        "TuneScout is an app concept designed to help users discover venues based on the music playing there. It allows users to capture songs they hear at cafes, restaurants, and public spaces, and log them to a personal timeline and map. The app aims to crowdsource real-time music data from venues, enabling users to choose where to go based on their music taste rather than just food or ambiance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Ideation Stage
        </div>
      ),
    },
    ],
};
  

export const GTAG = "G-5HCTL2TJ5W";
