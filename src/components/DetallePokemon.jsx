import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, Navigate } from "react-router-dom";
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

  if (!myPokemon) {
    return (
      <>
        <Navigate to="/404" replace={true} />
      </>
    );
  }
  let number = myPokemon.number + ``;
  while (number.length < 3) {
    number = "0" + number;
  }

  return (
    <>
      {myPokemon.type && (
        <section className={"poke-info " + myPokemon.type[0] + "-bg"}>
          <nav>
            <div className="info-nav">
              <Link to={`..`}>
                <img src="../arrow_back.png" />
              </Link>
              <h3>{capitalise(myPokemon.name)}</h3>
            </div>

            <p>{"#" + number}</p>
          </nav>
          <img className="bg-ball" src="../pokeball.png" />
          <div className="poke-portrait">
            <img className="poke-img" src={myPokemon.img} />

            {parseInt(pokeId.id) > 1 && (
              <Link
                className="btn-prev"
                to={"../pokemon/" + (parseInt(pokeId.id) - 1)}
              >
                {"<"}
              </Link>
            )}

            {parseInt(pokeId.id) < 151 && (
              <Link
                className="btn-next"
                to={"../pokemon/" + (parseInt(pokeId.id) + 1)}
              >
                {">"}
              </Link>
            )}
          </div>

          <div className="card">
            <div className="white-txt type-logos">
              {myPokemon.type.map((pktype) => {
                return <p className={pktype + "-bg"}>{capitalise(pktype)}</p>;
              })}
            </div>
            <h3 className={myPokemon.type[0] + "-txt"}>About</h3>
            <ul className="extra-info">
              <li className="spacer">
                <div>
                  <p>
                    <img src="/weight.png" />
                    {myPokemon.weight / 10 + " Kg"}
                  </p>
                </div>
                <span>Weight</span>
              </li>
              <li className="spacer">
                <div>
                  <p>
                    <img src="/straighten.png" />
                    {myPokemon.height / 10 + " m"}
                  </p>
                </div>
                <span>Height</span>
              </li>
              <li>
                {myPokemon.ability.map((pkAbility) => {
                  return <p>{capitalise(pkAbility)}</p>;
                })}
                <span>Abilities</span>
              </li>
            </ul>
            <p>{myPokemon.txt}</p>
            <div>
              <h3 className={myPokemon.type[0] + "-txt"}>Base Stats</h3>
              <div className="poke-stats">
                <ul className={myPokemon.type[0] + "-txt spacer"}>
                  <li>HP</li>
                  <li>ATK</li>
                  <li>DEF</li>
                  <li>SATK</li>
                  <li>SDEF</li>
                  <li>SPD</li>
                </ul>
                <ul>
                  <li>{myPokemon.hp}</li>
                  <li>{myPokemon.attack}</li>
                  <li>{myPokemon.defense}</li>
                  <li>{myPokemon[`special-attack`]}</li>
                  <li>{myPokemon[`special-defense`]}</li>
                  <li>{myPokemon.speed}</li>
                </ul>
                <ul className="status-bars">
                  <li>
                    <div
                      className={"bg-status-bar " + myPokemon.type[0] + "-bg"}
                    ></div>
                    <div
                      style={{
                        width: Math.min(myPokemon[`hp`] * 0.7, 100) + `%`,
                      }}
                      className={myPokemon.type[0] + "-bg"}
                    ></div>
                  </li>
                  <li>
                    <div
                      className={"bg-status-bar " + myPokemon.type[0] + "-bg"}
                    ></div>
                    <div
                      style={{
                        width: Math.min(myPokemon[`attack`] * 0.7, 100) + `%`,
                      }}
                      className={myPokemon.type[0] + "-bg"}
                    ></div>
                  </li>
                  <li>
                    <div
                      className={"bg-status-bar " + myPokemon.type[0] + "-bg"}
                    ></div>
                    <div
                      style={{
                        width: Math.min(myPokemon[`defense`] * 0.7, 100) + `%`,
                      }}
                      className={myPokemon.type[0] + "-bg"}
                    ></div>
                  </li>
                  <li>
                    <div
                      className={"bg-status-bar " + myPokemon.type[0] + "-bg"}
                    ></div>
                    <div
                      style={{
                        width:
                          Math.min(myPokemon[`special-attack`] * 0.7, 100) +
                          `%`,
                      }}
                      className={myPokemon.type[0] + "-bg"}
                    ></div>
                  </li>
                  <li>
                    <div
                      className={"bg-status-bar " + myPokemon.type[0] + "-bg"}
                    ></div>
                    <div
                      style={{
                        width:
                          Math.min(myPokemon[`special-defense`] * 0.7, 100) +
                          `%`,
                      }}
                      className={myPokemon.type[0] + "-bg"}
                    ></div>
                  </li>
                  <li>
                    <div
                      className={"bg-status-bar " + myPokemon.type[0] + "-bg"}
                    ></div>
                    <div
                      style={{
                        width: Math.min(myPokemon[`speed`] * 0.7, 100) + `%`,
                      }}
                      className={myPokemon.type[0] + "-bg"}
                    ></div>
                  </li>
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
