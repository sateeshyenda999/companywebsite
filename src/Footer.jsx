import React from 'react';
import { Link } from 'react-router-dom';
import Nsight from './Nsight';
import Techfusion from "./assets/Techfusion.png"
import nsight from "./assets/nsightlogo1.png"


const Footer = () => {
    return (
        <footer className="footer" style={{backgroundColor: "black", color: "#f1f1f1"}}>
            <div className="container">
                <div className="row py-4">
                    <div className="col-md-3">
                        <img src={nsight} alt="TechMojo Logo" className="footer-logo" />
                    </div>
                    <div className="col-md-3">
                        <h5>Solutions</h5>
                        <ul className="list-unstyled">
                            <li><Link to="#">Platform & Product Engineering</Link></li>
                            <li><Link to="#">Technical Operations</Link></li>
                            <li><Link to="#">Cloud for agility and scale</Link></li>
                            <li><Link to="#">Quality engineering for faster time to market</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Policies</h5>
                        <ul className="list-unstyled">
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Cookies Policy</Link></li>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Our Expertise</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Connect</h5>
                        <ul className="list-unstyled social-media">
                        <li>
                                <Link to="#"><i className="fab fa-linkedin"></i> LinkedIn</Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fab fa-medium"></i> Medium</Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fab fa-ambitionbox"></i> AmbitionBox</Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fab fa-glassdoor"></i> Glassdoor</Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fab fa-twitter"></i> Twitter</Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fab fa-threads"></i> Threads</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col text-center">
                        <p>Nsight solutions Pvt Ltd Level-1, Wing-1, Block-B, Cyber Gateway, HITEC City, Madhapur, Hyderabad-500081</p>
                        <p>© 2024, All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
