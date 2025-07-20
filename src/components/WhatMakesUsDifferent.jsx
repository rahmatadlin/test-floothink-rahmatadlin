const features = [
  {
    icon: (
      <img src="/diff-1.png" alt="Qualified Specialist" width={80} height={80} />
    ),
    title: 'Qualified\nSpecialist',
    desc: 'Didirikan sejak tahun 1970,\ndengan pengalaman yang teruji di bidang solusi alat-alat berat.'
  },
  {
    icon: (
      <img src="/diff-2.png" alt="Modern Equipment" width={80} height={80} />
    ),
    title: 'Modern\nEquipment',
    desc: 'Didirikan sejak tahun 1970,\ndengan pengalaman yang teruji di bidang solusi alat-alat berat.'
  },
  {
    icon: (
      <img src="/diff-3.png" alt="Trusted by Healthcare Providers Nationwide." width={80} height={80} />
    ),
    title: 'Trusted by Healthcare\nProviders Nationwide.',
    desc: 'Didirikan sejak tahun 1970,\ndengan pengalaman yang teruji di bidang solusi alat-alat berat.'
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <section className="w-full bg-[#F6F8FC] py-12 md:py-20 flex flex-col items-center px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">What Makes Us Different</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 md:mb-12 text-center max-w-xl whitespace-pre-line">
        Didirikan sejak tahun 1970, dengan pengalaman yang teruji di bidang solusi alat-alat berat.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="grid grid-rows-[auto_auto_1fr] items-start text-center w-full sm:max-w-[280px] md:max-w-xs group"
            style={{ minHeight: '280px' }}
          >
            <div className="mb-4 md:mb-6 flex justify-center">
              <div className="transition-all duration-500 ease-in-out transform group-hover:-translate-y-2 group-hover:scale-110">
                {feature.icon}
              </div>
            </div>
            <div className="font-semibold text-base sm:text-lg md:text-xl text-gray-800 whitespace-pre-line mb-2 min-h-[56px] flex items-center justify-center">
              {feature.title}
            </div>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base whitespace-pre-line min-h-[48px] flex items-center justify-center">
              {feature.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;