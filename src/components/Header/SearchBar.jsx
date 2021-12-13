import React, { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";
const SearchBar = () => {
  const { setInputsFilter } = useContext(PlaceContext);

  return (
    <div className="align-self-center search-bar-container">
      <input
      type="text"
      placeholder="Procurar..."
      onChange={({ target }) => setInputsFilter(target.value)}
      className="input-group-text search-bar"
    />
    </div>
  );
};

export default SearchBar;
