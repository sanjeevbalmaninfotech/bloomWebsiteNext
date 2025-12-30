import FluArticle from "./FluArticle";
import HealthcareNeedSection from "./HealthcareNeedSection";
import ImpactSection from "./ImpactSection";

export default function InfoSection() {
    return (
        <>
            <div className="bg-white py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]">
                <div className="max-w-7xl mx-auto">
                    <FluArticle />
                    <ImpactSection />
                    <HealthcareNeedSection />

                </div>
            </div>
        </>
    );
}   
