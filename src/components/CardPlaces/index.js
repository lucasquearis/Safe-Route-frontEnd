import React from "react";
import { useContext, useEffect, useState } from "react";
import CardPlace from "../../components/CardPlaces/CardPlace";
import PlaceContext from "../../context/PlaceContext";

const CardPlaces = () => {
  const { renderBasePlaces } = useContext(PlaceContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!renderBasePlaces || renderBasePlaces.length)
      return setIsLoading(false);
    setIsLoading(true);
  }, [renderBasePlaces]);

  const renderCard = () => {
    const places = renderBasePlaces || [];
    const loadingBase = <p>Loading...</p>;
    const cardBase = places.map((place, index) => (
      <CardPlace place={place} key={index} />
    ));
    return isLoading ? loadingBase : cardBase;
  };

  return (
    <section
      data-testid="section-cards"
      className="d-flex justify-content-center places"
    >
      <div className="d-flex justify-content-center container-list-cards">
        <div className="d-flex flex-wrap justify-content-center">
          {renderCard()}
        </div>
      </div>
    </section>
  );
};

export default CardPlaces;
