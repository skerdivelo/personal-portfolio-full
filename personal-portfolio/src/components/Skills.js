import React, { useContext } from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { LanguageContext } from "./LanguageContext";

const translations = {
    en: {
        skills: "Skills",
        experience:
            "I have 3 years of experience as a software developer. During this time, I have gained skills in various programming languages, including JavaScript, C++, Java, PHP, React, React-Native, TypeScript. I have worked on projects involving the development of web and mobile applications, and I have a solid understanding of software and technologies. I am able to work both independently and as part of a team, and I always have a strong motivation to learn new technologies and improve my skills.",
        frontend: "Front-End Development",
        cybersecurity: "Cyber-Security",
        backend: "Back-End Development",
        mobile: "Mobile Development",
    },
    it: {
        skills: "Competenze",
        experience:
            "Ho 3 anni di esperienza come sviluppatore software. Durante questo periodo, ho acquisito competenze in vari linguaggi di programmazione, tra cui JavaScript, C++, Java, PHP, React, React-Native, TypeScript. Ho lavorato su progetti che coinvolgono lo sviluppo di applicazioni web e mobile, e ho una solida comprensione del software e delle tecnologie. Sono in grado di lavorare sia in modo indipendente che come parte di un team, e ho sempre una forte motivazione per imparare nuove tecnologie e migliorare le mie competenze.",
        frontend: "Sviluppo Front-End",
        cybersecurity: "Cyber-Security",
        backend: "Sviluppo Back-End",
        mobile: "Sviluppo Mobile",
    },
    sq: {
        skills: "Aftësitë",
        experience:
            "Kam 3 vjet përvojë si zhvillues software. Gjatë kësaj kohe, kam fituar aftësi në gjuhë të ndryshme programimi, përfshirë JavaScript, C++, Java, PHP, React, React-Native, TypeScript. Kam punuar në projekte që përfshijnë zhvillimin e aplikacioneve web dhe mobile, dhe kam një kuptim të fortë të softuerit dhe teknologjive. Jam në gjendje të punoj si pavarësisht dhe si pjesë e një ekipe, dhe gjithmonë kam një motivim të fortë për të mësuar teknologji të reja dhe për të përmirësuar aftësitë e mia.",
        frontend: "Zhvillim Front-End",
        cybersecurity: "Siguria Kibernetike",
        backend: "Zhvillim Back-End",
        mobile: "Zhvillim Mobile",
    },
};

export const Skills = () => {
  const { language } = useContext(LanguageContext);
  const { skills, experience, frontend, cybersecurity, backend, mobile } = translations[language];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{skills}</h2>
              <p dangerouslySetInnerHTML={{ __html: experience }}></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>{frontend}</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>{cybersecurity}</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>{backend}</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>{mobile}</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Image"
      />
    </section>
  );
};