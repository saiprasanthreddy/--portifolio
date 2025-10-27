import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../mock';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');
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

  const categories = ['All', 'AIML', 'Full Stack', 'Data Analysis'];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of intelligent applications combining machine learning with production-grade web development
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? 'default' : 'outline'}
                className={`${
                  filter === category
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-black'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                } transition-all`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-cyan-500 text-black font-semibold">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map(tech => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-gray-700 text-gray-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="outline" className="border-gray-700 text-gray-300 text-xs">
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;