import React from "react";
import "./footer.css";
import fecabook from "../public/Path.png";
import In from "../public/in.png";
import YouTube from "../public/youtube.png";
import Tweater from "../public/pa.png";
import Instagram from "../public/Instagram.png";

const Footer = () => {
    return (
        <div className="footer-section">
            <nav className="footer-container">
                <p className="footer-description">©2023 Yourcompany</p>
                <div className="footer-logo">Landing</div>
                <button className="footer-buy-now">Purchase now</button>
            </nav>
            <hr />
            <div className="footer-bottom-section">
                <ul className="footer-nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="footer-icon-container">
                    <img className="footer-icon-small" src={fecabook} alt="img" />
                    <img className="footer-icon" src={In} alt="img" />
                    <img className="footer-icon" src={Tweater} alt="img" />
                    <img className="footer-icon" src={YouTube} alt="img" />
                    <img className="footer-icon" src={Instagram} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
