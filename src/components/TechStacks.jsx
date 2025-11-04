import React, { useState, useEffect, useRef } from 'react';

const TechStacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);

  const techStacks = [
    { name: 'PHP', icon: '🐘', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
    { name: 'Laravel', icon: '🔴', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
    { name: 'Yii2', icon: '⚡', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
    { name: 'MySQL', icon: '🗄️', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' },
    { name: 'HTML', icon: '🌐', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' },
    { name: 'CSS', icon: '🎨', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    { name: 'Bootstrap', icon: '💜', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
    { name: 'TailwindCSS', icon: '🎯', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' },
    { name: 'Javascript', icon: '⚡', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
    { name: 'jQuery', icon: '📦', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    { name: 'Ajax', icon: '🔄', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
    { name: 'Vue.js', icon: '💚', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
    { name: 'React', icon: '⚛️', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    { name: 'Go/Golang', icon: '🐹', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' }
  ];

  // Calculate items per slide - always 8 items per slide
  const getItemsPerSlide = () => {
    return 8; // Always show 8 tech stacks per slide
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide);
  const maxSlides = Math.ceil(techStacks.length / itemsPerSlide);

  // Update items per slide on window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoSliding) {
      autoSlideRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % maxSlides);
      }, 5000); // Changed to 5 seconds
    } else {
      clearInterval(autoSlideRef.current);
    }

    return () => clearInterval(autoSlideRef.current);
  }, [isAutoSliding, maxSlides]);

  // Manual slide controls
  const slideLeft = () => {
    setIsAutoSliding(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + maxSlides) % maxSlides);
  };

  const slideRight = () => {
    setIsAutoSliding(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % maxSlides);
  };

  const handleMouseEnter = () => {
    setIsAutoSliding(false);
  };

  const handleMouseLeave = () => {
    setIsAutoSliding(true);
  };

  return (
    <div className="relative bg-gray-50 pb-[110px] pt-[100px] dark:bg-gray-800 lg:pt-[100px]">
      {/* Decorative border at top */}
      <div className="absolute top-0 left-0 right-0 h-[0.1rem] bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-300"></div>
      {/* Decorative border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[0.1rem] bg-gradient-to-r from-transparent via-green-300 to-transparent dark:via-green-300"></div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-10 right-10 w-6 h-6 border border-blue-300 dark:border-blue-600 transform rotate-45 opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-4 h-4 border border-cyan-300 dark:border-cyan-600 rounded-full opacity-40"></div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
            Tech Stacks
          </h1>
          <p className="mb-8 max-w-[600px] mx-auto text-base text-body-color dark:text-gray-400">
            Technologies and frameworks I work with to build modern, scalable applications.
          </p>
        </div>

        {/* Tech Stack Slider Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          {/* <button
            onClick={slideLeft}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Previous tech stack"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button> */}

          {/* Right Arrow Button */}
          {/* <button
            onClick={slideRight}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Next tech stack"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}

          {/* Slider Container */}
          <div 
            ref={sliderRef}
            className="overflow-hidden mx-12"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: maxSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3 px-4">
                    {techStacks
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((tech, techIndex) => (
                        <div
                          key={`${slideIndex}-${techIndex}`}
                          className={`flex flex-col items-center space-y-2 px-3 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${tech.color}`}
                        >
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="text-xs font-semibold text-center leading-tight">{tech.name}</span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoSliding(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 dark:bg-blue-400' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tech Stack Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">Backend</h3>
              <p className="text-body-color dark:text-gray-400 text-sm">
                PHP, Laravel, Yii2, Go(Golang), MySQL
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">Frontend</h3>
              <p className="text-body-color dark:text-gray-400 text-sm">
                HTML, CSS, Bootstrap, TailwindCSS, JavaScript, jQuery, Ajax
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">Frameworks</h3>
              <p className="text-body-color dark:text-gray-400 text-sm">
                Laravel, Yii2, Vue.js, React
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
