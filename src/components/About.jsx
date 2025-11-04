import React from 'react';

const About = () => {
  return (
    <div className="relative bg-gray-50 pb-[110px] pt-[100px] dark:bg-gray-800 lg:pt-[100px]">
      {/* Decorative border at top */}
      <div className="absolute top-0 left-0 right-0 h-[0.1rem] bg-gradient-to-r from-transparent via-purple-200 to-transparent dark:via-purple-200"></div>
      {/* Decorative border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[0.1rem] bg-gradient-to-r from-transparent via-green-300 to-transparent dark:via-green-300"></div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-10 left-10 w-5 h-5 border border-purple-300 dark:border-purple-600 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-4 h-4 border border-green-300 dark:border-green-600 transform rotate-45 opacity-40"></div>
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
            About Me
          </h1>
          <p className="font-mono mb-4 max-w-[600px] mx-auto text-base text-body-color dark:text-gray-400">
            Hi! I’m <span className="text-amber-700 font-bold">Zin Min Thu</span> - call me <span className="text-amber-700 font-bold">Tommy</span>, a passionate Web Developer with over 5 years of experience building dynamic and user-friendly web applications.
          </p>
          <p className="font-mono mb-4 max-w-[600px] mx-auto text-base text-body-color dark:text-gray-400">
            I specialize in
            <span className='text-amber-500 font-bold' > PHP </span> and
            <span className='text-amber-500 font-bold' > Javascript </span>
            and have hands-on experience with modern frameworks like
            <span className='text-amber-500 font-bold' > Laravel</span>,
            <span className='text-amber-500 font-bold' > Yii2</span>,
            <span className='text-amber-500 font-bold' > React</span>, and 
            <span className='text-amber-500 font-bold' > Vue.js</span>.
          </p>
          <p className="font-mono mb-4 max-w-[600px] mx-auto text-base text-body-color dark:text-gray-400">
            I enjoy turning complex ideas into clean, efficient, and maintainable code. My front-end toolkit includes Bootstrap and Tailwind CSS, which I use to craft responsive, elegant interfaces that deliver great user experiences.
          </p>
          <p className="font-mono mb-4 max-w-[600px] mx-auto text-base text-body-color dark:text-gray-400">
            I love learning new technologies and continuously improving my skills to create better digital solutions. Whether it’s developing a custom web app, optimizing performance, or integrating APIs — I aim to deliver high-quality, reliable results.
          </p>
          <p className="font-mono mb-4 max-w-[600px] mx-auto text-base text-body-color dark:text-gray-400">
            When I’m not coding, I like exploring new design trends and experimenting with side projects to stay creative.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-lg shadow-md p-8 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">Innovation</h3>
              <p className="text-body-color dark:text-gray-400">
                Always exploring new technologies to build smarter, more efficient web solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">Teamwork</h3>
              <p className="text-body-color dark:text-gray-400">
                Believe in clear communication, collaboration, and shared success.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">Quality</h3>
              <p className="text-body-color dark:text-gray-400">
                Focus on writing clean, maintainable code that ensures long-term reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
