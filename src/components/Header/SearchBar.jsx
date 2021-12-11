import { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";
const SearchBar = () => {
  const { setInputFilter } = useContext(PlaceContext);

  return (
    <input
      type="text"
      placeholder="Procurar..."
      onChange={({ target }) => setInputFilter(target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
