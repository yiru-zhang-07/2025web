import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OutsideOfWork: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider rounded-full bg-white/20 text-white mb-4">
            From parks to pixels
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Besides the digital world, I also design the physical places, code, and more.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
          <Link to="/about#about-me" className="h-full group">
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg flex flex-col h-full cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: 0.1 }}
              whileHover={{ y:-10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h3 
                className="text-xl font-bold mb-4 text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Get to Know Me
              </motion.h3>
              <motion.p 
                className="text-gray-800 mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Along the way, I've also explored <span className="px-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20">visual design, branding, animation</span>, and more.
              </motion.p>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="absolute bottom-3 right-8 flex flex-col items-end gap-2">
                <motion.img
                  src="/images/avatar-1.png"
                  alt="Avatar 3"
                  className="w-24 h-24 object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}                  
                />
              </div>
            </motion.div>
          </Link>

          <Link to="/about#past-design-projects" className="h-full group">
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg flex flex-col h-full cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: 0.1 }}
              whileHover={{ y:-10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h3 
                className="text-xl font-bold mb-4 text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Design the Physical World
              </motion.h3>
              <motion.p 
                className="text-gray-800 mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Take a look at my past projects in <span className="px-1 bg-gradient-to-r from-yellow-400/20 to-pink-500/20">landscape and urban design</span>.
              </motion.p>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="absolute bottom-3 right-8 flex flex-col items-end gap-2">
                <motion.img
                  src="/images/avatar-2.png"
                  alt="Avatar 2"
                  className="w-24 h-24 object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
          </Link>

          <Link to="/about#website-coding-ai-magic" className="h-full group">
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg flex flex-col h-full min-h-[300px] cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: 0.1 }}
              whileHover={{ y:-10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h3 
                className="text-xl font-bold mb-4 text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Website Coding & AI Magic
              </motion.h3>
              <motion.p 
                className="text-gray-800 mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                I <span className="px-1 bg-gradient-to-r from-green-400/20 to-blue-500/20">built it from scratch</span> with the help of AI. Peek behind the scenes and see how I brought it all together!
              </motion.p>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="absolute bottom-3 right-8 flex flex-col items-end gap-2">
                <motion.img
                  src="/images/avatar-3.png"
                  alt="Avatar 3"
                  className="w-24 h-24 object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}                  
                />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OutsideOfWork; 