import React, { useState } from 'react';
import opthalmologyImg from '../assets/opthalmology.svg';

const slides = [
  {
    category: 'Opthalmology',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cum malesuada ac at neque tempor. Tincidunt non nunc suspendisse dapibus volutpat facilisi at dictum. Convallis metus imperdiet at nullam eleifend nisi eget. Scelerisque odio nibh faucibus leo quis non.',
    image: opthalmologyImg,
  },
  {
    category: 'General Checkup',
    description:
      'Pemeriksaan kesehatan menyeluruh untuk memastikan kondisi tubuh tetap prima. Dapatkan layanan terbaik dari tenaga medis profesional kami.',
    image: opthalmologyImg,
  },
];

const ProductCategorySlider = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const total = slides.length;

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
      setFade(false);
    }, 300);
  };
  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
      setFade(false);
    }, 300);
  };

  return (
    <div id="about" className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] flex items-center justify-start overflow-hidden mt-8 sm:mt-12">
      {/* Background image */}
      <img
        src={slides[current].image}
        alt={slides[current].category}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#003A5D]/70 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 sm:pl-12 md:pl-24 max-w-3xl items-start">
        <div className="mb-1 sm:mb-2 text-white text-xs sm:text-sm tracking-widest font-light flex items-center gap-2 sm:gap-4">
          <span className="h-px w-4 sm:w-8 bg-white/50 inline-block align-middle" />
          CATEGORY
        </div>
        <h2 className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          {slides[current].category}
        </h2>
        <p className={`text-white/90 text-sm sm:text-base md:text-lg mb-4 sm:mb-8 max-w-md sm:max-w-xl transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          {slides[current].description}
        </p>
        {/* Navigation */}
        <div className="flex gap-2 sm:gap-4 mt-1 sm:mt-2">
          <button
            onClick={prevSlide}
            className="hover:bg-white/20 transition p-0 bg-transparent"
            aria-label="Previous"
          >
            <img src="/left-arrow.png" alt="Previous" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </button>
          <button
            onClick={nextSlide}
            className="hover:bg-white/20 transition p-0 bg-transparent"
            aria-label="Next"
          >
            <img src="/left-arrow.png" alt="Next" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rotate-180" />
          </button>
        </div>
        {/* Dots */}
        <div className="flex gap-1 sm:gap-2 mt-4 sm:mt-8">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-white ${idx === current ? 'bg-white' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategorySlider;