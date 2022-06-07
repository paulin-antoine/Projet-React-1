import React from "react";

function SearchBar() {
  return (
    <form className="header-form" action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Recherchez un produit</span>
      </label>
      <input
        className="header-input"
        type="text"
        id="header-search"
        placeholder="Recherchez un produit"
        name="s"
      />
      <button className="header-button" type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}

export default SearchBar;
