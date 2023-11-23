import React, { useContext } from 'react';
import './header.css';
import logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Sign out successfull");

            })
            .catch(error => {
                console.log(error);
            })
    }
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
                <li><Link to="/signup">Sign Up</Link></li>
                {user && <span>welcome{user.email} <button onClick={handleLogout}>Sign Out</button></span>}
            </nav>
        </div>
    );
};

export default Header;