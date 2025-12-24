export default function ImagingReferralSection() {
    const steps = [
        {
            title: "Identify the clinical need",
            description: "for imaging that would benefit from rapid access."
        },
        {
            title: "Advise the patient to attend Bloom Health,",
            description: "bringing a referral letter, printed summary or emailed request."
        },
        {
            title: "Our radiology team conducts the scan,",
            description: "following clinical justification and safety protocols."
        },
        {
            title: "A formal radiologist report is provided",
            description: "to the patient, with the option to share directly with the referring GP to support ongoing management."
        }
    ];

    return (
        <div className="pb-120 px-6 md:pb-12 md:pt-2 md:px-4 lg:pb-12 lg:pt-[10px] lg:px-[120px]">

            <div className="max-w-7xl mx-auto">
                {/* Main Heading */}
                <h1 className="font-semibold mb-2 text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                    Imaging{' '}
                    <span className="bg-gradient-to-r from-[#157DC1] to-[#49acac] bg-clip-text text-transparent">
                        Referral Pathway
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-black mb-4 text-base sm:text-lg md:text-xl leading-relaxed tracking-tight font-axiforma">
                    A simple, clinically safe option for patients requiring timely diagnostics
                </p>

                {/* Description */}
                <p className="text-gray-500 mb-8 md:mb-12 text-base sm:text-lg md:text-xl leading-relaxed tracking-tight font-axiforma">
                    Bloom Health provides access to X-ray, ultrasound, CT and MRI (as services come online), offering a safe and efficient route for patients who need quicker imaging to support diagnosis. This pathway helps reduce unnecessary delays while ensuring full clinical governance, safety checks and reporting standards are met.
                </p>

                {/* Cards Section Heading */}
                <h2 className="text-black mb-6 md:mb-8 text-base sm:text-lg md:text-xl leading-relaxed tracking-tight font-axiforma">
                    How GPs can refer patients for imaging
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {steps?.map((step, index) => (
                        <div
                            key={index}
                            className="rounded-lg p-6 bg-[#157DC1]/5 min-h-[169px]"
                        >
                            <p className="text-black font-axiforma">
                                <span className="font-medium text-base sm:text-lg md:text-[18px] leading-[20px] tracking-[-0.45px] align-middle">
                                    {step.title}
                                </span>{" "}
                                <span className="text-sm sm:text-base leading-[20px] tracking-wide align-middle">
                                    {step.description}
                                </span>
                            </p>
                        </div>
                    ))}



                </div>

            </div>
        </div>
    );
}