import { MainFooter } from "../components/footer/Footer";
import Navbar from "../components/Navbar";
import ImageSection from "../components/pathology/ImageSection";
import InfoSection from "../components/pathology/infoSection";
import SafetyQualitySection from "../components/pathology/safetyQualitySection";
import HowWorks from "../components/pathology/howWorks";
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
            <MainFooter />
        </>
    )
}

