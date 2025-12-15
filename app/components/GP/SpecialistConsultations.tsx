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
            <>            <div className="bg-[var(--color-grey-98,rgba(249,250,251,1))] py-12 px-6 md:py-16 lg:py-[60px] md:px-12 lg:px-[120px]">

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
                        Specialist{' '}
                        <span
                            style={{
                                background: 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Consultations
                        </span>
                    </h1>



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
                        Our growing consultant network provides timely assessment across multiple specialties. GPs may signpost patients to Bloom Health. Our team helps patients find the appropriate consultant for their condition.
                    </p>

                    {/* Cards Section Heading */}
                    <h2
                        className="text-black mb-2 md:mb-2"
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
            </div></>


            <>

                <div className=" py-12 px-6 md:py-16 lg:py-[60px] md:px-12 lg:px-[120px]">

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
                            Future{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                Planned Care Pathways
                            </span>
                        </h1>



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
                            Bloom Health is steadily expanding into planned care and day-case pathways. These services will be introduced gradually, prioritising safety, governance and close alignment with local clinical needs. We aim to continue supporting GPs with high-quality specialist pathways that integrate smoothly with primary care.

                        </p>




                    </div>
                </div>
            </>

            <>

                <div className="bg-[var(--color-grey-98,rgba(249,250,251,1))] py-12 px-6 md:py-16 lg:py-[60px] md:px-12 lg:px-[120px]">

                    <div className="max-w-7xl mx-auto">
                        {/* Main Heading */}
                        <h1
                            className="mb-2"
                            style={{
                                fontFamily: "Axiforma, sans-serif",
                                fontWeight: 600,
                                fontSize: "36px",
                                lineHeight: "48px",
                                letterSpacing: "-0.72px",
                                verticalAlign: "middle",
                                color: "rgba(23, 23, 23, 1)",
                            }}
                        >
                            Future Planned Care Pathways
                        </h1>



                        {/* Description */}
                        <p
                            className="text-[rgba(138, 138, 138, 1)] mb-8 md:mb-12"
                            style={{
                                fontFamily: 'Axiforma, sans-serif',
                                fontWeight: 400,  // Regular weight
                                fontStyle: 'normal',  // Regular style
                                fontSize: 'clamp(14px, 2vw, 15px)',  // Responsive font-size
                                lineHeight: '24px',  // Specific line-height
                                letterSpacing: '-0.45px',  // Adjust letter-spacing
                                verticalAlign: 'middle',  // Vertical alignment
                            }}
                        >
                            Our mission is to enhance availability, reduce delays, and support the healthcare community of Milton Keynes. By offering reliable urgent care, efficient diagnostics, and clear communication with GP practices.
                        </p>



                        <section className="w-full py-8">
                            <div className="max-w-[900px]">

                                {/* Heading with vertical bar */}
                                <div className="flex items-center gap-4 mb-6 pl-3">
                                    {/* Gradient vertical bar */}
                                    <span
                                        style={{
                                            width: "4px",
                                            height: "40px",
                                            borderLeft: "4px solid",
                                            borderImageSource:
                                                "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)",
                                            borderImageSlice: 1,
                                        }}
                                    />

                                    <h3
                                        style={{
                                            fontFamily: "Axiforma, sans-serif",
                                            fontWeight: 500,
                                            fontSize: "32px",
                                            lineHeight: "40px",
                                            color: "rgba(117, 178, 220, 1)",
                                        }}
                                    >
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
                                            <span
                                                style={{
                                                    width: "10px",
                                                    height: "10px",
                                                    borderRadius: "50%",
                                                    background: "rgba(117, 178, 220, 1)",
                                                    marginTop: "10px",
                                                    flexShrink: 0,
                                                }}
                                            />

                                            <p
                                                style={{
                                                    fontFamily: "Axiforma, sans-serif",
                                                    fontSize: "20px",
                                                    lineHeight: "30px",
                                                    color: "rgba(112, 112, 112, 1)",
                                                }}
                                            >
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
        </>

    );
}