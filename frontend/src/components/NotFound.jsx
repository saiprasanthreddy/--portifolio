import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Home, AlertCircle, Brain } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* Animated 404 */}
        <div className="mb-8 relative">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 animate-pulse">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className="w-24 h-24 text-cyan-400/20 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-cyan-400" />
            <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
          </div>
          <p className="text-gray-400 text-lg mb-2">
            Looks like this neural network pathway doesn't exist!
          </p>
          <p className="text-gray-500 text-sm">
            The page you're looking for might have been moved, deleted, or never existed in the first place.
          </p>
        </div>

        {/* Fun AI-themed message */}
        <div className="bg-gray-900 border border-cyan-400/20 rounded-lg p-6 mb-8">
          <p className="text-cyan-400 font-mono text-sm">
            <span className="text-gray-500">{'> '}</span>
            model.predict(current_page)
            <br />
            <span className="text-red-400">Error: PageNotFoundException</span>
            <br />
            <span className="text-gray-500">{'> '}</span>
            Confidence: 0.00%
            <br />
            <span className="text-gray-500">{'> '}</span>
            Suggestion: Navigate to home_page()
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => navigate('/')}
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
          >
            <Home size={20} className="mr-2" />
            Back to Home
          </Button>
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg transition-all hover:scale-105"
          >
            Go Back
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex items-center justify-center gap-2 text-gray-600 text-xs">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;