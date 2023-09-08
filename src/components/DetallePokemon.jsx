import React, { useEffect, useState } from "react";
import {
  Link,
  useParams,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./DetallePokemon.css";

function DetallePokemon() {
  const [myPokemon, setMyPokemon] = useState({});
  const location = useLocation();

  const navigate = useNavigate();
  const capitalise = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  const pokeId = useParams();
  useEffect(() => {
    fetch("https://fake-rest-api-mu.vercel.app/pokemon?number=" + pokeId.id)
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

  let fingerX = 0;

  return (
    <>
      {myPokemon.type && (
        <section
          onTouchStart={(e) => {
            fingerX = e.changedTouches[0].clientX;
          }}
          onTouchEnd={(e) => {
            let moveX = e.changedTouches[0].clientX - fingerX;
            if (parseInt(pokeId.id) > 1 && moveX > 100) {
              document
                .querySelector(".poke-img")
                .classList.remove("animationClass");
              navigate("../pokemon/" + (parseInt(pokeId.id) - 1), {
                replace: true,
              });
            } else if (parseInt(pokeId.id) < 151 && moveX < -100) {
              document
                .querySelector(".poke-img")
                .classList.remove("animationClass");
              navigate("../pokemon/" + (parseInt(pokeId.id) + 1), {
                replace: true,
              });
            }
          }}
          className={"poke-info " + myPokemon.type[0] + "-bg"}
        >
          <div className="bg-ball">
            <div>
              <img src="../pokeball-1.svg" />
            </div>
          </div>

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
            <img
              className="poke-img "
              src={myPokemon.img}
              onLoad={(e) => {
                e.target.classList.toggle("animationClass");
                // setTimeout(() => {
                //   e.target.classList.toggle("animationClass");
                // }, 250);
              }}
            />

            {parseInt(pokeId.id) > 1 && (
              <Link
                className="btn-prev"
                to={"../pokemon/" + (parseInt(pokeId.id) - 1)}
                onClick={() => {
                  document
                    .querySelector(".poke-img")
                    .classList.remove("animationClass");
                }}
              >
                {"<"}
              </Link>
            )}

            {parseInt(pokeId.id) < 151 && (
              <Link
                className="btn-next"
                to={"../pokemon/" + (parseInt(pokeId.id) + 1)}
                onClick={() => {
                  document
                    .querySelector(".poke-img")
                    .classList.remove("animationClass");
                }}
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
                  <li key="hp">HP</li>
                  <li key="atk">ATK</li>
                  <li key="def">DEF</li>
                  <li key="satk">SATK</li>
                  <li key="sdef">SDEF</li>
                  <li key="spd">SPD</li>
                </ul>
                <ul>
                  <li key="php">{myPokemon.hp}</li>
                  <li key="patk">{myPokemon.attack}</li>
                  <li key="pdef">{myPokemon.defense}</li>
                  <li key="psatk">{myPokemon[`special-attack`]}</li>
                  <li key="psdef">{myPokemon[`special-defense`]}</li>
                  <li key="pspd">{myPokemon.speed}</li>
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
