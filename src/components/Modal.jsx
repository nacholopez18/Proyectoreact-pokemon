import React from "react";

function Modal(props) {
  return (
    <>
      <fieldset
        onChange={(e) => {
          props.sortBy(e.target.value);
        }}
      >
        <legend>Sort by:</legend>
        <div className="">
          <input
            type="radio"
            name="sortBy"
            id="inputNumber"
            value={`true`}
            defaultChecked
          />
          <label htmlFor="inputNumber">Number</label>
        </div>
        <div className="">
          <input type="radio" name="sortBy" id="inputName" value={``} />
          <label htmlFor="inputName">Name</label>
        </div>
      </fieldset>
    </>
  );
}

export default Modal;
