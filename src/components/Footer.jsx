import React from 'react';

const Footer = ({ onNavigate }) => {

  return (
    <footer className="bg-gray-700 dark:bg-gray-900 text-white transition-colors duration-200">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold text-white">ZIN MIN THU</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Skilled and dedicated PHP Developer with over 5 years of experience in
              designing, developing, and maintaining dynamic and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#tech"
                  onClick={(e) => { e.preventDefault(); onNavigate('tech'); }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tech Stacks
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); onNavigate('projects'); }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 transition-colors">
                  Web Development
                </span>
              </li>
              <li>
                <span className="text-gray-300 transition-colors">
                  E-Commerce
                </span>
              </li>
              <li>
                <span className="text-gray-300 transition-colors">
                  Microfinance
                </span>
              </li>
              <li>
                <span className="text-gray-300 transition-colors">
                  Consulting
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 Zin Min Thu. All rights reserved.
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
