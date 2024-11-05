
import React from 'react';
import { Header } from '../Header.1';
import { motion } from 'framer-motion';
import ios from "../assets/ios.png";
import android from "../assets/android.png";
import crossplatform from "../assets/crossplatform.png";
import customappdevelopment from "../assets/customappdevelopment.png";

// Mobile App Development Services Data
const mobileAppDevelopmentServices = [
    {
        id: 1,
        title: 'iOS App Development',
        description: 'Elevate your digital presence with our iOS App Development services. We craft native applications tailored exclusively for Apple devices, ensuring seamless integration with the latest iOS features. Whether it\'s a consumer-facing app or an enterprise solution, our iOS development expertise guarantees a polished and optimized experience for your target audience on the Apple ecosystem.',
        image: ios
    },
    {
        id: 2,
        title: 'Android App Development',
        description: 'Tailored for the vibrant Android ecosystem, our expert developers craft dynamic and user-centric applications. From intuitive UI/UX design to seamless integration with device features, we ensure a compelling user experience.',
        image: android
    },
    {
        id: 3,
        title: 'Cross-Platform App Development',
        description: 'Cross-platform app development transforms the way applications are built, offering a cost-effective and efficient approach. With our expertise in cross-platform development, we empower businesses to reach a wider audience without compromising on quality or performance.',
        image: crossplatform
    },
    {
        id: 4,
        title: 'Custom App Development',
        description: 'Embark on a digital journey tailored to your needs with our Custom App Development services. Whether you have a unique business requirement or a specific vision for your application, our expert developers translate your ideas into reality.',
        image: customappdevelopment
    },
];

const MobileDevelopmentServices = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
        <div className=" mt-5">
            <h2 className="text-center mb-4 display-4">Our  Services</h2>
            <div className="row">
                {mobileAppDevelopmentServices.map(service => (
                    <div className="col-md-6 mb-4" key={service.id}>
                        <motion.div 
                            className="card h-100" // Card component
                            variants={containerVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5, delay: service.id * 0.1 }}
                        >
                            <img src={service.image} alt={`${service.title} Image`} className="card-img-top img-fluid" style={{width:'250px'}}/>
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

export default MobileDevelopmentServices;
