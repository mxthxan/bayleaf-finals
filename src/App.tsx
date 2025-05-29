import React, { useEffect, useState } from 'react';
import { LoadingProvider } from './context/LoadingContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import MenuSection from './components/sections/MenuSection';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import ScrollHideContactHeader from './components/sections/ScrollHideContactHeader';

function App() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      setInitialized(true);
    }, 500); // Just a small delay to ensure everything is ready

    return () => clearTimeout(timer);
  }, []);

  if (!initialized) {
    return <div>Initializing application...</div>;
  }

  return (
    <LoadingProvider>
      <LanguageProvider>
      <div className="app">
        {/* Loading Screen with Curtain Animation */}
        <LoadingScreen />
        
        {/* Main Content */}
        <ScrollHideContactHeader />
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <GallerySection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
      </LanguageProvider>
    </LoadingProvider>
  );
}

export default App;