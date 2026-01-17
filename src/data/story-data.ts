import { TimelineItem, SkillItem, ProjectItem } from "@/types/storyTypes"


export const timeline: TimelineItem[] = [
  {
    year: "2018-2020",
    title: "BCA, Swami Vivekanand Subharti University",
    body: "Completed Bachelor of Computer Applications while working full-time, strengthening theoretical foundation."
  },
  {
    year: "2011-2015",
    title: "Lead Module, GoBiggi LLC",
    body: "Built drag-and-drop website builder SaaS platform from scratch, enabling non-technical users to create websites."
  },
  {
    year: "2015-2016",
    title: "UI Developer, Truelytics Ecommerce Pvt Ltd",
    body: "Led development of icustommadeit.com marketplace, creating custom jeans tool and phone case editor for bespoke product customization."
  },
  {
    year: "2016-2018",
    title: "Frontend Developer, Hartley Labs",
    body: "Built TripStreak.com frontend using AngularJS—a patent-pending travel platform with personalized TripScore algorithm for corporate travel booking."
  },
  {
    year: "2018-2023",
    title: "Senior UI Developer, JetSynthesys",
    body: "Led diverse product portfolio: Wakau social video platform with AWS deployment pipelines, Mereedhun personalized music platform, ChannelFlight & KinoClub OTT streaming, JobDost recruitment automation with team management of 4 developers."
  },
  {
    year: "2023-Present",
    title: "Team Lead, nSoft",
    body: "Leading complex UI implementations with React, Tanstack Query, Shadcn-UI while collaborating with cross-functional teams."
  }
]

export const skills: Record<string, SkillItem[]> = {
  Core: [
    { label: "HTML5", level: 95 },
    { label: "CSS3", level: 95 },
    { label: "JavaScript ES6+", level: 90 },
    { label: "TypeScript", level: 85 }
  ],
  Frameworks: [
    { label: "React.js", level: 95 },
    { label: "Next.js", level: 90 },
    { label: "Vue.js", level: 85 },
    { label: "AngularJS", level: 85 },
    { label: "Laravel", level: 80 }
  ],
  "DevOps & Cloud": [
    { label: "AWS", level: 85 },
    { label: "Docker", level: 80 },
    { label: "GitHub Actions", level: 80 },
    { label: "Git", level: 90 },
    { label: "Chrome Extensions", level: 75 }
  ]
}

export const featuredProjects: ProjectItem[] = [
  {
    name: "Wakau",
    description: "Social Video Sharing Platform",
    technologies: [
      "Next.js",
      "Shadcn",
      "Tailwind CSS",
      "Zustand",
      "NextAuth",
      "Tanstack Query",
      "AWS",
      "Docker",
      "GitHub Actions"
    ],
    impact: "Highly interactive short video entertainment platform with automated AWS deployment pipeline using Docker containerization and zero-downtime deployments"
  },
  {
    name: "JobDost",
    description: "AI-Powered Recruitment Automation",
    technologies: [
      "Vue.js",
      "Vuex",
      "Laravel",
      "Chrome Extension API",
      "ATS Integration",
      "AI Chat Engines"
    ],
    impact: "Automated 90% of recruiters' tasks with ATS integration, AI engines, and web scraping capabilities. Led team of 4 developers with agile methodologies and sprint planning"
  },
  {
    name: "ChannelFlight & KinoClub",
    description: "OTT Streaming Platforms",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript ES6",
      "Laravel",
      "Shaka Player",
      "AWS",
      "DRM Integration"
    ],
    impact: "Custom video player with DRM support, adaptive bitrate streaming, and responsive design across all devices. Implemented full-screen mode, subtitles, and optimized performance"
  },
  {
    name: "Mereedhun.com",
    description: "Personalized Musical Gifts Platform",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Audio Processing",
      "Custom UI"
    ],
    impact: "Pioneer in Indian market for custom musical gifts, creating personalized songs for celebrations and special occasions. User-friendly song customization interface with emotional storytelling"
  },
  {
    name: "TripStreak.com",
    description: "Corporate Travel Booking Platform",
    technologies: [
      "AngularJS",
      "Node.js",
      "MongoDB",
      "UnderscoreJS",
      "Travel APIs",
      "Algorithm Integration"
    ],
    impact: "Patent-pending TripScore algorithm that personalizes corporate travel search experiences, reducing time between search and booking while increasing customer satisfaction"
  },
  {
    name: "icustommadeit.com",
    description: "Custom Product Marketplace",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Product Configurators",
      "E-commerce Integration"
    ],
    impact: "Bridged creators and customers globally with custom jeans creation tool and phone case editor modules. Enabled bespoke product customization connecting villages to metros"
  }
]

