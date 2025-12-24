import ContactSection from "../components/contactUs/contactSection";
import ImagingScreeningSection from "../components/contactUs/imageSection";
import InfoSection from "../components/contactUs/InfoSection";
import { MainFooter } from "../components/footer/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
    return (
        <><Navbar />
            <ImagingScreeningSection />
            <InfoSection />
            <ContactSection />
            <MainFooter />
        </>
    );
}


