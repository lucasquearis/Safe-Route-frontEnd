import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="d-flex justify-content-around">
      <img src="../../public/img/tripLogo.svg" alt="logo" />
      <SearchBar />
      <button className="btn btn-dark">Sign in</button>
    </header>
  );
};

export default Header;
