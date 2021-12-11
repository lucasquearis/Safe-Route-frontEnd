import { useContext } from "react";
import CardPlace from "../../components/CardPlace";
import Hero from "./Hero";
import PlaceContext from "../../context/PlaceContext";

const Main = () => {
  const { placeCardMock } = useContext(PlaceContext);
  return (
    <main>
      <Hero />
      <section>Filters</section>
      <section>
        {placeCardMock.map((place) => (
          <CardPlace place={place} />
        ))}
      </section>
    </main>
  );
};

export default Main;
