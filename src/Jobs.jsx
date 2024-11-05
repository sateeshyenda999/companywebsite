import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const jobListings = [
    { jobTitle: "Software Engineer", experience: "2-4 years", location: "San Francisco, CA", description: " Proficiency in design tools like Sketch, Figma, or Adobe Creative Suite.Knowledge of front-end technologies (HTML, CSS, JavaScript) to communicate effectively with developers."},
    { jobTitle: "Product Manager", experience: "5+ years", location: "New York, NY", description: "Lead product strategy and execution." },
    { jobTitle: "UX/UI Designer", experience: "3-5 years", location: "Austin, TX", description: "Design user interfaces and experiences." },
    { jobTitle: "Data Analyst", experience: "1-3 years", location: "Chicago, IL", description: "Analyze and interpret data trends." },
    { jobTitle: "DevOps Engineer", experience: "4-6 years", location: "Remote", description: "Maintain CI/CD pipelines." },
    { jobTitle: "Technical Writer", experience: "2-3 years", location: "Seattle, WA", description: "Write technical documentation." },
    { jobTitle: "Cybersecurity Specialist", experience: "5+ years", location: "Boston, MA", description: "Ensure system security and data protection." },
    { jobTitle: "Machine Learning Engineer", experience: "3-5 years", location: "Denver, CO", description: "Develop machine learning models." }
];

const JobCards = () => {
    const resumeFormRef = useRef(null);

    // Function to scroll to the resume form
    const scrollToResumeForm = () => {
        if (resumeFormRef.current) {
            resumeFormRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const resumesubmit=(()=>{
        alert("Resume submitted")
    })

    return (
        <>
            <motion.div className="container mt-5" initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 5, ease: 'easeOut', delay: 1 }}>
                <h1 className='text-center' style={{ fontSize: '2.4rem', fontWeight: 'bold' }}>Current Openings</h1>
                <div className="row">
                    {jobListings.map((job, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card-container">
                                <div className="card-content">
                                    <div className="card-front">
                                        <h5 className="card-title text-primary text-center mb-3" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                                            {job.jobTitle}
                                        </h5>
                                        <div className="card-body d-flex flex-column align-items-start">
                                            <strong className='text-primary'>Experience:</strong>
                                            <p className='text-primary'>{job.experience}</p>
                                            <strong className='text-primary'>Location:</strong>
                                            <p className='text-primary'>{job.location}</p>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <p>{job.description}</p>
                                        <button onClick={scrollToResumeForm} className="btn btn-primary">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Resume Form Section */}
            <div className="container mt-5" ref={resumeFormRef}>
                <h2 className="text-left mb-4">Submit Your Resume</h2>
                <form style={{ width: 500 }}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="profile" className="form-label">Profile</label>
                        <select className="form-select" id="profile">
                            <option value="">Select your profile</option>
                            <option value="software-engineer">Software Engineer</option>
                            <option value="product-manager">Product Manager</option>
                            <option value="designer">UX/UI Designer</option>
                            <option value="data-analyst">Data Analyst</option>
                            <option value="devops-engineer">DevOps Engineer</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="experience" className="form-label">Total Experience</label>
                        <input type="number" className="form-control" id="experience" placeholder="Enter years of experience" min="0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="resume" className="form-label">Choose File</label>
                        <input type="file" className="form-control" id="resume" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100"onClick={resumesubmit}>Submit Resume</button>
                </form>
            </div>
        </>
    );
};

export default JobCards;
