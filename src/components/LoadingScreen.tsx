import React, { useEffect, useRef } from 'react';
import { useLoading } from '../context/LoadingContext';
import gsap from 'gsap';

const LoadingScreen: React.FC = () => {
  const { isLoading, setIsLoading } = useLoading();
  const curtainLeftRef = useRef<HTMLDivElement>(null);
  const curtainRightRef = useRef<HTMLDivElement>(null);
  const logoLeftRef = useRef<HTMLDivElement>(null);
  const logoRightRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animation for the logo parts and text
    tl.set([logoLeftRef.current, logoRightRef.current], { opacity: 0 })
      .set(textRef.current, { opacity: 0 })
      .to([logoLeftRef.current, logoRightRef.current], { 
        opacity: 1,
        duration: 0.6, 
        ease: "power2.out" 
      })
      .to(textRef.current, { 
        opacity: 1,
        duration: 0.4, 
        ease: "power2.out" 
      }, "-=0.2");

    // Reduced loading time to 1.5 seconds
    const timer = setTimeout(() => {
      const openCurtain = gsap.timeline({
        onComplete: () => {
          setTimeout(() => setIsLoading(false), 500);
        }
      });

      openCurtain
        .to(textRef.current, { 
          opacity: 0, 
          duration: 0.3, 
          ease: "power2.out" 
        })
        // Animate the rope splitting effect - move to extreme sides
        .to(logoLeftRef.current, { 
          x: "-50vw", 
          duration: 0.8, 
          ease: "power2.out" 
        }, "-=0.1")
        .to(logoRightRef.current, { 
          x: "50vw", 
          duration: 0.8, 
          ease: "power2.out" 
        }, "-=0.8")
        // Fade out the logo parts
        .to([logoLeftRef.current, logoRightRef.current], { 
          opacity: 0, 
          duration: 0.4, 
          ease: "power2.out" 
        }, "-=0.2")
        // Open curtains
        .to(curtainLeftRef.current, { 
          scaleX: 0, 
          duration: 0.8, 
          ease: "power3.inOut" 
        }, "-=0.3")
        .to(curtainRightRef.current, { 
          scaleX: 0, 
          duration: 0.8, 
          ease: "power3.inOut" 
        }, "-=0.8");
    }, 1500);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  if (!isLoading) return null;

  return (
    <>
      <div ref={curtainLeftRef} className="curtain curtain-left"></div>
      <div ref={curtainRightRef} className="curtain curtain-right"></div>
      <div className="curtain-content flex flex-col items-center justify-center min-h-screen">
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          {/* Left half of the image */}
          <div 
            ref={logoLeftRef} 
            className="absolute flex items-center justify-center"
            style={{
              clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
              transformOrigin: 'center center'
            }}
          >
            <img
              src="https://ik.imagekit.io/jacw2jgvs/tug.png?updatedAt=1748145137235"
              alt="Loading Logo Left"
              className="w-[75vw] max-w-[1000px] min-w-[300px] object-contain"
            />
          </div>
          
          {/* Right half of the image */}
          <div 
            ref={logoRightRef} 
            className="absolute flex items-center justify-center"
            style={{
              clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
              transformOrigin: 'center center'
            }}
          >
            <img
              src="https://ik.imagekit.io/jacw2jgvs/tug.png?updatedAt=1748145137235"
              alt="Loading Logo Right"
              className="w-[75vw] max-w-[1000px] min-w-[300px] object-contain"
            />
          </div>
          
          {/* Text overlay */}
          <div 
            ref={textRef}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
          >
            <div>
              <h1 className="text-yellow-100 font-display text-5xl md:text-6xl drop-shadow-lg animate-pulse">
                Singen
              </h1>
              <p className="text-yellow-100 mt-2 text-xl md:text-2xl drop-shadow">
                A taste of South India in Germany
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;