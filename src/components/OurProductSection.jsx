import React, { useState } from 'react';

const products = [
  {
    name: 'Easyret',
    image: '/easyret.png',
    desc: 'Mi imperdiet fusce sed rhoncus sed vivamus. Lorem ipsum dolor sit amet consectetur.',
  },
  {
    name: 'Absolu',
    image: '/absolu.png',
    desc: 'Lorem ipsum dolor sit amet consectetur. Mi imperdiet fusce sed rhoncus sed vivamus.',
  },
];

const OurProductSection = () => {
  const [active, setActive] = useState(1);
  const [direction, setDirection] = useState(0);
  const [animating, setAnimating] = useState(false);

  const prev = () => {
    if (active > 0 && !animating) {
      setDirection(-1);
      setAnimating(true);
      setTimeout(() => {
        setActive((prev) => prev - 1);
        setAnimating(false);
      }, 350);
    }
  };

  const next = () => {
    if (active < products.length - 1 && !animating) {
      setDirection(1);
      setAnimating(true);
      setTimeout(() => {
        setActive((prev) => prev + 1);
        setAnimating(false);
      }, 350);
    }
  };

  return (
    <section id="product" className="w-full flex flex-col lg:flex-row items-center justify-center py-12 md:py-24 bg-white px-4 sm:px-6">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col justify-center lg:pl-8 xl:pl-24 max-w-xl w-full mb-12 lg:mb-0">
        <div className="flex items-center gap-4 mb-2">
          <span className="h-px w-16 bg-[#3CA6B8]/30 inline-block align-middle" />
          <span className="text-[#3CA6B8] tracking-widest text-xs font-semibold uppercase">Our Product</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
          Innovative Products to Support Your Healthcare Services
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
          Powered by the latest technology and built to the highest standards, our products help you deliver faster, safer, and more effective healthcare.
        </p>
        <button className="flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-[#6CA6A9] hover:bg-[#5a8d8f] text-white rounded-full text-sm sm:text-base font-medium transition group w-fit">
          View Product
          <span className="inline-block group-hover:translate-x-1 transition-transform">
            <img src="/arrow.png" alt="arrow" width="20" height="20" className="w-5 h-5 sm:w-7 sm:h-7" />
          </span>
        </button>
      </div>

      {/* Right: Product Slider */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl lg:max-w-none">
        <div className="relative flex justify-center w-full h-[200px] sm:h-[250px] md:h-[280px]">
          {products.map((p, idx) => (
            <div
              key={p.name}
              className={`absolute w-[280px] sm:w-[300px] md:w-[320px] h-full rounded-xl overflow-hidden shadow-lg group transition-all duration-500 ease-in-out
                ${idx === active ? 'z-10 scale-100 opacity-100' : 'z-0 scale-90 opacity-70'}
                ${animating && idx === active && direction === -1 ? '-translate-x-16 sm:-translate-x-24 opacity-0' : ''}
                ${animating && idx === active && direction === 1 ? 'translate-x-16 sm:translate-x-24 opacity-0' : ''}
                ${animating && idx !== active && direction === -1 && idx === active + 1 ? 'translate-x-0 opacity-100' : ''}
                ${animating && idx !== active && direction === 1 && idx === active - 1 ? 'translate-x-0 opacity-100' : ''}
              `}
              style={{ background: '#F6F8FC' }}
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
              {idx === active && (
                <>
                  <div className="absolute left-0 bottom-0 p-4 sm:p-6 text-white text-base sm:text-lg font-medium" style={{textShadow:'0 2px 8px rgba(0,0,0,0.3)'}}>
                    {p.name}
                  </div>
                  <button
                    className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white text-xl transition group"
                    aria-label="View"
                  >
                    <img src="/left-arrow.png" alt="arrow" width="16" height="16" className="w-4 h-4 sm:w-5 sm:h-5" style={{ transform: 'rotate(135deg)' }} />
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Description & Navigation */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md lg:max-w-2xl px-4">
          <div className="flex-1 text-gray-600 text-sm sm:text-base transition-opacity duration-500 text-center sm:text-left">
            {products[active].desc}
          </div>
          <div className="flex gap-1 sm:gap-2">
            <button
              onClick={prev}
              className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center text-[#6CA6A9] text-xl bg-white transition ${active === 0 || animating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F6F8FC]'}`}
              aria-label="Previous"
              disabled={active === 0 || animating}
            >
              <img 
                src="/left-arrow.png" 
                alt="left arrow" 
                className="w-5 h-5 sm:w-7 sm:h-7" 
                style={{ filter: 'invert(54%) sepia(17%) saturate(747%) hue-rotate(142deg) brightness(92%) contrast(88%)' }} 
              />
            </button>
            <button
              onClick={next}
              className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center text-[#6CA6B8] text-xl bg-white transition ${active === products.length - 1 || animating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F6F8FC]'}`}
              aria-label="Next"
              disabled={active === products.length - 1 || animating}
            >
              <img 
                src="/left-arrow.png" 
                alt="right arrow" 
                className="w-5 h-5 sm:w-7 sm:h-7" 
                style={{ filter: 'invert(54%) sepia(17%) saturate(747%) hue-rotate(142deg) brightness(92%) contrast(88%)', transform: 'rotate(180deg)' }} 
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProductSection;