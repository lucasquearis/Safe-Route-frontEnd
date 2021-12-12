import react from "react";
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
        <a href="#" class="btn btn-primary">
          Visitar
        </a>
        {/* <p>{address}</p> */}
        {/* <p>{state}</p> */}
      </div>
    </div>
  );
};

export default CardPlace;
