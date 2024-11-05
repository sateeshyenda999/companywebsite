import React from 'react';
import { Link } from 'react-router-dom'; 
import mobileDevIcon from './assets/mobiledevelopment.png';
import webDevIcon from './assets/webdevelopment.png';
import backendDevIcon from './assets/backenddevelopment.png';
import qualityIcon from "./assets/qualityassurance1.png";
import infraIcon from './assets/infrastructure.png';
import sapIcon from './assets/sap.png';
import { Header } from './Header.1';
import Footer from './Footer';

const services = [
    { id: 1, title: 'Mobile Development', icon: mobileDevIcon, description: 'Innovative mobile solutions tailored to your needs.', path: '/mobiledevelopment' },
    { id: 2, title: 'Web Development', icon: webDevIcon, description: 'Responsive and modern web applications.', path: '/webdevelopment' },
    { id: 3, title: 'Backend Development', icon: backendDevIcon, description: 'Robust backend architectures for seamless experiences.', path: '/backenddevelopment' },
    { id: 4, title: 'Quality Solutions', icon: qualityIcon, description: 'Ensuring the highest quality in every product.', path: '/qualitysolutions' },
    { id: 5, title: 'Infrastructure', icon: infraIcon, description: 'Efficient infrastructure to support business growth.', path: '/infrastructure' },
    { id: 6, title: 'SAP Solutions', icon: sapIcon, description: 'Optimizing enterprise operations with SAP.', path: '/sapsolutions' }
];

const Services = () => {
    return (
        <>
        <Header/>
        <div className=" mt-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <div className="row">
                {services.map((service) => (
                    <div className="col-4 mb-4" key={service.id}>
                        <Link to={service.path} className="service-item"> 
                            <div className="service-image-container">
                                <img src={service.icon} alt={`${service.title} Icon`} className="service-image" />
                                <div className="service-description">{service.description}</div>
                            </div>
                            <h5 className="service-title">{service.title}</h5>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>

    );
};

export default Services;
