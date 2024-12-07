import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import  foodNinja from '../Asset/foodNinja.png'
import  geneix from '../Asset/geneix-shopper.png'
import  portfolio from '../Asset/portfolio.png'

export default function Projects() {
  const projects = [
    {
      title: 'Geneix Shopper',
      description:
        'An innovative and responsive ecommerce platform built with modern web technologies. Explore a seamless shopping experience with a user-friendly interface, fast performance, and robust functionality.',
      image: geneix,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/Mohdamanma/genex-ecommerce',
      liveUrl: 'https://genex-ecommerce.vercel.app',
    },
    {
      title: 'Food Ninja',
      description:
        'A sleek and user-friendly recipe application that helps you discover and organize your favorite recipes effortlessly. Explore recipes, save your favorites, and enjoy a seamless cooking experience!',
      image: foodNinja,
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Mohdamanma/recipee-app',
      liveUrl: 'recipee-app-xi.vercel.app',
    },
    {
      title: 'Personal Portfolio',
      description:
        'Welcome to my personal portfolio! This is a showcase of my skills, projects, and experiences as a developer. Designed with a focus on simplicity, responsiveness, and creativity, this portfolio highlights my journey in the tech world.',
      image: portfolio,
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com/Mohdamanma/latest-portfolio',
      liveUrl: 'https://aman-three.vercel.app',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Featured Projects</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden group hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} className="mr-1" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
