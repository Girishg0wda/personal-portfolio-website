import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {

    return(
        <div id='home' className='hero'>
            <img src={profile_img} alt=''/>
            <h1> <span>I'm Girish,</span> fullstack developer based in Bangalore</h1>
            <p>I'm a full-stack web developer from Bangalore, India, driven by a passion for developing scalable and engaging digital products.</p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">
                    <a href="/Girish_Resume.pdf"
                       download
                       target="_blank"
                       rel="noopener noreferrer">My Resume</a>
                </div>
            </div>
        </div>
    )
} 
export default Hero;