import React, { useState } from "react";
import "./Browse.css";
import Pokemon from "./Pokemon";
import Navbar from "./Navbar";

function Browse() {
  fetch("http://localhost:3000/pokemon")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));

  return (
    <>
      <Navbar />
      <main>
        <Pokemon name="Juan" img="tag.png" number="25" />
      </main>
    </>
  );
}

export default Browse;
