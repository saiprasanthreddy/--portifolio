import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../mock';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = personalInfo.tagline;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="neural-network">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="neural-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Avatar */}
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 rounded-full border-4 border-cyan-400/30 p-1 animate-pulse-slow">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name and Role */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-light">
          {personalInfo.role}
        </p>

        {/* Typewriter Effect Tagline */}
        <div className="h-16 mb-12">
          <p className="text-lg md:text-xl text-gray-300 font-mono">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            onClick={() => scrollToSection('#projects')}
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
          >
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection('#contact')}
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg transition-all hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
          >
            <Github size={24} />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;