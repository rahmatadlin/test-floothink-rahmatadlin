import React from 'react';
import bgImage from '../assets/analyze.svg';

const BusinessPartnerSection = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-start overflow-hidden mt-12">
      {/* Background image */}
      <img
        src={bgImage}
        alt="Business Partner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Content */}
      <div className="relative z-30 flex flex-col justify-center pl-24 max-w-2xl">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Partnering with You to Bring<br />Your Business to Life
        </h2>
        <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl">
          Together, we'll shape your vision into a thriving business through smart strategies, practical solutions, and ongoing support.
        </p>
        <button className="flex items-center gap-3 px-6 py-3.5 border border-white rounded-full text-white text-base font-medium hover:bg-white/10 transition group w-fit">
          Contact Us
          <span className="inline-block group-hover:translate-x-1 transition-transform">
            <img src="/left-arrow.png" alt="Arrow" className="w-5 h-5 transform rotate-[135deg]" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default BusinessPartnerSection;