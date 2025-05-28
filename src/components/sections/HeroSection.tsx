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

  // Hide tooltips after 10 seconds on mount
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
      className="relative min-h-screen w-full"
    >
      {/* Background Video - No overlay or dulling */}
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover object-right md:object-center min-h-screen min-w-full"
        >
          <source src="https://ik.imagekit.io/jacw2jgvs/desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* ⛔️ Removed the black overlay */}
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

        {/* Chef Ranveer Quote moved to absolute bottom center, no bg blur */}
        <div className="absolute bottom-0 mb-2 left-1/2 -translate-x-1/2 flex justify-center w-full z-20">
          <a
            href="https://en.wikipedia.org/wiki/Kural"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            title="Learn more about this quote"
          >
            <div 
              ref={quoteRef}
              className="p-4 rounded-lg border-2 border-white/60 shadow-lg w-[95vw] max-w-4xl bg-transparent transition-all duration-200 group-hover:scale-105 group-hover:bg-black/30 cursor-pointer flex justify-center relative"
            >
              <div className="flex items-start justify-center w-full">
                <Quote className="text-spice-400 mr-3 flex-shrink-0 mt-1" size={28} />
                <div className="w-full text-center">
                  <p className="text-brown-700 font-bold italic text-lg md:text-xl mb-3">
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
                  <p className="text-white/100 text-sm text-right">
                    - Thiruvalluvar
                  </p>
                  {/* Tooltip visible only for 10 seconds after load */}
                  {showQuoteTooltip && (
                    <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black/90 text-yellow-300 text-xs px-3 py-1 rounded opacity-100 transition-opacity whitespace-nowrap z-30">
                      Want to learn about this quote? Click here!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {/* Invisible button as a colored point, moved slightly to the right */}
      <div className="absolute bottom-5 left-8 md:left-16 lg:left-24 z-30 flex flex-col items-start w-max">
        <a
          href="https://en.wikipedia.org/wiki/Thiruvalluvar_Statue"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block w-8 h-8"
          tabIndex={-1}
          aria-label="Learn more about Thiruvalluvar Statue"
        >
          {/* Colored circular point */}
          <span className="absolute inset-0 w-6 h-6 m-auto rounded-full bg-yellow-800 shadow-lg cursor-pointer"></span>
          {/* Tooltip visible only for 10 seconds after load */}
          {showInvisibleTooltip && (
            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black/90 text-yellow-300 text-xs px-3 py-1 rounded opacity-100 transition-opacity whitespace-nowrap z-30">
              Want to learn more?
            </span>
          )}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
