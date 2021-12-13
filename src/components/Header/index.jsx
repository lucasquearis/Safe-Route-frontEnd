import React from "react";
import imgLogoFake from "../../img/logoTrybe.png";
import signinIcon from "../../img/user.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex justify-content-around">
      <div className="d-flex justify-content-around header-container">
        <div className="img-header-container">
          <img className="img-header" src={imgLogoFake} alt="logo covid Safe" />
        </div>

        <SearchBar />

        <Link to="/login">
          <button className="btn align-self-center btn-signin">
            <img className="img-signin" src={signinIcon} alt="sign in" />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
