// src/Servicesinfo/BackendWebServices.jsx
import React from 'react';
import { motion } from 'framer-motion';
import pythonImage from "../assets/python.png";
import nodejsImage from "../assets/nodejs.png";
import dotnetImage from "../assets/dotnet.png";
import rubyImage from "../assets/ruby.png";
import javaImage from "../assets/java.png";
import phpImage from "../assets/php.png";

// Backend and Web Development Services Data
const backendWebServices = [
    {
        id: 1,
        title: 'Python',
        description: 'This versatile and sought-after language is a game changer in backend development & data analytics. Python’s ecosystem supports big data processing, predictive modeling, and powers machine learning and AI applications, enabling intelligent solutions.',
        image: pythonImage
    },
    {
        id: 2,
        title: 'Node.js',
        description: 'Node.js empowers applications with robust streaming capabilities, enabling seamless data flow and efficient resource utilization. Its language-agnostic nature fosters frontend-backend code sharing, streamlining development for fast and flexible applications.',
        image: nodejsImage
    },
    {
        id: 3,
        title: '.NET',
        description: 'Ideal for mid-to-large-scale systems, .NET excels in scalability and integration. With its Microsoft ties, .NET empowers applications with Azure, creating robust systems that handle extensive workloads and high-speed data processing.',
        image: dotnetImage
    },
    {
        id: 4,
        title: 'Ruby on Rails',
        description: 'Ruby on Rails is a powerful web application framework supporting extensive database integration and customization. It’s the solution for high-quality, scalable applications that handle complex backend needs with ease.',
        image: rubyImage
    },
    {
        id: 5,
        title: 'Java',
        description: 'Java is the backbone of enterprise-grade backend development. It offers scalability, cross-platform compatibility, efficient memory use, and multithreading, powering responsive servers and robust applications trusted by tech giants.',
        image: javaImage
    },
    {
        id: 6,
        title: 'PHP',
        description: 'PHP is a flexible backend scripting language, ideal for applications that require agility. It adapts easily to changing functionalities, making software projects agile, responsive, and adaptable to evolving needs.',
        image: phpImage
    },
];

const BackendWebServices = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="containe mt-5">
            <h2 className="text-center mb-4 display-4">Backend & Web Development Services</h2>
            <div className="row">
                {backendWebServices.map(service => (
                    <div className="col-md-6 mb-4" key={service.id}>
                        <motion.div 
                            className="card h-100" // Card component
                            variants={containerVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5, delay: service.id * 0.1 }}
                        >
                            <img src={service.image} alt={`${service.title} Image`} className="card-img-top img-fluid"  style={{height:'100',width:'400'}}/>
                            <div className="card-body">
                                <h3 className="card-title">{service.title}</h3>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BackendWebServices;
