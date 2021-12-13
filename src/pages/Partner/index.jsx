import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { getPartnerById } from "../../services";
import Profile from "./Profile";

const Partner = () => {
  const [profileInfos, setProfileInfos] = useState({
    avgRating: {
      avgTotal: "",
      avgAlcoholAviability: "",
      avgCleanliness: "",
      avgDistancingAviability: "",
      avgMaskUsage: "",
    },
  });

  const { id } = useParams();

  useState(async () => {
    const result = await getPartnerById(id);
    setProfileInfos(result);
  }, []);
  return (
    <main>
      <Header />
      <Profile profileInfos={profileInfos} />
      <Footer />
    </main>
  );
};

export default Partner;
