export default function GPUtilise() {

    const services = [
        { icon: "/GP/WalkInAccess.svg", title: "Routine and advanced blood tests" },
        { icon: "/GP/selfReferral.svg", title: "Fast turnaround times" },
        { icon: "/GP/RoutineBlood.svg", title: "The ability for patients to attend with a GP request form or written referral" },
        { icon: "/GP/PatientsAttend.svg", title: "Walk-in access for many investigations" },
        { icon: "/GP/FastTurnaround.svg", title: "Availability for self-referral where appropriate" },

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
                        How GPs Can Utilise Bloom Health
                    </h1>
                    <p className="text-gray-100 font-normal leading-relaxed tracking-tight text-base text-[15px] md:text-xl font-axiforma">
                        Results can be securely shared with GP practices to support continuity and avoid repeat testing.
                        Bloom Health offers:
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
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
                                className="text-white text-sm sm:text-base leading-tight mt-2 font-axiforma"
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
