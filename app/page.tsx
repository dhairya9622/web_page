'use client';

import { motion } from 'framer-motion';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import ScrollSection from '@/components/ScrollSection';

// Enhanced jigsaw variants with slight tweaks for smoother, more dynamic motion
const jigsawVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        rotate: -10,
        skewX: 10,
    },
    visible: (index: number) => ({
        opacity: 1,
        scale: 1,
        rotate: 0,
        skewX: 0,
        transition: {
            delay: index * 0.3,
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1],
        },
    }),
};

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
                className="snap-y snap-mandatory h-[96vh] overflow-y-scroll scrollbar-hidden relative"
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

                {sections.map((section, index) => (
                    <motion.div
                        key={section.key}
                        id={section.id}
                        className="relative min-h-screen flex justify-center items-center"
                        initial="hidden"
                        animate="visible"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {/* TOP-LEFT CORNER */}
                        <motion.div
                            custom={index}
                            variants={jigsawVariants}
                            className="absolute top-0 left-0 w-1/2 h-1/2
                         bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500
                         opacity-20 blur-2xl rounded-full mix-blend-lighten"
                        />
                        {/* TOP-RIGHT CORNER */}
                        <motion.div
                            custom={index + 1}
                            variants={jigsawVariants}
                            className="absolute top-0 right-0 w-1/2 h-1/2
                         bg-gradient-to-bl from-blue-500 via-teal-400 to-green-400
                         opacity-20 blur-2xl rounded-full mix-blend-lighten"
                        />
                        {/* BOTTOM-LEFT CORNER */}
                        <motion.div
                            custom={index + 2}
                            variants={jigsawVariants}
                            className="absolute bottom-0 left-0 w-1/2 h-1/2
                         bg-gradient-to-tr from-yellow-500 via-orange-500 to-pink-500
                         opacity-20 blur-2xl rounded-full mix-blend-lighten"
                        />
                        {/* BOTTOM-RIGHT CORNER */}
                        <motion.div
                            custom={index + 3}
                            variants={jigsawVariants}
                            className="absolute bottom-0 right-0 w-1/2 h-1/2
                         bg-gradient-to-tl from-lime-400 via-green-400 to-blue-400
                         opacity-20 blur-2xl rounded-full mix-blend-lighten"
                        />

                        <ScrollSection>{section.component}</ScrollSection>
                    </motion.div>
                ))}
            </motion.main>
        </ParallaxProvider>
    );
}
