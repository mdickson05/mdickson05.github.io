import React from 'react';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/img/logo.svg"
                alt="Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">Mahtaa Recreation Centre</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Building bridges of understanding and hope for a peaceful tomorrow in Bukharestan.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-rose-600 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-rose-600 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-rose-600 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-rose-600 transition-colors">Home</a></li>
              <li><a href="#activities" className="hover:text-rose-600 transition-colors">Activities</a></li>
              <li><a href="#design" className="hover:text-rose-600 transition-colors">Design</a></li>
              <li><a href="#about" className="hover:text-rose-600 transition-colors">About</a></li>
              <li><a href="#support" className="hover:text-rose-600 transition-colors">Support</a></li>
              <li><a href="#marketplace" className="hover:text-rose-600 transition-colors">Marketplace</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Get Involved</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-rose-600 transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-rose-600 transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-rose-600 transition-colors">Partner with Us</a></li>
              <li><a href="#" className="hover:text-rose-600 transition-colors">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-rose-600" />
                <span>Aqtau, Bukharestan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-rose-600" />
                <span>hello@mahtaa.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rose-600" />
                <span>+123 456 7890</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Mahtaa Recreation Centre. All rights reserved. Built with hope for a better tomorrow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;