import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import rx from '../assets/rx.jpg';
import './Navbar.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('/');

    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/postings', text: 'POSTINGS' },
        { to: '/clubs', text: 'CLUBS' },
        { to: '/faqs', text: "FAQ's" }
    ];

    const handleSetActiveLink = (to) => {
        setActiveLink(to);
    };

    return (
        <div className="container">
            <div>
                <nav style={{ padding: '15px', display: 'flex', justifyContent: 'space-between' }}>
                    <div className="leftNav">
                        <div className="logo">
                            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src={rx} alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="rightNav">
                        <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
                            {navLinks.map((link, index) => (
                                <li key={index} className={link.to === activeLink ? 'active' : ''}>
                                    <Link
                                        style={{ textDecoration: 'none', color: 'black' }}
                                        to={link.to}
                                        onMouseEnter={() => handleSetActiveLink(link.to)}
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
