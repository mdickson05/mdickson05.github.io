import React from 'react';
import { HandHeart, ShoppingBag, Globe, ArrowRight } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <section id="support" className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How are we funding this?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-orange-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <HandHeart className="h-8 w-8 text-rose-600" />
              <h3 className="text-2xl font-bold text-gray-900">We need your help to start!</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We have grants from international aid organisations, but we need your help to start! The community centre is a new initiative. We aim to establish long-term economic sustainability through employment and providing agricultural capabilities, but even a small amount of money helps.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              If the initial centre is successful, we aim to expand this initiative across Bukharestan in 2027 and onwards. To ensure this reality, we implore you to donate what you can to support our mission. A small amount goes a long way!
            </p>
            <button className="bg-gradient-to-r from-rose-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
              <HandHeart className="h-6 w-6" />
              <span>Donate Today</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <img 
              src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Community support" 
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1182826/pexels-photo-1182826.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Handmade crafts" 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <ShoppingBag className="h-8 w-8 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">Support Our Marketplace</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Another way you can support the Aqtau Community Centre is by purchasing items from our global marketplace! You can buy authentic, locally-made items produced within our centre. Proceeds go directly to the artists and craftspeople.
              </p>
              <a
                href="#marketplace"
                className="inline-flex items-center space-x-2 border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                <Globe className="h-6 w-6" />
                <span>Visit Marketplace</span>
                <ArrowRight className="h-5 w-5" />
              </a>

            </div>``
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;