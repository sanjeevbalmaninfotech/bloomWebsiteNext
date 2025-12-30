import { MainFooter } from "../components/footer/Footer";
import Navbar from "../components/Navbar";
import ImageSection from "../components/pathology/ImageSection";
import InfoSection from "../components/pathology/infoSection";
import SafetyQualitySection from "../components/pathology/safetyQualitySection";
import HowWorks from "../components/pathology/howWorks";
import { pathologyFAQ } from "../constants/FAQs";
import UccFAQSection from "../components/footer/UccFAQSection";
import FooterImage from "../components/footer/FooterImage";
export default function Pathology() {
    return (
        <>
            <Navbar />
            <div>
                <ImageSection />
            </div>
            <InfoSection />
            <SafetyQualitySection />
            <HowWorks />
            <div>
                <FooterImage />
                <UccFAQSection faqData={pathologyFAQ} />
            </div>
            <MainFooter />
        </>
    )
}

