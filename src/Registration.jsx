import React, { useState } from 'react';
import { auth } from './firebase'; // Import the Firebase auth instance
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import the necessary Firebase method
import { db } from './firebase'; // Import Firestore
import { collection, addDoc } from "firebase/firestore"; // Import Firestore methods
import { useNavigate } from 'react-router-dom';
import { useTheme } from './Themecontext';
import backgroundImage from "./assets/Loginimage.png";
import Nsight from './Nsight';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    const { theme, toggleTheme } = useTheme();

    const validateForm = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Name is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (!phone) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                // Register user with Firebase Authentication
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Save additional registration details to Firestore
                await addDoc(collection(db, "users"), {
                    uid: user.uid, // Use the user ID from Firebase Auth
                    name,
                    email,
                    phone,
                });
                window.alert(`Hi ${name}, you registered successfully!`);
                
                // Clear form
                setName('');
                setEmail('');
                setPassword('');
                setPhone('');
                setErrors({});
                navigate('/');

                // Optionally, redirect or show success message
                console.log('User registered successfully');
            } catch (error) {
                console.error("Registration error: ", error.message);
                setErrors({ email: error.message }); // Set error message to display
            }
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 " >
            <div 
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1
                }}
            ></div>
            <button 
                onClick={toggleTheme} 
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
                {theme === 'light' ? '🌙' : '☀️'} {/* Icon for toggling */}
            </button>
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h2 className="text-center" style={{color:'white'}}>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3" >
                            <label htmlFor="name" className="form-label" style={{color:'white'}}>Name</label>
                            <input 
                                type="text" 
                                className={`form-control form-control-sm ${errors.name ? 'is-invalid' : ''}`} // Smaller input
                                id="name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="mb-3" >
                            <label htmlFor="email" className="form-label" style={{color:'white'}}>Email address</label>
                            <input 
                                type="email" 
                                className={`form-control form-control-sm ${errors.email ? 'is-invalid' : ''}`} // Smaller input
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" style={{color:'white'}}>Password</label>
                            <input 
                                type="password" 
                                className={`form-control form-control-sm ${errors.password ? 'is-invalid' : ''}`} // Smaller input
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label" style={{color:'white'}}>Phone Number</label>
                            <input 
                                type="tel" 
                                className={`form-control form-control-sm ${errors.phone ? 'is-invalid' : ''}`} // Smaller input
                                id="phone" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
