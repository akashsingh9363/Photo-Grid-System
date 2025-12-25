import { useState, useCallback } from 'react';
import ImageCard from './ImageCard';
import ImageModal from './ImageModal';
import Loader from './Loader';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { generateImageData } from '../utils/ImageUrls';

const IMAGES_PER_LOAD = 30;

const ImageGrid = () => {
  const [images, setImages] = useState(() => generateImageData(1, IMAGES_PER_LOAD));
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const loadMoreImages = useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      const nextStartNumber = images.length + 1;
      const newImages = generateImageData(nextStartNumber, IMAGES_PER_LOAD);
      setImages((prevImages) => [...prevImages, ...newImages]);
      setIsLoading(false);
    }, 500);
  }, [images.length]);

  const loadMoreRef = useInfiniteScroll(loadMoreImages, isLoading);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  const handlePreviousImage = () => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  const currentIndex = selectedImage
    ? images.findIndex((img) => img.id === selectedImage.id)
    : -1;
  const hasNext = currentIndex < images.length - 1;
  const hasPrevious = currentIndex > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Photo Grid Gallery
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Infinite scroll image gallery with <span className="text-cyan-400 font-semibold">{images.length}</span> images loaded • Scroll to discover more
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} onClick={handleImageClick} />
          ))}
        </div>

        {isLoading && <Loader />}

        <div ref={loadMoreRef} className="h-20 flex items-center justify-center">
          {!isLoading && (
            <p className="text-slate-400 text-sm animate-pulse">Scroll down to load more images...</p>
          )}
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={handleCloseModal}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
        />
      )}
    </div>
  );
};

export default ImageGrid;
