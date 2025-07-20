import React, { useState } from 'react';

const products = [
  {
    name: 'Easyret',
    image: 'https://images.unsplash.com/photo-1511174511562-5f97f4f877aa?auto=format&fit=crop&w=600&q=80',
    desc: '',
  },
  {
    name: 'Absolu',
    image: 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e1?auto=format&fit=crop&w=600&q=80',
    desc: 'Lorem ipsum dolor sit amet consectetur. Mi imperdiet fusce sed rhoncus sed vivamus.',
  },
];

const OurProductSection = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  const next = () => setActive((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-24 bg-white">
      {/* Kiri: Teks */}
      <div className="flex-1 flex flex-col justify-center pl-8 md:pl-24 max-w-xl">
        <div className="flex items-center gap-4 mb-2">
          <span className="h-px w-16 bg-[#3CA6B8]/30 inline-block align-middle" />
          <span className="text-[#3CA6B8] tracking-widest text-xs font-semibold uppercase">Our Product</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Innovative Products to Support Your Healthcare Services
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Powered by the latest technology and built to the highest standards, our products help you deliver faster, safer, and more effective healthcare.
        </p>
        <button className="flex items-center gap-2 px-8 py-3 bg-[#6CA6A9] hover:bg-[#5a8d8f] text-white rounded-full text-base font-medium transition group w-fit">
          View Product
          <span className="inline-block group-hover:translate-x-1 transition-transform">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M5 10h10M13 8l2 2-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>
      {/* Kanan: Produk */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 mt-12 md:mt-0">
        <div className="flex gap-6">
          {products.map((p, idx) => (
            <div
              key={p.name}
              className="relative w-[320px] h-[280px] rounded-xl overflow-hidden shadow-lg group"
              style={{ background: '#F6F8FC' }}
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 bottom-0 p-6 text-white text-lg font-medium" style={{textShadow:'0 2px 8px rgba(0,0,0,0.3)'}}>
                {p.name}
              </div>
              <button
                className="absolute right-4 bottom-4 w-10 h-10 rounded-full border border-white flex items-center justify-center text-white text-xl bg-white/20 hover:bg-white/40 transition"
                aria-label="View"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path d="M5 10h10M13 8l2 2-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        {/* Deskripsi & Navigasi */}
        <div className="flex items-center gap-6 w-full max-w-[320px] mt-2">
          <div className="flex-1 text-gray-600 text-base">
            {products[1].desc}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#6CA6A9] flex items-center justify-center text-[#6CA6A9] text-xl bg-white hover:bg-[#F6F8FC] transition"
              aria-label="Previous"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M13 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#6CA6A9] flex items-center justify-center text-[#6CA6A9] text-xl bg-white hover:bg-[#F6F8FC] transition"
              aria-label="Next"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M7 16l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProductSection; 