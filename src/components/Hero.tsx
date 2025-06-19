import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f97316%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="text-center z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 mb-6 tracking-tight">
            mahtaa
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            A sanctuary for healing, growth, and community in the heart of Aqtau. 
            Together, we build bridges of understanding and hope for a peaceful tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#about" className="bg-gradient-to-r from-rose-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Learn More
            </a>
            <a href="#support" className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-600 hover:text-white transition-all duration-300">
              Support Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gray-600" />
      </div>
    </section>
  );
};

export default Hero;