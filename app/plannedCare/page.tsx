import { MainFooter } from "../components/footer/Footer";
import FooterImage from "../components/footer/FooterImage";
import UccFAQSection from "../components/footer/UccFAQSection";
import Navbar from "../components/Navbar";

import ImagingScreeningSection from "../components/plannedCare/imageSection";
import MiddleSection from "../components/plannedCare/MiddleSection";
import SafetyQualitySection from "../components/plannedCare/SafetyQualitySection";
import WhoSpecialist from "../components/plannedCare/WhoSpecialist";
import { plannedCareFAQ } from "../constants/FAQs";

export default function PlannedCarePage() {
    return (
        <>
            <Navbar />
            <ImagingScreeningSection />
            <MiddleSection />
            <SafetyQualitySection />
            <WhoSpecialist />
            <div>
                <FooterImage />
                <UccFAQSection faqData={plannedCareFAQ} />
            </div>
            <MainFooter />

        </>
    );
}