import React from 'react'
import icon from "../public/main_icon1.jpg"
import image1 from "../public/main_image1.jpg"
import "../Compnients/main.css";



function Home() {
    return (

        <div className='page-one'>
            <div className='page-one-text'>
                <div className='text-container'>
                    <p className='main-heading'>Light, Fast & Powerful</p>
                    <br />
                    <p className='main-paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <p className='main-paragraph'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
                <div className='icon-container'>
                    <div className='icon-box'>
                        <img className='main-icon' src={icon} alt="icon" />
                        <p className='icon-title'>Title Goes Here</p>
                        <p className='icon-description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                    <div className='icon-box'>
                        <img className='main-icon' src={icon} alt="icon" />
                        <p className='icon-title'>Title Goes Here</p>
                        <p className='icon-description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                </div>
            </div>
            <div>
                <img className='image-one' src={image1} alt="image" />
            </div>

        </div>
    )
}

export default Home