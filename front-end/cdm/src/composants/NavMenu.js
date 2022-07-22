import React from "react";
import { Link } from "react-router-dom";

import "./NavMenu.css";

function NavMenu() {
  return (
    <div className="Nav-menu">
      <ul>
        <li>
          <Link to="/products">Outils</Link>
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
