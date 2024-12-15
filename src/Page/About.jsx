import React from 'react'
import image2 from "../public/main_image2.png"
import image3 from "../public/main_image3.png"
import image4 from "../public/main_image4.png"
import "../Compnients/main.css";


function About() {
  return (
        <div>
        <div className='page-two'>
                <div className='image-one'>
                    <img src={image2} alt="img" />
                </div>
                <div className='text-container-two'>
                    <p className='main-heading-two'>Light, Fast & Powerful</p>
                    <br />
                    <p className='main-paragraph-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <p className='main-paragraph-two'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
            </div>
            <div className='page-three'>
                <div className='image-one'>
                    <img src={image3} alt="img" />
                </div>
                <div className='text-container-two'>
                    <p className='main-heading-two'>Light, Fast & Powerful</p>
                    <br />
                    <p className='main-paragraph-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <p className='main-paragraph-two'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
            </div>
            <div className='page-three'>
                <div className='image-one'>
                    <img src={image4} alt="img" />
                </div>
                <div className='text-container-two'>
                    <p className='main-heading-two'>Light, Fast & Powerful</p>
                    <br />
                    <p className='main-paragraph-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <p className='main-paragraph-two'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <button className="main-buy-now">Purchase now</button>
                </div>
            </div>
            </div>
  )
}

export default About