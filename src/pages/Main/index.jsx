import { useContext } from "react";
import CardPlace from "../../components/CardPlace";
import Hero from "./Hero";
import PlaceContext from "../../context/PlaceContext";

const Main = () => {
  const { renderPlaceCardMock } = useContext(PlaceContext);
  return (
    <main>
      <Hero />
      <section>Filters</section>
      <section>
        {renderPlaceCardMock.map((place, index) => (
          <CardPlace place={place} key={index} />
        ))}
      </section>
    </main>
  );
};

export default Main;
