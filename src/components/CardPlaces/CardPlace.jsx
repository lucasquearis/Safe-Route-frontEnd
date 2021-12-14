import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import React from "react";
import ReactStars from "react-rating-stars-component";

const CardPlace = ({
  place: { picture, title, address, city, state, type, avgRating, /* _id  */},
}) => {
  return (
    <div className="p-2 card-place">
      <div className="container-card-image">
        <img className="img-card-place" alt="Foto do local" src={picture} />
      </div>

      <div className="flex-column justify-content-around  align-items-end card-body">
        <h6 className="card-title">{title}</h6>
        <div className="d-flex justify-content-around align-items-start">
          <ReactStars
            count={5}
            size={24}
            value={avgRating.avgTotal}
            activeColor="#ffd700"
          />
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <p>{type}</p>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <p>
            {address} {city}-{state}
          </p>
        </div>
      </div>
    </div>
  );
};

CardPlace.propTypes = {
  place: PropTypes.shape({
    title: PropTypes.string,
    avgRating: PropTypes.object,
    city: PropTypes.string,
    address: PropTypes.string,
    state: PropTypes.string,
    type: PropTypes.string,
    picture: PropTypes.string,
    _id: PropTypes.string,
  }),
};

ReactStars.propTypes = {
  count: PropTypes.number,
  size: PropTypes.number,
  value: PropTypes.string,
  activeColor: PropTypes.string,
};

export default CardPlace;
