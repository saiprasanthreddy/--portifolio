import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../mock';
import { Badge } from './ui/badge';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          setTimeout(() => {
            const animated = {};
            Object.keys(skills).forEach(category => {
              skills[category].forEach(skill => {
                animated[skill.name] = skill.level;
              });
            });
            setAnimatedSkills(animated);
          }, 300);
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

  const SkillCategory = ({ title, skillList, delay }) => (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-full hover:border-cyan-400/30 transition-colors">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-cyan-400">●</span>
          {title}
        </h3>
        <div className="space-y-4">
          {skillList.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                <span className="text-cyan-400 text-xs font-mono">
                  {animatedSkills[skill.name] || 0}%
                </span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${animatedSkills[skill.name] || 0}%`,
                    transitionDelay: `${delay + index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML frameworks, full-stack technologies, and modern DevOps practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <SkillCategory title="AI/ML Stack" skillList={skills.aiml} delay={200} />
          <SkillCategory title="Full Stack" skillList={skills.fullstack} delay={400} />
          <SkillCategory title="DevOps & Tools" skillList={skills.devops} delay={600} />
        </div>

        {/* Tech Badges */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-400 mb-4 text-sm">Additional Technologies:</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['FastAPI', 'Redux', 'WebSockets', 'Nginx', 'Redis', 'Kafka', 'OpenCV', 'Hugging Face', 'MLflow', 'Tableau'].map(tech => (
              <Badge
                key={tech}
                variant="outline"
                className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;