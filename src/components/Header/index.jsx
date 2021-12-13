import React from "react";
import imgLogoFake from "../../img/logoTrybe.png";
import signinIcon from "../../img/user.png";

const Header = () => {
  return (
    <header className="d-flex justify-content-around">
      <div className="d-flex justify-content-around header-container">
        <div className="img-header-container">
          <img className="img-header" src={imgLogoFake} alt="logo covid Safe" />
        </div>

        <h1 className="align-self-center title-header">Safe Route</h1>

        <button className="btn align-self-center btn-signin">
          <img className="img-signin" src={signinIcon} alt="sign in" />
        </button>
      </div>
    </header>
  );
};

export default Header;
