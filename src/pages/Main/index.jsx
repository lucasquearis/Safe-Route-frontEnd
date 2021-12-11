import { useContext } from "react";
import CardPlace from "../../components/CardPlace";
import Hero from "./Hero";
import PlaceContext from "../../context/PlaceContext";
import Filters from "../../components/Filters";

const Main = () => {
  const { renderBasePlaces } = useContext(PlaceContext);
  return (
    <main>
      <Hero />
      <Filters />
      <section>
        {renderBasePlaces.map((place, index) => (
          <CardPlace place={place} key={index} />
        ))}
      </section>
    </main>
  );
};

export default Main;
