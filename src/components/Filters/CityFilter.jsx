import { useState, useContext } from "react";
import PlaceContext from "../../context/PlaceContext";

const CityFilter = () => {
  const { setCityFilter } = useContext(PlaceContext);

  return (
    <select onChange={({ target: { value } }) => setCityFilter(value)}>
      <option value="">Todas</option>
      <option value="curitiba">Curitiba</option>
      <option value="campinas">Campinas</option>
      <option value="ceara">Ceara</option>
    </select>
  );
};

export default CityFilter;
