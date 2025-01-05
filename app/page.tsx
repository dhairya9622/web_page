'use client';

import { motion } from 'framer-motion';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import ScrollSection from '@/components/ScrollSection';

const jigsawVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.3,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

export default function Home() {
  const sections = [
    { component: <Hero />, key: 'hero' },
    { component: <Services />, key: 'services' },
    { component: <WhyChooseUs />, key: 'whychooseus' },
    { component: <Team />, key: 'team' },
    { component: <Contact />, key: 'contact' },
  ];

  return (
      <>
      <ParallaxProvider>
          <motion.main
              className="snap-y snap-mandatory h-[96vh] overflow-y-scroll scrollbar-hidden"
              initial="initial"
              animate="animate"
          >
              {/* Background Parallax Effect */}
              <ParallaxBanner
                  layers={[
                      {speed: -30,
                          children: <div
                              className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#112240] opacity-70"/>
                      },
                  ]}
                  className="absolute inset-0"
              />

              {sections.map((section, index) => (
                  <motion.div
                      key={section.key}
                      className="relative min-h-screen flex justify-center items-center"
                      initial="hidden"
                      animate="visible"
                      whileInView="visible"
                      viewport={{once: true, amount: 0.5}}
                  >
                      <motion.div
                          custom={index}
                          variants={jigsawVariants}
                          className="absolute top-0 left-0 w-1/2 h-1/2 bg-transparent"
                      />
                      <motion.div
                          custom={index + 1}
                          variants={jigsawVariants}
                          className="absolute top-0 right-0 w-1/2 h-1/2 bg-transparent"
                      />
                      <motion.div
                          custom={index + 2}
                          variants={jigsawVariants}
                          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-transparent"
                      />
                      <motion.div
                          custom={index + 3}
                          variants={jigsawVariants}
                          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-transparent"
                      />
                      <ScrollSection>{section.component}</ScrollSection>
                  </motion.div>
              ))}
          </motion.main>

      </ParallaxProvider>
    <footer>Dhairya Gajjar. @2025</footer>
    </>
  );
}
