import React from 'react';
import heroBg from '../assets/hero.svg';
import logo from '../assets/logo.svg';

const AnimatedNumber = ({ end, duration = 2000, suffix = '' }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // 16ms per frame (60fps)
    let raf;

    const animate = () => {
      start += increment;
      if (start < end) {
        setValue(Math.floor(start));
        raf = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
};

const Typewriter = ({ text, speed = 60, className = '', style = {}, key }) => {
  const [displayed, setDisplayed] = React.useState('');
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, text[index] === '\n' ? speed * 10 : speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className={className} style={style} key={key}>
      {displayed}
    </span>
  );
};

const Hero = () => {
  // Fungsi scroll ke id
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // State untuk background navbar
  const [navSolid, setNavSolid] = React.useState(false);
  // State untuk bahasa
  const [lang, setLang] = React.useState('en');

  // Objek teks multi-bahasa
  const texts = {
    en: {
      home: 'Home',
      product: 'Product',
      about: 'About Us',
      news: 'News',
      contact: 'Contact Us',
      heroTitle: 'Synergizing to Realize\nAdvanced Indonesia.',
      heroDesc: 'Established since 1970, with proven experience\nin heavy equipment solutions.',
      client: 'Client',
      productSuryatama: 'Suryatama Products',
      professionalWorker: 'Professional Workers',
      country: 'Country',
      scrollDown: 'Scroll Down',
    },
    id: {
      home: 'Beranda',
      product: 'Produk',
      about: 'Tentang Kami',
      news: 'Berita',
      contact: 'Kontak Kami',
      heroTitle: 'Bersinergi Mewujudkan \nIndonesia Maju.',
      heroDesc: 'Didirikan sejak tahun 1970, dengan pengalaman yang teruji\ndi bidang solusi alat-alat berat.',
      client: 'Klien',
      productSuryatama: 'Produk Suryatama',
      professionalWorker: 'Pekerja Profesional',
      country: 'Negara',
      scrollDown: 'Ke Bawah',
    }
  };

  // Fungsi toggle bahasa
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'id' : 'en'));

  React.useEffect(() => {
    const handleScrollNav = () => {
      // Ambil posisi section putih pertama (OurProductSection)
      const productSection = document.getElementById('product');
      if (productSection) {
        const rect = productSection.getBoundingClientRect();
        // Jika bagian atas section putih sudah lewat atas viewport, ubah navbar
        setNavSolid(rect.top <= 80); // 80px kira-kira tinggi navbar
      }
    };
    window.addEventListener('scroll', handleScrollNav);
    handleScrollNav(); // initial
    return () => window.removeEventListener('scroll', handleScrollNav);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between text-white overflow-x-auto"
      style={{
        minWidth: '100vw',
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(93.11deg, rgba(0, 0, 0, 0) 16.74%, rgba(4, 71, 103, 0.568) 77.01%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-auto h-[880px] min-h-screen mx-auto flex flex-col justify-between relative">
        {/* Navbar - Desktop */}
        <nav className="hidden lg:flex items-center justify-between w-full relative">
          <div
            className="flex items-center space-x-4"
            style={{
              position: 'absolute',
              top: 50,
              left: 100,
              opacity: 1,
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: 311,
                height: 36.13,
                objectFit: 'contain',
                opacity: 1,
              }}
            />
          </div>
          <ul
            className={`flex space-x-8 items-center justify-center text-sm md:text-base transition-colors duration-300 bg-white/20 backdrop-blur-md ${navSolid ? 'bg-white/90 shadow-lg text-[#003A5D]' : 'bg-white/20 text-white'}`}
            style={{
              position: 'fixed',
              top: 32,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 493,
              height: 64,
              borderRadius: 50,
              opacity: 1,
              padding: 0,
              zIndex: 50,
            }}
          >
            <li className="hover:underline cursor-pointer" onClick={() => handleScroll('home')}>{texts[lang].home}</li>
            <li className="hover:underline cursor-pointer" onClick={() => handleScroll('product')}>{texts[lang].product}</li>
            <li className="hover:underline cursor-pointer" onClick={() => handleScroll('about')}>{texts[lang].about}</li>
            <li className="hover:underline cursor-pointer" onClick={() => handleScroll('news')}>{texts[lang].news}</li>
            <li className="hover:underline cursor-pointer" onClick={() => handleScroll('contact')}>{texts[lang].contact}</li>
          </ul>
          <div
            className="flex items-center space-x-2"
            style={{
              position: 'absolute',
              top: 56,
              right: 64,
              width: 66,
              height: 32,
              opacity: 1,
              padding: 0,
            }}
          >
            <button 
              className="flex items-center gap-3 ring-4 ring-white/50 rounded-full bg-white/20 px-4 py-1"
              onClick={toggleLang}
              aria-label={`Change language to ${lang === 'en' ? 'Indonesian' : 'English'}`}
            >
              <span className="text-xs font-medium">
                {lang === 'en' ? 'EN' : 'ID'}
              </span>
              <span className="w-5 h-5 bg-white/60 rounded-full border border-white flex items-center justify-center">
                <span className="w-3 h-3 bg-[#6CA6A9] rounded-full"></span>
              </span>
            </button>
          </div>
        </nav>

        {/* Navbar - Mobile */}
        <nav className="lg:hidden flex items-center justify-between w-full px-4 py-4 relative">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-6 w-auto object-contain"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="flex items-center gap-2 ring-2 ring-white/50 rounded-full bg-white/20 px-3 py-1"
              onClick={toggleLang}
              aria-label={`Change language to ${lang === 'en' ? 'Indonesian' : 'English'}`}
            >
              <span className="text-xs font-medium">
                {lang === 'en' ? 'EN' : 'ID'}
              </span>
              <span className="w-4 h-4 bg-white/60 rounded-full border border-white flex items-center justify-center">
                <span className="w-2 h-2 bg-[#6CA6A9] rounded-full"></span>
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <ul className={`flex space-x-4 items-center justify-center text-xs transition-colors duration-300 bg-white/20 backdrop-blur-md rounded-full px-4 py-3 ${navSolid ? 'bg-white/90 shadow-lg text-[#003A5D]' : 'bg-white/20 text-white'}`}>
            <li className="hover:underline cursor-pointer px-2" onClick={() => handleScroll('home')}>{texts[lang].home}</li>
            <li className="hover:underline cursor-pointer px-2" onClick={() => handleScroll('product')}>{texts[lang].product}</li>
            <li className="hover:underline cursor-pointer px-2" onClick={() => handleScroll('about')}>{texts[lang].about}</li>
            <li className="hover:underline cursor-pointer px-2" onClick={() => handleScroll('news')}>{texts[lang].news}</li>
            <li className="hover:underline cursor-pointer px-2" onClick={() => handleScroll('contact')}>{texts[lang].contact}</li>
          </ul>
        </div>

        {/* Hero Content - Desktop */}
        <div
          className="hidden lg:flex"
          style={{
            position: 'absolute',
            top: 357,
            left: 100,
            width: 693,
            height: 186,
            opacity: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: 0,
            padding: 0,
          }}
        >
          <Typewriter
            key={lang + '-title'}
            text={texts[lang].heroTitle}
            speed={60}
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: 54,
              lineHeight: '73px',
              letterSpacing: 0,
              color: '#fff',
              margin: 0,
              verticalAlign: 'middle',
              whiteSpace: 'pre-line',
            }}
          />
        </div>
        <Typewriter
          key={lang + '-desc'}
          text={texts[lang].heroDesc}
          speed={24}
          className="hidden lg:flex"
          style={{
            position: 'absolute',
            top: 543,
            left: 100,
            width: 514,
            height: 71,
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: 18,
            lineHeight: '24px',
            letterSpacing: 0,
            color: 'rgba(255,255,255,1)',
            opacity: 1,
            margin: 0,
            verticalAlign: 'middle',
            alignItems: 'center',
            whiteSpace: 'pre-line',
          }}
        />

        {/* Hero Content - Mobile */}
        <div className="lg:hidden flex flex-col justify-center items-center text-center px-6 flex-1">
          <div className="mb-6">
            <Typewriter
              key={lang + '-title-mobile'}
              text={texts[lang].heroTitle}
              speed={60}
              className="block text-3xl sm:text-4xl font-bold leading-tight"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                color: '#fff',
                whiteSpace: 'pre-line',
              }}
            />
          </div>
          <div className="mb-8">
            <Typewriter
              key={lang + '-desc-mobile'}
              text={texts[lang].heroDesc}
              speed={24}
              className="block text-sm sm:text-base leading-relaxed max-w-md"
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 400,
                color: 'rgba(255,255,255,1)',
                whiteSpace: 'pre-line',
              }}
            />
          </div>
        </div>

        {/* Bottom Stats - Desktop */}
        <div
          className="hidden lg:flex"
          style={{
            position: 'absolute',
            width: 837,
            height: 166,
            bottom: 0,
            right: 0,
            opacity: 1,
            borderTopLeftRadius: 40,
            border: '1px solid rgba(255,255,255,1)',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(11.7px)',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
            color: '#fff',
            fontSize: '1.125rem',
            fontWeight: 600,
            padding: 0,
          }}
        >
          <div className="flex-1">
            <div className="text-3xl md:text-4xl font-bold">
              <AnimatedNumber end={10} suffix="+" />
            </div>
            <div className="text-xs md:text-base font-normal">{texts[lang].client}</div>
          </div>
          <div className="flex-1">
            <div className="text-3xl md:text-4xl font-bold">
              <AnimatedNumber end={50} suffix="+" />
            </div>
            <div className="text-xs md:text-base font-normal">{texts[lang].productSuryatama}</div>
          </div>
          <div className="flex-1">
            <div className="text-3xl md:text-4xl font-bold">
              <AnimatedNumber end={100} suffix="%" />
            </div>
            <div className="text-xs md:text-base font-normal">{texts[lang].professionalWorker}</div>
          </div>
          <div className="flex-1">
            <div className="text-3xl md:text-4xl font-bold">
              <AnimatedNumber end={10} />
            </div>
            <div className="text-xs md:text-base font-normal">{texts[lang].country}</div>
          </div>
        </div>

        {/* Bottom Stats - Mobile */}
        <div className="lg:hidden bg-white/20 backdrop-blur-md border border-white/20 rounded-t-3xl mx-4 mb-20 p-6">
          <div className="grid grid-cols-2 gap-6 text-center text-white">
            <div>
              <div className="text-2xl font-bold">
                <AnimatedNumber end={10} suffix="+" />
              </div>
              <div className="text-xs font-normal mt-1">{texts[lang].client}</div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                <AnimatedNumber end={50} suffix="+" />
              </div>
              <div className="text-xs font-normal mt-1">{texts[lang].productSuryatama}</div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                <AnimatedNumber end={100} suffix="%" />
              </div>
              <div className="text-xs font-normal mt-1">{texts[lang].professionalWorker}</div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                <AnimatedNumber end={10} />
              </div>
              <div className="text-xs font-normal mt-1">{texts[lang].country}</div>
            </div>
          </div>
        </div>

        {/* Scroll Down - Desktop Only */}
        <div
          className="hidden lg:flex"
          style={{
            position: 'absolute',
            left: 80,
            bottom: 40,
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: 10,
              lineHeight: '16px',
              letterSpacing: '1.4px',
              color: 'rgba(255,255,255,1)',
              textAlign: 'center',
              verticalAlign: 'middle',
              marginBottom: 32,
              transform: 'rotate(-90deg)',
            }}
          >
            {texts[lang].scrollDown}
          </div>
          <div
            style={{
              width: 2,
              height: 75,
              background: 'rgba(255,255,255,0.6)',
              borderRadius: 999,
              opacity: 1,
            }}
          ></div>
        </div>

        {/* Pause Button - Desktop Only */}
        <div
          className="hidden lg:block"
          style={{
            position: 'absolute',
            width: 64,
            height: 64,
            top: 600,
            right: 64,
            opacity: 1,
          }}
        >
          <button className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center bg-white/20 backdrop-blur-md">
            <span className="text-white text-xl font-bold">II</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;