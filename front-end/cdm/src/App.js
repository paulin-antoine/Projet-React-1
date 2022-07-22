import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./composants/Products.js";
import Header from "./composants/Header.js";
import Footer from "./composants/Footer.js";
import NavMenu from "./composants/NavMenu.js";
import SlideShow from "./composants/SlideShowImage.js";
import SocialNetwork from "./composants/SocialNetwork";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <NavMenu />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<SlideShow />} />
        </Routes>
        <SocialNetwork />
        <Footer />
      </>
    );
  }
}

export default App;
