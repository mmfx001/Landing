import React from 'react';
import "./main.css";
import Home from '../Page/Home';
import About from '../Page/About';
import Contact from '../Page/Contact';

function Main() {
    return (
        <div className='main-container'>
            <section id="home">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default Main;
