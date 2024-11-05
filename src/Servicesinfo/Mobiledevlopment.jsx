// src/Servicesinfo/MobileDevelopment.jsx
import React from 'react';
import { Header } from '../Header.1';
import { motion } from 'framer-motion';
import Contract from "../assets/contract.png"
import MobileDevelopmentservices from "./mobiledevelopmentservices"
import Footer from '../Footer';

const MobileDevelopment = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
        <Header/>
        <div className=" mt-5" style={{backgroundColor:'whitesmoke'}}>
            <div className="row">
                {/* Left Column: Title and Description */}
                <div className="col-md-6">
                    <motion.h2 
                        className="text-center mb-3 display-4"  // Increased size with Bootstrap display class
                        variants={containerVariants} 
                        initial="hidden" 
                        animate="visible"
                        transition={{ duration: 0.5 }}
                    >
                        Mobile App Development Services
                    </motion.h2>
                    <motion.p 
                        className="lead"  // Bootstrap class for larger paragraph text
                        variants={containerVariants} 
                        initial="hidden" 
                        animate="visible" 
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{padding:'20px', color:'#555'}}
                    >
                        We specialize in creating innovative, high-performance mobile applications tailored to meet the unique needs of your business. Our team of skilled developers, designers, and project managers work collaboratively to bring your app idea to life, ensuring a seamless user experience, scalability, and robust performance.
                    </motion.p>
                </div>

                {/* Right Column: Request a Free Quote Form */}
                <div className="col-md-6">
                    <motion.h3 
                        className="text-center mb-4 display-5"  // Increased size with Bootstrap display class
                        variants={containerVariants} 
                        initial="hidden" 
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Request a Free Quote
                    </motion.h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">contact</label>
                            <input type="phone" className="form-control" id="number" placeholder="Your phonenumber" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <MobileDevelopmentservices/>
        <div className="container-fluid py-5 bg-light">
                <div className="row align-items-center animate-section hidden">
                      <motion.div   className="col-lg-6 text-left px-5"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.8, ease: 'easeOut', delay: 1 }}>
                        <h2 className="mb-4 text-primary company-overview">Why  choose us ?</h2>
                        <h4 className="mb-6 " style={{color:'#555'}}>
                        Mobile app development has become an integral part of the digital landscape, revolutionizing the way we interact with technology. In this dynamic field, Techno Softwares emphasizes a user-centric approach, focusing on creating seamless and intuitive experiences. Techno Softwares combines expertise with an in-depth understanding of user requirements.

Our dedication to delivering high-quality and user-friendly applications positions us as a trusted partner for businesses to make an everlasting impact in the digital landscape. As the mobile app continues to develop, Techno Softwares remains at the forefront, shaping the future of mobile application experiences with expertise and creativity.
                        </h4>
                       
                    </ motion.div>
                    <motion.div  className="col-lg-6 d-flex justify-content-end image-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.9, ease: 'easeOut', delay: 1.9}}>
                        <img src={Contract} alt="Company Overview Image" className="img-fluid rounded shadow" />
                    </motion.div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default MobileDevelopment;
