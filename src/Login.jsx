import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useTheme } from './Themecontext';
import './Nsight.css';
import backgroundImage from "./assets/Loginimage.png";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Fetch user details from Firestore
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const querySnapshot = await getDocs(q);
            const userData = querySnapshot.docs[0]?.data();

            if (userData && userData.name) {
                window.alert(`Hi, ${userData.name}! Welcome back!`);
            } else {
                window.alert("Hi! Welcome back!");
            }

            navigate('/Home'); // Redirect to the home page after login
        } catch (error) {
            console.error('Error logging in:', error.code, error.message);
            if (error.code === 'auth/user-not-found') {
                setError('No user found with this email. Please register first.');
            } else if (error.code === 'auth/wrong-password') {
                setError('Invalid password. Please try again.');
            } else if (error.code === 'auth/invalid-email') {
                setError('Invalid email format. Please enter a valid email.');
            } else {
                setError('Login failed. Please check your credentials and try again.');
            }
        }
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <>
        
        <div className={`d-flex justify-content-center align-items-center vh-100 ${theme}`}>
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
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h2 className="text-center" style={{color: 'white'}}>Login</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{color: 'white'}}>Email address</label>
                            <input 
                                type="email" 
                                className="form-control form-control-sm" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" style={{color: 'white'}}>Password</label>
                            <input 
                                type="password" 
                                className="form-control form-control-sm" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary w-50">
                                Login
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-secondary w-50 ms-2" 
                                onClick={handleRegisterClick}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
    
    
};


export default Login;
