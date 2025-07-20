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

const Typewriter = ({ text, speed = 60, className = '', style = {} }) => {
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
    <span className={className} style={style}>
      {displayed}
    </span>
  );
};

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-between text-white overflow-x-auto"
      style={{
        minWidth: '100vw',
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(93.11deg, rgba(0, 0, 0, 0) 16.74%, rgba(4, 71, 103, 0.568) 77.01%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-[1440px] h-[880px] min-h-screen mx-auto flex flex-col justify-between">
        {/* Navbar */}
        <nav className="flex items-center justify-between w-full relative">
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
            className="flex space-x-8 items-center justify-center bg-white/20 backdrop-blur-md text-sm md:text-base"
            style={{
              position: 'absolute',
              top: 40,
              left: 494,
              right: 453,
              width: 493,
              height: 64,
              borderRadius: 50,
              opacity: 1,
              padding: 0,
            }}
          >
            <li className="font-semibold text-white">Home</li>
            <li className="hover:underline cursor-pointer">Product</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">News</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
          <div
            className="flex items-center space-x-2"
            style={{
              position: 'absolute',
              top: 56,
              right: 64,
              width: 66,
              height: 32,
              borderRadius: 23.36,
              opacity: 1,
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
              padding: 0,
            }}
          >
            <span className="text-xs">EN</span>
            <span className="w-5 h-5 bg-white/60 rounded-full border border-white flex items-center justify-center">
              <span className="w-3 h-3 bg-[#6EC1E4] rounded-full"></span>
            </span>
          </div>
        </nav>

        {/* Hero Content */}
        <div
          style={{
            position: 'absolute',
            top: 357,
            left: 100,
            width: 693,
            height: 186,
            opacity: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: 0,
            padding: 0,
          }}
        >
          <Typewriter
            text={'Bersinergi Mewujudkan \nIndonesia Maju.'}
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
          text={
            'Didirikan sejak tahun 1970, dengan pengalaman yang teruji\ndi bidang solusi alat-alat berat.'
          }
          speed={24}
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
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'pre-line',
          }}
        />

        {/* Bottom Stats */}
        <div
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
            display: 'flex',
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
            <div className="text-xs md:text-base font-normal">Client</div>
          </div>
          <div className="flex-1">
            <div className="text-3xl md:text-4xl font-bold">
              <AnimatedNumber end={50} suffix="+" />
            </div>
            <div className="text-xs md:text-base font-normal">Produk Suryatama</div>
          </div>
          <div className="flex-1">
            <div className="text-3xl md:text-4xl font-bold">
              <AnimatedNumber end={100} suffix="%" />
            </div>
            <div className="text-xs md:text-base font-normal">Pekerja Profesional</div>
          </div>
          <div className="flex-1">
            <div className="text-3xl md:text-4xl font-bold">
              <AnimatedNumber end={10} />
            </div>
            <div className="text-xs md:text-base font-normal">Negara</div>
          </div>
        </div>
      </div>

      {/* Scroll Down - Adjusted alignment and spacing */}
      <div
        style={{
          position: 'absolute',
          left: 80,
          bottom: 40,
          display: 'flex',
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
          Scroll Down
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

      {/* Pause Button */}
      <div
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
    </section>
  );
};

export default Hero;