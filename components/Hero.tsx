'use client';

import { motion } from 'framer-motion';
import {useRouter} from "next/navigation";


export default function Hero() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push('/chat')
  }
  return (
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            Innovate with AI & Data
          </motion.h1>
          <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transforming Businesses with Intelligent Solutions
          </motion.p>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Button85 */}

            {/* Sparkle Button */}
            <div className="sp">
              <button className="sparkle-button" onClick={handleOnClick}>
                <span className="spark"></span>
                <span className="backdrop"></span>
                <svg
                    className="sparkle"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
                      fill="black"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="text">Chat with My AI assistant</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}
