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
    <div className="relative w-full h-[450px] flex items-center justify-start overflow-hidden mt-12">
      {/* Background image */}
      <img
        src={slides[current].image}
        alt={slides[current].category}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#003A5D]/70 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full pl-24 max-w-3xl items-start">
        <div className="mb-2 text-white text-sm tracking-widest font-light flex items-center gap-4">
          <span className="h-px w-8 bg-white/50 inline-block align-middle" />
          CATEGORY
        </div>
        <h2 className={`text-white text-4xl md:text-5xl font-bold mb-4 transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>{slides[current].category}</h2>
        <p className={`text-white/90 text-base md:text-lg mb-8 max-w-xl transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>{slides[current].description}</p>
        {/* Navigation */}
        <div className="flex gap-4 mt-2">
          <button
            onClick={prevSlide}
            className="hover:bg-white/20 transition p-0 bg-transparent"
            aria-label="Previous"
          >
            <img src="/left-arrow.png" alt="Previous" className="w-12 h-12" />
          </button>
          <button
            onClick={nextSlide}
            className="hover:bg-white/20 transition p-0 bg-transparent"
            aria-label="Next"
          >
            <img src="/left-arrow.png" alt="Next" className="w-12 h-12 rotate-180" />
          </button>
        </div>
        {/* Dots */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full border border-white ${idx === current ? 'bg-white' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategorySlider; 