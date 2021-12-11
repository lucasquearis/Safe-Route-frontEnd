import PlaceContext from "./PlaceContext";
import cardMock from "../services/mock/cardMock";
import { useEffect, useState } from "react";

const PlacesProvider = ({ children }) => {
  const [basePlaces, setBasePlaces] = useState([]);
  const [renderBasePlaces, setRenderBasePlaces] = useState(basePlaces);
  const [cityFilter, setCityFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');
  const [inputFilter, setInputFilter] = useState('');

  const handleInputFilter = (value) => {
    const inputFiltered = basePlaces.filter((place) =>
      place.description.toLowerCase().includes(value.toLowerCase())
    );
    const cityFiltered = inputFiltered.filter((place) => {
      if(cityFilter === '') return true
      return place.city === cityFilter.toLowerCase()
    });
    setRenderBasePlaces(cityFiltered);
  };

  useEffect(() => {
    handleInputFilter(inputFilter);
  }, [cityFilter, inputFilter]);

  useEffect(() => {
    setBasePlaces(cardMock);
  }, []);

  useEffect(() => {
    setRenderBasePlaces(basePlaces);
  }, [basePlaces]);

  const context ={
    renderBasePlaces,
    setRenderBasePlaces,
    basePlaces,
    setCityFilter,
    setTypeFilter,
    setRateFilter,
    setInputFilter,
  };
  return(
    <PlaceContext.Provider value={ context }>
      { children }
    </PlaceContext.Provider>
  )
};

export default PlacesProvider;