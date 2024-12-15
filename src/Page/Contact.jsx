import React from 'react'
import backroundimg from "../public/bottom_img.png"
import "../Compnients/main.css";
function Contact() {
    return (
        <div className='page-four'>
            <img className='background-image' src={backroundimg} alt="img" />
            <p className='bottom-text-one'>A Price To Suit Everyone</p>
            <p className='bottom-text-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
            <p className='bottom-text-three'>$40</p>
            <p className='bottom-text-four'>UI Design Kit</p>
            <p className='bottom-text-five'>See, One price. Simple.</p>
            <button className='bottom-button'>Purchase Now</button>
        </div>
    )
}

export default Contact