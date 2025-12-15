import { MainFooter } from "../footer/Footer";
import Navbar from "../Navbar";
import HospitalHeroSlider from "./HospitalHeroSlider";
import NewsSection from "./NewsSection";
import NewOurServices from "./NewOurServices";
import PriorityHealthSection from "./PriorityHealthSection";
import WhatSetsUsApart from "./WhatSetsUsApart";
import OriginBloomSection from "./OriginBloomSection";



export const HomeSection = () => {
  return (
    <>
      <Navbar />
      <HospitalHeroSlider />

      <NewOurServices />
      <OriginBloomSection />

      <NewsSection />
      <MainFooter />
    </>
  );
};
