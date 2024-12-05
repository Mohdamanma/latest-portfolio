import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import pic from '../Asset/pic.jpg'
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl mb-8 sm:text-3xl md:text-5xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink-600"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            Mohammed Aman
          </motion.h1>

          <TypeAnimation
            sequence={['Web Developer', 2000, 'App developer', 2000, 'Full Stack developer', 2000]}
            className="text-3xl font-medium"
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Mohdamanma"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/amanma"
              className="text-gray-400 hover:text-blue-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:helloaman@gmail.com"
              className="text-gray-400 hover:text-red-800 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto"
          >
            <img
              src={pic}
              alt="Mohammed Aman"
              className="w-full  h-full rounded-full object-cover ring-4 ring-indigo-500/50"
            />

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}