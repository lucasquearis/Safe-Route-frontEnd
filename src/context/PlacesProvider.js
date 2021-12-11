import PlaceContext from "./PlaceContext";
import cardMock from "../services/mock/cardMock";
import { useEffect, useState } from "react";

const PlacesProvider = ({ children }) => {
  const [placeCardMock, setplaceCardMock] = useState([]);
  const [renderPlaceCardMock, setRenderPlaceCardMock] = useState(placeCardMock);

  useEffect(() => {
    setplaceCardMock(cardMock);
    console.log('rodei')
  }, []);

  useEffect(() => {
    setRenderPlaceCardMock(placeCardMock);
  }, [placeCardMock]);

  const context ={
    renderPlaceCardMock,
    setRenderPlaceCardMock,
    placeCardMock,
  };
  return(
    <PlaceContext.Provider value={ context }>
      { children }
    </PlaceContext.Provider>
  )
};

export default PlacesProvider;