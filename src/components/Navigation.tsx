import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

type TabType = 'about' | 'research' | 'resume' | 'awards' | 'gallery' | 'contact';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.substring(1) || 'about';

  const isActiveTab = (tab: string) => currentPath === tab;

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    { id: 'about', label: 'About', icon: 'person' },
    { id: 'research', label: 'Research', icon: 'science' },
    { id: 'resume', label: 'Resume', icon: 'description' },
    { id: 'awards', label: 'Awards', icon: 'emoji_events' },
    { id: 'gallery', label: 'Gallery', icon: 'photo_library' },
    { id: 'contact', label: 'Contact', icon: 'email' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleTabChange('about')}
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition duration-300"
            >
              Bhavya Shrivastava
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={`/${tab.id}`}
                  onClick={() => handleTabChange(tab.id as TabType)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActiveTab(tab.id)
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <i className="material-icons text-sm">{tab.icon}</i>
                  <span>{tab.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 p-2"
            >
              <i className="material-icons">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-2">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={`/${tab.id}`}
                  onClick={() => {
                    handleTabChange(tab.id as TabType);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-3 ${
                    isActiveTab(tab.id)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <i className="material-icons text-sm">{tab.icon}</i>
                  <span>{tab.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;