import { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";
const SearchBar = () => {
  const { setInputsFilter } = useContext(PlaceContext);

  return (
    <input
      type="text"
      placeholder="Procurar..."
      onChange={({ target }) => setInputsFilter(target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
