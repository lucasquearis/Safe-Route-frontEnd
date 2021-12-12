import PlaceContext from "./PlaceContext";
import cardMock from "../services/mock/cardMock";
import { useEffect, useState } from "react";

const PlacesProvider = ({ children }) => {
  const [basePlaces, setBasePlaces] = useState([]);
  const [renderBasePlaces, setRenderBasePlaces] = useState(basePlaces);
  const [inputsFilter, setInputsFilter] = useState("");
  const [cityFilter, setCityFilter] = useState({ type: "city", filter: [] });
  const [typeFilter, setTypeFilter] = useState("");
  const [rateFilter, setRateFilter] = useState("");

  const searchBarFilter = () => {
    return basePlaces.filter((place) =>
      place.description.toLowerCase().includes(inputsFilter.toLowerCase())
    );
  };

  const filterByCities = (places) => {
    //  Lembrar do map com lowercase no array de cidades e demais itens 
    return places.filter((place) => {
      if (cityFilter.filter.length === 0) return true;
      return cityFilter.filter.some(((filterCity) => filterCity.toLowerCase() === place.city.toLowerCase()));
    });
  }

  const handleOptionsFilters = () => {
    let filteredPlaces = [];
    filteredPlaces = searchBarFilter();

    filteredPlaces = filterByCities(filteredPlaces)

    setRenderBasePlaces(filteredPlaces);
  };

  useEffect(() => {
    handleOptionsFilters();
  }, [cityFilter, inputsFilter]);

  useEffect(() => {
    setBasePlaces(cardMock);
  }, []);

  useEffect(() => {
    setRenderBasePlaces(basePlaces);
  }, [basePlaces]);

  const context = {
    renderBasePlaces,
    setRenderBasePlaces,
    basePlaces,
    cityFilter,
    setCityFilter,
    setTypeFilter,
    setRateFilter,
    handleOptionsFilters,
    setInputsFilter
  };

  return (
    <PlaceContext.Provider value={context}>{children}</PlaceContext.Provider>
  );
};

export default PlacesProvider;
