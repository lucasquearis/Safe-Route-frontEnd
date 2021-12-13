import React from "react";
import SearchBar from "../../components/Header/SearchBar";

const Hero = () => {
  return (
    <div className="d-flex justify-content-center hero-container">
      <div className="jumbotron hero">
        {/* <p className="text-hero">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ad,
          adipisci animi, eveniet, ea error et praesentium neque enim repellat
          aliquid officiis! Voluptatem modi debitis cum neque iure! Voluptatum,
          magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          soluta neque expedita beatae itaque perferendis inventore temporibus,
          quae consequuntur, porro História App commodi aperiam voluptas, sint
          hic nam placeat obcaecati asperiores. Praesentium. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Veniam obcaecati autem dicta
          vero animi sint quam rem expedita deleniti, reiciendis corporis, quod
          officia molestiae et, reprehenderit voluptatibus quis quas.
          Blanditiis.
        </p> */}
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
