export default function GPUtilise() {

    const services = [
        { icon: "/TREATMENT.svg", title: "Routine and advanced blood tests" },
        { icon: "/INFECTION.svg", title: "Fast turnaround times" },
        { icon: "/RESPIRATORY.svg", title: "The ability for patients to attend with a GP request form or written referral" },
        { icon: "/IMAGING.svg", title: "Walk-in access for many investigations" },
        { icon: "/LABORATORY.svg", title: "Availability for self-referral where appropriate" },

    ];

    return (
        <div
            className="w-full py-12 md:py-16"
            style={{
                background: "linear-gradient(134.4deg, #157DC1 -11.36%, #49acac  143.43%)",
            }}
        >
            {/* Heading Section */}
            <div className="container mx-auto px-6 md:px-16 lg:px-24 mb-12 md:mb-16">
                <div className="max-w-3xl space-y-6">
                    <h1 className="text-white font-[600] font-axiforma leading-[48px] tracking-[-0.72px] text-3xl sm:text-4xl md:text-[36px] lg:text-[36px]">
                        How GPs Can Utilise Bloom Health
                    </h1>
                    <p className="text-gray-100 font-[400] font-axiforma leading-[24px] tracking-[-0.45px] text-sm sm:text-base md:text-[15px] lg:text-[15px]">
                        Results can be securely shared with GP practices to support continuity and avoid repeat testing. <br />
                        Bloom Health offers:
                    </p>
                </div>
            </div>

            {/* Services Grid aligned with heading */}
            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="mb-3 flex items-center justify-center">
                                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                                    <img
                                        src={service.icon}
                                        alt=""
                                        className="max-w-full max-h-full object-contain"
                                        style={{ width: '100%', height: '100%', display: 'block' }}
                                    />
                                </div>
                            </div>
                            <p
                                className="text-white text-xs md:text-sm leading-tight mt-2"
                                style={{ fontFamily: "var(--font-family-1, sans-serif)" }}
                            >
                                {service.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
