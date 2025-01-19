'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  {
    name: 'Visa',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
  },
  {
    name: 'Marlabs LLC',
    logo: '/assets/Marlabs_Logo.png'
  },
  {
    name: 'Liberty General',
    logo: '/assets/liberty-general.png'
  }
]

export default function Team() {
  return (
      <section
          id="team"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6"
      >
        <div>
          <h2 className="text-3xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            Organizations I&apos;ve Contributed To
          </h2>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
            Here are a few organizations that have benefited from my contributions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center max-w-6xl mx-auto">
            {clients.map((client, index) => (
                <motion.div
                    key={client.name}
                    className="w-full max-w-[240px] p-8 rounded-lg bg-white/5 backdrop-blur-sm cursor-pointer transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center h-32">
                    <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={200}
                        height={100}
                        className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-300 mt-4 text-center">
                    {client.name}
                  </p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
