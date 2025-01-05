'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import "@/app/globals.css";

const reasons = [
  'Cutting-edge AI and machine learning expertise',
  'Proven track record in big data analytics',
  'Custom-tailored data-driven solutions',
  'Seamless integration of AI into existing systems',
  'Robust data security and privacy measures',
  'Continuous innovation in AI and data technologies',
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto whychoseus">
        <h2 className="text-3xl font-extrabold text-center mb-12">Why Choose Our AI & Data Solutions</h2>
        <ul className="space-y-4">
          {reasons.map((reason, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className='reason'>{reason}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

