// Mock data for portfolio - Replace with actual data later

export const personalInfo = {
  name: "Alex Morgan",
  role: "AIML Student | Full Stack Developer",
  tagline: "Building Intelligent Applications with Data-Driven Insights",
  bio: "I'm a B.E. student specializing in Artificial Intelligence and Machine Learning, with a passion for full-stack development. I bridge the gap between cutting-edge AI research and production-ready web applications, creating intelligent systems that scale. My expertise spans from training neural networks to deploying them in cloud-native architectures.",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AlexMorgan",
  email: "alex.morgan@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  social: {
    github: "https://github.com/alexmorgan",
    linkedin: "https://linkedin.com/in/alexmorgan",
    twitter: "https://twitter.com/alexmorgan"
  },
  resumeUrl: "#resume-placeholder"
};

export const skills = {
  aiml: [
    { name: "Python", level: 95 },
    { name: "PyTorch", level: 90 },
    { name: "TensorFlow", level: 85 },
    { name: "scikit-learn", level: 92 },
    { name: "NLP", level: 88 },
    { name: "Computer Vision", level: 85 },
    { name: "Pandas/NumPy", level: 93 },
    { name: "Jupyter", level: 90 }
  ],
  fullstack: [
    { name: "React.js", level: 93 },
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 82 },
    { name: "REST APIs", level: 92 },
    { name: "GraphQL", level: 80 },
    { name: "TypeScript", level: 87 }
  ],
  devops: [
    { name: "Docker", level: 85 },
    { name: "AWS", level: 82 },
    { name: "CI/CD", level: 80 },
    { name: "Git", level: 93 },
    { name: "Linux", level: 88 },
    { name: "Kubernetes", level: 75 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "AI-Powered Chatbot Platform",
    description: "Built an intelligent conversational AI using transformer models and deployed it as a scalable web application. Features include context-aware responses, sentiment analysis, and multi-language support.",
    tech: ["Python", "PyTorch", "React", "Node.js", "MongoDB", "Docker"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    demo: "#demo-placeholder",
    github: "#github-placeholder",
    category: "AIML"
  },
  {
    id: 2,
    title: "Real-Time Object Detection System",
    description: "Developed a computer vision application for real-time object detection and tracking using YOLO architecture. Optimized for edge devices with model quantization and TensorFlow Lite.",
    tech: ["TensorFlow", "OpenCV", "Flask", "WebRTC", "AWS"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
    demo: "#demo-placeholder",
    github: "#github-placeholder",
    category: "AIML"
  },
  {
    id: 3,
    title: "MERN Stack E-Commerce Platform",
    description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Implemented with Redux for state management and JWT authentication.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Redis"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    demo: "#demo-placeholder",
    github: "#github-placeholder",
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Predictive Analytics Dashboard",
    description: "Interactive data visualization dashboard for business intelligence. Integrated machine learning models for sales forecasting and customer churn prediction with real-time data processing.",
    tech: ["Python", "scikit-learn", "React", "D3.js", "FastAPI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    demo: "#demo-placeholder",
    github: "#github-placeholder",
    category: "AIML + Full Stack"
  },
  {
    id: 5,
    title: "Social Media Analytics Tool",
    description: "NLP-powered social media monitoring tool that performs sentiment analysis, trend detection, and influencer identification. Built with microservices architecture for scalability.",
    tech: ["Python", "BERT", "React", "Kafka", "Docker", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    demo: "#demo-placeholder",
    github: "#github-placeholder",
    category: "AIML + Full Stack"
  }
];

export const resumeHighlights = [
  "B.E. in Computer Science (AIML Specialization) - GPA: 3.8/4.0",
  "Published research paper on Neural Architecture Search",
  "3+ years of full-stack development experience",
  "AWS Certified Solutions Architect Associate",
  "Contributor to open-source ML projects",
  "Winner of University Hackathon 2024"
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