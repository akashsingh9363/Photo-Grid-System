import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const ImageModal = ({ image, onClose, onNext, onPrevious, hasNext, hasPrevious }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && hasPrevious) {
        onPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious]);

  const handleDownload = async () => {
    try {
      const response = await fetch(image.downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `image-${image.number}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-97 backdrop-blur-sm">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 shadow-lg hover:shadow-cyan-500/50 border border-cyan-500 border-opacity-30 hover:border-opacity-100"
        aria-label="Close modal"
      >
        <X size={28} />
      </button>

      {hasPrevious && (
        <button
          onClick={onPrevious}
          className="absolute left-6 z-50 p-4 text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full transition-all duration-200 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-6 z-50 p-4 text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full transition-all duration-200 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      )}

      <div className="relative max-w-7xl max-h-screen p-6 flex flex-col items-center z-10">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/30 border border-cyan-500 border-opacity-20">
          <img
            src={image.fullViewUrl}
            alt={`Image ${image.number}`}
            className="max-w-full max-h-[75vh] object-contain"
          />
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-xl font-bold">
            Image #{image.number}
          </span>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 border border-cyan-400 border-opacity-30"
          >
            <Download size={20} />
            Download HD (3900x3900)
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-cyan-300 text-sm opacity-75 text-center bg-slate-800 bg-opacity-50 px-6 py-3 rounded-full border border-cyan-500 border-opacity-20 backdrop-blur-sm">
        <p className="font-semibold mb-1">Use arrow keys to navigate</p>
        <p className="text-xs">Press ESC to close</p>
      </div>
    </div>
  );
};

export default ImageModal;
