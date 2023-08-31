import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./DetallePokemon.css";

function DetallePokemon() {
  const [myPokemon, setMyPokemon] = useState({});
  const location = useLocation();

  const capitalise = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  const pokeId = useParams();
  useEffect(() => {
    fetch("http://localhost:3000/pokemon?number=" + pokeId.id)
      .then((res) => res.json())
      .then((data) => {
        setMyPokemon(data[0]);
      })
      .catch((error) => console.log(error));
  }, [pokeId]);

  console.log(myPokemon);

  let number = myPokemon.number + ``;
  while (number.length < 3) {
    number = "0" + number;
  }

  return (
    <>
      {myPokemon.type && (
        <section className={"poke-info " + myPokemon.type[0]}>
          <nav>
            <div className="info-nav">
              <Link to={`..`}>
                <img src="../arrow_back.png" />
              </Link>
              <h3>{capitalise(myPokemon.name)}</h3>
            </div>
            <p>{"#" + number}</p>
          </nav>
          <div className="poke-portrait">
            <img className="bg-ball" src="../pokeball.png" />
            <img className="poke-img" src={myPokemon.img} />

            {parseInt(pokeId.id) > 1 && (
              <Link
                className="btn-prev"
                to={"../pokemon/" + (parseInt(pokeId.id) - 1)}
              >
                {" "}
                {"<"}
              </Link>
            )}

            {parseInt(pokeId.id) < 151 && (
              <Link
                className="btn-next"
                to={"../pokemon/" + (parseInt(pokeId.id) + 1)}
              >
                {" "}
                {">"}
              </Link>
            )}
          </div>

          <div className="card">
            <div>{myPokemon.type}</div>
            <p>About</p>
            <div>
              {myPokemon.weight}
              {myPokemon.height}
              {myPokemon.abilities}
            </div>
            <p>{myPokemon.txt}</p>
            <div>
              <p>Base Stats</p>
              <div>
                {" "}
                <ul>
                  <li>HP</li>
                  <li>ATK</li>
                  <li>DEF</li>
                  <li>SATK</li>
                  <li>SDEF</li>
                  <li>SPD</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>{myPokemon.hp}</li>
                  <li>{myPokemon.attack}</li>
                  <li>{myPokemon.defense}</li>
                  <li>{myPokemon[`special-attack`]}</li>
                  <li>{myPokemon[`special-defense`]}</li>
                  <li>{myPokemon.speed}</li>
                </ul>
              </div>
              <div>
                <ul className="statusBar">
                  <li style={{ width: myPokemon.hp + `%` }}></li>
                  <li style={{ width: myPokemon.attack + `%` }}></li>
                  <li style={{ width: myPokemon.defense + `%` }}></li>
                  <li style={{ width: myPokemon[`special-attack`] + `%` }}></li>
                  <li
                    style={{ width: myPokemon[`special-defense`] + `%` }}
                  ></li>
                  <li style={{ width: myPokemon.speed + `%` }}></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default DetallePokemon;
