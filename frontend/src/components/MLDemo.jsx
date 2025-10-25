import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { sentimentPredictor } from '../mock';
import { Sparkles, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const MLDemo = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
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

  const handleAnalyze = () => {
    if (!input.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    // Simulate ML processing delay
    setTimeout(() => {
      const prediction = sentimentPredictor(input);
      setResult(prediction);
      setIsAnalyzing(false);
    }, 1500);
  };

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'Positive':
        return <TrendingUp className="w-6 h-6" />;
      case 'Negative':
        return <TrendingDown className="w-6 h-6" />;
      default:
        return <Minus className="w-6 h-6" />;
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'Positive':
        return 'text-green-400';
      case 'Negative':
        return 'text-red-400';
      default:
        return 'text-yellow-400';
    }
  };

  return (
    <section id="ml-demo" ref={sectionRef} className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">AI Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sentiment <span className="text-cyan-400">Analysis</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Try out this NLP-powered sentiment analyzer. Enter any text and watch the model predict emotional tone in real-time.
          </p>
        </div>

        {/* Demo Interface */}
        <Card className={`bg-gray-900 border-2 border-cyan-400/20 p-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-6">
            {/* Input Area */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Enter text to analyze:
              </label>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something... e.g., 'I love this amazing technology!'"
                className="bg-black border-gray-700 text-white placeholder:text-gray-500 min-h-32 focus:border-cyan-400 transition-colors"
                maxLength={500}
              />
              <div className="text-right text-xs text-gray-500 mt-2">
                {input.length}/500 characters
              </div>
            </div>

            {/* Analyze Button */}
            <Button
              onClick={handleAnalyze}
              disabled={!input.trim() || isAnalyzing}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-6 text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"></div>
                  Analyzing...
                </>
              ) : (
                'Analyze Sentiment'
              )}
            </Button>

            {/* Result Display */}
            {result && (
              <div className="animate-fadeIn bg-black border border-cyan-400/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`${getSentimentColor(result.sentiment)}`}>
                      {getSentimentIcon(result.sentiment)}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Sentiment:</p>
                      <p className={`text-2xl font-bold ${getSentimentColor(result.sentiment)}`}>
                        {result.sentiment}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Confidence:</p>
                    <p className="text-2xl font-bold text-cyan-400">
                      {(result.confidence * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>

                {/* Confidence Bar */}
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-1000"
                    style={{ width: `${result.confidence * 100}%` }}
                  ></div>
                </div>

                {/* Note */}
                <p className="text-gray-500 text-xs mt-4 text-center">
                  This is a demo model. Production models use transformer architectures like BERT for higher accuracy.
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Tech Info */}
        <div className={`mt-8 text-center text-sm text-gray-400 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p>Built with: <span className="text-cyan-400">Python • TensorFlow • BERT • FastAPI</span></p>
        </div>
      </div>
    </section>
  );
};

export default MLDemo;