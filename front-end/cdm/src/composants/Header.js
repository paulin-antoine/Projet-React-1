import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div id="header-block">
      <img className="logo" src="./logo.png" alt="logo"></img>
      <div>barre de recherche</div>
      <nav>
        <a href="/">
          <i className="fa-solid fa-user"></i>Connexion
        </a>
      </nav>
    </div>
  );
}

export default Header;
