import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const Marketplace: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Handwoven Textile",
      price: "$45",
      image: "https://images.pexels.com/photos/32071429/pexels-photo-32071429.jpeg?auto=compress&cs=tinysrgb&w=400",
      artist: "Büşra B."
    },
    {
      id: 2,
      name: "Ceramic Pottery Set",
      price: "$32",
      image: "https://images.pexels.com/photos/27208616/pexels-photo-27208616.jpeg?auto=compress&cs=tinysrgb&w=400",
      artist: "Dmitri L."
    },
    {
      id: 3,
      name: "Traditional Embroidery",
      price: "$28",
      image: "https://images.pexels.com/photos/5806996/pexels-photo-5806996.jpeg?auto=compress&cs=tinysrgb&w=400",
      artist: "Fatima A."
    },
    {
      id: 4,
      name: "Wooden Carved Art",
      price: "$65",
      image: "https://images.pexels.com/photos/15403144/pexels-photo-15403144.jpeg?auto=compress&cs=tinysrgb&w=400",
      artist: "Yusuf M."
    },
    {
      id: 5,
      name: "Woven Basket",
      price: "$22",
      image: "https://images.pexels.com/photos/31390662/pexels-photo-31390662.jpeg?auto=compress&cs=tinysrgb&w=400",
      artist: "Elena S."
    },
    {
      id: 6,
      name: "Hand-painted Scarf",
      price: "$38",
      image: "https://images.pexels.com/photos/9467196/pexels-photo-9467196.jpeg?auto=compress&cs=tinysrgb&w=400",
      artist: "Rahim T."
    }
  ];

  return (
    <section id="marketplace" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Marketplace
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic, handcrafted items made by our community members. Every purchase directly supports the artists and their families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <ShoppingBag className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="text-2xl font-bold text-rose-600">{product.price}</span>
                </div>
                <p className="text-gray-600 mb-3">by {product.artist}</p>
                <div className="flex items-center justify-end">
                  <button className="bg-gradient-to-r from-rose-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;