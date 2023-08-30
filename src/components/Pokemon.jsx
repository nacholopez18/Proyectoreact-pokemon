import React from "react";
import { Link } from "react-router-dom";

function Pokemon(props) {
  let number = props.number + ``;
  while (number.length < 3) {
    number = "0" + number;
  }
  console.log(number);

  return (
    <Link to={`/pokemon/` + props.number}>
      <div>
        <p>#{number}</p>
        <img src={props.img} />
        <p>{props.name}</p>
      </div>
    </Link>
  );
}

export default Pokemon;
