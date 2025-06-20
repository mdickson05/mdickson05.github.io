import React, { useState } from 'react';
import { Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const [isInstagramOpen, setIsInstagramOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const instagramPhotos = [
    {
      id: 1,
      image: "/img/grid.png",
    },
    {
      id: 2,
      image: "/img/post.png",
    }
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % instagramPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + instagramPhotos.length) % instagramPhotos.length);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Follow Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay connected with our community through social media and see the daily impact we're making together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setIsInstagramOpen(true)}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-4"
            >
              <Instagram className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
              <span>View Our Instagram</span>
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Popup Modal */}
      {isInstagramOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[95vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="/img/logo.svg" 
                    alt="Mahtaa Centre" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">mahtaacentre</h3>
                  <p className="text-sm text-gray-600">Mahtaa Recreation Centre</p>
                </div>
              </div>
              <button
                onClick={() => setIsInstagramOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Photo Display */}
            <div className="relative">
              <div className="w-full max-h-[80vh] flex items-center justify-center bg-gray-100 overflow-hidden">
                <img
                  src={instagramPhotos[currentPhoto].image}
                  alt="Instagram post"
                  className="max-w-full max-h-[80vh] object-contain"
                />
                
                {/* Navigation buttons */}
                {instagramPhotos.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}

                {/* Photo indicator dots */}
                {instagramPhotos.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {instagramPhotos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPhoto(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentPhoto ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialMedia;