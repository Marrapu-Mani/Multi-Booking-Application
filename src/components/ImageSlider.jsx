import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { images } from '../utils/sliderImagesData.js';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const autoSlide = setInterval(() => {
        nextSlide();
        }, 3000);

        return () => clearInterval(autoSlide); 
    }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[85vh] bg-gray-100 shadow-sm overflow-hidden xl:rounded-2xl">
        
        <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
        >
            {images.map((image, index) => (
                <div
                    key={index}
                    className="flex-shrink-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${image.url})` }}
                >
                    <div className="flex flex-col justify-center items-center bg-black bg-opacity-50 h-full text-white rounded-2xl p-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center">{image.name}</h2>
                        <p className="mt-2 px-10 font-bold text-center">{image.description}</p>
                    </div>
                </div>
            ))}
        </div>


        <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#e76f51] hover:bg-[#f4a261] text-white rounded-full p-2"
        >
            <FaArrowLeft />
        </button>

        <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#e76f51] hover:bg-[#f4a261] text-white rounded-full p-2"
        >
            <FaArrowRight />
        </button>

    </div>
  );
};

export default ImageSlider;
