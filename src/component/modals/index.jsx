import { useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';

const Modal = ({ children, showModal, setShowModal, size = 'md', height }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setShowModal]);

  if (!showModal) return null;

  // Define size classes based on the size prop
  const sizeClasses = {
    sm: 'max-w-sm',    // Small: 24rem (384px)
    md: 'max-w-md',    // Medium: 28rem (448px, default)
    lg: 'max-w-lg',    // Large: 32rem (512px)
    xl: 'max-w-xl',    // Extra Large: 36rem (576px)
    '2xl': 'max-w-2xl', // Double Extra Large: 42rem (672px)
  };

  const modalSizeClass = sizeClasses[size] || sizeClasses['md']; // Fallback to 'md' if invalid size

  return (
    <div
    className={`fixed inset-0 z-[1000] flex items-center justify-center p-4`}
      onClick={() => setShowModal(false)}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-200" />

      {/* Modal Content */}
      <div
        className={`relative w-full ${modalSizeClass} bg-white rounded-lg shadow-xl p-6 transform transition-all duration-200 scale-100 hover:scale-[1.01]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <RxCross1 className="h-5 w-5 text-gray-600 hover:text-red-500" />
        </button>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;