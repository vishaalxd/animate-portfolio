import React, { FC, useEffect } from "react";
import dotSmall from "../img/dot-small.svg";
import cross from "../img/cross-orange.svg";
import triangleOrange from "../img/triangle-orange.svg";
import triangleYellow from "../img/triangle-yellow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./component.scss";

interface AboutProps {
  scrollToContact: any;
}

const About: FC<AboutProps> = ({ scrollToContact }:AboutProps) => {
  useEffect(() => {
   // window.addEventListener('scroll',()=>{
    //     console.log(window.innerHeight, "innerHeight")
    //     console.log(window.scrollY,"scrollY")
    //     console.log(window.pageYOffset,"pageOffsetY")
    // })
  });
  return (
    <>
      <div className="pos-anim">
        <img src={triangleOrange} className="tri" />
        <img src={triangleYellow} className="tri tri-second" />
        <img src={dotSmall} className="dot" />
        <img src={cross} className="cross" />
      </div>
      <section className="about">
        <div className="about-me heading">Get to know me?</div>
        <p className="">
          I'm a fullstack developer with 5 years of experience who primarily works with{" "}
          <span className="orange flexer">JavaScript</span> &{" "}
          <span className="blue flexer">AWS</span> technologies. I have serious
          passion for UI effects, animations and creating intuitive, dynamic
          user experiences. Experienced in building complete web applications
          using MongoDB, ExpressJS, React, Node.js.
          <br />
          <div className="flex  align-space">
            <div className="teal lms" onClick={scrollToContact}>
              Let's make something special.
            </div>
            <a className="pbutton" href="/animate-portfolio/static/Vishal_philip.pdf" download>
              Resumé <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </p>
        <div className="flex align-left">
          <div className="iconsWrapper flex">
            <div onClick={()=> {window.open("https://github.com/vishaalxd", "_blank")}}>
              <FontAwesomeIcon icon={faGithubAlt} size="3x" />
            </div>
            <div onClick={()=> {window.open("https://www.linkedin.com/in/vishaal13/", "_blank")}}>
              <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
            </div>
            <div onClick={()=> {window.open("https://api.whatsapp.com/send?phone=919972939181&text&app_absent=0", "_blank")}}>
              <FontAwesomeIcon icon={faWhatsapp} size="3x" />
            </div>
            <div onClick={()=> {window.open("mailto:vishaalxd@outlook.com", "_blank")}}>
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
