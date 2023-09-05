import React, { useEffect, useState } from "react";

function Modal(props) {
  function handleCheck(e) {
    props.setSortBy(e.target.value == "number");
    console.log(e.target.value);
    props.onOff[1](!props.onOff[0]);
  }

  return (
    <>
      <form>
        <h4>Sort by:</h4>
        <div className="modalNavbar">
          <div>
            <input
              type="radio"
              name="sortBy"
              id="inputNumber"
              value="number"
              onChange={(e) => handleCheck(e)}
              checked={props.sortBy ? true : false}
            />
            <label htmlFor="inputNumber">Number</label>
          </div>
          <div>
            <input
              type="radio"
              name="sortBy"
              id="inputName"
              value="name"
              onChange={(e) => handleCheck(e)}
              checked={props.sortBy ? false : true}
            />
            <label htmlFor="inputName">Name</label>
          </div>
        </div>
      </form>
    </>
  );
}

export default Modal;
