'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

import FAQSection from "./FAQSection";
import FooterImage from "./FooterImage";

import UccFAQSection from "./UccFAQSection";
import MapFooter from "./mapFooter";

import NewMapFooter from "./newMapFooter";
import BottomFooter from "./bottomFooter";
const CombineFooter = () => {
  return (
    <>

      <NewMapFooter />
      <BottomFooter />

    </>
  );
};

export default CombineFooter;
