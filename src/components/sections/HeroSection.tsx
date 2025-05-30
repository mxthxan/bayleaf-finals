import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, Utensils } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';

const HeroSection: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const [showThiruvalluvarTooltip, setShowThiruvalluvarTooltip] = useState(true);
  const [showQuoteTooltip, setShowQuoteTooltip] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (showThiruvalluvarTooltip) {
      const timer = setTimeout(() => setShowThiruvalluvarTooltip(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showThiruvalluvarTooltip]);

  useEffect(() => {
    if (showQuoteTooltip) {
      const timer = setTimeout(() => setShowQuoteTooltip(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showQuoteTooltip]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
    console.error('Failed to load rotating plate image');
  };

  return (
    <section 
      id="home" 
      className="relative w-full"
      style={{ minHeight: '100vh', height: '100vh', backgroundColor: '#fed647' }}
    >
      {/* Rotating Plate Background - Bound to Hero Section */}
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
        style={{ minHeight: '100vh' }}
      >
        {/* Changed from 'fixed' to 'absolute' to bind it to the hero section */}
        <div className="absolute top-1/2 right-[-20px] -translate-y-1/2 w-[100vw] h-screen overflow-hidden pointer-events-none">
          <div 
            className={`absolute top-1/2 -right-[300px] w-[70vw] h-[70vw] xs:w-[600vw] xs:h-[600vw] sm:w-[140vw] sm:h-[140vw] md:w-[100vw] md:h-[100vw] lg:w-[80vw] lg:h-[80vw] xl:w-[60vw] xl:h-[60vw] flex justify-center items-center ${imageLoaded && !imageError ? 'hero-rotate' : ''}`}
          >
            <img 
              src="https://ik.imagekit.io/jacw2jgvs/Untitled%20design.png" 
              alt="Rotating plate background"
              className="w-full h-full object-contain"
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="eager"
              crossOrigin="anonymous"
            />
            {/* Fallback content if image fails */}
            {imageError && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 bg-orange-200 rounded-full border-4 border-orange-400 hero-rotate flex items-center justify-center">
                  <Utensils size={48} className="text-orange-600" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hero-specific animation styles */}
        <style>{`
          .hero-rotate {
            animation: heroRotate 20s linear infinite;
            transform-origin: center;
          }
          
          @keyframes heroRotate {
            from {
              transform: translateY(-50%) rotate(0deg);
            }
            to {
              transform: translateY(-50%) rotate(360deg);
            }
          }
        `}</style>
      </div>

      {/* Thiruvalluvar Image - Moved outside background container for clickability */}
      <a
        href="https://en.wikipedia.org/wiki/Thiruvalluvar"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 left-0 w-48 h-48 xs:w-52 xs:h-52 sm:w-32 sm:h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 z-30 -ml-16 xs:-ml-20 sm:-ml-12 md:-ml-12 lg:-ml-16 -mb-4 xs:-mb-6 md:-mb-12 lg:-mb-16 group block"
        title="Learn more about Thiruvalluvar"
      >
        <img 
          src="https://ik.imagekit.io/jacw2jgvs/thiruvalluvar%20wo%20bg%20final.png" 
          alt="Thiruvalluvar"
          className="w-full h-full object-contain cursor-pointer transition-all duration-200 group-hover:scale-105"
        />
        {showThiruvalluvarTooltip && (
          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black/90 text-yellow-300 text-xs px-2 py-1 rounded opacity-100 transition-opacity whitespace-nowrap z-30 hidden xs:block">
            Want to learn more? Click here!
          </span>
        )}
      </a>

      {/* Foreground Content - Moved to center on mobile */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/2 -translate-y-1/2 sm:top-1/4 sm:translate-y-0 left-4 xs:left-6 sm:left-16 md:left-24 lg:left-32 text-gray-900 max-w-[calc(100vw-2rem)] xs:max-w-[calc(100vw-3rem)] sm:max-w-none">
          {/* Tagline */}
          <div className="text-gray-900 flex items-center mb-3 xs:mb-4 sm:mb-6">
            <Utensils className="mr-1 xs:mr-2 flex-shrink-0" size={16} />
            <span className="uppercase tracking-wide xs:tracking-widest text-xs xs:text-sm font-bold truncate">
              {translations.hero.tagline[language]}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-white text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-white mb-4 xs:mb-6 sm:mb-8 leading-tight xs:leading-normal text-shadow-lg">
            {translations.hero.title[language]}
          </h1>

          {/* Description */}
          <p className="text-sm xs:text-base text-white md:text-xl mb-6 xs:mb-8 sm:mb-10 leading-snug xs:leading-relaxed max-w-xs xs:max-w-sm sm:max-w-lg font-semibold">
            {translations.hero.description[language]}
          </p>

          {/* Buttons */}
          <div className="flex flex-row flex-wrap items-start justify-start gap-2 xs:gap-4 mb-8 xs:mb-12 sm:mb-16">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-80}
              duration={0}
              className="btn-primary text-xs xs:text-sm py-1 px-2 xs:py-1 xs:px-3 max-w-fit text-center"
            >
              {translations.hero.exploreMenu[language]}
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={0}
              className="bg-white text-spice-500 py-1 px-2 xs:py-1 xs:px-3 rounded-md font-medium hover:bg-opacity-90 transition-all text-xs xs:text-sm max-w-fit text-center"
            >
              {translations.hero.bookTable[language]}
            </Link>
          </div>
        </div>

        {/* Quote Section - Removed Quote icon */}
        <div className="absolute bottom-2 xs:bottom-4 sm:bottom-8 lg:bottom-2 left-1/2 -translate-x-1/2 flex justify-center w-full z-20 px-2 xs:px-4">
          <div className="flex items-start justify-center w-full max-w-xs xs:max-w-sm sm:max-w-2xl lg:max-w-4xl">
            <div className="w-full text-center relative">
              <a
                href="https://en.wikipedia.org/wiki/Kural"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block"
                title="Learn more about this quote"
              >
                {/* Updated quote with desktop bold styling */}
                <p className="text-brown-700 font-bold italic text-xs xs:text-sm sm:text-base md:text-xl sm:font-bold md:font-bold lg:font-bold mb-1 xs:mb-2 sm:mb-3 cursor-pointer transition-all duration-200 group-hover:text-brown-800 group-hover:scale-105 leading-tight xs:leading-snug">
                  {
                    (() => {
                      const words = translations.hero.quote[language].split(' ');
                      const breakPoint = typeof window !== 'undefined' && window.innerWidth < 400 ? 3 : 4;
                      if (words.length <= breakPoint) return translations.hero.quote[language];
                      return (
                        <>
                          {words.slice(0, breakPoint).join(' ')}<br />
                          {words.slice(breakPoint).join(' ')}
                        </>
                      );
                    })()
                  }
                </p>
                {showQuoteTooltip && (
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-1 xs:mb-2 bg-black/90 text-yellow-300 text-xs px-2 py-1 rounded opacity-100 transition-opacity whitespace-nowrap z-30 hidden xs:block">
                    Want to learn about this quote? Click here!
                  </span>
                )}
              </a>
              <p className="text-white/100 text-xs xs:text-sm text-right">
                - Thiruvalluvar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;