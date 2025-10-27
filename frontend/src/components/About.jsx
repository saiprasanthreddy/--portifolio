import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../mock';
import { Brain, Code, BarChart3, Layers } from 'lucide-react';

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
      title: 'AI & Machine Learning',
      description: 'Deep Learning, NLP, Computer Vision, Generative AI & Reinforcement Learning'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'MERN Stack with real-time features using Socket.io and modern frameworks'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data Analysis',
      description: 'Python, Pandas, Tableau, Power BI for actionable insights'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Integration & APIs',
      description: 'Payment gateways, Maps API, LLM integration for smart solutions'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Certifications', value: '5+' },
    { label: 'Technologies', value: '20+' },
    { label: 'CGPA', value: '7.6' }
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Bio */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Available for Full Stack / AI Internships</span>
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

        {/* Education Timeline */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Educational <span className="text-cyan-400">Journey</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* B.E. */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-400/30 rounded-lg p-6">
              <div className="text-cyan-400 font-semibold mb-2">2023 - 2026</div>
              <h4 className="text-white font-bold mb-2">B.E. in AI & ML</h4>
              <p className="text-gray-400 text-sm mb-2">Vemana Institute of Technology</p>
              <div className="inline-block bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold">
                CGPA: 7.6/10
              </div>
            </div>

            {/* Diploma */}
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/30 rounded-lg p-6">
              <div className="text-purple-400 font-semibold mb-2">2020 - 2023</div>
              <h4 className="text-white font-bold mb-2">Diploma in ECE</h4>
              <p className="text-gray-400 text-sm mb-2">PVKK Polytechnic College</p>
              <div className="inline-block bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-xs font-semibold">
                80%
              </div>
            </div>

            {/* 10th */}
            <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-400/30 rounded-lg p-6">
              <div className="text-green-400 font-semibold mb-2">2008 - 2020</div>
              <h4 className="text-white font-bold mb-2">10th Standard</h4>
              <p className="text-gray-400 text-sm mb-2">UKRS English High School</p>
              <div className="inline-block bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                97%
              </div>
            </div>
          </div>
        </div>

        {/* Code Animation Visualization */}
        <div className={`bg-gray-900 border border-cyan-400/20 rounded-lg p-8 font-mono text-sm overflow-hidden transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-500 ml-2">~/portfolio/about.py</span>
          </div>
          <div className="text-gray-400 space-y-1">
            <div><span className="text-purple-400">class</span> <span className="text-cyan-400">AIMLEngineer</span>:</div>
            <div className="ml-4"><span className="text-purple-400">def</span> <span className="text-yellow-400">__init__</span>(self):</div>
            <div className="ml-8">self.name = <span className="text-green-400">"{personalInfo.name}"</span></div>
            <div className="ml-8">self.role = <span className="text-green-400">"Full Stack + AI Developer"</span></div>
            <div className="ml-8">self.education = <span className="text-green-400">"B.E. AI & ML"</span></div>
            <div className="ml-8">self.location = <span className="text-green-400">"Bengaluru, India"</span></div>
            <div className="ml-8">self.skills = [<span className="text-green-400">"MERN"</span>, <span className="text-green-400">"AI/ML"</span>, <span className="text-green-400">"Data Analysis"</span>]</div>
            <div className="ml-8">self.passionate_about = <span className="text-green-400">"Building Intelligent Web Apps"</span></div>
            <div className="ml-8">self.currently_learning = <span className="text-cyan-400">True</span></div>
            <div className="ml-8">self.open_to_opportunities = <span className="text-cyan-400">True</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;