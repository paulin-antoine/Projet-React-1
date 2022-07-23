import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Tools from "./composants/jsx/Tools.js";
import Header from "./composants/jsx/Header.js";
import Footer from "./composants/jsx/Footer.js";
import NavMenu from "./composants/jsx/NavMenu.js";
import SlideShow from "./composants/jsx/SlideShowImage.js";
import SocialNetwork from "./composants/jsx/SocialNetwork";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <NavMenu />
        <Routes>
          <Route path="/products" element={<Tools />} />
          <Route path="/" element={<SlideShow />} />
        </Routes>
        <SocialNetwork />
        <Footer />
      </>
    );
  }
}

export default App;
