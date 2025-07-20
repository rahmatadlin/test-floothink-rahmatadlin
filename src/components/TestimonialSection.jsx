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
    <section className="w-full flex flex-col md:flex-row items-start justify-start py-24 bg-white pl-8 md:pl-24">
      {/* Kiri: Slider */}
      <div className="flex-1 pr-0 md:pr-8">
        <div className="bg-[#F6F8FC] rounded-2xl p-8 w-full max-w-[540px] min-h-[500px] flex flex-col justify-center relative ml-16">
          {/* Dots vertikal */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 pl-2">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-2 h-2 rounded-full cursor-pointer ${idx === active ? 'bg-[#3CA6B8]' : 'bg-[#D9D9D9]'}`}
              />
            ))}
          </div>
          {/* Testimonial cards */}
          <div className="flex flex-col gap-8 mt-8 min-h-[600px]">
            {testimonials.map((t, idx) => {
              const isActive = idx === active;
              return (
                <div
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`flex items-center gap-6 rounded-xl transition-all duration-500 ease-in-out cursor-pointer h-48
                    ${isActive
                      ? 'z-10 bg-[#E6F0F8] shadow-lg p-10 scale-110 translate-x-24 opacity-100'
                      : 'bg-[#F6F8FC] p-6 scale-100 opacity-80'}
                  `}
                  style={{
                    boxShadow: isActive ? '0 8px 32px 0 rgba(60,166,184,0.10)' : 'none',
                  }}
                >
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-1">{t.name}</div>
                    <div className="text-gray-500 text-sm mb-3">{t.role}</div>
                    <div className="text-gray-700 text-sm leading-relaxed">{t.text}</div>
                  </div>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className={`w-20 h-20 rounded-full object-cover border-4 border-white shadow transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Kanan: Judul & Deskripsi */}
      <div className="flex-1 flex flex-col justify-center pl-0 md:pl-16 max-w-xl mt-72 mr-72">
        <div className="flex items-center gap-4 mb-2">
          <span className="h-px w-16 bg-[#3CA6B8]/30 inline-block align-middle" />
          <span className="text-[#3CA6B8] tracking-widest text-xs font-semibold uppercase">What our client say</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Trusted by Medical Professionals and Healthcare Institutions
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          With proven performance and certified safety, our products support healthcare providers in delivering the best possible care.
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;