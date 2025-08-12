'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface GalleryProps {
  images: GalleryItem[];
  className?: string;
}

export default function Gallery({ images, className = '' }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-xl bg-gray-100"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                console.error('Image load error:', image.src);
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
              onLoad={() => {
                console.log('Image loaded:', image.src);
              }}
            />
            
            {/* Overlay */}
            <div 
              className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)';
              }}
            >
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
            </div>

            {/* Title overlay if available */}
            {image.title && (
              <div 
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ 
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)' 
                }}
              >
                <p className="text-white text-sm font-medium">{image.title}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main image */}
            <motion.div
              className="relative max-w-7xl max-h-[90vh] w-full h-full mx-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Image info */}
            {(images[selectedImage].title || images[selectedImage].description) && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                {images[selectedImage].title && (
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {images[selectedImage].title}
                  </h3>
                )}
                {images[selectedImage].description && (
                  <p className="text-white/80 text-sm max-w-2xl mx-auto">
                    {images[selectedImage].description}
                  </p>
                )}
              </div>
            )}

            {/* Image counter */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}