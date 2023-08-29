import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h1>
        <img src="./pokeball.png" />
        Pokédex
      </h1>
      <div className="searchBar">
        <img className="searchImg" src="./search.png" alt="" />
        <input type="text" placeholder="Search" />
        <button>
          <img src="./tag.png" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
