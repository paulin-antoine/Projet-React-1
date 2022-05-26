import React, { Component } from "react";
import Header from "./composants/Header.js";
import Footer from "./composants/Footer.js";
import NavMenu from "./composants/NavMenu.js";
import SocialNetwork from "./composants/SocialNetwork";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <NavMenu />
        <SocialNetwork />
        <Footer />
      </>
    );
  }
}

export default App;
