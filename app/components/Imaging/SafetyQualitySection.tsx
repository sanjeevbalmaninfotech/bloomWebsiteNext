export default function SafetyQualitySection() {

    const imagingServices = [
        { icon: "Icons/imaging/6th.svg", title: "All imaging is carried out by trained clinicians, radiographers, sonographers or appropriate staff." },
        { icon: "Icons/imaging/5th.svg", title: "Radiation safety is taken very seriously; X-ray and CT use the lowest practical doses needed to obtain diagnostic images." },
        { icon: "Icons/imaging/4th.svg", title: "We will always discuss whether an imaging test is necessary and appropriate before proceeding." },
        { icon: "Icons/imaging/3rd.svg", title: "Ultrasound uses sound waves and involves no radiation." },
        { icon: "Icons/imaging/2nd.svg", title: "Echo is non-invasive and painless." },
        { icon: "Icons/imaging/1st.svg", title: "Imaging results are interpreted by accredited reporting clinicians or partners, and then explained to you in plain language." },

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
                        Your safety is central to everything we do.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mt-8 flex flex-nowrap justify-between items-start gap-4 md:gap-6">
                    {imagingServices?.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start text-left min-w-0 flex-1"
                        /* flex-1 se sabhi items barabar jagah lenge */
                        >
                            <div className="mb-2 flex items-start justify-start">
                                <div className="w-15 h-15 md:w-15 md:h-15 flex items-center justify-start">
                                    <img
                                        src={service.icon}
                                        alt=""
                                        className="w-full h-full object-contain block"
                                    />
                                </div>
                            </div>

                            <p className="text-white text-[15px] leading-tight mt-1 font-axiforma break-words">
                                {service.title}
                            </p>
                        </div>
                    ))}
                </div>


            </div>

        </div>
    );
}
