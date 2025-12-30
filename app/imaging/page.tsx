import { MainFooter } from "../components/footer/Footer";
import FooterImage from "../components/footer/FooterImage";
import UccFAQSection from "../components/footer/UccFAQSection";
import HowWorks from "../components/Imaging/howWorks";
import ImagingScreeningSection from "../components/Imaging/ImageSection";
import MiddleSection from "../components/Imaging/MiddleSection";
import SafetyQualitySection from "../components/Imaging/SafetyQualitySection";
import Navbar from "../components/Navbar";
import { imagingFAQ } from "../constants/FAQs";



export default function ImagingScreeningPage() {
    return (
        <>
            <Navbar />
            <ImagingScreeningSection />
            <MiddleSection />
            <SafetyQualitySection />
            <HowWorks />
            <div>
                <FooterImage />
                <UccFAQSection faqData={imagingFAQ} />
            </div>
            <MainFooter />
        </>

    );
}