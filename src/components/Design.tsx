import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Design: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images for room designs
  const roomDesigns = [
    "/img/room/1.JPG",
    "/img/room/2.JPG",
    "/img/room/3.JPG",
    "/img/room/4.JPG",
    "/img/room/5.JPG",
    "/img/room/6.JPG",
    "/img/room/7.JPG",
    "/img/room/8.JPG",
    "/img/room/9.JPG",
    "/img/room/10.JPG",
    "/img/room/11.JPG",
    "/img/room/12.jpg",
    "/img/room/13.JPG"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % roomDesigns.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + roomDesigns.length) % roomDesigns.length);
  };

  return (
    <section id="design" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Design Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proposed Architectural Design
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://sketchfab.com/models/598ff9f88d8b4321849c5fe6c36014e1/embed"
                title="Community Centre 3D Model"
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <p className="text-lg leading-relaxed">
                Explore our proposed community centre design in 3D. This interactive model showcases the thoughtful layout designed to foster community interaction and provide flexible spaces for all our activities.
              </p>
            </div>
          </div>
        </div>

        {/* Room Designs Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Room Designs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </div>

          {/* Slideshow */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {roomDesigns.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {roomDesigns.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-indigo-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;