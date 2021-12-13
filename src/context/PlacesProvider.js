import React from "react";
import PropTypes from 'prop-types';
import PlaceContext from "./PlaceContext";
// import cardMock from "../services/mock/cardMock";
import getAllPartners from "../services";
import { useEffect, useState } from "react";

const PlacesProvider = ({ children }) => {
  const [basePlaces, setBasePlaces] = useState([]);
  const [renderBasePlaces, setRenderBasePlaces] = useState(basePlaces);
  const [inputsFilter, setInputsFilter] = useState("");
  const [cityFilter, setCityFilter] = useState({ type: "city", filter: [] });
  const [typeFilter, setTypeFilter] = useState({ type: "type", filter: [] });
  const [rateFilter, setRateFilter] = useState({ type: "rate", filter: "all" });

  const searchBarFilter = () => {
    return basePlaces.filter((place) =>
      place.description.toLowerCase().includes(inputsFilter.toLowerCase())
    );
  };

  const filterByCities = (places) => {
    return places.filter((place) => {
      if (cityFilter.filter.length === 0) return true;

      return cityFilter.filter.some(
        (filterCity) => filterCity.toLowerCase() === place.city.toLowerCase()
      );
    });
  };

  const filterByTypes = (places) => {
    return places.filter((place) => {
      if (typeFilter.filter.length === 0) return true;

      return typeFilter.filter.some(
        (filterType) => filterType.toLowerCase() === place.type.toLowerCase()
      );
    });
  };

  const filterByRate = (places) => {
    return places.filter((place) => {
      if (rateFilter.filter === "all") return true;

      return (
        place.rate >= Number(rateFilter.filter) &&
        place.rate <= Number(rateFilter.filter) + 1
      );
    });
  };

  const handleOptionsFilters = () => {
    let filteredPlaces = [];
    filteredPlaces = searchBarFilter();

    filteredPlaces = filterByCities(filteredPlaces);
    filteredPlaces = filterByTypes(filteredPlaces);
    filteredPlaces = filterByRate(filteredPlaces);

    setRenderBasePlaces(filteredPlaces);
  };

  useEffect(() => {
    handleOptionsFilters();
  }, [cityFilter, inputsFilter, typeFilter, rateFilter]);

  useEffect(async () => {
    const partners = await getAllPartners();
    setBasePlaces(partners);
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
    setInputsFilter,
  };

  return (
    <PlaceContext.Provider value={context}>{children}</PlaceContext.Provider>
  );
};

PlacesProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default PlacesProvider;
