import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f97316%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      {/* Main content container */}
      <div className="text-center z-10 px-4 sm:px-6 lg:px-8 max-w-3xl w-full flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 mb-6 tracking-tight">
          Mahtaa Centre
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-rose-600 to-amber-600 mb-6" />
        <p className="text-base sm:text-lg text-gray-700 leading-normal sm:leading-relaxed max-w-2xl mb-10">
          A sanctuary for healing, growth, and community in the heart of Aqtau.
          Together, we build bridges of understanding and hope for a peaceful tomorrow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-gradient-to-r from-rose-600 to-orange-600 text-white px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Learn More
          </a>
          <a
            href="#support"
            className="border-2 border-rose-600 text-rose-600 px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-rose-600 hover:text-white transition-all duration-300"
          >
            Support Us
          </a>
        </div>
      </div>

      {/* Down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="h-8 w-8 text-gray-600" />
      </div>
    </section>
  );
};

export default Hero;
