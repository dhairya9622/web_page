'use client';
import { motion } from 'framer-motion';
import {
  Brain,
  Code,
  Link,
  CloudCog,
  FolderCode,
  ShoppingCart,
  ShieldCheck,
  BookOpenCheck,
} from 'lucide-react';
import "@/app/globals.css";

const services = [
  { name: 'Custom Software Development', icon: FolderCode, description: 'We create tailored software solutions to meet the unique needs of our clients, including web applications, mobile apps, and enterprise software.' },
  { name: 'Full Stack Development', icon: Code, description: 'We offer end-to-end development services using technologies like Java, Spring Boot, React, Angular, and more. Our expertise covers both front-end and back-end development to ensure seamless integration and high performance.' },
  { name: 'DevOps and Cloud Services', icon: CloudCog, description: 'We provide DevOps services, including continuous integration and delivery (CI/CD) pipelines using Jenkins, Docker, and Kubernetes. Our cloud services leverage AWS for scalable and reliable solutions.' },
  { name: 'AI-Powered Analytics', icon: Brain, description: 'We create AI-driven solutions to extract actionable insights, leveraging machine learning, predictive analytics, and real-time data visualization to optimize business decisions.' },
  { name: 'E-commerce Solutions', icon: ShoppingCart, description: 'We build scalable and secure e-commerce platforms to enhance online sales, with expertise in integrating payment gateways and managing inventory.' },
  { name: 'Integration Services', icon: Link, description: 'We offer integration services to connect software with other business systems, including API development, middleware integration, and data synchronization.' },
  { name: 'Testing and Quality Assurance', icon: ShieldCheck, description: 'We provide comprehensive testing services to ensure software reliability and performance, including unit testing, integration testing, performance testing, and automated testing.' },
  { name: 'Consulting and Advisory Services', icon: BookOpenCheck, description: 'We offer consulting services to help clients make informed decisions about their software projects, including technology selection, architecture design, and project management.' },
];

const jigsawVariants = {
  hidden: (index : number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
    y: index % 2 === 0 ? -100 : 100,
    scale: 0.8,
  }),
  visible: (index : number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

export default function Services() {
  return (
      <section id="services" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-200">Our AI & Data Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <motion.div
                    key={service.name}
                    className="bg-gradient-to-r from-[#1a1a2e] to-[#2b2b45] p-6 rounded-xl shadow-lg backdrop-blur-lg border border-gray-700 hover:shadow-[0_0_20px_rgba(138,180,248,0.3)] transition-transform transform hover:scale-105"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={jigsawVariants}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-[#2e2e48] rounded-full mb-4 shadow-md">
                    <service.icon className="h-8 w-8 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{service.name}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
