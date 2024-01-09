import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { LanguageContext } from "./LanguageContext";

const translations = {
    en: {
        welcome: "Welcome to my Portfolio",
        hi: "Hi! I'm Skerdi,",
        roles: [
            "Full-Stack Developer",
            "Mobile Developer",
            "Cyber Security Enthusiast",
        ],
        about: "I'm a 19 years old guy from Albania, that lives in Italy. I've been passionate about computers since I was a kid, and I've always wanted to learn how to code. I'm currently studying Computer Science at Itis Castelli in Brescia, Italy. I've also completed a 4-month Cyber Security course at the University of Brescia. I love coding and Cyber Security, and I'm always looking to learn new things.",
        connect: "Let’s Connect",
    },
    it: {
        welcome: "Benvenuto nel mio Portfolio",
        hi: "Ciao! Sono Skerdi,",
        roles: [
            "Sviluppatore Full-Stack",
            "Sviluppatore Mobile",
            "Appassionato di Cyber Security",
        ],
        about: "Sono un ragazzo di 19 anni dall'Albania, che vive in Italia. Sono appassionato di computer da quando ero bambino e ho sempre voluto imparare a programmare. Attualmente sto studiando Informatica all'Itis Castelli di Brescia, Italia. Ho anche completato un corso di Cyber Security di 4 mesi presso l'Università degli Studi di Brescia. Amo la programmazione e la Cyber Security, e sono sempre alla ricerca di nuove cose da imparare.",
        connect: "Connettiamoci",
    },
    sq: {
        welcome: "Mirë se vini në Portfolin tim",
        hi: "Përshëndetje! Unë jam Skerdi,",
        roles: [
            "Full-Stack Developer",
            "Mobile Developer",
            "Cyber Security Enthusiast",
        ],
        about: "Jam një djalë 19-vjeçar nga Shqipëria, që jeton në Itali. Kam qenë i apasionuar pas kompjuterëve që kur isha fëmijë dhe gjithmonë kam dashur të mësoja të programoj. Aktualisht po studioj Informatikë në Itis Castelli në Brescia, Itali. Gjithashtu kam përfunduar një kurs 4-mujor në Siguri Kibernetike në Universitetin e Brescias. Kam shumë pasion për programimin dhe Sigurinë Kibernetike, dhe gjithmonë jam në kërkim të mësoj gjëra të reja për t'u mësuar.",
        connect: "Le të Lidhemi",
    },
};

export const Banner = () => {
    const { language } = useContext(LanguageContext);
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [
        "Full-Stack Web Developer",
        "Mobile Developer",
        "Cyber Security Enthusiast",
    ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span className="tagline">
                                        {translations[language].welcome}
                                    </span>
                                    <h1>
                                        {`${translations[language].hi} `}
                                        <span
                                            className="txt-rotate"
                                            dataPeriod="1000"
                                            data-rotate={JSON.stringify(
                                                translations[language].roles
                                            )}
                                        >
                                            <span className="wrap">{text}</span>
                                        </span>
                                    </h1>
                                    <p>{translations[language].about}</p>
                                    <button
                                        onClick={() => console.log("connect")}
                                    >
                                        {translations[language].connect}{" "}
                                        <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                    <img src={headerImg} alt="Header Img" />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
