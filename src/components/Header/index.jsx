import React from "react";
import imgLogoFake from "../../img/tripLogo.svg";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="d-flex justify-content-around">
      <div className="d-flex justify-content-between header-container">
        <div className="img-header-container">
          <img className="img-header" src={imgLogoFake} alt="logo covid Safe" />
        </div>

        <SearchBar />
        
        <button className="btn btn-dark">Sign in</button>
      </div>
    </header>
  );
};

export default Header;
