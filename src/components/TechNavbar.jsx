import React, { useState } from 'react';

const TechNavbar = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🔧' },
    { id: 'backend', name: 'Backend', icon: '🚀' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'frameworks', name: 'Frameworks', icon: '⚛️' }
  ];

  const techStacks = {
    all: [
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
    ],
    backend: [
      { name: 'PHP', icon: '🐘', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
      { name: 'Laravel', icon: '🔴', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
      { name: 'Yii2', icon: '⚡', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
      { name: 'MySQL', icon: '🗄️', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' }
    ],
    frontend: [
      { name: 'HTML', icon: '🌐', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' },
      { name: 'CSS', icon: '🎨', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
      { name: 'Bootstrap', icon: '💜', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
      { name: 'TailwindCSS', icon: '🎯', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' },
      { name: 'Javascript', icon: '⚡', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
      { name: 'jQuery', icon: '📦', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
      { name: 'Ajax', icon: '🔄', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' }
    ],
    frameworks: [
      { name: 'Vue.js', icon: '💚', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
      { name: 'React', icon: '⚛️', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
      { name: 'Go/Golang', icon: '🐹', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' }
    ]
  };

  return (
    <div className="relative bg-white dark:bg-gray-800 py-16">
      {/* Decorative border at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent dark:via-indigo-400"></div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
            Tech Stacks
          </h1>
          <p className="mb-8 max-w-[600px] mx-auto text-base text-body-color dark:text-gray-400">
            Explore my technology expertise across different categories.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Tech Stack Display */}
        <div className="relative">
          <div className="flex animate-slide-left-to-right">
            {/* First set of tech stacks */}
            {techStacks[activeCategory].map((tech, index) => (
              <div
                key={`first-${index}`}
                className={`flex-shrink-0 mx-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${tech.color}`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-semibold">{tech.name}</span>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {techStacks[activeCategory].map((tech, index) => (
              <div
                key={`second-${index}`}
                className={`flex-shrink-0 mx-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${tech.color}`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-semibold">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechNavbar;
