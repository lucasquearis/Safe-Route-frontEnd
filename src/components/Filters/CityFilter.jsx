import React, { useState, useEffect } from "react";
import { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";

const CityFilter = () => {
  const { setCityFilter, cityFilter, basePlaces } = useContext(PlaceContext);
  const [optionsCity, setOptionsCity] = useState([]);

  const handleFilter = ({ target: { value } }) => {
    setCityFilter(value);
  };

  useEffect(() => {
    let options = [];
    basePlaces.forEach((place) => {
      if (!options.includes(place.city)) options.push(place.city);
    });
    setOptionsCity(options);
  }, [basePlaces]);

  return (
    <div className="input-group mb-1 filter-option">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="cities">
          Cidades
        </label>
      </div>
      <select
        className="custom-select"
        id="cities"
        data-testid="city-select"
        value={cityFilter}
        onChange={handleFilter}
      >
        <option value="all">Todas</option>
        {optionsCity.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
