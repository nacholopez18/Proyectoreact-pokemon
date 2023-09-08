import React, { useState } from "react";
import "./Navbar.css";
import Modal from "./Modal";

function Navbar(props) {
  const [modalOn, setModalOn] = useState(false);
  // const [memoryCheck, setMemoryCheck] = useState(true);
  const imgUrl = props.searchState ? "./tag.svg" : "./text_format.png";
  return (
    <nav className="browseNav">
      <div className="titleWithImg">
        <img src="./pokeball.png" />
        <h1>Pokédex</h1>
      </div>
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
      {modalOn && (
        <Modal
          onOff={[modalOn, setModalOn]}
          setSortBy={props.setSortBy}
          sortBy={props.sortBy}
        />
      )}
    </nav>
  );
}

export default Navbar;
