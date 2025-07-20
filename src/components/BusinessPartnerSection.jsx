import React from 'react';
import bgImage from '../assets/analyze.svg';

const BusinessPartnerSection = () => {
  return (
    <section id="contact" className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-start overflow-hidden mt-8 sm:mt-12">
      {/* Background image */}
      <img
        src={bgImage}
        alt="Business Partner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-black/30 z-10 md:bg-transparent" />
      
      {/* Content */}
      <div className="relative z-30 flex flex-col justify-center px-6 sm:px-8 md:pl-12 lg:pl-24 max-w-full md:max-w-2xl">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
          Partnering with You to Bring<br className="hidden sm:block" /> Your Business to Life
        </h2>
        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-full sm:max-w-xl">
          Together, we'll shape your vision into a thriving business through smart strategies, practical solutions, and ongoing support.
        </p>
        <button className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 border border-white rounded-full text-white text-sm sm:text-base font-medium hover:bg-white/10 transition group w-fit">
          Contact Us
          <span className="inline-block group-hover:translate-x-1 transition-transform">
            <img 
              src="/left-arrow.png" 
              alt="Arrow" 
              className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-[135deg]" 
            />
          </span>
        </button>
      </div>
    </section>
  );
};

export default BusinessPartnerSection;