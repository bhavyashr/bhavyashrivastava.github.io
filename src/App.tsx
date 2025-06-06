import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Research from './components/Research';
import Resume from './components/Resume';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

type TabType = 'about' | 'research' | 'resume' | 'awards' | 'gallery' | 'contact';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <Hero />;
      case 'research':
        return <Research />;
      case 'resume':
        return <Resume />;
      case 'awards':
        return <Awards />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="relative">
        {renderContent()}
      </main>
    </div>
  );
}

export default App; 