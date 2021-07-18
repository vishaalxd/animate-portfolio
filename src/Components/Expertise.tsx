import React, { FC, useState } from "react";
import pulsar from "../img/orange-dotted.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faAws,
  faGitAlt,
  faJs,
  faNodeJs,
  faReact,
  faSass,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import "./component.scss";
import {
  faDatabase,
  faCode,
  faRedo,
  faDesktop,
  faGem,
  faServer,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";

const IconMapper: { [key: string]: any } = {
  angular: faAngular,
  aws: faAws,
  git: faGitAlt,
  ts: faCode,
  express: faJs,
  node: faNodeJs,
  react: faReact,
  sass: faSass,
  wp: faWordpress,
  sql: faDatabase,
  jwt: faServer,
  ws: faPlug,
};

const technologies = [
  {
    name: "ReactJS",
    url: "react",
    experience:
      "Tools: React, redux, saga, webpack, Semantic UI, Styled Components, Ant Design. ",
    years: "3 years",
  },
  {
    name: "Amazon Web Services",
    url: "aws",
    experience:
      "Services: S3, Alexa Skills, Lambda, EC2, API Gateway, Lex, Textract, IAM, Route53, SNS, SES",
    years: "2 years",
  },
  {
    name: "TypeScript",
    url: "ts",
    size: true,
    experience: "TypeScript with React, Angular and NodeJS",
    years: "1 year",
  },
  {
    name: "git",
    url: "git",
    experience: "Used git for version control, proficient with command line",
    years: "3 years",
  },
  {
    name: "NodeJS",
    url: "node",
    experience:
      "Node as an env for API development and client side development",
    years: "4 years",
  },
  {
    name: "ExpressJS",
    url: "express",
    experience:
      "Express for setting up backend API methods, along with Postgres and MongoDB",
    years: "2 years",
  },
  {
    name: "PostgreSQL",
    url: "sql",
    size: true,
    experience: "Most used relational DB for development,",
    years: "1 year",
  },
  {
    name: "Angular",
    url: "angular",
    experience:
      "Quite less experienced in angular but have worked on a few projects as per requirement.",
    years: "1 year",
  },
  {
    name: "Sass/CSS",
    url: "sass",
    experience:
      "Styling and animation is my bread 'n butter. Well versed with CSS and Sass",
    years: "5 years",
  },
  {
    name: "Wordpress",
    url: "wp",
    experience:
      "Experienced in building quick templates using plugins like Elementor along with AWS.",
    years: "2 years",
  },
  {
    name: "JWT",
    url: "jwt",
    size: true,
    experience:
      "Setting up authentication with JWT tokens for client side as well as server side use cases",
    years: "2 years",
  },
  {
    name: "Web Socket",
    url: "ws",
    size: true,
    experience: "Building realtime communication with sockets",
    years: "1 year",
  },
];

const colors: string[] = [
  "419D78",
  "345995",
  "52489C",
  "F45B69",
  "01baef",
  "d741a7",
  "d90368",
  "FB8B24",
  "893168",
  "F7B538",
];

interface TechnologyProps {
  name: string;
  url: string | null;
  experience: string;
}

const Expertise: FC = () => {
  const [stateData, setStateData] = useState<TechnologyProps[]>(technologies);
  const [generator, setGenerator] = useState<number>(0);
  const [modalIndex, setModalData] = useState<number | boolean>(false);

  const handleGenerate = () => {
    setGenerator(generator + 1);
  };

  const handleModal = (value: number, condition: string) => {
    condition === "in" ? setModalData(value) : setModalData(false);
  };

  const renderTile = (stateData: any) => {
    if (stateData instanceof Array) {
      return (
        <div className="boxWrapper">
          {stateData.map((each, index) => (
            <div
              key={index + each.name}
              className="tile card1"
              onMouseOver={(e) => handleModal(index, "in")}
              onMouseOut={(e) => handleModal(index, "out")}
            >
              {modalIndex === index ? (
                <div className="boxExp">{each.experience}</div>
              ) : (
                <>
                  <div className="flex iconsExp">
                    <FontAwesomeIcon
                      icon={IconMapper[each.url]}
                      size={each?.size ? "3x" : "4x"}
                      color={`#${
                        colors[Math.floor(Math.random() * colors.length)]
                      }`}
                    />
                    <br />
                    <div className="flex-column padLeft-20">
                      <div className="boxName">{each.name}</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <div className="dottedWrapper">
        <img className="orangeDotted" src={pulsar} />
      </div>
      <div className="expertise">
        <div className="about-me heading align-space mar-bottom">
          {" "}
          <>Web Technologies I work with,</>
          <div onClick={handleGenerate} className="rotate">
            <FontAwesomeIcon icon={faRedo} />{" "}
          </div>
        </div>
        {renderTile(stateData)}
      </div>
    </>
  );
};

export default Expertise;
