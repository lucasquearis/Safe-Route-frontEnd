import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
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
        <div className="partner-img-container">
          <img className="partner-img" alt="local" src={picture} />
        </div>

        <div className="flex-column justify-content-around card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
        </div>

        <div className="flex-column justify-content-around card-body">
          <h3 className="card-title">Endereço:</h3>
          <div>
            <p className="card-text">
              {address} - {city}-{state}.
            </p>
          </div>
        </div>

        <div className="rate-container">
          <div className="d-flex justify-content-around">
            <h2 className="card-title">Avaliações</h2>
          </div>

          {avgTotal ? <div className="d-flex justify-content-around ">
            <div className="">
              Média das avaliações:
              {
                <ReactStars
                  count={5}
                  size={24}
                  value={avgTotal}
                  activeColor="#ffd700"
                />
              }
            </div>
            <div className="">
              Álcool em Gel Disponível:
              {
                <ReactStars
                  count={5}
                  size={24}
                  value={avgAlcoholAviability}
                  activeColor="#ffd700"
                />
              }
            </div>
            <div className="">
              Local Limpo:
              {
                <ReactStars
                  count={5}
                  size={24}
                  value={avgCleanliness}
                  activeColor="#ffd700"
                />
              }
            </div>
            <div className="">
              Distânciamento Social:
              {
                <ReactStars
                  count={5}
                  size={24}
                  value={avgDistancingAviability}
                  activeColor="#ffd700"
                />
              }
            </div>
            <div className="">
              Uso da Máscara:
              {
                <ReactStars
                  count={5}
                  size={24}
                  value={avgMaskUsage}
                  activeColor="#ffd700"
                />
              }
            </div>
          </div> : <p>Loading...</p>}
        </div>

        <div className="card-body">
          <h3 className="card-title">Comentários:</h3>
          {posts && posts.length > 0 ? (
            posts.map((post, index) => (
              <p className="card-text" key={index}>
                Comentário {index + 1}: {post.comment}
              </p>
            ))
          ) : (
            <p className="card-text">
              Ainda não há comentários para esse local.
            </p>
          )}
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
