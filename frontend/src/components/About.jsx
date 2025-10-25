import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../mock';
import { Brain, Code, Cpu, Database } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI/ML Research',
      description: 'Deep learning, neural networks, and advanced algorithms'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Modern web applications with scalable architectures'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'MLOps & Deployment',
      description: 'Production-ready ML models in cloud environments'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Engineering',
      description: 'ETL pipelines and data-driven solutions'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Right: Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gray-900 border border-gray-800 hover:border-cyan-400/50 rounded-lg p-6 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-cyan-400 mb-3">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-2 text-sm">{feature.title}</h3>
                <p className="text-gray-400 text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Code Animation Visualization */}
        <div className={`mt-16 bg-gray-900 border border-cyan-400/20 rounded-lg p-8 font-mono text-sm overflow-hidden transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-500 ml-2">~/portfolio/about.py</span>
          </div>
          <div className="text-gray-400 space-y-1 code-animation">
            <div><span className="text-purple-400">class</span> <span className="text-cyan-400">AIMLDeveloper</span>:</div>
            <div className="ml-4"><span className="text-purple-400">def</span> <span className="text-yellow-400">__init__</span>(self):</div>
            <div className="ml-8">self.name = <span className="text-green-400">"{personalInfo.name}"</span></div>
            <div className="ml-8">self.passion = <span className="text-green-400">"Bridging AI and Web"</span></div>
            <div className="ml-8">self.learning = <span className="text-cyan-400">True</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;