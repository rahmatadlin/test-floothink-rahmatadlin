import React, { useEffect, useRef, useState } from 'react';

const badgeImages = [
  { 
    src: '/badges1.png', 
    alt: 'Badge 1', 
    className: 'absolute top-0 left-2 sm:left-16 md:left-32 w-32 sm:w-48 md:w-64 h-[40px] sm:h-[60px] md:h-[80px]' 
  },
  { 
    src: '/badges2.png', 
    alt: 'Badge 2', 
    className: 'absolute top-2 sm:top-4 right-5 sm:right-24 md:right-40 w-32 sm:w-48 md:w-64 h-[40px] sm:h-[60px] md:h-[80px]' 
  },
  { 
    src: '/badges3.png', 
    alt: 'Badge 3', 
    className: 'absolute top-16 sm:top-24 md:top-32 left-1 sm:left-10 md:left-16 w-16 sm:w-48 md:w-64 h-[32px] sm:h-[60px] md:h-[80px]' 
  },
  { 
    src: '/badges4.png', 
    alt: 'Badge 4', 
    className: 'absolute bottom-50 sm:bottom-50 md:bottom-76 right-1 sm:right-20 md:right-36 w-18 sm:w-40 md:w-56 h-[32px] sm:h-[48px] md:h-[64px]' 
  },
];

const OurProgramSection = () => {
  const [visibleBadges, setVisibleBadges] = useState([false, false, false, false]);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          badgeImages.forEach((_, i) => {
            setTimeout(() => {
              setVisibleBadges((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 250);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (imageWrapperRef.current) {
      observer.observe(imageWrapperRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-12 md:py-24 bg-white px-4 sm:px-8">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center pl-0 sm:pl-4 md:pl-8 lg:pl-24 max-w-xl">
        <div className="flex items-center gap-2 sm:gap-4 mb-2">
          <span className="h-px w-8 sm:w-16 bg-[#3CA6B8]/30 inline-block align-middle" />
          <span className="text-[#3CA6B8] tracking-widest text-xs font-semibold uppercase">Our Program</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
          We empower teams to grow into adaptive, capable forces ready to take on the future.
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          Through tailored training, strategic support, and hands-on collaboration, we help teams unlock their full potential and thrive in a rapidly changing world.
        </p>
      </div>

      {/* Right: Image & Badges */}
      <div ref={imageWrapperRef} className="flex-1 flex items-center justify-center relative min-h-[300px] sm:min-h-[360px] md:min-h-[420px] mt-8 sm:mt-12 md:mt-0">
        {/* Badges Images */}
        {badgeImages.map((badge, i) => (
          <img
            key={i}
            src={badge.src}
            alt={badge.alt}
            className={
              badge.className +
              ' transition-all duration-700 ease-out ' +
              (visibleBadges[i]
                ? ' opacity-100 translate-y-0'
                : ' opacity-0 translate-y-4 sm:translate-y-8')
            }
            style={{ zIndex: 20 + i }}
          />
        ))}
        <img
          src="/programs.png"
          alt="Programs"
          className="w-full max-w-xs sm:max-w-md md:max-w-3xl object-contain rounded-xl"
        />
      </div>
    </section>
  );
};

export default OurProgramSection;