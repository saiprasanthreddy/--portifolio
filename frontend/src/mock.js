// Mock data for portfolio - Replace with actual data later

export const personalInfo = {
  name: "T SAI PRASANTH REDDY",
  role: "AIML Student | Full Stack Developer",
  tagline: "Building Intelligent Applications with Data-Driven Insights",
  bio: "I'm a B.E. student specializing in Artificial Intelligence and Machine Learning, with a passion for full-stack development. I bridge the gap between cutting-edge AI research and production-ready web applications, creating intelligent systems that scale. My expertise spans from training neural networks to deploying them in cloud-native architectures.",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saiprasanth&backgroundColor=ffeb3b,ffc107,ff9800,ff5722,795548,607d8b,3f51b5,2196f3,03a9f4,00bcd4",
  email: "saiprasanthq170@gmail.com",
  phone: "+91 7207473733",
  location: "Bengaluru, India",
  social: {
    github: "https://github.com/saiprasanthreddy",
    linkedin: "https://www.linkedin.com/in/sai-prasanth153",
    twitter: "https://twitter.com/saiprasanth"
  },
  resumeUrl: "/1T Sai Prasanth Reddy Resu.pdf"
};

export const skills = {
  aiml: [
    { name: "Python", level: 85 },
    { name: "Pandas/NumPy", level: 90 },
     { name: "Machine Learning", level: 55 },
     { name: "Deep Learning", level: 50 },
    { name: "NLP", level: 50 },
    { name: "Generative AI", level: 55 },
    { name: "OpenCV", level: 45 },
    { name: "Jupyter/colab", level: 80 }
  ],
  fullstack: [
    { name: "React.js", level: 83 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 82 },
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 75 },
    { name: "Tailwind CSS", level: 70 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 87 }
  ],
  devops: [
     { name: "DevOps_processing..", level: 0 },
     { name: "Git/GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Tableau", level: 75 },
    { name: "Power BI", level: 72 },
    { name: "MS Excel", level: 80 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Divya Mandir - Temple Management Platform",
    description: "Full-stack temple web application for event publishing, rituals, schedules, and temple history with real-time updates and notifications. Integrated donations, contact modules and multilingual support to enhance temple-devotee interaction.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT", "Socket.io", "Razorpay API"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=temple",
    demo: "#demo-placeholder",
    github: "https://github.com/saiprasanthreddy/divya-mandir",
    category: "Full Stack",
    duration: "Dec 2024 – Jan 2025"
  },
  {
    id: 2,
    title: "AI Web Scraping Using LLM",
    description: "AI-driven web scraping solution leveraging Large Language Models to extract, understand, and summarize unstructured data. Implemented NLP and semantic search with LangChain and vector databases for context-aware data processing.",
    tech: ["Python", "BeautifulSoup", "Selenium", "OpenAI", "Scrapy", "LangChain", "Vector DB"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
    demo: "#demo-placeholder",
    github: "https://github.com/saiprasanthreddy/ai-web-scraping",
    category: "AIML",
    duration: "Jan 2024 – Feb 2024"
  },
  {
      id: 3,
    title: "AR Navigation For Visually Impaired",
    description: "AI-powered Augmented Reality navigation system that detects obstacles and provides real-time audio guidance for visually impaired users. Integrated object recognition, GPS-based pathfinding, and text-to-speech for safe, efficient mobility.",
    tech: ["Python", "OpenCV", "TensorFlow", "Google Maps API", "Text-to-Speech", "AR"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    demo: "#demo-placeholder",
    github: "https://github.com/saiprasanthreddy/ar-navigation",
    category: "AIML",
    date: "Aug 2025 – Sept 2025"
  },
  {
     id: 4,
    title: "Crash Course Attendance Analytics",
    description: "Analyzed 4,600+ sign-up records using Python and Pandas with end-to-end data cleaning pipeline. Engineered a Unique ID system to de-duplicate entries and resolve data integrity issues. Generated comprehensive 5-Day Attendance Reports with demographic insights.",
    tech: ["Python", "Pandas", "Matplotlib", "Google Colab", "Data Analysis", "EDA"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    demo: "#demo-placeholder",
    github: "https://github.com/saiprasanthreddy/attendance-analytics",
    category: "Data Analysis",
    date: "Mar 2025"
  },
  {
   id: 5,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React.js and Tailwind CSS. Features include project showcase, skills visualization, contact form with EmailJS integration, and smooth animations. Demonstrates full-stack development capabilities.",
    tech: ["React.js", "Tailwind CSS", "EmailJS", "Framer Motion", "Lucide Icons"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    demo: "#",
    github: "https://github.com/saiprasanthreddy/portfolio",
    category: "Full Stack",
  }
];

export const achievements = [
  {
    title: "JavaScript Certification",
    organization: "KnowledgeGate",
    year: "2024",
    link: "https://knowledgegate.ai/learn/certificate/11714432-219977"
  },
  {
    title: "React.js Certification",
    organization: "KnowledgeGate",
    year: "2024",
    link: "https://learn.knowledgegate.al/learn/certificate/11714432-219978"
  },
  {
    title: "Applied Generative AI Certification",
    organization: "Infosys",
    year: "2025",
    link: "https://verify.onwingspan.com"
  },
  {
    title: "Crash Course on Data Analysis with Python",
    organization: "Innomatics Research Labs",
    year: "2025",
    link: "#" // If you don't have a link, use "#" or leave empty
  }
];

export const resumeHighlights = [
  "B.E. in AI & ML from Vemana Institute of Technology - CGPA: 7.6/10",
  "Diploma in ECE from PVKK Polytechnic - 80% | 10th from UKRS - 97%",
  "JavaScript & React.js Certified by KnowledgeGate 2024",
  "Applied Generative AI Certification by Infosys 2025",
  "Crash Course on Data Analysis with Python - Innomatics Research Labs",
  "4+ Real-world projects in Full Stack Development and AI/ML",
  "Strong expertise in MERN Stack and Modern Web Technologies",
  "Experienced in LangChain, Vector Databases, and LLM Integration"
];

// Mock sentiment analysis responses
export const sentimentPredictor = (text) => {
  if (!text || text.trim().length === 0) {
    return null;
  }
  
  const lowerText = text.toLowerCase();
  const positiveWords = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'love', 'best', 'awesome', 'happy', 'perfect'];
  const negativeWords = ['bad', 'terrible', 'awful', 'horrible', 'worst', 'hate', 'poor', 'disappointing', 'sad', 'angry'];
  
  let positiveCount = 0;
  let negativeCount = 0;
  
  positiveWords.forEach(word => {
    if (lowerText.includes(word)) positiveCount++;
  });
  
  negativeWords.forEach(word => {
    if (lowerText.includes(word)) negativeCount++;
  });
  
  if (positiveCount > negativeCount) {
    return {
      sentiment: 'Positive',
      confidence: Math.min(0.75 + (positiveCount * 0.08), 0.98),
      emoji: '😊'
    };
  } else if (negativeCount > positiveCount) {
    return {
      sentiment: 'Negative',
      confidence: Math.min(0.72 + (negativeCount * 0.08), 0.96),
      emoji: '😔'
    };
  } else {
    return {
      sentiment: 'Neutral',
      confidence: 0.65 + Math.random() * 0.15,
      emoji: '😐'
    };
  }
};