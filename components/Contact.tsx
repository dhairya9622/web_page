'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
      <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
      >
        <div className="max-w-2xl w-full">
          <h2 className="text-4xl font-extrabold text-center text-white mb-12 tracking-wide">
            Get AI & Data Solutions
          </h2>
          <motion.form
              onSubmit={handleSubmit}
              className="relative bg-[#112240] bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-xl border-none overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Glowing Border */}
            <div className="absolute inset-0 z-0 rounded-xl border-glowing"></div>

            <div className="relative z-10">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-[#1a365d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 shadow-sm"
                    placeholder="Enter your name"
                    required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-[#1a365d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 shadow-sm"
                    placeholder="Enter your email"
                    required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  How can we help with AI & Data?
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md bg-[#1a365d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 shadow-sm"
                    placeholder="Describe your needs"
                    required
                ></textarea>
              </div>
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium rounded-md transition-all ease-in-out transform hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500"
              >
                Get AI-Powered Solutions
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
  );
}
