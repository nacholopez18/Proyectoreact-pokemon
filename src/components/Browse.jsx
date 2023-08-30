import React, { useEffect, useState } from "react";
import "./Browse.css";
import Pokemon from "./Pokemon";
import Navbar from "./Navbar";

function Browse() {
  const [pokeData, setPokeData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setPokeData(data);
        console.log(data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  const [numericSort, setNumericSort] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  const results = pokeData.filter(
    (n) =>
      n.name.includes(searchFilter) ||
      n.number.toString().includes(searchFilter)
  );
  if (!numericSort) {
    results.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  }

  return (
    <>
      <Navbar
        filterText={setSearchFilter}
        sortBy={setNumericSort}
        searchState={numericSort}
      />
      <main>
        {results.map((poke) => {
          return (
            <Pokemon
              key={poke.number}
              name={poke.name}
              img={poke.img}
              number={poke.number}
            />
          );
        })}
      </main>
    </>
  );
}

export default Browse;
