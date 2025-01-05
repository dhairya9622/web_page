'use client';
import { motion } from 'framer-motion';
import { Brain, Database, LineChart, Cpu, Code, Server, Layout, Link, CloudCog, FolderCode, ShoppingCart, ShieldCheck, BookOpenCheck } from 'lucide-react';
import "@/app/globals.css";

const services = [
  { name: 'Custom Software Development', icon: FolderCode, description: 'We create tailored software solutions to meet the unique needs of our clients, including web applications, mobile apps, and enterprise software.' },
  { name: 'Full Stack Development', icon: Code, description: 'We offer end-to-end development services using technologies like Java, Spring Boot, React, Angular, and more. Our expertise covers both front-end and back-end development to ensure seamless integration and high performance.' },
  // { name: 'Backend Development', icon: Server, description: 'Robust and scalable server-side solutions with efficient database management' },
  // { name: 'Frontend Development', icon: Layout, description: 'Responsive and intuitive user interfaces with cutting-edge frontend frameworks' },
  // { name: 'CRM Integrations', icon: Link, description: 'Seamless integration of Customer Relationship Management systems with your existing infrastructure' },
  { name: 'DevOps and Cloud Services', icon: CloudCog, description: 'We provide DevOps services, including continuous integration and delivery (CI/CD) pipelines using Jenkins, Docker, and Kubernetes. Our cloud services leverage AWS for scalable and reliable solutions.' },
  { name: 'AI-Powered Analytics', icon: Brain, description: 'We create AI-driven solutions to extract actionable insights, leveraging machine learning, predictive analytics, and real-time data visualization to optimize business decisions.' },
  // { name: 'Big Data Solutions', icon: Database, description: 'Harness the power of big data with scalable and efficient data processing systems' },
  // { name: 'Machine Learning Integration', icon: Cpu, description: 'Implement cutting-edge machine learning models to automate and optimize processes' },
  // { name: 'Data Visualization', icon: LineChart, description: 'Transform complex data into clear, actionable visualizations for informed decision-making' },
  { name: 'E-commerce Solutions', icon: ShoppingCart, description: 'We build scalable and secure e-commerce platforms to enhance online sales, with expertise in integrating payment gateways and managing inventory.' },
  { name: 'Integration Services', icon: Link, description: 'We offer integration services to connect software with other business systems, including API development, middleware integration, and data synchronization.' },
  { name: 'Testing and Quality Assurance', icon: ShieldCheck, description: 'We provide comprehensive testing services to ensure software reliability and performance, including unit testing, integration testing, performance testing, and automated testing.' },
  { name: 'Consulting and Advisory Services', icon: BookOpenCheck, description: 'We offer consulting services to help clients make informed decisions about their software projects, including technology selection, architecture design, and project management.' },
];

const jigsawVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100, // Alternate blocks slide from left or right
    y: index % 2 === 0 ? -100 : 100, // Alternate blocks slide from top or bottom
    scale: 0.8,
  }),
  visible: (index) => ({
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
          <h2 className="text-3xl font-extrabold text-center mb-12">Our AI & Data Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <motion.div
                    key={service.name}
                    className="bg-[#112240] bg-opacity-70 p-6 rounded-lg shadow-lg backdrop-blur-sm service-card"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={jigsawVariants}
                >
                  <service.icon className="h-12 w-12 text-indigo-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );

 // Adjust based on your icon package

}
