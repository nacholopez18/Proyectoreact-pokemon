import React, { useEffect, useState } from "react";
import "./Browse.css";
import Pokemon from "./Pokemon";
import Navbar from "./Navbar";

function Browse() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setPokeData(data);
        // console.log(data[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const [numericSort, setNumericSort] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  let results = [];
  if (loading) {
    results = Array(50).fill({
      number: "",
      name: "",
      img: "",
    });
  } else {
    results = pokeData.filter(
      (n) =>
        n.name.includes(searchFilter) ||
        n.number.toString().includes(searchFilter)
    );
    if (!numericSort) {
      results.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    }
    if (!results.length) {
      results.push({
        number: "",
        name: "Not found",
        img: "../pokenotfound.png",
      });
    }
  }

  return (
    <>
      <Navbar
        filterText={setSearchFilter}
        setSortBy={setNumericSort}
        sortBy={numericSort}
        searchState={numericSort}
      />
      <main>
        <div className="browseGrid">
          {results.map((poke) => {
            return (
              <>
                <div className="browseGridBox">
                  <Pokemon
                    key={poke.number}
                    name={poke.name}
                    img={poke.img}
                    number={poke.number}
                  />
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Browse;
