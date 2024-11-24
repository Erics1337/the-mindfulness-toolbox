import React from 'react';
import { Menu, X, Brain } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              The Mindfulness Toolbox
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="text-gray-600 hover:text-pink-500 transition-colors">
              Programs
            </a>
            <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">
              About
            </a>
            <a href="#resources" className="text-gray-600 hover:text-pink-500 transition-colors">
              Resources
            </a>
            <button className="btn btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pink-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#programs"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500 transition-colors"
            >
              Programs
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500 transition-colors"
            >
              About
            </a>
            <a
              href="#resources"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500 transition-colors"
            >
              Resources
            </a>
            <div className="px-3 py-2">
              <button className="btn btn-primary w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}