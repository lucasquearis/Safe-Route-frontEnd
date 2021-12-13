import React from "react";
import { useContext, useState, useEffect } from "react";
import CardPlace from "../../components/CardPlaces/CardPlace";
import PlaceContext from "../../context/PlaceContext";

const CardPlaces = () => {
  const { renderBasePlaces } = useContext(PlaceContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(renderBasePlaces) setIsLoading(false);
    setIsLoading
  }, [renderBasePlaces])

  const loading = () => {
    const places = renderBasePlaces || [];
    const loadingBase = <p>Loading...</p>;
  }

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
