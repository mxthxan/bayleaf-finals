import React, { useEffect, useRef } from 'react';
import { useLoading } from '../context/LoadingContext';
import gsap from 'gsap';

const LoadingScreen: React.FC = () => {
  const { isLoading, setIsLoading } = useLoading();
  const curtainLeftRef = useRef<HTMLDivElement>(null);
  const curtainRightRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgLeftRef = useRef<HTMLDivElement>(null);
  const bgRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animation for background and text
    tl.set([bgLeftRef.current, bgRightRef.current], { opacity: 0 })
      .set(textRef.current, { opacity: 0 })
      .to([bgLeftRef.current, bgRightRef.current], {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
      .to(textRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.2');

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
          ease: 'power2.out'
        })
        .to(bgLeftRef.current, {
          x: '-50vw',
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.1')
        .to(bgRightRef.current, {
          x: '50vw',
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.8')
        .to([bgLeftRef.current, bgRightRef.current], {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out'
        }, '-=0.2')
        .to(curtainLeftRef.current, {
          scaleX: 0,
          duration: 0.8,
          ease: 'power3.inOut'
        }, '-=0.3')
        .to(curtainRightRef.current, {
          scaleX: 0,
          duration: 0.8,
          ease: 'power3.inOut'
        }, '-=0.8');
    }, 1500);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  if (!isLoading) return null;

  return (
    <>
      <div ref={curtainLeftRef} className="curtain curtain-left"></div>
      <div ref={curtainRightRef} className="curtain curtain-right"></div>
      <div className="curtain-content">
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          
          {/* Background Left */}
          <div
            ref={bgLeftRef}
            className="absolute flex items-center justify-center w-full h-full"
            style={{
              clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
              transformOrigin: 'center center',
              zIndex: 1
            }}
          >
            <img
              src="https://ik.imagekit.io/qcf813yjh/opening%20screen.jpg"
              alt="Background Left"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Background Right */}
          <div
            ref={bgRightRef}
            className="absolute flex items-center justify-center w-full h-full"
            style={{
              clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
              transformOrigin: 'center center',
              zIndex: 1
            }}
          >
            <img
              src="https://ik.imagekit.io/qcf813yjh/opening%20screen.jpg"
              alt="Background Right"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none"
          >
            <h1 className="text-black font-display text-4xl sm:text-5xl md:text-6xl drop-shadow-lg animate-pulse">
              BayLeaf
            </h1>
            <p className="text-black mt-2 text-lg sm:text-xl md:text-2xl drop-shadow">
              A taste of South India in Germany
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
