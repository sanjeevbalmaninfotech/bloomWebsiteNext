import { MainFooter } from "../components/footer/Footer";
import Navbar from "../components/Navbar";

import ImagingScreeningSection from "../components/plannedCare/imageSection";
import MiddleSection from "../components/plannedCare/MiddleSection";
export default function PlannedCarePage() {
    return (
        <>
            <Navbar />
            <ImagingScreeningSection />
            <MiddleSection />
            <MainFooter />

        </>
    );
}