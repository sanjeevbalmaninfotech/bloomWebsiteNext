import { MainFooter } from "../footer/Footer";
import Navbar from "../Navbar";
import HospitalHeroSlider from "./HospitalHeroSlider";
import NewsSection from "./NewsSection";
import OurServices from "./OurServices";
import PriorityHealthSection from "./PriorityHealthSection";
import WhatSetsUsApart from "./WhatSetsUsApart";


export const HomeSection = () => {
  return (
    <>
        <Navbar />
        <HospitalHeroSlider/>
        <PriorityHealthSection/>
       
        <OurServices/>
         <WhatSetsUsApart/>
         <NewsSection/>
    <MainFooter/>
    </>
  );
};
