import PropTypes from "prop-types";
import React from "react";
import imageCard from "../../img/cardImg.jpg";

const CardPlace = ({
  place: { title, rate, description, city, type /* address, image, state  */ },
}) => {
  return (
    <div className="p-2 card card-place">
      <img className="card-img-top" alt="Foto do local" src={imageCard} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{rate}</p>
        <p className="card-text">{description}</p>
        <p>{city}</p>
        <p>{type}</p>
        <a href="#" className="btn btn-primary">
          Visitar
        </a>
        {/* <p>{address}</p> */}
        {/* <p>{state}</p> */}
      </div>
    </div>
  );
};

CardPlace.propTypes = {
  place: PropTypes.shape({
    title: PropTypes.string,
    rate: PropTypes.string,
    describe: PropTypes.string,
    description: PropTypes.string,
    city: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default CardPlace;
