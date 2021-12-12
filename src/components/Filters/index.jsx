import CityFilter from "./CityFilter";
import RateFilter from "./RateFilter";
import TypeFilter from "./TypeFilter";

const Filters = () => {
  return (
    <section className="filters d-flex align-items-center  justify-content-center">
      <CityFilter />
      <RateFilter />
      <TypeFilter />
    </section>
  );
};

export default Filters;
