import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { personalInfo } from '../mock';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const { toast } = useToast();

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    publicKey: '9RHmBrxGmTFeog-DH',        // Replace with your actual public key
    serviceId: 'service_wq54sdo',          // Replace with your service ID
    templateId: 'template_w06dlbt'     // Replace with your template ID
  };

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'New message from portfolio',
          message: formData.message,
          to_name: personalInfo.name,
        },
        EMAILJS_CONFIG.publicKey
      );

      console.log('Email sent successfully:', result);

      // Success notification
      toast({
        title: "Message Sent! ✉️",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Error notification
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try emailing directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm break-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a href={`tel:${personalInfo.phone}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400 text-sm">{personalInfo.location}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`md:col-span-2 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <Card className="bg-gray-900 border-2 border-cyan-400/20 p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    className="bg-black border-gray-700 text-white placeholder:text-gray-500 min-h-32 focus:border-cyan-400"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-6 text-lg transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <p className="text-gray-500 text-xs mt-4 text-center">
                Your message will be sent directly to my inbox via EmailJS.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;