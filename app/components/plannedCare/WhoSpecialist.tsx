'use client';

export default function WhoSpecialist() {

    const steps = [
        {
            title: "Patients needing consultant assessment after symptoms or tests.",
            description: ""
        },
        {
            title: "People on long NHS waiting lists seeking a faster alternative.",
            description: ""
        },
        {
            title: "Patients requiring continuity after a Bloom Health Urgent Care visit.",
            description: ""
        },
        {
            title: "Individuals wanting private specialist opinions in Milton Keynes.",
            description: ""
        },
        {
            title: "Anyone wanting clearer answers about ongoing or complex symptoms.",
            description: ""
        }
    ];

    const featuresPlannedCare = [
        {
            title: "Patients",
            description: "Join our interest list and receive updates as specialties launch."
        },
        {
            title: "GPs & Healthcare Professionals",
            description: "Pre-register to receive referral information once pathways are confirmed."
        },
        {
            title: "Consultants",
            description: "Clinicians interested in joining Bloom Health can reach out confidentiallys."
        },


    ];

    return (
        <div className="bg-white py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]">
            <div className="max-w-7xl mx-auto">

                <>
                    <h1 className="font-semibold mb-1 md:mb-[10px] text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                        Who Specialist{' '}
                        <span className="bg-gradient-to-r from-[#157dc1] to-[#49acac] bg-clip-text text-transparent">
                            Care Is For
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-gray-700 mb-5 md:mb-7 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                        Specialist Care will support:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                        {steps?.map((step, index) => (
                            <div
                                key={index}
                                className="rounded-lg p-6 bg-[#157DC1]/5 min-h-[169px]"
                            >
                                {/* Heading */}
                                <h3
                                    className="font-medium text-base sm:text-lg md:text-[18px] leading-[24px] tracking-[-0.45px] text-black mb-2"
                                    style={{ fontFamily: "Axiforma, sans-serif" }}
                                >
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-sm sm:text-base leading-[20px] tracking-wide text-black/80"
                                    style={{ fontFamily: "Axiforma, sans-serif" }}
                                >
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>





                </>
                <>
                    <div className="max-w-7xl mt-8 mx-auto ">
                        {/* Heading */}
                        <h1 className="font-semibold mb-1 md:mb-[10px] text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma mt-8">
                            Register{" "}
                            <span
                                style={{
                                    background: "linear-gradient( #157dc1, #49acac )",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Your Interest
                            </span>
                        </h1>



                        {/* Subheading */}
                        <p className="text-gray-700 mb-5 md:mb-7 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                            While our Specialist Care service is not live yet, you can stay informed as clinics open.
                        </p>

                        <>
                            <ul className="space-y-3">
                                {featuresPlannedCare.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        {/* Custom Blue Bullet */}
                                        <span
                                            className="flex-shrink-0 w-2 h-2 rounded-full mt-2.5"
                                            style={{ background: '#157DC1' }}
                                        />

                                        <div className="flex-1">
                                            {/* Heading (Feature Title) */}
                                            <h3
                                                className="text-[#171717] text-[18px] leading-[28px] tracking-[-0.18px] mb-1"
                                                style={{
                                                    fontFamily: 'Axiforma, sans-serif',
                                                    fontWeight: 600, // Semi-bold for the heading
                                                }}
                                            >
                                                {feature.title}
                                            </h3>

                                            {/* Description - Using your requested styles */}
                                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </>

                    </div>
                </>
            </div>
        </div>
    );
}