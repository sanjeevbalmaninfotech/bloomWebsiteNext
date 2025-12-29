export default function SafetyQualitySection() {

    const services = [
        { icon: "/Icons/pathology/SafetyQuality.svg", title: "Consultants will be appointed based on experience, qualifications and clinical outcomes." },
        { icon: "/Icons/pathology/SafetyQuality.svg", title: "Governance and processes will align with CQC requirements." },
        { icon: "/Icons/pathology/SafetyQuality.svg", title: "Diagnostic support will use trusted, accredited pathways." },
        { icon: "/Icons/pathology/SafetyQuality.svg", title: "Communication will be clear, honest and transparent." },
        { icon: "/Icons/pathology/SafetyQuality.svg", title: "Every decision will prioritise patient wellbeing, not volume." },

    ];

    return (
        <div
            className="w-full py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]"
            style={{
                background: "linear-gradient(134.4deg, #157DC1 -11.36%, #49acac 143.43%)",
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading Section */}
                <div className="w-full mb-6 md:mb-8">
                    <h1 className="text-white font-semibold leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl font-axiforma mb-3 md:mb-4">
                        Our Approach to Safety & Quality
                    </h1>
                    <p className="text-white font-normal leading-relaxed tracking-tight text-base sm:text-lg md:text-xl font-axiforma">
                        We are building our Specialist Care service carefully and responsibly. We are committed to creating a service that patients can trust completely.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 md:grid-cols-3 lg:grid-cols-5 pt-8 pb-8 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                    {services?.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start text-left"
                        >
                            <div className="mb-3 flex items-start justify-start">
                                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-start">
                                    <img
                                        src={service.icon}
                                        alt=""
                                        className="max-w-full max-h-full object-contain"
                                        style={{ width: "100%", height: "100%", display: "block" }}
                                    />
                                </div>
                            </div>

                            <p className="text-white text-sm sm:text-base leading-tight mt-2 font-axiforma">
                                {service.title}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}
