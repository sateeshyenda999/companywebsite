import React from "react";
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from './Header';
import Nsight from "./Nsight"
import Employeessay from "./Employeessay";
import Banner from "./banner";
import sharp from "./assets/sharp.png"
import oracle from"./assets/oracle.png"
import Adobe from "./assets/adobe.png"
import Amazon from "./assets/amazon.png"
import Flowserve from "./assets/Flowserve.png"
import Salesforce from "./assets/salesforce.png"
import facebook from "./assets/facebook.png"
import ibm from "./assets/IBM.png"

import Footer from "./Footer";
import Certified from "./certified";



const Home=()=>{
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
    return(
        <div>
            <Header/>
        <Banner/>
        <div className="info-section text-center p-4">
                <h2 className=".animated-header">TechFusion Solutions</h2>
                <p className=".animated-text">
                    TechFusion Solutions is a premier technology services provider that offers 
                    innovative IT solutions to businesses of all sizes. Established in 2010, 
                    we prioritize excellence and customer satisfaction, staying ahead of 
                    technological trends. Our skilled team collaborates closely with clients 
                    to understand their needs and create tailored solutions that enhance growth 
                    and efficiency.
                </p>
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
                <Employeessay/>
                <Certified/>
                <Footer/>
        </div>
    )
}
export default Home