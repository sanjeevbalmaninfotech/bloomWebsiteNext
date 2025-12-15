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
        <div className="bg-[var(--color-grey-98,rgba(249,250,251,1))] py-12 px-6 md:py-16 lg:py-[60px] md:px-12 lg:px-[120px]">

            <div className="max-w-7xl mx-auto">
                {/* Main Heading */}
                <h1
                    className="font-semibold mb-2"
                    style={{
                        fontSize: 'clamp(28px, 5vw, 36px)',
                        lineHeight: 'clamp(36px, 6vw, 48px)',
                        letterSpacing: '-0.72px',
                        fontFamily: 'Axiforma, sans-serif'
                    }}
                >
                    Imaging{' '}
                    <span
                        style={{
                            background: 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Referral Pathway
                    </span>
                </h1>

                {/* Subheading */}
                <p
                    className="text-black mb-4"
                    style={{
                        fontSize: 'clamp(16px, 3vw, 20px)',
                        lineHeight: '48px',
                        letterSpacing: '-0.72px',
                        fontFamily: 'Axiforma, sans-serif'
                    }}
                >
                    A simple, clinically safe option for patients requiring timely diagnostics
                </p>

                {/* Description */}
                <p
                    className="text-gray-500 mb-8 md:mb-12"
                    style={{
                        fontSize: 'clamp(16px, 3vw, 20px)',
                        lineHeight: '130%',
                        letterSpacing: '-0.72px',
                        fontFamily: 'Axiforma, sans-serif'
                    }}
                >
                    Bloom Health provides access to X-ray, ultrasound, CT and MRI (as services come online), offering a safe and efficient route for patients who need quicker imaging to support diagnosis. This pathway helps reduce unnecessary delays while ensuring full clinical governance, safety checks and reporting standards are met.
                </p>

                {/* Cards Section Heading */}
                <h2
                    className="text-black mb-6 md:mb-8"
                    style={{
                        fontSize: 'clamp(16px, 3vw, 20px)',
                        lineHeight: '48px',
                        letterSpacing: '-0.72px',
                        fontFamily: 'Axiforma, sans-serif'
                    }}
                >
                    How GPs can refer patients for imaging
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="rounded-lg p-6"
                            style={{
                                backgroundColor: 'rgba(21, 125, 193, 0.07)',
                                minHeight: '169px'
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 'clamp(16px, 2vw, 15px)',
                                    lineHeight: '24px',
                                    letterSpacing: '0.45px',
                                    fontFamily: 'Axiforma, sans-serif',
                                    color: '#000000'
                                }}
                            >
                                <strong
                                    style={{
                                        fontWeight: 600
                                    }}
                                >
                                    {step.title}
                                </strong>{" "}
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}