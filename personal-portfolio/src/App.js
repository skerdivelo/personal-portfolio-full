import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LanguageContext } from "./components/LanguageContext";

function App() {
    const [language, setLanguage] = useState("en");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            <div className="App">
                <NavBar />
                <Banner />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </LanguageContext.Provider>
    );
}

export default App;
