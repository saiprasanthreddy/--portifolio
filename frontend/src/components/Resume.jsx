import React, { useEffect, useRef, useState } from 'react';
import { resumeHighlights, personalInfo, achievements } from '../mock';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Download, FileText, Award, CheckCircle2, Eye, X, ExternalLink } from 'lucide-react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
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

  const handleDownload = async () => {
    const resumeUrl = personalInfo.resume || personalInfo.resumeUrl;
    
    if (!resumeUrl) {
      alert('Resume URL is not configured. Please add your resume link in mock.js');
      return;
    }

    setIsDownloading(true);

    try {
      const response = await fetch(resumeUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }

      const blob = await response.blob();
      const blobWithType = new Blob([blob], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blobWithType);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
      
    } catch (error) {
      console.error('Download error:', error);
      window.open(resumeUrl, '_blank');
    } finally {
      setTimeout(() => {
        setIsDownloading(false);
      }, 1500);
    }
  };

  const openCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <section id="resume" ref={sectionRef} className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                disabled={isDownloading || (!personalInfo.resume && !personalInfo.resumeUrl)}
                className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDownloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-cyan-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download size={18} className="mr-2" />
                    Download PDF
                  </>
                )}
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

        {/* Certifications Section */}
        <div className={`mb-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-7 h-7 text-cyan-400" />
            <h3 className="text-3xl font-bold text-white">Certifications & Achievements</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((cert, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 p-6 cursor-pointer group"
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-xs text-cyan-400 font-semibold bg-cyan-400/10 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                  
                  <h4 className="text-white font-semibold text-sm mb-2 line-clamp-2 flex-grow">
                    {cert.title}
                  </h4>
                  
                  <p className="text-gray-400 text-xs mb-4">{cert.organization}</p>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button
                      onClick={() => openCertificate(cert)}
                      className="flex-1 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 text-xs py-2"
                    >
                      <Eye size={14} className="mr-1" />
                      View
                    </Button>
                    {cert.link && cert.link !== "#" && (
                      <Button
                        onClick={() => window.open(cert.link, '_blank')}
                        className="flex-1 bg-gray-800 text-gray-300 hover:bg-gray-700 text-xs py-2"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Verify
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid md:grid-cols-3 gap-4 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Card className="bg-gray-900 border-gray-800 p-6 text-center hover:border-cyan-400/30 transition-colors">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2.5+</div>
            <div className="text-gray-400 text-sm">Years Learning</div>
          </Card>
          <Card className="bg-gray-900 border-gray-800 p-6 text-center hover:border-cyan-400/30 transition-colors">
            <div className="text-3xl font-bold text-cyan-400 mb-2">4+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </Card>
          <Card className="bg-gray-900 border-gray-800 p-6 text-center hover:border-cyan-400/30 transition-colors">
            <div className="text-3xl font-bold text-cyan-400 mb-2">4</div>
            <div className="text-gray-400 text-sm">Certifications</div>
          </Card>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeCertificate}
        >
          <div
            className="bg-gray-900 border-2 border-cyan-400/30 rounded-xl max-w-2xl w-full p-8 relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeCertificate}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-800 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-full flex items-center justify-center transition-all"
            >
              <X size={20} />
            </button>

            {/* Certificate Details */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
              <p className="text-gray-400 mb-1">{selectedCert.organization}</p>
              <p className="text-cyan-400 text-sm">Issued: {selectedCert.year}</p>
            </div>

            {/* Certificate Preview */}
            <div className="bg-black/50 border border-gray-800 rounded-lg p-8 mb-6 text-center">
              <Award className="w-20 h-20 text-cyan-400 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">Certificate Preview</p>
              <p className="text-white font-semibold text-lg mb-4">{selectedCert.title}</p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <CheckCircle2 size={16} className="text-green-400" />
                <span>Verified Certification</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              {selectedCert.link && selectedCert.link !== "#" && (
                <Button
                  onClick={() => window.open(selectedCert.link, '_blank')}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
                >
                  <ExternalLink size={18} className="mr-2" />
                  View Original Certificate
                </Button>
              )}
              <Button
                onClick={closeCertificate}
                className="bg-gray-800 hover:bg-gray-700 text-white"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Resume;