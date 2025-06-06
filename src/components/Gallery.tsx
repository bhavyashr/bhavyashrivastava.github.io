import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<{image: string; caption: string} | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // List of gallery images with captions
  const galleryItems = [
    {
      image: 'iea-2025-conference-talk.jpeg',
      caption: 'IEA 2025 - Conference Talk'
    },
    {
      image: 'iea-2025-experimental-economics-session.jpeg',
      caption: 'IEA 2025 - Experimental Economics Session'
    },
    {
      image: 'fistbump-from-john-list.jpeg',
      caption: 'Fistbump from John List'
    },
    {
      image: 'iea-2025-prize-winners.jpeg',
      caption: 'IEA 2025 - Prize Winners'
    },
    {
      image: 'iea-2025-iswe-prize.jpeg',
      caption: 'IEA 2025 - ISWE Prize'
    },
    {
      image: 'csae-2025-entrepreneurship-livelihood-session.jpeg',
      caption: 'CSAE 2025 - Entrepreneurship & Livelihood Session'
    },
    {
      image: 'afe-2024-innovation-in-microfinance.jpeg',
      caption: 'AFE 2024 - Innovation in Microfinance'
    },
    {
      image: 'iea-2024-financial-inclusion-session.jpeg',
      caption: 'IEA 2024 - Financial Inclusion Session'
    },
    {
      image: 'budding-economists-at-csae-2025.jpeg',
      caption: 'Budding Economists at CSAE 2025'
    },
    {
      image: 'research-group-at-trinity-college-dublin.jpeg',
      caption: 'Research Group at Trinity College Dublin'
    }
  ];

  // Navigation functions
  const openModal = (item: {image: string; caption: string}, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIndex);
    setSelectedItem(galleryItems[nextIndex]);
  };

  const previousImage = () => {
    const prevIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedItem(galleryItems[prevIndex]);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          previousImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        case 'Escape':
          e.preventDefault();
          closeModal();
          break;
      }
    };

    if (selectedItem) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [selectedItem, currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of memorable moments from my academic journey, research work, conferences, and travels.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => openModal(item, index)}
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-200 group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={`/gallery/${item.image}`}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-lg">
                <p className="text-white text-sm font-medium">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for viewing larger image */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center">
                <img
                  key={selectedItem.image}
                  src={`/gallery/${selectedItem.image}`}
                  alt={selectedItem.caption}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  style={{
                    maxWidth: 'min(90vw, 1024px)',
                    maxHeight: 'min(80vh, 768px)'
                  }}
                />
                
                {/* Previous Button */}
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-60 rounded-full p-3 hover:bg-opacity-80 transition-all duration-200 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <span className="material-icons text-xl">chevron_left</span>
                </button>
                
                {/* Next Button */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-60 rounded-full p-3 hover:bg-opacity-80 transition-all duration-200 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <span className="material-icons text-xl">chevron_right</span>
                </button>
              </div>
              
              <div className="mt-6 max-w-2xl text-center px-4">
                <p className="text-white text-lg font-medium leading-relaxed">{selectedItem.caption}</p>
                <p className="text-white text-sm opacity-70 mt-2">
                  {currentIndex + 1} of {galleryItems.length}
                </p>
              </div>
              
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white bg-black bg-opacity-60 rounded-full p-3 hover:bg-opacity-80 transition-all duration-200 backdrop-blur-sm"
                aria-label="Close image"
              >
                <span className="material-icons text-xl">close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Gallery; 