import PropTypes from "prop-types";
import React from "react";
import ReactStars from "react-rating-stars-component";
import picture from "../../img/cardImg.jpg";

const CardPlace = ({
  place: { /* picture,  */ title, address, city, state, type, avgRating },
}) => {
  return (
    <div className="p-2 card card-place">
      <div className="container-card-place">
        <img className="img-card-place" alt="Foto do local" src={picture} />
      </div>

      <div className="flex-column align-items-start card-body">
        <div className="d-flex justify-content-around align-items-start">
          <h5 className="card-title">{title}</h5>
          <ReactStars
            count={5}
            size={24}
            value={avgRating.avgTotal}
            activeColor="#ffd700"
          />
        </div>

        <p>{type}</p>

        <div className="d-flex justify-content-center">
          <p>
            {address} {city} {state}{" "}
          </p>
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
