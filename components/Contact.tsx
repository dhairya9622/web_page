'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ThankYou from '@/components/Thankyou';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({ name: '', email: '', message: '', general: '' });

    const validateForm = () => {
        const newErrors = { name: '', email: '', message: '', general: '' };
        let isValid = true;

        if (!formState.name.trim()) {
            newErrors.name = 'Name is required.';
            isValid = false;
        }

        const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,7}$/;
        if (!formState.email.trim()) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!emailRegex.test(formState.email)) {
            newErrors.email = 'Invalid email address.';
            isValid = false;
        }

        if (!formState.message.trim()) {
            newErrors.message = 'Message is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            // Email validation
            const emailValidationResponse = await fetch('https://chat.dhairyagajjar.com/api/verify-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formState.email }),
            });

            if (!emailValidationResponse.ok) {
                const errorText = await emailValidationResponse.text();
                throw new Error(`Email validation failed: ${errorText}`);
            }

            const emailValidationResult = await emailValidationResponse.text();

            if (emailValidationResult.includes('valid')) {
                // Submit form data
                const response = await fetch('https://chat.dhairyagajjar.com/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formState),
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Form submission failed: ${errorText}`);
                }

                // Form submission successful
                setIsSubmitted(true);
            } else {
                setErrors((prev) => ({ ...prev, email: emailValidationResult }));
            }
        } catch (error: unknown) {
            console.error('Error:', error);
            setErrors((prev) => ({
                ...prev,
                general: 'An error occurred while submitting the form. Please try again later.',
            }));
        }
    };

    return (
        <>
            {isSubmitted ? (
                <ThankYou />
            ) : (
                <section
                    id="contact"
                    className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
                >
                    <div className="max-w-5xl w-full">
                        <h2 className="text-5xl font-extrabold text-center text-white mb-16 tracking-wide">
                            I&apos;d love to get in touch!
                        </h2>
                        <motion.form
                            onSubmit={handleSubmit}
                            className="relative bg-white/10 backdrop-blur-md p-12 rounded-xl shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
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
                                        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
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
                                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
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
                                    {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                                </div>
                                {errors.general && (
                                    <div className="text-red-500 text-sm mt-4">
                                        {errors.general}
                                    </div>
                                )}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg font-semibold rounded-lg transition-all ease-in-out transform hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500"
                                >
                                    Submit
                                </motion.button>
                            </div>
                        </motion.form>
                    </div>
                </section>
            )}
        </>
    );
}
