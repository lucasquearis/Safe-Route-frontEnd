import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Profile = ({ profileInfos }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!profileInfos) return setIsLoading(true);
    return setIsLoading(false);
  }, [profileInfos]);

  const renderProfile = () => {
    const {
      avgRating: {
        avgTotal,
        avgAlcoholAviability,
        avgCleanliness,
        avgDistancingAviability,
        avgMaskUsage,
      },
      title,
      description,
      address,
      city,
      state,
      picture,
      posts,
    } = profileInfos;

    const loadingBase = <h1>Loading...</h1>;
    const infosBase = (
      <div className="card mb-3">
        <img className="card-img-top" alt="local" src={picture} />

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
        </div>

        <div className="card-body">
          <h3 className="card-title">Endereço:</h3>
          <p className="card-text">{address}</p>
          <p className="card-text">
            {city}-{state}
          </p>
        </div>

        <div className="card-body">
          <h2 className="card-title">Avaliações</h2>
          <p className="card-text">Média das avaliações: {avgTotal}</p>
          <p className="card-text">
            Álcool em Gel Disponível: {avgAlcoholAviability}
          </p>
          <p className="card-text">Local Limpo: {avgCleanliness}</p>
          <p className="card-text">
            Distânciamento Social: {avgDistancingAviability}
          </p>
          <p className="card-text">Uso da Máscara: {avgMaskUsage}</p>
        </div>

        <div className="card-body">
          <h3 className="card-title">Comentários:</h3>
          {posts.map((post, index) => (
            <p className="card-text" key={index}>
              Comentario {index + 1}: {post.comment}
            </p>
          ))}
        </div>
      </div>
    );

    return isLoading ? loadingBase : infosBase;
  };

  return <div>{renderProfile()}</div>;
};

Profile.propTypes = {
  profileInfos: PropTypes.object,
};

export default Profile;
