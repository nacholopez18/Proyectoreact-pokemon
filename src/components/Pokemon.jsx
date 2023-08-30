import React from "react";

function Pokemon(props) {
  let number = props.number + ``;
  while (number.length < 3) {
    number = "0" + number;
  }
  console.log(number);

  return (
    <div>
      <p>#{number}</p>
      <img src={props.img} />
      <p>{props.name}</p>
    </div>
  );
}

export default Pokemon;
