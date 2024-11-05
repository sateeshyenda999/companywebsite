import React from 'react'
import Nsight from './Nsight'
import Header from './Header'
import Footer from './Footer'
import JobCards from './Jobs'
import sharp from "./assets/sharp.png"
import oracle from"./assets/oracle.png"
import Adobe from "./assets/adobe.png"
import Amazon from "./assets/amazon.png"
import Flowserve from "./assets/Flowserve.png"
import Salesforce from "./assets/salesforce.png"
import facebook from "./assets/facebook.png"
import ibm from "./assets/IBM.png"

const Careers = () => {
  const clients = [
    {name: "Google", logo: sharp},
    { name: "Amazon", logo: Amazon },

    { name: "Apple", logo:facebook },
    { name: "IBM", logo: ibm},
    { name: "Flowserve", logo: Flowserve },
    { name: "Facebook", logo: facebook },
    { name: "Salesforce", logo: Salesforce },
    { name: "Adobe", logo: Adobe },
    { name: "Intel", logo: "/path-to-logo/intel.png" },
    { name: "Oracle", logo:oracle }
];
  return (
    <>
    <Header/>
 
    <JobCards/>
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
  )
}

export default Careers