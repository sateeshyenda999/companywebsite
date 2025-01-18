import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './Themecontext'
import demoimage from "./assets/demo1.png"
import Footer from './Footer';
import Header from './Header';
import company from "./assets/company.png";
import mission from "./assets/mission.png";
import vision from "./assets/vision.png";
import Quality from "./assets/Qualityassurance.png"
import secure from "./assets/Secure.png"
import Contract from "./assets/contract.png"
import costeffective from "./assets/costeffective.png"
import integrity from "./assets/integrity.png"
import excellence from "./assets/excellence.png"
import { motion } from 'framer-motion';


const About = () => {
    const navigate=useNavigate()
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <Header />
        
            <div className="about-container">
            
                <h1 className="animated-header">About Nsight </h1>
                <p className="animated-text">
                    Nsight  is a premier provider of technology services dedicated to delivering high-quality IT solutions for businesses of all sizes. Established in 2010, we believe in building lasting partnerships with our clients, helping them navigate the complexities of the digital age.
                </p>
                <p className="animated-text">
                    Our mission is to drive business growth and efficiency through tailored, innovative solutions that prioritize client success.
                </p>
                <p className="animated-text">
                    Driven by core values of excellence, integrity, and innovation, our team collaborates with organizations to understand their unique needs and goals. With expertise across software development, cloud computing, cybersecurity, and data analytics, Nsight Solutions combines technical skill with a commitment to customer satisfaction.
                </p>
                <p className="animated-text">
                    As we look to the future, we are committed to staying at the forefront of technological advancements and delivering solutions that empower businesses to thrive in an ever-evolving landscape.
                </p>
            </div>
            <div className="container-fluid py-5 bg-light">
            <div className="row align-items-center">
                {/* Animated Text Section */}
                <motion.div 
                    className="col-lg-6 text-left px-5"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.8, ease: 'easeOut', delay: 1 }}
                >
                    <h2 className="mb-4 text-danger company-overview">Company Overview</h2>
                    <p className="mb-6 company-overviewtext">
                        Enter the realm of technological marvels with Techno Softwares, the vanguard of India's software development outsourcing. From visionary individuals to dynamic SMEs and global corporate titans, we orchestrate bespoke solutions that redefine possibilities across the globe.
                    </p>
                </motion.div>

            
                <motion.div 
                    className="col-lg-6 d-flex justify-content-end image-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.9, ease: 'easeOut', delay: 1.5 }}
                >
                    <img src={company} alt="Company Overview Image" className="img-fluid rounded shadow" />
                </motion.div>
            </div>
        </div>
            < motion.div className="core-values mt-5"  initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 5, ease: 'easeOut', delay: 1}}>
                <h3 className="core-values-title text-center mb-4">Our Core Values</h3>
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="card core-value-card">
                            <div className="card-body">
                                <h5 className="card-title">Integrity</h5>
                                <p className="card-text">We uphold the highest standards of integrity in all of our actions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card core-value-card">
                            <div className="card-body">
                                <h5 className="card-title">Customer Commitment</h5>
                                <p className="card-text">We develop relationships that make a positive difference in our customers' lives.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card core-value-card">
                            <div className="card-body">
                                <h5 className="card-title">Quality</h5>
                                <p className="card-text">We provide outstanding products and unsurpassed service that deliver premium value.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="container sizedown"  initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 5, ease: 'easeOut', delay: 1}}>
                <div className="row">
                    <div className="col-md-6"> 
                        <div className="card ">
                            <img src={vision} className="card-img-center" alt="Vision" />
                            <div className="card-body">
                                <h5 className="card-title text-center"> our Vision</h5>
                                <p className="card-text">Empowering businesses of all sizes to thrive in the digital era, our vision is to continuously evolve and adapt, delivering top-quality technology services that keep our clients ahead of the competition</p>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="card">
                            <img src={mission} className="card-img-top" alt="Mission" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Our Mission</h5>
                                <p className="card-text">Our mission is to empower individuals and communities by providing access to opportunities for personal and professional development, creating job opportunities, and fostering economic growth</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="container-fluid py-5 bg-light">
                <div className="row align-items-center animate-section hidden">
                      <motion.div   className="col-lg-6 text-left px-5"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.8, ease: 'easeOut', delay: 1 }}>
                        <h2 className="mb-4 text-danger company-overview">Our Pledge to client</h2>
                        <p className="mb-6 company-overviewtext">
                        Our pledge to client
