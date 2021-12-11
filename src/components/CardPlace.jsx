const CardPlace = ({ place: { title, rate, image, description } }) => {
  return(
    <div className="body-card">
      <div className="place-image">
        <img alt="Foto do local" src={ image } />
      </div>
      <div className="place-infos">
        <p>{ title }</p>
        <p>{ description }</p>
        <p>{ rate }</p>
      </div>
    </div>
  )
};

export default CardPlace;