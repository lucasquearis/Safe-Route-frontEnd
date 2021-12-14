import React from "react";
// import imgLogoFake from "../../img/logoTrybe.png";
import covidSafe from "../../img/covidSafe.png";
import signinIcon from "../../img/user.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex justify-content-around">
      <div className="d-flex justify-content-around header-container">
        <div className="img-header-container">
          <img className="img-header" src={covidSafe} alt="logo covid Safe" />
        </div>

        <h1 className="align-self-center title-header">Safe Route</h1>

        <Link className="align-self-center btn-signin" to="/login">
          <img className="img-signin" src={signinIcon} alt="sign in" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
