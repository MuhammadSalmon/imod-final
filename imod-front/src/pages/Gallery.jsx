import  { useState } from "react";
import LoadingSpinner from "../components/Spinner"; // Import your loading spinner
import { useFetchGallery } from "../api";



const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateModal, setAnimateModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [flexValue, setFlexValue] = useState("w-full");
  const [activeButton, setActiveButton] = useState(1); // Active button state

  const {
    data: photos = [],
    isLoading,
    error,
  } = useFetchGallery();
  if (isLoading) return <LoadingSpinner />;
    if (error) return <div className="text-center text-red-600">{('failed_to_load_data')}</div>;
 
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setTimeout(() => setAnimateModal(true), 50);
  };

  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => setIsOpen(false), 200);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleFlexChange = (value, buttonIndex) => {
    setFlexValue(value);
    setActiveButton(buttonIndex);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>

      {/* Layout Control Buttons */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => handleFlexChange("w-full", 1)}
          className={`px-4 py-2 rounded-md hover:bg-slate-600 transition ${
            activeButton === 1
              ? "bg-blue-500 text-white"
              : "bg-blue-950 text-white"
          }`}
        >
          1
        </button>
        <button
          onClick={() => handleFlexChange("w-1/2", 2)}
          className={`px-4 py-2 rounded-md hover:bg-slate-600 transition ${
            activeButton === 2
              ? "bg-blue-500 text-white"
              : "bg-blue-950 text-white"
          }`}
        >
          2
        </button>
        <button
          onClick={() => handleFlexChange("w-1/3", 3)}
          className={`px-4 py-2 rounded-md hover:bg-slate-600 transition ${
            activeButton === 3
              ? "bg-blue-500 text-white"
              : "bg-blue-950 text-white"
          }`}
        >
          3
        </button>
      </div>

      {/* Image Grid */}
      <div className="flex flex-wrap">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`p-2 ${flexValue}`}
            onClick={() => openModal(index)}
          >
            <img
              src={photo.image}
              alt="Not loaded image"
              className="w-full h-auto rounded shadow-lg cursor-pointer hover:opacity-75 transition-opacity"
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          </div>
        ))}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex items-center justify-center my-4">
          <LoadingSpinner />
        </div>
      )}

      {/* Modal for viewing images */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 transition-opacity duration-300">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeModal}
          >
            &times;
          </button>

          <button
            className="absolute z-50 left-4 text-white text-3xl font-bold"
            onClick={goToPrevious}
          >
            &#10094;
          </button>

          <div
            className={`relative max-w-4xl max-h-full flex items-center justify-center transition-transform duration-300 ${
              animateModal ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <img
              src={photos[currentIndex].image}
              alt={photos[currentIndex].alt}
              className="w-full h-auto max-h-screen object-contain rounded-lg shadow-lg"
            />
          </div>

          <button
            className="absolute right-4 text-white text-3xl font-bold"
            onClick={goToNext}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
