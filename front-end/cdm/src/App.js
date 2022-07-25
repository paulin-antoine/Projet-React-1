import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Tools from "./composants/jsx/Tools.js";
import Machinery from "./composants/jsx/Machinery.js";
import Header from "./composants/jsx/Header.js";
import Footer from "./composants/jsx/Footer.js";
import NavMenu from "./composants/jsx/NavMenu.js";
import SlideShow from "./composants/jsx/SlideShowImage.js";
import SocialNetwork from "./composants/jsx/SocialNetwork";
import Steel from "./composants/jsx/Steel.js";
import Welding from "./composants/jsx/Welding.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <NavMenu />
        <Routes>
          <Route path="/" element={<SlideShow />} />
          <Route path="/outils" element={<Tools />} />
          <Route path="/machines" element={<Machinery />} />
          <Route path="/acier" element={<Steel />} />
          <Route path="/soudure" element={<Welding />} />
        </Routes>
        <SocialNetwork />
        <Footer />
      </>
    );
  }
}

export default App;