// Additional data for specialized sections
export const jetSynthesysProjects = [
  {
    category: "OTT Streaming",
    icon: "🎬",
    title: "ChannelFlight & KinoClub",
    description: "Built comprehensive streaming platforms with custom Shaka Player integration, supporting DRM, adaptive bitrate streaming, and multi-device responsive design.",
    achievements: [
      "Custom video player with full-screen, subtitles, and volume controls",
      "Laravel backend with ES6 modular JavaScript architecture",
      "AWS deployment with performance optimization",
      "Cross-browser and cross-device compatibility"
    ]
  },
  {
    category: "AI Recruitment",
    icon: "💼",
    title: "JobDost Platform",
    description: "Led team of 4 developers building comprehensive recruitment ecosystem with admin portals, client interfaces, and Chrome extension for profile automation.",
    achievements: [
      "Automated 90% of recruiter non-productive tasks",
      "ATS, CRM, and AI chat engine integrations",
      "Chrome extension for multi-portal web scraping",
      "Agile sprint management and code review processes"
    ]
  },
  {
    category: "Creative Personalization",
    icon: "🎵",
    title: "Mereedhun Musical Gifts",
    description: "Pioneered India's first personalized musical gifts platform, creating custom songs for celebrations with seamless user experience.",
    achievements: [
      "User-friendly song customization interface",
      "Integration with music production workflows",
      "Emotional storytelling through personalized lyrics",
      "Market pioneer in personalized audio content"
    ]
  },
  {
    category: "Social Entertainment",
    icon: "📱",
    title: "Wakau Video Platform",
    description: "Built high-performance social video sharing platform with real-time features using Next.js and modern state management.",
    achievements: [
      "Real-time video interactions and social features",
      "Modern React ecosystem with Zustand state management",
      "NextAuth authentication integration",
      "AWS deployment pipeline with Docker containerization"
    ]
  }
]

export const specializations = [
  {
    title: "DevOps & CI/CD",
    color: "border-l-orange-500",
    description: "Docker containerization, GitHub Actions pipelines, AWS deployment automation, and continuous integration workflows."
  },
  {
    title: "Video & Streaming",
    color: "border-l-red-500",
    description: "Custom video players, OTT platforms, DRM integration, and adaptive streaming solutions."
  },
  {
    title: "Team Leadership",
    color: "border-l-blue-500",
    description: "Managing development teams, agile methodologies, sprint planning, and code review processes."
  },
  {
    title: "Full-Stack Architecture",
    color: "border-l-purple-500",
    description: "Modern React ecosystems, Laravel backends, API integrations, and scalable cloud deployments."
  }
]

export const currentTechArsenal = {
  productionReady: [
    {
      name: "React Server Components",
      description: "Next.js 14+ with optimal SSR performance",
      status: "green"
    },
    {
      name: "Zustand",
      description: "Complex state orchestration with minimal boilerplate",
      status: "green"
    },
    {
      name: "Docker + GitHub Actions",
      description: "Automated deployment pipelines",
      status: "green"
    }
  ],
  cloudDevOps: [
    {
      name: "AWS Infrastructure",
      description: "Scalable cloud deployments and optimization",
      status: "orange"
    },
    {
      name: "Containerization",
      description: "Docker workflows for consistent environments",
      status: "blue"
    },
    {
      name: "CI/CD Automation",
      description: "Zero-downtime deployment strategies",
      status: "blue"
    }
  ]
}
