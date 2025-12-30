'use client';

export default function HowWorks() {

    const steps = [
        {
            title: "Clinical Review",
            description: "A clinician discusses your symptoms and history, helping identify which tests are appropriate."
        },
        {
            title: "Sample Collection",
            description: "Blood or swab samples are taken by trained healthcare professionals using safe, accurate techniques."
        },
        {
            title: "Processing",
            description: "Some tests are performed immediately onsite. Others are sent to our accredited partner laboratories."
        },
        {
            title: "Explanation of Results",
            description: "Your clinician discusses what your results mean and the next steps, whether that’s reassurance, treatment or follow-up care."

        }
    ];

    return (
        <div className="bg-white py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]">
            <div className="max-w-7xl mx-auto">

                <>
                    <h1 className="font-semibold mb-1 md:mb-[10px] text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                        How It{' '}
                        <span className="bg-gradient-to-r from-[#157dc1] to-[#49acac] bg-clip-text text-transparent">
                            Works
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-gray-700 mb-5 md:mb-7 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                        We’ve designed the process to be simple and affordable
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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


                    <p className="text-gray-700 mb-5 mt-4 md:mb-7 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                        We keep the process clear and transparent at every stage.
                    </p>


                </>




            </div>
        </div>
    );
}