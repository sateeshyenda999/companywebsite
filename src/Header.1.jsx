import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './Themecontext';
import Nsight from "./Nsight";

export const Header = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Home"><Nsight /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/careers">Careers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={toggleTheme}
                                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? '🌙' : '☀️'}
                            </button>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <button className="btn btn-outline-danger">Logout</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
