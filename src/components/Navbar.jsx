import React, { useState } from "react";
import "./Navbar.css";
import Modal from "./Modal";

function Navbar(props) {
  const [modalOn, setModalOn] = useState(false);
  const imgUrl = props.searchState ? "./tag.png" : "./text_format.png";
  return (
    <nav>
      <h1>
        <img src="./pokeball.png" />
        Pokédex
      </h1>
      <div className="searchBar">
        <img className="searchImg" src="./search.png" alt="" />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            props.filterText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setModalOn(!modalOn);
          }}
        >
          <img src={imgUrl} />
        </button>
      </div>
      {modalOn && <Modal sortBy={props.sortBy} />}
    </nav>
  );
}

export default Navbar;
