export default function SpecialistConsultations() {
    const steps = [
        {
            title: "A quicker specialist review would support management",
            description: ""
        },
        {
            title: "Additional diagnostic clarity is required",
            description: ""
        },
        {
            title: "Ongoing care would benefit from specialist oversight",
            description: ""
        },
        {
            title: "Appointments are scheduled in advance",
            description: ""
        }
    ];

    return (
        <>
            {/* Specialist Consultations Section */}
            <div className="bg-gray-50 py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]">
                <div className="max-w-7xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="font-semibold mb-2 text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                        Specialist{' '}
                        <span className="bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] bg-clip-text text-transparent">
                            Consultations
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-500 mb-8 md:mb-12 text-base sm:text-lg md:text-xl leading-relaxed tracking-tight font-axiforma">
                        Our growing consultant network provides timely assessment across multiple specialties. GPs may signpost patients to Bloom Health. Our team helps patients find the appropriate consultant for their condition.
                    </p>

                    {/* Cards Section Heading */}
                    <h2 className="text-black mb-2 md:mb-2 text-base sm:text-lg md:text-xl leading-relaxed tracking-tight font-axiforma">
                        How GPs can refer patients for imaging
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="rounded-lg p-6 bg-[#157DC1]/5 min-h-[169px]"
                            >
                                <p className="text-black text-lg sm:text-xl md:text-[22px] leading-relaxed tracking-wide font-axiforma">
                                    <strong className="font-semibold tracking-[-0.45px]">
                                        {step.title}
                                    </strong>
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Future Planned Care Pathways Section 1 */}
            <div className="py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]">
                <div className="max-w-7xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="font-semibold mb-2 text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                        Future{' '}
                        <span className="bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] bg-clip-text text-transparent">
                            Planned Care Pathways
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-500  text-base sm:text-lg md:text-xl leading-relaxed tracking-tight font-axiforma">
                        Bloom Health is steadily expanding into planned care and day-case pathways. These services will be introduced gradually, prioritising safety, governance and close alignment with local clinical needs. We aim to continue supporting GPs with high-quality specialist pathways that integrate smoothly with primary care.
                    </p>
                </div>
            </div>

            {/* Future Planned Care Pathways Section 2 */}
            <div className="bg-gray-50 py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]">
                <div className="max-w-7xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="font-semibold mb-2 text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                        A Collaborative Approach to{' '}
                        <span className="bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] bg-clip-text text-transparent">
                            Improving Access
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-[#8A8A8A] mb-8 md:mb-2 font-normal text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                        Our mission is to enhance availability, reduce delays, and support the healthcare community of Milton Keynes. By offering reliable urgent care, efficient diagnostics, and clear communication with GP practices.
                    </p>

                    <section className="w-full py-4">
                        <div className="max-w-[900px]">
                            {/* Heading with vertical bar */}
                            <div className="flex items-center gap-4 mb-6 pl-3">
                                {/* Gradient vertical bar */}
                                <span className="w-1 h-10 bg-[#157DC1]"></span>
                                <h3 className=" font-medium   text-xl   sm:text-2xl   lg:text-3xl   leading-tight   text-[#157DC1]  font-axiforma">
                                    Bloom Health strives to :
                                </h3>
                            </div>

                            {/* Bullet list */}
                            <ul className="space-y-6 pl-2">
                                {[
                                    "Reduce pressure on local services",
                                    "Improve patient experience and speed of diagnosis",
                                    "Strengthen continuity of care",
                                    "Support GPs in delivering the best outcomes for their patients",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        {/* Dot */}
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#157DC1] mt-2.5 shrink-0"></span>

                                        <p className="font-axiforma text-base sm:text-lg md:text-xl leading-relaxed text-[#707070]">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}