import React, { useContext } from "react";
import PlaceContext from "../context/PlaceContext";
const SearchBar = () => {
  const { setInputsFilter } = useContext(PlaceContext);

  return (
    <div className="search-bar-container">
      <input
      type="text"
      placeholder="Digite sua busca..."
      onChange={({ target }) => setInputsFilter(target.value)}
      className="input-group-text search-bar"
    />
    </div>
  );
};

export default SearchBar;
