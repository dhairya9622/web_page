'use client';

import { motion } from 'framer-motion';
import {useState} from "react";
import Contact from "@/components/Contact";

export default function ThankYou() {

    const [isSubmitted, setIsSubmitted] = useState(false);


    return (
        <>
            {isSubmitted ? (<Contact/>)
            : (
                    <motion.section
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: 'easeOut'}}
                        className="min-h-screen flex items-center justify-center p-8 bg-transparent"
                        // ↑ Set bg-transparent to allow any underlying image/gradient to show through
                    >
                        {/*
        Layer a backdrop-blur/frosted-glass effect over whatever is behind it.
        Adjust the blur, border, and opacity to suit your design.
      */}
                        <div
                            className="relative max-w-2xl w-full bg-white/10 backdrop-blur-md p-8 sm:p-12 rounded-xl shadow-2xl">
                            {/* Decorative Border */}
                            <div
                                className="absolute inset-0 z-0 rounded-xl border-[2px] border-transparent bg-clip-border bg-gradient-to-r from-green-500 to-cyan-500 opacity-30"></div>

                            <div className="relative z-10 text-center text-white">
                                <h2 className="text-5xl font-extrabold mb-6 tracking-wide">Thank You!</h2>
                                <p className="text-xl mb-8">
                                    We’ve received your request and will get back to you soon.
                                </p>
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    onClick={() => {
                                        // Custom logic here
                                        setIsSubmitted(true)
                                    }}
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white text-lg font-semibold rounded-lg shadow-lg cursor-pointer"
                                >
                                    Back to Home
                                </motion.button>
                            </div>
                        </div>
                    </motion.section>
                )
            }

        </>
    );
}
