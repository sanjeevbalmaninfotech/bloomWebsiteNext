'use client'
import { MainFooter } from "../footer/Footer";
import Navbar from "../Navbar";
import HospitalHeroSlider from "./HospitalHeroSlider";
import NewsSection from "./NewsSection";
import NewOurServices from "./NewOurServices";
import PriorityHealthSection from "./PriorityHealthSection";
import WhatSetsUsApart from "./WhatSetsUsApart";
import OriginBloomSection from "./OriginBloomSection";
import PrivacyModal from "../PrivacyPolicy/PrivacyModal";



export const HomeSection = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-end p-3 overflow-hidden">
        <span
          className="font-semibold text-[16px] leading-[140%] tracking-normal whitespace-nowrap roll-text"
          style={{
            fontFamily: 'Axiforma',
            background: 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Opening on 15th January
        </span>

        <style jsx>{`
    @keyframes rollRightToLeft {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-700%);
      }
    }

    .roll-text {
      animation: rollRightToLeft 30s linear infinite;
    }
  `}</style>
      </div>


      <HospitalHeroSlider />

      <NewOurServices />
      <OriginBloomSection />

      <NewsSection />
      <PrivacyModal />
      <MainFooter />
    </>
  );
};
