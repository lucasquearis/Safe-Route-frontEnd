import { useContext } from "react";
import Hero from "./Hero";
import PlaceContext from "../../context/PlaceContext";
import Filters from "../../components/Filters";
import CardPlaces from "../../components/CardPlaces";

const Main = () => {
  const { renderBasePlaces } = useContext(PlaceContext);
  return (
    <main>
      <Hero />
      <Filters />
      <CardPlaces />
    </main>
  );
};

export default Main;
