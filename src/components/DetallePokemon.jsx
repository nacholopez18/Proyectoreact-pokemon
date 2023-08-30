import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetallePokemon() {
  const [myPokemon, setMyPokemon] = useState({});

  const pokeId = useParams();
  useEffect(() => {
    fetch("http://localhost:3000/pokemon?number=" + pokeId.id)
      .then((res) => res.json())
      .then((data) => {
        setMyPokemon(data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(myPokemon);
  return (
    <section>
      <img src="../pokeball.png" />
      {myPokemon.type && (
        <div className={myPokemon.type[0]}>
          <nav>
            <button>
              <img src="../arrow_back.png" />
            </button>
            {myPokemon.name}
            {myPokemon.number}
          </nav>
          <img src={myPokemon.img} />
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
        </div>
      )}
    </section>
  );
}

export default DetallePokemon;
