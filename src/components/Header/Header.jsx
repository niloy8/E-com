import React from 'react';
import './header.css';
import logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <nav className='menu'>
                <li><Link to="/">Order</Link></li>
                <li><Link to="/Order Review">Order Review</Link></li>
                <li><Link to="/Manage Inventory">Manage Inventory</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </nav>
        </div>
    );
};

export default Header;