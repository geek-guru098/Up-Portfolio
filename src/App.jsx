import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Ex from "./components/Ex";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Ex />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
