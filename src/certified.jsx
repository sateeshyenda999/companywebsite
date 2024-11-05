import React from 'react';
import googleImage from './assets/google.png';   // Replace with actual image path
import awsImage from './assets/aws.png';         // Replace with actual image path
import isoImage from './assets/iso.png';         // Replace with actual image path
import { motion } from 'framer-motion';


const Certified= () => {
    const certifications = [
        {
            title: "Google Certified Developer Partner Agency",
            description: "We are among the first 13 companies globally to be certified as a Google Developer Partner Agency.",
            image: googleImage
        },
        {
            title: "Trusted Partner For AWS",
            description: "Delivering Technology and Strategy Innovation for Enterprises.",
            image: awsImage
        },
        {
            title: "ISO 9001 and 27001 Certified Organization",
            description: "We are ISO 9001:2015 and ISO 27001:2013 certified for top-notch quality management, efficiency, and customer satisfaction.",
            image: isoImage
        }
    ];

    return (
        <motion.div className="container text-center my-5"
        style={{ fontWeight: '10rem' }}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1}}>
            <h2 className='text-center' 
                    >Trusted Prtners</h2>
            <div className="row justify-content-center mt-4" >
                {certifications.map((cert, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                        <div className="card border-0">
                            <img src={cert.image} className="card-img-left mx-auto mt-5" alt={cert.title}style={{ width: '80px' }} />
                            <div className="card-body">
                                <h5 className="card-title text-success">{cert.title}</h5>
                                <p className="card-text">{cert.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Certified;
