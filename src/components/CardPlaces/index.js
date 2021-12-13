import React from "react";
import { useContext } from "react";
import CardPlace from "../../components/CardPlaces/CardPlace";
import PlaceContext from "../../context/PlaceContext";

const CardPlaces = () => {
  const { renderBasePlaces } = useContext(PlaceContext);
  const places = renderBasePlaces || [];
  // Adiciona Loading..
  return (
    <section data-testid="section-cards" className="places">
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap justify-content-center">
          {places.map((place, index) => (
            <CardPlace place={place} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardPlaces;
