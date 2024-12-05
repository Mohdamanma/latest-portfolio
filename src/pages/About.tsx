import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Brain, GraduationCap } from 'lucide-react';

export default function About() {
  const skills = [
    {
      name: 'Frontend Development',
      icon: Code,
      description: 'Expert in React, TypeScript, and modern CSS frameworks',
    },
    {
      name: 'UI/UX Design',
      icon: Palette,
      description: 'Creating beautiful and intuitive user interfaces',
    },
    {
      name: 'Problem Solving',
      icon: Brain,
      description: 'Strong analytical and algorithmic thinking skills',
    },
  ];
  const technical = [
    {
      name: 'Frontend',
      domains: ['React', 'nextjs', 'Angular', 'Vuejs'],
    },
    {
      name: 'Backend',
      domains: ['Node', 'Express', 'REST APIs', 'Python'],
    },
    {
      name: 'Databases',
      domains: ['PostgreSQL', 'MongoDB'],
    },
    {
      name: 'Tools',
      domains: ['Git', 'Linux', 'Nginx', 'Notion'],
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300">About Me</h2>

          <div className="grid md:grid-cols-1  gap-8 lg:gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I am a Full stack web developer with a passion for creating interactive and
                Responsive web application.I have experience working with javascript,React, Redux,
                Node.js, Express, PostgreSQL, Sequelize, Html, Css and Git. I am quick learner and I
                am always looking to expand my knowledge and skill set. I am a team player and I am
                excited to work with other to create amazing application.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing my knowledge through technical writing and
                mentoring.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <GraduationCap className="w-8 h-8 text-yellow-300" />
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-300">Education</h3>
              </div>

              <div className="border-l-2 border-yellow-300 pl-4">
                <h4 className="text-lg sm:text-xl font-semibold text-yellow-300">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-gray-400">Expected Graduation: 2024</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                    <span>Specialized in Full Stack Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                    <span>Focus on Modern Web Technologies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                    <span>UI/UX Design Principles</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-300">Technical Expertise</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {technical.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.5 }}
                  className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/70 transition-colors"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{skill.name}</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.domains.map((domain, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 rounded-full px-3 py-1 text-sm"
                      >
                        {domain}
                      </span>
                    ))}
                  </div>{' '}
                </motion.div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/70 transition-colors"
                >
                  <skill.icon className="w-8 h-8 text-yellow-500 mb-4" />
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{skill.name}</h4>
                  <p className="text-gray-300 text-sm sm:text-base">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
