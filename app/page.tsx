'use client';

import { motion } from 'framer-motion';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import ScrollSection from '@/components/ScrollSection';
import "./globals.css"

export default function Home() {
    const sections = [
        { component: <Hero />, key: 'hero' },
        { component: <Services />, key: 'services' },
        { component: <Team />, key: 'team' },
        { component: <Contact />, key: 'contact', id: 'contact' },
    ];

    return (
        <ParallaxProvider>
            <motion.main
                className="snap-y snap-mandatory h-[100vh] overflow-scroll scrollbar-hidden relative"
                initial="initial"
                animate="animate"
            >
                {/* Background Parallax Effect */}
                <ParallaxBanner
                    layers={[
                        {
                            speed: -30,
                            children: (
                                <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#112240] opacity-70" />
                            ),
                        },
                    ]}
                    className="absolute inset-0"
                />

                {sections.map((section) => (
                    <motion.div
                        key={section.key}
                        id={section.id}
                        className="relative min-h-screen flex justify-center items-center"
                        initial="hidden"
                        animate="visible"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <ScrollSection>{section.component}</ScrollSection>
                    </motion.div>
                ))}
            </motion.main>
        </ParallaxProvider>
    );
}
