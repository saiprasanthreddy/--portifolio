import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MLDemo from './components/MLDemo';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const HomePage = ({ theme, toggleTheme }) => {
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MLDemo />
        <Resume />
        <Contact />
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;