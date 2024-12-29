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
    logo: ''
  },
  { 
    name: 'PharmEasy', 
    logo: ''
  },
  {
    name: 'Liberty General Insurance',
    logo: ''
  }
]

export default function Team() {
  return (
    <section id="team" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-3xl font-extrabold text-center mb-12">Our Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-items-center max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex flex-col items-center w-full max-w-[240px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 w-full h-32 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={200}
                  height={100}
                  className="w-full h-full object-contain filter brightness-100"
                />
              </div>
              <p className="text-lg font-semibold text-gray-300 mt-4">{client.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

