import React from "react";
import { useContext, useEffect, useState } from "react";
import CardPlace from "../../components/CardPlaces/CardPlace";
import PlaceContext from "../../context/PlaceContext";

const CardPlaces = () => {
  const { renderBasePlaces } = useContext(PlaceContext);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    console.log(renderBasePlaces);
    console.log(isLoading);
    if(!renderBasePlaces || renderBasePlaces.length) return setIsLoading(false);
    setIsLoading(true);
  }, [renderBasePlaces])
  
  const renderCard = () => {
    const places = renderBasePlaces || [];
    const loadingBase = <p>Loading...</p>;
    const cardBase = places.map((place, index) => (
      <CardPlace place={place} key={index} />
    ));
      console.log('cardBase', cardBase);
    return isLoading ? loadingBase : cardBase;
  };
  
  // Adiciona Loading..
  return (
    <section data-testid="section-cards" className="places">
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap justify-content-center">
          {renderCard()}
        </div>
      </div>
    </section>
  );
};

export default CardPlaces;
