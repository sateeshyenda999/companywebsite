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
import sharp from "./assets/sharp.png"
import oracle from"./assets/oracle.png"
import Adobe from "./assets/adobe.png"
import Amazon from "./assets/amazon.png"
import Flowserve from "./assets/Flowserve.png"
import Salesforce from "./assets/salesforce.png"
import facebook from "./assets/facebook.png"
import ibm from "./assets/IBM.png"

const services = [
    { id: 1, title: 'Mobile Development', icon: mobileDevIcon, description: 'Innovative mobile solutions tailored to your needs.', path: '/mobiledevelopment' },
    { id: 2, title: 'Web Development', icon: webDevIcon, description: 'Responsive and modern web applications.', path: '/webdevelopment' },
    { id: 3, title: 'Backend Development', icon: backendDevIcon, description: 'Robust backend architectures for seamless experiences.', path: '/backenddevelopment' },
    { id: 4, title: 'Quality Solutions', icon: qualityIcon, description: 'Ensuring the highest quality in every product.', path: '/qualitysolutions' },
    { id: 5, title: 'Infrastructure', icon: infraIcon, description: 'Efficient infrastructure to support business growth.', path: '/infrastructure' },
    { id: 6, title: 'SAP Solutions', icon: sapIcon, description: 'Optimizing enterprise operations with SAP.', path: '/sapsolutions' }
];
const clients = [
    {name: "Google", logo: sharp},
    { name: "Amazon", logo: Amazon },

    { name: "Apple", logo:facebook },
    { name: "IBM", logo: ibm},
    { name: "Flowserve", logo: Flowserve },
    { name: "Facebook", logo: facebook },
    { name: "Salesforce", logo: Salesforce },
    { name: "Adobe", logo: Adobe },

    { name: "Oracle", logo:oracle }
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
        <div className="clients-section">
                <h3>Our Clients</h3>
                <div className="clients-marquee">
                    <div className="clients-logos">
                        {clients.map((client, index) => (
                            <div key={index} className="client">
                                <img src={client.logo} alt={`${client.name} logo`} className="client-logo" />
                            </div>
                        ))}
                        {/* Repeat logos to create seamless scrolling */}
                        {clients.map((client, index) => (
                            <div key={index + clients.length} className="client">
                                <img src={client.logo} alt={`${client.name} logo`} className="client-logo" />
                            </div>
                        ))}
                    </div>
                </div>
                </div>
        <Footer/>
        </>

    );
};

export default Services;
