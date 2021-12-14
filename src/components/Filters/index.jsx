import React from "react";
import CityFilter from "./CityFilter";
import RateFilter from "./RateFilter";
import TypeFilter from "./TypeFilter";

const Filters = () => {
  return (
    <section className="filters">
      <div className="d-flex align-items-center justify-content-center">
        <CityFilter />
        <RateFilter />
        <TypeFilter />
      </div>
    </section>
  );
};

export default Filters;