Experience unwavering trust with our impeccable service, a fusion of punctuality and excellence for consistent deadline commitment, elevated professionalism in forging lasting partnerships, innovative collaboration as crafting bespoke solutions, and data security that guarantees peace of mind – our pledge to you.
                        </p>
                        <ul >
                            <li className='liststyle' style={{color:'GrayText'}}>Trust our cornerstone
                            <p className='pledge'>Safeguarding your trust, we ensure impeccable service and unwavering reliability.</p></li>
                            <li className='liststyle' style={{color:'GrayText'}}>
                            Consistency Unleashed:
                             <p className='pledge'>Punctuality and excellence merge in our consistent commitment to your deadlines.</p>
                             <li className='liststyle'style={{color:'GrayText'}}>Innovative Collaboration:</li>
                             <p>Beyond service, we’re partners crafting bespoke solutions for your success.</p>

                           <li className='liststyle' style={{color:'GrayText'}}>Data’s Fortress:</li>
                           <p>Confidentiality reigns as we secure your data, ensuring peace of mind.</p>


                            </li>
                        </ul>
                    </ motion.div>
                    <motion.div  className="col-lg-6 d-flex justify-content-end image-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.9, ease: 'easeOut', delay: 1.9}}>
                        <img src={Contract} alt="Company Overview Image" className="img-fluid rounded shadow" />
                    </motion.div>
                </div>
            </div>
            <div className='mt-4'>
                {/* Animated Heading */}
                <motion.h2 
                    className='text-center' 
                    style={{ fontWeight: '10rem' }}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1}}
                >
                    Why Choose Us
                </motion.h2>

                {/* Animated Description Text */}
                <motion.h5 
                    className="text-center mx-auto"  
                    style={{ maxWidth: '1200px' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
                >
                    Choose us for your software development needs because we excel in Scrum Agile methodology...
                </motion.h5>
            </div>
            
            <div className="container mt-5">
                <div className="row text-center">
                    {/* First Row of Cards */}
                    <motion.div className="col-md-4 mb-4" initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 1.6 }}
                    >
                        <div className="card h-100 border-0 d-flex flex-column">
                            <div className="card-body">
                                <img src={Quality} alt="Quality Assurance" className="mb-3" style={{ width: '50px' }} />
                                <h5 className="card-title text-primary">Unwavering Quality Assurance</h5>
                                <p className="card-text mt-auto">Our bond is built on quality; we deliver with trust and excellence.</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Additional Cards */}
                    <motion.div className="col-md-4 mb-4" initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 1.6}}
                    >
                        <div className="card h-100 border-0 d-flex flex-column">
                            <div className="card-body">
                                <img src={costeffective} alt="Cost-Effective Brilliance" className="mb-3" style={{ width: '50px' }} />
                                <h5 className="card-title text-primary">Cost-Effective Brilliance</h5>
                                <p className="card-text mt-auto">Top-notch solutions that fit your budget without compromising on quality.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="col-md-4 mb-4" initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 1.6}}
                    >
                        <div className="card h-100 border-0 d-flex flex-column">
                            <div className="card-body">
                                <img src={integrity} alt="Deadline Guardians" className="mb-3" style={{ width: '50px' }} />
                                <h5 className="card-title text-primary">Deadline Guardians</h5>
                                <p className="card-text mt-auto">Your time matters. We ensure on-time delivery, always.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                
                {/* Second Row of Cards */}
                <div className="row text-center">
                    <motion.div className="col-md-4 mb-4" initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 3}}
                    >
                        <div className="card h-100 border-0 d-flex flex-column">
                            <div className="card-body">
                                <img src={excellence} alt="Proven Excellence" className="mb-3" style={{ width: '50px' }} />
                                <h5 className="card-title text-primary">Proven Excellence</h5>
                                <p className="card-text mt-auto">Over a decade of software mastery, guaranteeing superior services.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="col-md-4 mb-4" initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 3}}
                    >
                        <div className="card h-100 border-0 d-flex flex-column">
                            <div className="card-body">
                                <img src={integrity} alt="Professional Integrity" className="mb-3" style={{ width: '50px' }} />
                                <h5 className="card-title text-primary">Professional Integrity</h5>
                                <p className="card-text mt-auto">Experience honesty, reliability, and professionalism with Techno Softwares.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="col-md-4 mb-4" initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 3 }}
                    >
                        <div className="card h-100 border-0 d-flex flex-column">
                            <div className="card-body">
                                <img src={secure} alt="Secure Success Partner" className="mb-3" style={{ width: '50px' }} />
                                <h5 className="card-title text-primary">Secure Success Partner</h5>
                                <p className="card-text mt-auto">Agile, secure, and unified solutions, dedicated to your triumph.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;