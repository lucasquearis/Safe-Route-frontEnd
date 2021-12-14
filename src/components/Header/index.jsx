import React from "react";
import imgLogoFake from "../../img/covidSafe.png";
import signinIcon from "../../img/user-24.png";
import SafeRoute from "../../img/SafeRoute.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex justify-content-around">
      <div className="d-flex justify-content-around header-container">
        <div className="img-header-container">
          <img className="img-header" src={imgLogoFake} alt="logo covid Safe" />
        </div>

        <img className="align-self-center title-header" src={SafeRoute} /> 

        <Link className="align-self-center btn-signin" to="/login">
          <img className="img-signin" src={signinIcon} alt="sign in" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
