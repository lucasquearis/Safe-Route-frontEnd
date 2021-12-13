import React from "react";
import { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";

const CityFilter = () => {
  const { setCityFilter, cityFilter } = useContext(PlaceContext);

  const handleFilter = ({ target: { value } }) => {
    setCityFilter(value);
  };

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
        <option value="curitiba">Curitiba</option>
        <option value="Belo Horizonte">Belo Horizonte</option>
        <option value="ceara">Ceara</option>
      </select>
    </div>
  );
};

export default CityFilter;
