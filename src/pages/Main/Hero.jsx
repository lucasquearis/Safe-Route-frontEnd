import React from "react";
import SearchBar from "../../components/Header/SearchBar";

const Hero = () => {
  return (
    <div className="d-flex justify-content-center hero-container">
      <div className="jumbotron hero">
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
