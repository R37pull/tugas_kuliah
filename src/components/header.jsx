import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './css/style.css';
import 'boxicons/css/boxicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header>
            <a href="#" className="logo">
                <img src="../image/logo.png" alt="Logo"/>
            </a>

            <ul className="navmenu">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Shop</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Page</a>
                </li>
                <li>
                    <a href="#">Docs</a>
                </li>
            </ul>

            <div className="nav-icon">
                <a href="#">
                    <i className="bx bx-search"></i>
                </a>

                <div className="login-menu">
                    {/* Logo or Icon */}
                    <div className="login-icon" onClick={toggleMenu}>
                        <i className="bx bx-user"></i>
                    </div>

                    {/* Dropdown Menu */}
                    {
                        isOpen && (
                            <div className="dropdown">
                                <Link to="/login">
                                    <button>Login</button>
                                </Link>
                                <Link to="/register">
                                    <button>Register</button>
                                </Link>
                            </div>
                        )
                    }
                </div>

                <a href="#">
                    <i className="bx bx-cart"></i>
                </a>
                <div className="bx bx-menu" id="menu-icon"></div>
            </div>
        </header>
    );
};

export default Header;
