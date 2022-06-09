import React from "react";
import "./NavMenu.css";

function NavMenu() {
  return (
    <div className="Nav-menu">
      <ul>
        <li>
          <a href="/">Outils</a>
        </li>
        <li>|</li>
        <li>
          <a href="/">Machines</a>
        </li>
        <li>|</li>
        <li>
          <a href="/">Acier</a>
        </li>
        <li>|</li>
        <li>
          <a href="/">Soudure</a>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
