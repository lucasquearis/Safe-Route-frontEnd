import { useContext } from "react";
import CardPlace from "../../components/CardPlace";
import Hero from "./Hero";
import PlaceContext from "../../context/PlaceContext";
import Filters from "../../components/Filters";

const Main = () => {
  const { renderPlaceCardMock } = useContext(PlaceContext);
  return (
    <main>
      <Hero />
      <Filters />
      <section>
        {renderPlaceCardMock.map((place, index) => (
          <CardPlace place={place} key={index} />
        ))}
      </section>
    </main>
  );
};

export default Main;
