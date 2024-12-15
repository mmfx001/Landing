import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./navbar.css";
import NavbarImg from "../public/designer_1.png"; 

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar-main">
                <ul className="navbar-links">
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li> 
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li> 
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li> 
                </ul>
                <div className="navbar-logo">Landing</div>
                <button className="navbar-buy-now">Buy Now</button>
            </nav>

            <div className="navbar-bottom">
                <div className="navbar-ui" >
                    <h1>Introduce Your Product Quickly & Effectively</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...</p>
                    <div className="navbar-button-group">
                        <button className="navbar-button-primary">Purchase UI Kit</button>
                        <button className="navbar-button-secondary">Learn More</button>
                    </div>
                </div>
                <div className="navbar-images" >
                    <img className="navbar-image" src={NavbarImg} alt="Navbar Image" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
