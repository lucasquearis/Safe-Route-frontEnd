import Hero from "./Hero";
import Filters from "../../components/Filters";
import CardPlaces from "../../components/CardPlaces";
import React from "react";

const Main = () => {
  return (
    <main>
      <Hero />
      <Filters />
      <CardPlaces />
    </main>
  );
};

export default Main;
