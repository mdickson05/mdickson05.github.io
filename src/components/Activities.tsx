import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Scissors, Palette, Sprout, Bot as Lotus, Music, Coffee, Users } from 'lucide-react';

const Activities: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const activities = [
    {
      icon: <Scissors className="h-12 w-12 text-rose-600" />,
      title: "Sewing & Textiles",
      description: "Learn traditional and modern sewing techniques while creating beautiful garments and home textiles.",
      image: "https://images.pexels.com/photos/1148988/pexels-photo-1148988.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Palette className="h-12 w-12 text-orange-600" />,
      title: "Arts & Crafts",
      description: "Express your creativity through painting, pottery, and traditional crafts that celebrate our cultural heritage.",
      image: "https://images.pexels.com/photos/1153929/pexels-photo-1153929.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Sprout className="h-12 w-12 text-green-600" />,
      title: "Gardening",
      description: "Cultivate fresh produce and beautiful flowers while learning sustainable farming practices.",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Lotus className="h-12 w-12 text-purple-600" />,
      title: "Yoga & Meditation",
      description: "Find inner peace and physical wellness through guided yoga sessions and mindfulness practices.",
      image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Music className="h-12 w-12 text-blue-600" />,
      title: "Music & Dance",
      description: "Celebrate our cultural diversity through traditional music and dance from various ethnic backgrounds.",
      image: "https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Coffee className="h-12 w-12 text-amber-600" />,
      title: "Tea Ceremonies",
      description: "Experience the meditative art of tea preparation and enjoy moments of quiet reflection.",
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proposed activities include sewing, arts and crafts, gardening, yoga, music, tea ceremonies and dance.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {activities.map((activity, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${activity.image})` }}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                      <div>
                        <div className="mb-4 flex justify-center">
                          {activity.icon}
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{activity.title}</h3>
                        <p className="text-lg leading-relaxed max-w-md mx-auto">
                          {activity.description}
                        </p>
                      </div>
                    </div>
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
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-rose-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;