import React from "react";
import { Link } from "react-router-dom";
import "./Pokemon.css";

function Pokemon(props) {
  let number = props.number + ``;
  while (number.length < 3) {
    number = "0" + number;
  }
  // console.log(number);

  const capitalise = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <Link to={props.number > 0 ? `/pokemon/` + props.number : "#"}>
      <div className="pokemonBox">
        {props.img ? (
          <>
            <p className="pokemonBoxHashtag">#{number}</p>
            <img src={props.img} />
          </>
        ) : (
          <div className="emptyImage"> </div>
        )}
        <p className="pokemonBoxName">{props.name}</p>
      </div>
    </Link>
  );
}

export default Pokemon;
