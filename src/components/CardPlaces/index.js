import { useContext } from "react";
import CardPlace from "../../components/CardPlaces/CardPlace";
import PlaceContext from "../../context/PlaceContext";

const CardPlaces = () => {
  const { renderBasePlaces } = useContext(PlaceContext);
  return (
    <section className="card-place-list">
      {renderBasePlaces.map((place, index) => (
        <CardPlace place={place} key={index} />
      ))}
    </section>
  );
};

export default CardPlaces;
