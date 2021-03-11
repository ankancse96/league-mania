import React from 'react';
import logo from '../../images/club.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <div className="text">
            <h2>CLUB MANIA</h2>
            </div>
        </div>
    );
};

export default Header;