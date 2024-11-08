import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/Spinner';
import { useFetchNewsId } from '../api';

const NewsDetails = () => {
  const { id } = useParams();
  const { data: newsItem, isLoading, error } = useFetchNewsId(id);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateModal, setAnimateModal] = useState(false);
  const [loading, setLoading] = useState(true);

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
      prevIndex === 0 ? newsItem.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsItem.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );

  if (error) return <div className="text-center text-red-600">News item not found</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with first image and title/description */}
      <header
        className="relative h-[40vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${newsItem.images[0]?.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{newsItem.title}</h1>
          <p className="text-sm md:text-lg mb-4">
            By {newsItem.author} | {new Date(newsItem.custom_date).toLocaleDateString()}
          </p>
          <p className="text-xs md:text-md max-w-2xl mx-auto">{newsItem.content}</p>
        </div>
      </header>

      {/* Main content with full article text */}
      <div className="container mx-auto p-4 md:p-8">
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {newsItem.images.map((photo, index) => (
            <img
              key={index}
              src={photo.image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 sm:h-64 object-cover rounded shadow-lg cursor-pointer hover:opacity-75 transition-opacity transform hover:scale-105 duration-300"
              onClick={() => openModal(index)}
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
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
              className="absolute top-4 right-4 text-white text-2xl md:text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            <button
              className="absolute z-40 left-4 text-white text-2xl md:text-3xl font-bold"
              onClick={goToPrevious}
            >
              &#10094;
            </button>

            <div
              className={`relative w-full max-w-2xl md:max-w-4xl max-h-full flex items-center justify-center transition-transform duration-300 ${
                animateModal ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}
            >
              <img
                src={newsItem.images[currentIndex].image}
                className="w-full h-auto max-h-screen object-contain rounded-lg shadow-lg"
              />
            </div>

            <button
              className="absolute right-4 text-white text-2xl md:text-3xl font-bold"
              onClick={goToNext}
            >
              &#10095;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetails;
