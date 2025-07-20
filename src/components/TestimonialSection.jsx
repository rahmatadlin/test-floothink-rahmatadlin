import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Agnes Remi',
    role: 'Back-end developer at MyDodow',
    text: `<< Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising! >>`,
    avatar: '/testimonial.png',
  },
  {
    name: 'Agnes Remi',
    role: 'Back-end developer at MyDodow',
    text: `<< Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising! >>`,
    avatar: '/testimonial.png',
  },
  {
    name: 'Agnes Remi',
    role: 'Back-end developer at MyDodow',
    text: `<< Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising! >>`,
    avatar: '/testimonial.png',
  },
];

const TestimonialSection = () => {
  const [active, setActive] = useState(1); // highlight di tengah

  // Auto-advance every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="news" className="w-full flex flex-col lg:flex-row items-start justify-start py-12 md:py-24 bg-white px-4 sm:px-8 lg:pl-8 xl:pl-24">
      {/* Left: Slider - Mobile first (on top) */}
      <div className="w-full lg:flex-1 lg:pr-0 xl:pr-8 order-2 lg:order-1">
        <div className="bg-[#F6F8FC] rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-full lg:max-w-[540px] min-h-[400px] md:min-h-[500px] flex flex-col justify-center relative ml-0 sm:ml-8 md:ml-16">
          {/* Dots vertikal - Hidden on mobile, shown on md+ */}
          <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col gap-2 pl-2">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-2 h-2 rounded-full cursor-pointer ${idx === active ? 'bg-[#3CA6B8]' : 'bg-[#D9D9D9]'}`}
              />
            ))}
          </div>
          
          {/* Horizontal dots for mobile */}
          <div className="flex md:hidden justify-center gap-2 mb-4">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-2 h-2 rounded-full cursor-pointer ${idx === active ? 'bg-[#3CA6B8]' : 'bg-[#D9D9D9]'}`}
              />
            ))}
          </div>

          {/* Testimonial cards */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8 min-h-[300px] sm:min-h-[400px] md:min-h-[600px]">
            {testimonials.map((t, idx) => {
              const isActive = idx === active;
              return (
                <div
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-xl transition-all duration-500 ease-in-out cursor-pointer h-auto sm:h-32 md:h-48 p-4 sm:p-6
                    ${isActive
                      ? 'z-10 bg-[#E6F0F8] shadow-lg md:p-10 md:scale-110 md:translate-x-12 lg:translate-x-24 opacity-100'
                      : 'bg-[#F6F8FC] opacity-80'}
                  `}
                  style={{
                    boxShadow: isActive ? '0 8px 32px 0 rgba(60,166,184,0.10)' : 'none',
                  }}
                >
                  <div className="flex-1 order-2 sm:order-1">
                    <div className="font-semibold text-base sm:text-lg mb-1">{t.name}</div>
                    <div className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">{t.role}</div>
                    <div className="text-gray-700 text-xs sm:text-sm leading-relaxed">{t.text}</div>
                  </div>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 sm:border-4 border-white shadow transition-all duration-500 order-1 sm:order-2 ${isActive ? 'md:scale-110' : 'scale-100'}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right: Title & Description - Mobile first (on bottom) */}
      <div className="w-full lg:flex-1 flex flex-col justify-center lg:pl-8 xl:pl-16 max-w-full lg:max-w-xl mt-8 sm:mt-12 lg:mt-52 mb-8 lg:mb-0 order-1 lg:order-2">
        <div className="flex items-center gap-2 sm:gap-4 mb-2">
          <span className="h-px w-8 sm:w-16 bg-[#3CA6B8]/30 inline-block align-middle" />
          <span className="text-[#3CA6B8] tracking-widest text-xs font-semibold uppercase">What our client say</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
          Trusted by Medical Professionals and Healthcare Institutions
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          With proven performance and certified safety, our products support healthcare providers in delivering the best possible care.
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;