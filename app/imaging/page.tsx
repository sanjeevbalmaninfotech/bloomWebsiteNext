import { MainFooter } from "../components/footer/Footer";
import HowWorks from "../components/Imaging/howWorks";
import ImagingScreeningSection from "../components/Imaging/ImageSection";
import MiddleSection from "../components/Imaging/MiddleSection";
import SafetyQualitySection from "../components/Imaging/SafetyQualitySection";
import Navbar from "../components/Navbar";



export default function ImagingScreeningPage() {
    return (
        <>
            <Navbar />
            <ImagingScreeningSection />
            <MiddleSection />
            <SafetyQualitySection />
            <HowWorks />
            <MainFooter />
        </>

    );
}