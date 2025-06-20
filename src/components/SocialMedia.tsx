import React, { useState } from 'react';
import { Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const [isInstagramOpen, setIsInstagramOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const instagramPhotos = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Community members working together on a beautiful textile project! 🧵✨ #CommunityLove #Handmade #Aqtau",
      likes: 127,
      comments: 23
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Our weekly yoga session bringing peace and wellness to our community 🧘‍♀️ #Wellness #Community #Peace #Aqtau",
      likes: 89,
      comments: 15
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">@mahtaacentre</h3>
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
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                  src={instagramPhotos[currentPhoto].image}
                  alt="Instagram post"
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation buttons */}
                {instagramPhotos.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Photo indicator dots */}
                {instagramPhotos.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {instagramPhotos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPhoto(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentPhoto ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Post Details */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="font-semibold">{instagramPhotos[currentPhoto].likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="font-semibold">{instagramPhotos[currentPhoto].comments}</span>
                  </button>
                </div>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
              <p className="text-gray-800 leading-relaxed">
                <span className="font-semibold">@mahtaacentre</span> {instagramPhotos[currentPhoto].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialMedia;