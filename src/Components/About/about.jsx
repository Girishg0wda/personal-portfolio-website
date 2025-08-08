import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt=""  />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Computer Science graduate specializing in AI & ML, with a strong interest in full stack development. Currently sharpening my skills through an internship and looking to apply my knowledge in real-world projects within a forward-thinking organization.</p>
                <p>I’m passionate about full stack development, combining solid frontend design with robust backend logic to build complete, user-focused applications.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML, CSS </p><hr style={{width:"80%"}}></hr></div>
                <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"70%"}}></hr></div>
                <div className="about-skill"><p>REACT JS </p><hr style={{width:"70%"}}></hr></div>
                <div className="about-skill"><p>NODE JS</p><hr style={{width:"60%"}}></hr></div>
                <div className="about-skill"><p>RESTful APIs</p><hr style={{width:"70%"}}></hr></div>
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>Education</h1>
            <p>Graduate or BE</p>
        </div>
        <hr/>
        <div className="about-achivement">
            <h1>Tech Stack</h1>
            <p>React • Node.js • MongoDB • RESTful APIs</p>
        </div>
        <hr/>
        <div className="about-achivement">
            <h1>Learning</h1>
            <p>Always Evolving • Knowledge Seeker</p>
        </div>
      </div>
    </div>
  );
};
export default About;
