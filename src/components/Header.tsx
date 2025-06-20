import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
          <img
            src="/img/logo.svg"
            alt="Logo"
            className="h-8 w-8"
          />
            <span className="text-xl font-bold text-gray-900">Mahtaa Recreation Centre</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-rose-600 transition-colors">Home</a>
            <a href="#activities" className="text-gray-700 hover:text-rose-600 transition-colors">Activities</a>
            <a href="#design" className="text-gray-700 hover:text-rose-600 transition-colors">Design</a>
            <a href="#about" className="text-gray-700 hover:text-rose-600 transition-colors">About</a>
            <a href="#support" className="text-gray-700 hover:text-rose-600 transition-colors">Support</a>
            <a href="#marketplace" className="text-gray-700 hover:text-rose-600 transition-colors">Marketplace</a>
          </nav>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-rose-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-rose-600 transition-colors">Home</a>
              <a href="#activities" className="text-gray-700 hover:text-rose-600 transition-colors">Activities</a>
              <a href="#design" className="text-gray-700 hover:text-rose-600 transition-colors">Design</a>
              <a href="#about" className="text-gray-700 hover:text-rose-600 transition-colors">About</a>
              <a href="#support" className="text-gray-700 hover:text-rose-600 transition-colors">Support</a>
              <a href="#marketplace" className="text-gray-700 hover:text-rose-600 transition-colors">Marketplace</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;