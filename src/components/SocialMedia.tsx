import React, { useState } from 'react';
import { Instagram, X, ChevronLeft, ChevronRight, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const [isInstagramOpen, setIsInstagramOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const instagramPhotos = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
      caption: "We have partnered with local NGOs to create a community-focused recreation centre in Aqtau, a city in Bukharestan where large-scale destruction, insurgencies, and deep-seated ethnic divisions have fostered a tense post-war environment. Mahtaa provides a location where people of all ages, gender and cultural backgrounds can come together to play, learn, create and share. We invite you to follow along our journey, and join the community.",
      likes: 2847,
      comments: 156,
      timeAgo: "3 days ago",
      isLiked: false
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
      caption: "Creating spaces for healing and growth in our community. Every thread tells a story of resilience and hope. 🧵✨ #CommunityHealing #Handmade #Aqtau #PeaceBuilding",
      likes: 1923,
      comments: 89,
      timeAgo: "1 week ago",
      isLiked: true
    }
  ];

  const [photos, setPhotos] = useState(instagramPhotos);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const toggleLike = () => {
    setPhotos(prev => prev.map((photo, index) => 
      index === currentPhoto 
        ? { 
            ...photo, 
            isLiked: !photo.isLiked,
            likes: photo.isLiked ? photo.likes - 1 : photo.likes + 1
          }
        : photo
    ));
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
              <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                <img
                  src={photos[currentPhoto].image}
                  alt="Instagram post"
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation buttons */}
                {photos.length > 1 && (
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
                {photos.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {photos.map((_, index) => (
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

            {/* Action Buttons */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={toggleLike}
                    className="transition-colors"
                  >
                    <Heart 
                      className={`h-7 w-7 ${
                        photos[currentPhoto].isLiked 
                          ? 'text-red-500 fill-current' 
                          : 'text-gray-700 hover:text-gray-500'
                      }`} 
                    />
                  </button>
                  <button className="text-gray-700 hover:text-gray-500 transition-colors">
                    <MessageCircle className="h-7 w-7" />
                  </button>
                  <button className="text-gray-700 hover:text-gray-500 transition-colors">
                    <Send className="h-7 w-7" />
                  </button>
                </div>
                <button className="text-gray-700 hover:text-gray-500 transition-colors">
                  <Bookmark className="h-7 w-7" />
                </button>
              </div>
              
              <div className="text-sm font-semibold text-gray-900 mb-2">
                {photos[currentPhoto].likes.toLocaleString()} likes
              </div>
            </div>

            {/* Post Caption */}
            <div className="p-4 max-h-40 overflow-y-auto">
              <p className="text-sm text-gray-800 leading-relaxed">
                <span className="font-semibold">mahtaacentre</span> {photos[currentPhoto].caption}
              </p>
              <div className="mt-3">
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  View all {photos[currentPhoto].comments} comments
                </button>
              </div>
              <div className="text-xs text-gray-400 mt-2 uppercase tracking-wide">
                {photos[currentPhoto].timeAgo}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialMedia;