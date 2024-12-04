import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';

export default function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Mail }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 hidden md:block"
      >
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-indigo-600/50 transition-all duration-300 group ${
                  isActive ? 'bg-indigo-600/50' : ''
                }`
              }
            >
              <span className="relative flex items-center">
                <item.icon className="w-6 h-6 text-white" />
                <span className="absolute left-full ml-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </span>
            </NavLink>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-white hover:bg-indigo-600/50 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-gray-900/50 backdrop-blur-sm"
          >
            <div className="min-h-screen flex items-center justify-center p-4">
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 w-full max-w-sm mx-auto">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-4 p-4 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-indigo-600/50 text-white'
                          : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                      }`
                    }
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}