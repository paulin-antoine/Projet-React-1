import React from "react";
import { Link } from "react-router-dom";

import "../style/NavMenu.css";

function NavMenu() {
  return (
    <div className="Nav-menu">
      <ul>
        <li>
          <Link to="/outils">Outils</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/machines">Machines</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/acier">Acier</Link>
        </li>
        <li>|</li>
        <li>
          <a href="/soudure">Soudure</a>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
