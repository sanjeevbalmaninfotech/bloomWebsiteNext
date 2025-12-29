import { MainFooter } from "../components/footer/Footer";
import Navbar from "../components/Navbar";

import ImagingScreeningSection from "../components/plannedCare/imageSection";
import MiddleSection from "../components/plannedCare/MiddleSection";
import SafetyQualitySection from "../components/plannedCare/SafetyQualitySection";
import WhoSpecialist from "../components/plannedCare/WhoSpecialist";

export default function PlannedCarePage() {
    return (
        <>
            <Navbar />
            <ImagingScreeningSection />
            <MiddleSection />
            <SafetyQualitySection />
            <WhoSpecialist />
            <MainFooter />

        </>
    );
}