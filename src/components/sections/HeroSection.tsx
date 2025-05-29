import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, Utensils, Quote } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';

const HeroSection: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const [showInvisibleTooltip, setShowInvisibleTooltip] = useState(true);
  const [showQuoteTooltip, setShowQuoteTooltip] = useState(true);

  // Hide tooltips after 5 seconds on mount
  useEffect(() => {
    if (showInvisibleTooltip) {
      const timer = setTimeout(() => setShowInvisibleTooltip(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showInvisibleTooltip]);

  useEffect(() => {
    if (showQuoteTooltip) {
      const timer = setTimeout(() => setShowQuoteTooltip(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showQuoteTooltip]);

  return (
    <section 
      id="home" 
      className="relative w-full"
      style={{ minHeight: '100vh', height: '100vh', backgroundColor: '#fed647' }}
    >
      {/* Background with Rotating Plate */}
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
        style={{ minHeight: '100vh' }}
      >
        {/* Rotating Plate Background - Half Visible on Right */}
        <div className="fixed top-1/2 right-0 -translate-y-1/2 w-[150vw] sm:w-[130vw] md:w-[110vw] lg:w-[90vw] h-screen overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 -right-[75%] sm:-right-[65%] md:-right-[55%] lg:-right-[45%] w-[200vw] h-[200vw] sm:w-[180vw] sm:h-[180vw] md:w-[150vw] md:h-[150vw] lg:w-[120vw] lg:h-[120vw] flex justify-center items-center" style={{ 
            animation: 'rotate 20s linear infinite',
            transformOrigin: 'center'
          }}>
            <img 
              src="https://ik.imagekit.io/jacw2jgvs/Untitled%20design.svg" 
              alt="Rotating plate background"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Thiruvalluvar Image - Absolute Left Bottom - Now clickable */}
        <a
          href="https://en.wikipedia.org/wiki/Thiruvalluvar_Statue"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-0 left-0 w-48 h-48 sm:w-32 sm:h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 z-20 -ml-8 md:-ml-12 lg:-ml-16 -mb-8 md:-mb-12 lg:-mb-16 group block"
          title="Learn more about Thiruvalluvar Statue"
        >
          <img 
            src="https://ik.imagekit.io/jacw2jgvs/thiruvalluvar%20wo%20bg%20final.png" 
            alt="Thiruvalluvar"
            className="w-full h-full object-contain cursor-pointer transition-all duration-200 group-hover:scale-105"
          />
          {/* Tooltip visible only for 5 seconds after load */}
          {showInvisibleTooltip && (
            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black/90 text-yellow-300 text-xs px-3 py-1 rounded opacity-100 transition-opacity whitespace-nowrap z-30">
              Want to learn more?
            </span>
          )}
        </a>

      {/* Custom CSS for rotation animation */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: translateY(-50%) rotate(0deg);
          }
          to {
            transform: translateY(-50%) rotate(360deg);
          }
        }
      `}</style>
      </div>

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-16 md:left-24 lg:left-32 text-gray-900">
          <div className="text-gray-900 flex items-center mb-6">
            <Utensils className="mr-2" size={20} />
            <span className="uppercase tracking-widest text-sm">
              {translations.hero.tagline[language]}
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            {translations.hero.title[language]}
          </h1>

          <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
            {translations.hero.description[language]}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-80}
              duration={0}
              className="btn-primary"
            >
              {translations.hero.exploreMenu[language]}
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={0}
              className="bg-white text-spice-500 py-2 px-6 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              {translations.hero.bookTable[language]}
            </Link>
          </div>
        </div>

        {/* Chef Ranveer Quote - now just the quote text as a direct link */}
        <div className="absolute bottom-0 mb-8 lg:mb-2 left-1/2 -translate-x-1/2 flex justify-center w-full z-20 sm:mb-16 md:mb-12">
          <div className="flex items-start justify-center w-[95vw] max-w-4xl sm:w-[80vw] sm:max-w-2xl">
            <Quote className="text-spice-400 mr-3 flex-shrink-0 mt-1 sm:mr-2" size={24} />
            <div className="w-full text-center relative">
              <a
                href="https://en.wikipedia.org/wiki/Kural"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block"
                title="Learn more about this quote"
              >
                <p className="text-brown-700 font-bold italic text-lg md:text-xl mb-3 sm:text-base sm:mb-2 cursor-pointer transition-all duration-200 group-hover:text-brown-800 group-hover:scale-105">
                  {
                    (() => {
                      const words = translations.hero.quote[language].split(' ');
                      if (words.length <= 4) return translations.hero.quote[language];
                      return (
                        <>
                          {words.slice(0, 4).join(' ')}<br />
                          {words.slice(4).join(' ')}
                        </>
                      );
                    })()
                  }
                </p>
                {/* Tooltip visible only for 5 seconds after load */}
                {showQuoteTooltip && (
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black/90 text-yellow-300 text-xs px-3 py-1 rounded opacity-100 transition-opacity whitespace-nowrap z-30 sm:text-xs">
                    Want to learn about this quote? Click here!
                  </span>
                )}
              </a>
              <p className="text-white/100 text-sm text-right sm:text-xs">
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