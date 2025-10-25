import React, { useEffect, useRef, useState } from 'react';
import { resumeHighlights, personalInfo } from '../mock';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Download, FileText, Award, CheckCircle2 } from 'lucide-react';

const Resume = () => {
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

  const handleDownload = () => {
    // Mock download functionality
    alert('Resume download will be available soon! Please add your resume PDF link.');
  };

  return (
    <section id="resume" ref={sectionRef} className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resume & <span className="text-cyan-400">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A summary of my educational background, certifications, and professional achievements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Resume Card */}
          <div className={`md:col-span-1 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 border-0 p-8 h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Full Resume</h3>
              <p className="text-white/80 text-sm mb-6">Download complete CV with detailed experience</p>
              <Button
                onClick={handleDownload}
                className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold"
              >
                <Download size={18} className="mr-2" />
                Download PDF
              </Button>
            </Card>
          </div>

          {/* Highlights */}
          <div className={`md:col-span-2 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <Card className="bg-gray-900 border-gray-800 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Key Highlights</h3>
              </div>
              <div className="space-y-4">
                {resumeHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-8 grid md:grid-cols-3 gap-4 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Card className="bg-gray-900 border-gray-800 p-6 text-center hover:border-cyan-400/30 transition-colors">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </Card>
          <Card className="bg-gray-900 border-gray-800 p-6 text-center hover:border-cyan-400/30 transition-colors">
            <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </Card>
          <Card className="bg-gray-900 border-gray-800 p-6 text-center hover:border-cyan-400/30 transition-colors">
            <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-gray-400 text-sm">Certifications</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;