import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { BookOpen, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  
  const stats = [
    { ...translations.about.stats.experience, color: 'spice' },
    { ...translations.about.stats.recipes, color: 'leaf' },
    { ...translations.about.stats.customers, color: 'chili' }
  ];

  const features = [
    {
      ...translations.about.features.ingredients,
      color: 'spice'
    },
    {
      ...translations.about.features.recipes,
      color: 'leaf'
    },
    {
      ...translations.about.features.ambiance,
      color: 'chili'
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 pb-32 overflow-hidden"
      style={{ backgroundColor: '#d5b56a' }}
    >
      <div className="container mx-auto px-4 pr-6 box-border relative z-10 overflow-y-auto scrollbar-thin scrollbar-thumb-spice-400 scrollbar-track-cream-100">
        <div ref={textRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-4"
          >
            <BookOpen className="mr-2 text-spice-600" size={20} />
            <span className="uppercase tracking-widest text-sm text-spice-600">
              {translations.about.subtitle[language]}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {translations.about.title[language]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {translations.about.description[language]}
          </motion.p>
        </div>
        
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pr-8"
          >
            {/* White animated box for "Our Story" */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 rounded-xl shadow-lg p-8 mb-8"
            >
              <h3 className="font-display text-2xl md:text-3xl mb-4 text-gray-900 font-bold">
                Our Story
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From the vibrant streets of Chennai to the heart of Germany, we bring authentic South Indian flavors with a passion for tradition and quality.
              </p>
              <h4 className="font-display text-xl md:text-2xl mb-2 text-gray-800 font-semibold">
                A Legacy of Flavor & Tradition
              </h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our journey began in the bustling streets of Chennai, where our founder Chef Rajan learned the art of South Indian cuisine from his grandmother. Every morning, they would visit the local spice markets, selecting the finest ingredients for their family restaurant.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue this tradition in Germany, importing our spices directly from trusted farmers in South India. Our dishes are a testament to the rich culinary heritage of South India, prepared with authentic recipes that have been perfected over generations.
              </p>
            </motion.div>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center bg-white/80 rounded-lg p-6 shadow"
              >
                <div className="w-16 h-16 rounded-full bg-spice-100 flex items-center justify-center text-spice-600 mb-2 text-2xl font-bold">
                  15+
                </div>
                <h4 className="font-medium text-gray-900">Years of Experience</h4>
                <p className="text-sm text-gray-500">Since 2010</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col items-center bg-white/80 rounded-lg p-6 shadow"
              >
                <div className="w-16 h-16 rounded-full bg-leaf-100 flex items-center justify-center text-leaf-600 mb-2 text-2xl font-bold">
                  50+
                </div>
                <h4 className="font-medium text-gray-900">Authentic Recipes</h4>
                <p className="text-sm text-gray-500">Traditional dishes</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex flex-col items-center bg-white/80 rounded-lg p-6 shadow"
              >
                <div className="w-16 h-16 rounded-full bg-chili-100 flex items-center justify-center text-chili-600 mb-2 text-2xl font-bold">
                  1000+
                </div>
                <h4 className="font-medium text-gray-900">Happy Customers</h4>
                <p className="text-sm text-gray-500">Monthly</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column: Replace 3D/canvas with image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[600px] rounded-lg overflow-hidden shadow-xl flex items-center justify-center bg-white/0"
          >
            <img
              src="https://ik.imagekit.io/jacw2jgvs/la43-listing.jpg?updatedAt=1747316422127"
              alt="About us"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title[language]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/80 p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl"
              >
                <div className={`w-12 h-12 rounded-full bg-${feature.color}-500 text-white flex items-center justify-center mb-4`}>
                  <span className="font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="font-display text-xl mb-3 text-gray-900">
                  {feature.title[language]}
                </h3>
                <p className="text-gray-600">
                  {feature.description[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 text-center">
        <Link
          to="menu"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          className="text-gray-600 flex flex-col items-center cursor-pointer hover:text-spice-600 transition-colors"
        >
          <span className="text-sm uppercase tracking-wider mb-2">
            {translations.about.cta[language]}
          </span>
          <ChevronDown size={20} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;