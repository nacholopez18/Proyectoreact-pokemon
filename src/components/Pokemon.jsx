import React from "react";

function Pokemon(props) {
  return (
    <div>
      <p> {props.number}</p>
      <img src={props.img} />
      <p>{props.name}</p>
    </div>
  );
}

export default Pokemon;
