import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dummy1 from "./assets/dummy1.png";
import dummy2 from "./assets/dummy2.png";
import dummy3 from "./assets/dummy3.png";
import dummy4 from "./assets/dummy4.png";
import dummy5 from "./assets/dummy5.png";
import dummy6 from "./assets/dummy6.png";
import dummy7 from "./assets/dummy7.png"
import dummy8 from "./assets/dummy8.png"


const Employeessay = () => {
    const [selectedId, setSelectedId] = useState(null);

    const employees = [
        {
            id: 1,
            name: "Alice Johnson",
            title: "Project Manager",
            image: dummy6,
            testimonial: "Working here has been an incredible journey. The culture of innovation and the emphasis on personal growth really make this a special place to work."
        },
        {
            id: 2,
            name: "Michael Lee",
            title: " Sr Software Engineer",
            image: dummy7,
            testimonial: "The collaborative environment at this company is amazing! I’ve never worked somewhere where every team member is so committed to excellence and creativity."
        },
        {
            id: 3,
            name: "Martinez",
            title: "UX Designer",
            image: dummy5,
            testimonial: "As a designer, I feel valued and supported here. The team truly understands the importance of design in delivering quality products."
        },
        {
            id: 4,
            name: "James Williams",
            title: "Data Analyst",
            image: dummy8,
            testimonial: "I love the focus on data-driven decisions here. It’s rewarding to see our insights drive meaningful change and success for the company."
        },
        {
            id: 5,
            name: "James",
            title: "Data Analyst",
            image: dummy4,
            testimonial: "I love the focus on data-driven decisions here. It’s rewarding to see our insights drive meaningful change and success for the company."
        },
        {
            id: 6,
            name: "koushik",
            title: "Data Analyst",
            image: dummy4,
            testimonial: "I love the focus on data-driven decisions here. It’s rewarding to see our insights drive meaningful change and success for the company."
        }
    ];

    return (
        <div className="container my-5">
          <motion.h2 className="text-center mb-4" 
                    style={{ fontWeight: '10rem' }}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 1}}>What Our Employees Say</motion.h2>
            <div className="row">
                {employees.map((employee) => (
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 1}}
                        layoutId={employee.id.toString()}
                        className="col-md-4 mb-4"
                        key={employee.id}
                        onClick={() => setSelectedId(employee.id)}
                    >
                        <div className="card h-100 border-0 shadow">
                            <img src={employee.image} alt={employee.name} className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <motion.h5 className="card-title text-primary">{employee.name}</motion.h5>
                                <motion.h6 className="card-subtitle mb-2 text-primary">{employee.title}</motion.h6>
                                <motion.p className="card-text mt-3">{employee.testimonial}</motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
                <AnimatePresence>
                    {selectedId && (
                        <motion.div             
                            layoutId={selectedId.toString()}
                            className="expanded-card-overlay"
                            onClick={() => setSelectedId(null)}
                        >
                            <div className="expanded-card-content">
                                {employees.filter(emp => emp.id === selectedId).map((employee) => (
                                    <div key={employee.id} className="text-center">
                                        <img src={employee.image} alt={employee.name} className="rounded-circle" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                        <motion.h5 className="text-primary">{employee.name}</motion.h5>
                                        <motion.h6 className="text-primary">{employee.title}</motion.h6>
                                        <motion.p style={{color:'black'}}>{employee.testimonial}</motion.p>
                                        <motion.button onClick={() => setSelectedId(null)} className="btn btn-primary mt-3">Close</motion.button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Employeessay;






