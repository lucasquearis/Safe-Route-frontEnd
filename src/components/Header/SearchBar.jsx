import { useState, useContext } from "react";
import PlaceContext from "../../context/PlaceContext";
const SearchBar = () => {
  const [filterInput, setFilterInput] = useState("");
  const { setRenderPlaceCardMock, renderPlaceCardMock, placeCardMock } =
    useContext(PlaceContext);

  const handleFilter = ({ value }) => {
    setFilterInput(value);
    const inputFiltered = placeCardMock.filter((place) =>
      place.description.includes(value)
    );
    setRenderPlaceCardMock(inputFiltered);
  };

  return (
    <input
      type="text"
      placeholder="Procurar..."
      onChange={({ target }) => handleFilter(target)}
      className="search-bar"
      value={filterInput}
    />
  );
};

export default SearchBar;
