import React from 'react'
import Header from './Header'
import Footer from './Footer'
import sharp from "./assets/sharp.png"
import oracle from"./assets/oracle.png"
import Adobe from "./assets/adobe.png"
import Amazon from "./assets/amazon.png"
import Flowserve from "./assets/Flowserve.png"
import Salesforce from "./assets/salesforce.png"
import facebook from "./assets/facebook.png"
import ibm from "./assets/IBM.png"


const Contact = () => {
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
  return (
    <>
    <Header/>
    <div className="container my-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <div className="row">
                {/* Contact Form Column */}
                <div className="col-md-6">
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    </form>
                </div>

                {/* Headquarters Details Column */}
                <div className="col-md-6">
                    <h4 className="mb-3">Our Headquarters</h4>
                    <p><strong>Company Name:</strong>Nsight Solutions</p>
                    <p><strong>Address:</strong> 123 Tech Avenue, Suite 100</p>
                    <p><strong>Street:</strong> Innovation Street</p>
                    <p><strong>City:</strong> Silicon Valley</p>
                    <p><strong>Pincode:</strong> 123456</p>
                    <p><strong>Phone Number:</strong> +1 (123) 456-7890</p>
                    <p><strong>Email:</strong> contact@technosoftwares.com</p>
                    <p>We are located in the heart of Silicon Valley, and our team is ready to assist you with any inquiries or support you need. Reach out to us and let's build something great together!</p>
                </div>
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
  )
}

export default Contact