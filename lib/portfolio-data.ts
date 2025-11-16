export const portfolioData = {
  name: "Harsha Madhushan",
  title: "Electrical & Automation Engineer",
  subtitle: "Industrial SCADA • Automation • Real-Time Data • Electrical Design • Industrial IoT",
  
  about: {
    description: "An Electrical and Automation Engineer focused on Industrial SCADA, real-time data systems, electrical design, and Industrial IoT. Passionate about building practical, data-driven automation solutions to make industrial processes smarter and more efficient.",
    image: "public/Harsha_Madhushan.png",
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Delivered", value: "50+" },
      { label: "Client Satisfaction", value: "98%" },
    ]
  },

  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of cloud-native microservices architecture, mentoring junior engineers, and driving technical strategy for flagship products.",
      achievements: [
        "Architected scalable backend systems serving 1M+ users",
        "Reduced API response time by 60% through optimization",
        "Mentored team of 5 engineers in best practices"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Software Engineer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description: "Built core product features from ground up, implemented CI/CD pipelines, and collaborated with cross-functional teams.",
      achievements: [
        "Developed MVP that secured $2M in funding",
        "Implemented automated testing reducing bugs by 40%",
        "Built real-time collaboration features"
      ],
      technologies: ["TypeScript", "Next.js", "GraphQL", "MongoDB"]
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Developed client websites and web applications, focusing on responsive design and performance optimization.",
      achievements: [
        "Delivered 15+ client projects on time and budget",
        "Improved site performance scores by 35%",
        "Collaborated with designers on pixel-perfect implementations"
      ],
      technologies: ["JavaScript", "React", "Tailwind CSS", "WordPress"]
    }
  ],

  projects: [
    {
      id: "ai-analytics-platform",
      slug: "ai-analytics-platform",
      title: "AI-Powered Analytics Platform",
      description: "Real-time data analytics platform with AI-driven insights and predictive modeling for enterprise clients.",
      fullDescription: "A comprehensive analytics platform that leverages artificial intelligence to provide real-time insights and predictive modeling for enterprise clients. The platform processes over 100 million events daily, offering advanced data visualization, anomaly detection, and customizable dashboards. Built with scalability and performance in mind, it serves Fortune 500 companies across multiple industries.",
      image: "/analytics-dashboard.png",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      impact: "Processing 100M+ events daily",
      link: "#",
      challenges: [
        "Scaling infrastructure to handle 100M+ daily events with sub-second latency",
        "Implementing real-time ML model inference without impacting performance",
        "Designing intuitive visualizations for complex multi-dimensional data"
      ],
      outcomes: [
        "Reduced data processing time by 85% through optimized pipelines",
        "Achieved 99.99% uptime with fault-tolerant architecture",
        "Enabled clients to identify critical insights 10x faster"
      ],
      duration: "8 months",
      role: "Lead Engineer",
      teamSize: "6 engineers"
    },
    {
      id: "ecommerce-marketplace",
      slug: "ecommerce-marketplace",
      title: "E-Commerce Marketplace",
      description: "Multi-vendor marketplace with advanced search, payment processing, and inventory management.",
      fullDescription: "A sophisticated multi-vendor e-commerce platform that enables seamless buying and selling experiences. Features include real-time inventory tracking, integrated payment processing with Stripe, advanced search with filters, seller dashboards, automated order fulfillment, and comprehensive analytics. The platform achieved $5M in Gross Merchandise Value within its first year.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      impact: "$5M GMV in first year",
      link: "#",
      challenges: [
        "Building a secure, PCI-compliant payment system",
        "Implementing real-time inventory synchronization across vendors",
        "Creating a performant search experience with millions of products"
      ],
      outcomes: [
        "Processed $5M in transactions in first year",
        "Achieved 2-second average page load time",
        "Maintained 99.9% payment success rate"
      ],
      duration: "6 months",
      role: "Full Stack Developer",
      teamSize: "4 engineers"
    },
    {
      id: "mobile-health-tracker",
      slug: "mobile-health-tracker",
      title: "Mobile Health Tracker",
      description: "Cross-platform mobile app for fitness tracking with wearable device integration and social features.",
      fullDescription: "A comprehensive health and fitness tracking mobile application built with React Native. The app integrates with popular wearable devices, tracks workouts, nutrition, sleep patterns, and provides personalized insights. Social features enable users to share achievements, join challenges, and motivate each other. The app has grown to over 50,000 active users with a 4.8-star rating.",
      image: "/fitness-tracking-mobile-app-screens.jpg",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      impact: "50K+ active users",
      link: "#",
      challenges: [
        "Synchronizing data from multiple wearable device APIs",
        "Optimizing battery usage for background tracking",
        "Building offline-first architecture for uninterrupted tracking"
      ],
      outcomes: [
        "Acquired 50K+ active users within 6 months",
        "Achieved 4.8-star average rating across app stores",
        "90% user retention rate after first month"
      ],
      duration: "10 months",
      role: "Mobile Lead Developer",
      teamSize: "5 engineers"
    },
    {
      id: "devops-automation-suite",
      slug: "devops-automation-suite",
      title: "DevOps Automation Suite",
      description: "Internal tooling for CI/CD pipeline automation, infrastructure monitoring, and deployment orchestration.",
      fullDescription: "A comprehensive DevOps automation platform that streamlines the entire deployment lifecycle. The suite includes automated CI/CD pipelines, infrastructure as code management, real-time monitoring and alerting, container orchestration, and deployment rollback capabilities. It has transformed the organization's deployment process, reducing deployment time by 70% and eliminating manual errors.",
      image: "/devops-dashboard-with-deployment-pipelines.jpg",
      technologies: ["Go", "Kubernetes", "Terraform", "Grafana"],
      impact: "Reduced deployment time by 70%",
      link: "#",
      challenges: [
        "Integrating with legacy systems while modernizing infrastructure",
        "Implementing zero-downtime deployment strategies",
        "Creating comprehensive monitoring across distributed services"
      ],
      outcomes: [
        "Reduced deployment time from 2 hours to 20 minutes",
        "Eliminated 95% of deployment-related incidents",
        "Enabled 50+ deployments per day with full confidence"
      ],
      duration: "12 months",
      role: "DevOps Architect",
      teamSize: "3 engineers"
    }
  ],

  skills: {
    languages: [
      { name: "TypeScript", level: 95 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Go", level: 80 },
    ],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Django", "FastAPI"],
    tools: ["AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "Git"],
    practices: ["Microservices", "CI/CD", "TDD", "Agile", "System Design"]
  },

  extracurricular: {
    platform: "Fiverr",
    level: "Level 2 Seller",
    rating: "4.9",
    projects: "120+",
    description: "Building custom web applications and automation tools for clients worldwide.",
    profileUrl: "https://www.fiverr.com/your-username"
  },

  social: {
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    twitter: "https://twitter.com/your-handle",
    email: "your.email@example.com"
  }
};
