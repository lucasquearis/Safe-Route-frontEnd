import React, { useState, useEffect } from "react";
import PlaceContext from "../../context/PlaceContext";
import { useContext } from "react";

const TypeFilter = () => {
  const { setTypeFilter, typeFilter, basePlaces } = useContext(PlaceContext);
  const [optionsType, setOptionsType] = useState([]);

  console.log(basePlaces);
  const handleFilter = ({ target: { value } }) => {
    setTypeFilter(value);
  };

  useEffect(() => {
    let options = [];
    basePlaces.forEach((place) => {
      if (!options.includes(place.type)) options.push(place.type);
    });
    setOptionsType(options);
  }, [basePlaces]);

  return (
    <div className="input-group mb-1 filter-option">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="type">
          Categorias
        </label>
      </div>

      <select
        className="custom-select"
        id="type"
        value={typeFilter}
        data-testid="type-select"
        onChange={handleFilter}
      >
        <option value="all">Todas</option>
        {optionsType.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
