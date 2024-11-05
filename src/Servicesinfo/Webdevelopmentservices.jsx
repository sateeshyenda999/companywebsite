import React from 'react';
import { motion } from 'framer-motion';
import frontend from "../assets/frontend.png";
import usercentricdesign from "../assets/usercentricdesign.png";
import apiIntegration from "../assets/apiintegration.png";
import ecommerce from "../assets/ecommerce.png";
import maintenance from "../assets/maintenance.png";

// Web Development Services Data
const webDevelopmentServices = [
    {
        id: 1,
        title: 'Front End Development',
        description: 'Enhance UI experiences with our front-end development. We create visually captivating and seamlessly functional websites, ensuring intuitive navigation and dynamic interactivity. Transform your online presence with our responsive designs that instantly engage visitors.',
        image: frontend
    },
    {
        id: 2,
        title: 'User-Centric Design',
        description: 'In user-centric design, we prioritize your audience, crafting intuitive interfaces that enhance the browsing journey. By empathizing with users, we create enjoyable experiences, ensuring every interaction is seamless and satisfying, resulting in a website that truly resonates.',
        image: usercentricdesign
    },
    {
        id: 3,
        title: 'Seamless Integration of Third-Party APIs',
        description: 'Experience enhanced website capabilities through our seamless integration of third-party APIs. We empower your site with extended functionality and connectivity, ensuring a dynamic and feature-rich digital experience for your users.',
        image: apiIntegration
    },
    {
        id: 4,
        title: 'Ecommerce Development',
        description: 'Revolutionize your online enterprise with our custom e-commerce solutions. Carefully designed for your business, our solutions combine cutting-edge aesthetics with robust functionality, ensuring a shopping experience that is not only seamless but also captivating and user-centric.',
        image: ecommerce
    },

    {
        id: 5,
        title: 'Website Maintenance',
        description: 'Ensure your website stays at peak performance with our meticulous website maintenance services. From regular updates to security checks, we handle all aspects, guaranteeing a seamless user experience and keeping your online presence optimized and secure.',
        image: maintenance
    },
];

const WebDevelopmentServices = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
        <div className="mt-5">
            <h2 className="text-center mb-4 display-4">Our Web Development Services</h2>
            <div className="row">
                {webDevelopmentServices.map(service => (
                    <div className="col-md-6 mb-4" key={service.id}>
                        <motion.div 
                            className="card h-100" // Card component
                            variants={containerVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5, delay: service.id * 0.1 }}
                        >
                            <img src={service.image} alt={`${service.title} Image`} className="card-img-top img-fluid" style={{ width: '250px' }} />
                            <div className="card-body">
                                <h3 className="card-title">{service.title}</h3>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default WebDevelopmentServices;
