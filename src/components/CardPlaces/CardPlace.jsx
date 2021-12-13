import PropTypes from "prop-types";
import React from "react";
import picture from "../../img/cardImg.jpg";

const CardPlace = ({
  place: { /* picture,  */title, address, city, state, type, avgRating },
}) => {
  return (
    <div className="p-2 card card-place">
      <img className="card-img-top" alt="Foto do local" src={picture} />

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div>
          <p>{avgRating.avgTotal}</p>
          <p>{type}</p>
        </div>
        <div>
          <p>{city}</p>
          <p>{address}</p>
          <p>{state}</p>
        </div>
      </div>
    </div>
  );
};

CardPlace.propTypes = {
  place: PropTypes.shape({
    title: PropTypes.string,
    avgRating: PropTypes.number,
    city: PropTypes.string,
    address: PropTypes.string,
    state: PropTypes.string,
    type: PropTypes.string,
    picture: PropTypes.string,
  }),
};

export default CardPlace;
