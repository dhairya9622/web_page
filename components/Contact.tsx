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
            className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]"
        >
            <div className="max-w-5xl w-full">
                <h2 className="text-5xl font-extrabold text-center text-white mb-16 tracking-wide">
                    Get AI & Data Solutions
                </h2>
                <motion.form
                    onSubmit={handleSubmit}
                    className="relative bg-white/10 backdrop-blur-md p-12 rounded-xl shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Glowing Border */}
                    <div
                        className="absolute inset-0 z-0 rounded-xl border-[2px] border-transparent bg-clip-border bg-gradient-to-r from-indigo-500 to-pink-500 opacity-30"
                    ></div>

                    <div className="relative z-10 space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-lg font-medium text-gray-300 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={(e) =>
                                        setFormState({ ...formState, name: e.target.value })
                                    }
                                    className="w-full px-4 py-4 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 shadow-lg"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={(e) =>
                                        setFormState({ ...formState, email: e.target.value })
                                    }
                                    className="w-full px-4 py-4 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 shadow-lg"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-lg font-medium text-gray-300 mb-2"
                            >
                                How can we help with Software, AI & Data?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={(e) =>
                                    setFormState({ ...formState, message: e.target.value })
                                }
                                rows={6}
                                className="w-full px-4 py-4 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 shadow-lg"
                                placeholder="Tell us about your project needs"
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg font-semibold rounded-lg transition-all ease-in-out transform hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500"
                        >
                            Get AI-Powered Solutions
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
