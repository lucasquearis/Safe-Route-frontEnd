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
    } = profileInfos;

    const loadingBase = <h1>Loading...</h1>;
    const infosBase = (
      <div>
        <h1>{title}</h1>
        <img alt="local" src={picture} />
        <h2>Avaliação Média: {avgTotal}</h2>
        <p>Álcool em Gel Disponível: {avgAlcoholAviability}</p>
        <p>Local Limpo: {avgCleanliness}</p>
        <p>Distânciamento Social: {avgDistancingAviability}</p>
        <p>Uso da Máscara: {avgMaskUsage}</p>
        <h3>Endereço: {address}</h3>
        <h3>Cidade: {city}</h3>
        <h3>Estado: {state}</h3>
        <h4>Descrição: {description}</h4>
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
