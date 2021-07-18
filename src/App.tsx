import React, { FC, useEffect, useRef, useState } from "react";
import "./App.scss";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Expertise from "./Components/Expertise";
import Header from "./Components/Header";
import { AppProps } from "./interface";

const App: FC = () => {
  const [theme, setTheme] = useState<string>("white");
  const scrollingContainerRef = useRef<any>(null);

  //Global themes and accessiblities
  useEffect(() => {
    window.scrollTo(0,0)
  });

  const scrollToContact = () => {
    const getHeight = scrollingContainerRef.current.offsetTop;
    console.log(scrollingContainerRef, "innerHeight");
    window.scrollTo(0, getHeight);
  };

  return (
    <div className="App">
      <div className="headWrapper">
        <Header scrollToContact={scrollToContact} theme={theme} />
      </div>
      <div className="aboutWrapper">
        <About scrollToContact={scrollToContact} />
      </div>
      <div>
        <Expertise />
        <Contact refer={scrollingContainerRef} />
      </div>
    </div>
  );
};

export default App;
