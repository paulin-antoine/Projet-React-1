import React from "react";
import "./header.css";
import SearchBar from "./SearchBar";

function Header(props) {
  return (
    <div id="header-block">
      <img className="logo" src="./logo.png" alt="logo"></img>
      <SearchBar />
      <nav>
        <a href="/">
          <i className="fa-solid fa-user"></i>
          <span>Connexion</span>
        </a>
        <a href="/">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Panier</span>
        </a>
      </nav>
    </div>
  );
}

export default Header;
