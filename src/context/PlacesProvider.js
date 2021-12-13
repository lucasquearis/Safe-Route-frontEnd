import React from "react";
import PropTypes from 'prop-types';
import PlaceContext from "./PlaceContext";
// import getAllPartners from "../services/mock/cardMock";
import getAllPartners from "../services";
import { useEffect, useState } from "react";

const PlacesProvider = ({ children }) => {
  const [basePlaces, setBasePlaces] = useState([]);
  const [renderBasePlaces, setRenderBasePlaces] = useState(basePlaces);
  const [inputsFilter, setInputsFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [rateFilter, setRateFilter] = useState("all");

  const searchBarFilter = () => {
    return basePlaces.filter((place) =>
      place.description.toLowerCase().includes(inputsFilter.toLowerCase())
    );
  };

  const filterByCities = (places) => {
    return places.filter((place) => {
      if (cityFilter === 'all') return true;

      return cityFilter.toLowerCase() === place.city.toLowerCase();
    });
  };

  const filterByTypes = (places) => {
    return places.filter((place) => {
      if (typeFilter === 'all') return true;

      return typeFilter.toLowerCase() === place.type.toLowerCase()
    });
  };
 
  const filterByRate = (places) => {
    return places.filter((place) => {
      if (rateFilter === "all") return true;

      return (
        place.avgRating.avgTotal >= Number(rateFilter) &&
        place.avgRating.avgTotal <= Number(rateFilter) + 1
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
    setCityFilter,
    setTypeFilter,
    setRateFilter,
    handleOptionsFilters,
    setInputsFilter,
    cityFilter,
    typeFilter,
    rateFilter,
  };

  return (
    <PlaceContext.Provider value={context}>{children}</PlaceContext.Provider>
  );
};

PlacesProvider.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
};

export default PlacesProvider;
