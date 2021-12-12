import { useContext } from "react";
import CardPlace from "../../components/CardPlaces/CardPlace";
import PlaceContext from "../../context/PlaceContext";

const CardPlaces = () => {
  const { renderBasePlaces } = useContext(PlaceContext);
  return (
    <section className="places">
      <div className="d-flex justify-content-center">
        <div class="list-places d-flex justify-content-around">
          {renderBasePlaces.map((place, index) => (
            <CardPlace place={place} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardPlaces;
