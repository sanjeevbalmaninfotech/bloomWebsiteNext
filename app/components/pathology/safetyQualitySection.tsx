export default function SafetyQualitySection() {

    const services = [
        { icon: "/Icons/pathology/SafetyQuality.svg", title: "All samples are collected by experienced clinicians" },
        { icon: "/Icons/pathology/SafetyQuality.svg", title: "Proper labelling, handling and storage" },
        { icon: "/Icons/pathology/SafetyQuality.svg", title: "Compliance with strict pre-analytical and laboratory quality standards" },
        { icon: "/Icons/pathology/SafetyQuality.svg", title: "Collaboration with accredited UK laboratories" },
        { icon: "/Icons/pathology/SafetyQuality.svg", title: "Use of trusted, validated diagnostic technology" },

    ];

    return (
        <div
            className="w-full py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]"
            style={{
                background: "linear-gradient(134.4deg, #157DC1 -11.36%, #49acac  143.43%)",
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading Section */}
                <div className="max-w-3xl  mb-4 md:mb-4">
                    <h1 className="text-white font-semibold leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl font-axiforma">
                        Safety & Quality
                    </h1>
                    <p className="text-gray-100 font-normal leading-relaxed tracking-tight text-base sm:text-lg md:text-xl font-axiforma">
                        Your safety and the accuracy of your results are paramount
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
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
