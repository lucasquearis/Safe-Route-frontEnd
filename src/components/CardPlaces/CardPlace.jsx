const CardPlace = ({
  place: { title, rate, image, description, address, city, state, type },
}) => {
  return (
    <div className="body-card">
      <div className="place-image">
        <img alt="Foto do local" src={image} />
      </div>
      <div className="place-infos">
        <p>{rate}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>{address}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default CardPlace;
