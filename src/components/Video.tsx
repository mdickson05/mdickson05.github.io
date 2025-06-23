import React from 'react';
import { Play } from 'lucide-react';

const Video: React.FC = () => {
  return (
    <section id="video" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Our Vision in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Watch how we're building hope and community in Aqtau, one step at a time.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Video container with responsive aspect ratio */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/S8_egokC9gE?si=gRTVwLQmxcoSVU7W"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            
            {/* Decorative bottom bar */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 h-2"></div>
          </div>

          {/* Call to action below video */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-lg">
              <Play className="h-6 w-6 text-blue-600" />
              <a href="#about" className="text-gray-700 font-medium">
                Learn more about our mission and impact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;