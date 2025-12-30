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
import FooterImage from "../footer/FooterImage";
import UccFAQSection from "../footer/UccFAQSection";
import { homePageFAQ } from '@/app/constants/FAQs';


export const HomeSection = () => {
  return (
    <>
      <Navbar />


      <HospitalHeroSlider />

      <NewOurServices />
      <OriginBloomSection />

      <NewsSection />
      <PrivacyModal />
      <div>
        <FooterImage />
        <UccFAQSection faqData={homePageFAQ} />
      </div>
      <MainFooter />
    </>
  );
};
