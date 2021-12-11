import PlaceContext from "./PlaceContext";
import cardMock from "../services/mock/cardMock";
import { useEffect, useState } from "react";

const PlacesProvider = ({ children }) => {
  const [placeCardMock, setplaceCardMock] = useState([]);

  useEffect(() => {
    setplaceCardMock(cardMock);
  }, []);

  const context ={
    placeCardMock,
  };
  return(
    <PlaceContext.Provider value={ context }>
      { children }
    </PlaceContext.Provider>
  )
};

export default PlacesProvider;