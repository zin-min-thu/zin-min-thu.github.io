import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce(Wine Store - HongKong)",
      description: "Developed a responsive e-commerce website for wine sales with product catalog, shopping cart, and secure payment integration. Focused on creating a user-friendly shopping experience and scalable backend.",
      url: "https://remfly.com.hk/",
      image: "/images/wine.jpg",
      technologies: ["PHP", "Laravel", "MySQL", "Javascript", "TailwindCSS", "RECON Payment Gateway"]
    },
    {
      id: 2,
      title: "Student Game Competition",
      description: "A Student Game Competition Website that connects students who love game competitions. The platform lets participants register online, upload their projects, and track results easily. It was a fun challenge that improved my backend and front-end integration skills.",
      url: "https://tkwwhkctkc.com/",
      image: "/images/student.jpg",
      technologies: ["PHP", "Laravel", "MySQL", "TypeScript", "Jquery"]
    },
    {
      id: 3,
      title: "Food Order System",
      description: "Built a Food Order Management System with modules for menu management, order processing, and real-time order tracking. Implemented RESTful APIs and responsive design for both customers and admins",
      url: "https://github.com/zin-min-thu/",
      image: "/images/food.jpg",
      technologies: ["PHP", "Laravel", "MySQL", "Javascript", "TailwindCSS", "Airwallex Payment Gateway"]
    },
    {
      id: 4,
      title: "E-Commerce(Customization Logos)",
      description: "Developed an E-commerce Platform with Project Sourcing and Outlet Management features, integrated with Stripe Payment Gateway. Built using Laravel and MySQL, focusing on secure transactions, efficient order handling, and seamless multi-outlet coordination.",
      url: "https://pangeabay.com/",
      image: "/images/water-bottle.jpg",
      technologies: ["PHP", "Laravel", "MySQL", "Javascript", "TailwindCSS", "Stripe Payment Gateway"]
    },
    {
      id: 5,
      title: "E-Commerce(360Malls)",
      description: "Designed and built a scalable Laravel REST API for a multi-platform E-commerce Shopping Mall. The API powers Web, Android, and iOS clients, handling operations for products, orders, customers, and payments. Focused on secure authentication, efficient data handling, and clean API architecture.",
      url: "https://www.360malls.com/",
      image: "/images/360malls.jpg",
      technologies: ["PHP", "Laravel", "MySQL", "Javascript", "Jquery"]
    },
    {
      id: 6,
      title: "Job Portal",
      description: "Built a scalable Laravel REST API and admin dashboard for a Job Portal platform. Designed endpoints for employers, job seekers, and applications with secure authentication and role-based access control. Focused on maintainable architecture and efficient data flow.",
      url: "https://github.com/zin-min-thu/",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["PHP", "Laravel", "MySQL", "Javascript", "Jquery"]
    },
    {
      id: 7,
      title: "Agency Management System",
      description: "Developed an Agency Management System backend with an admin dashboard using Laravel and MySQL. Implemented modules for agency profiles, client management, and performance tracking to streamline internal operations.",
      url: "https://github.com/zin-min-thu/",
      // image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      image: "/images/agency.jpg",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "Javascript", "Jquery"]
    },
    {
      id: 8,
      title: "Personal Portfolio",
      description: "Developed my personal portfolio website using React and TailwindCSS to showcase my skills, experience, and projects. Features a responsive design, dark mode toggle, smooth scroll, and project sections highlighting recent work. Built with a focus on performance, usability, and clean modern UI.",
      url: "https://github.com/zin-min-thu/",
      image: "/images/portfolio.jpg",
      technologies: ["React", "TailwindCSS"]
    }
  ];

  return (
    <div className="relative bg-white pb-[110px] pt-[100px] dark:bg-gray-800 lg:pt-[100px]">
      {/* Decorative border at top */}
      <div className="absolute top-0 left-0 right-0 h-[0.1rem] bg-gradient-to-r from-transparent via-indigo-400 to-transparent dark:via-indigo-400"></div>
      {/* Decorative border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[0.1rem] bg-gradient-to-r from-transparent via-pink-300 to-transparent dark:via-pink-300"></div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-20 w-5 h-5 border border-indigo-300 dark:border-indigo-600 transform -rotate-12 opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 border border-pink-300 dark:border-pink-600 rounded-full opacity-40"></div>
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
            Recent Projects
          </h1>
          <p className="mb-2 max-w-[600px] mx-auto text-base text-body-color dark:text-gray-400">
            Here are some of the web applications and projects I’ve worked on recently.
          </p>
          <p className="font-serif italic font-light text-sm mb-8 max-w-[600px] mx-auto text-body-color dark:text-gray-400">
            Note: Some project links and source code are not publicly available due to company policy and confidentiality agreements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center group">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 bg-white text-dark px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                  >
                    View Details
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark dark:text-white hover:text-blue-600 dark:hover:text-blue-400 underline decoration-transparent hover:decoration-blue-600 dark:hover:decoration-blue-400 underline-offset-4 transition-all duration-300 hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-body-color dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
