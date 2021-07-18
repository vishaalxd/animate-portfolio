import React, { FC, ReactElement } from "react";
import bg from "../img/bg.svg";
import layer1 from "../img/layer-1.svg";
import layer2 from "../img/layer-2.svg";
import layer3 from "../img/layer-3.svg";
import layer4 from "../img/layer-4.svg";
import layer5 from "../img/layer-5.svg";
import layer6 from "../img/layer-6.svg";
import layer7 from "../img/layer-7.svg";
import cloudLC from "../img/cloud-left-center.svg";
import cloudL from "../img/cloud-left.svg";
import cloudRC from "../img/cloud-right-center.svg";
import cloudR from "../img/cloud-right.svg";
import logo from "../img/logo.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowAltCircleLeft, faExpand, faFolder, faFolderOpen, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faConnectdevelop, faContao, faRProject, faWpexplorer } from "@fortawesome/free-brands-svg-icons";

interface HeaderProps {
  theme: string;
  scrollToContact: any;
}

const Header: FC<HeaderProps> = ({ scrollToContact }: HeaderProps) => {
  return (
    <>
      <div className="header">
        <div className="vector-clipper">
          <div className="nav">
            <ul>
             
            </ul>
          </div>
          <ul className="nav align-right links">
          <li className="nav-items">
                <img className="logo" src={logo} />
              </li>
            <li className="nav-items">
              <FontAwesomeIcon icon={faWpexplorer} size="lg" color="white"/>
               </li>
            <li className="nav-items" onClick={scrollToContact}>
            <FontAwesomeIcon icon={faArrowAltCircleDown} size="lg" color="white"/>
            </li>
          </ul>
          <div className="title">
            <div className="title-outline">
              <span className="title-exp2">Hi, I'm Vishal Philip.</span>
            </div>
            <div className="title-exp1">JS Developer & Designer</div>
            <br />
          </div>
          <div className="headClipper">
            <img className="header-vector" src={bg} alt="bg" />
            <img className="header-vector cloud" src={cloudR} alt="cloud" />
            <img className="header-vector cloud" src={cloudRC} alt="cloud" />
            <img className="header-vector cloud" src={cloudL} alt="cloud" />
            <img className="header-vector cloud" src={cloudLC} alt="cloud" />
            <img className="header-vector layer1" src={layer1} alt="layer1" />
            <img className="header-vector layer2" src={layer2} alt="layer2" />
            <img className="header-vector layer3" src={layer3} alt="layer3" />
            <img className="header-vector layer4" src={layer4} alt="layer4" />
            <img className="header-vector layer5" src={layer5} alt="layer5" />
            <img className="header-vector layer6" src={layer6} alt="layer6" />
            <div className="" />
            <img className="header-vector layer7" src={layer7} alt="layer7" />
            <div className="bird-container">
              <div className="bird" />
            </div>
          </div>
        </div>
        <div className="blank"></div>
      </div>
    </>
  );
};

export default Header;
