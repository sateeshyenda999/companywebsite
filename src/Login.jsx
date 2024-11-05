import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useTheme } from './Themecontext'
import Nsight from './Nsight';
import './Nsight.css'
import backgroundImage from "./assets/Loginimage.png"
import { ToastContainer, toast } from 'react-toastify';
import { collectionGroup } from 'firebase/firestore';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state before login attempt
    
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            
            console.log('User logged in:', userCredential.user.email);
            toast.success("Login successful!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                style: {
                    backgroundColor: '#4CAF50', // Green background
                    color: '#FFFFFF', // White text
                    border: '1px solid #388E3C', // Dark green border
                    borderRadius: '5px', // Rounded corners
                },
            });
            console.log("toastsuccess");
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
                    zIndex: -1 // Ensure the background is behind other elements
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
                    
                    <h2 className="text-center " style={{color: 'white'}}>Login</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{color: 'white'}}>Email address</label>
                            <input 
                                type="email" 
                                className="form-control form-control-sm" // Smaller input
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
                                className="form-control form-control-sm" // Smaller input
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
    );
};

export default Login;