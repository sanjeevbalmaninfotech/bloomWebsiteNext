'use client';

export default function HowWorks() {

    const steps = [
        {
            title: "Clinical Assessment",
            description: "You’ll first be seen by a clinician, who will discuss your symptoms, examine you where appropriate, and decide if imaging is likely to be helpful and safe."
        },
        {
            title: "Choosing the Right Scan",
            description: "Based on your presentation, the clinician will decide which imaging test (if any) is appropriate - such as X-ray, ultrasound, CT, Echo, or referral for MRI through our partners."
        },
        {
            title: "Imaging Appointment",
            description: "If a scan is needed and available, it may take place during your visit or be booked for a suitable time. For MRI, we will help you access a local partner service."
        },
        {
            title: "Results & Next Steps",
            description: "Once your imaging has been reviewed by the appropriate reporting clinician, a member of our clinical team will explain what the findings mean and discuss any recommended next steps."

        }
    ];

    return (
        <div className="bg-white py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]">
            <div className="max-w-7xl mx-auto">

                <>
                    <h1 className="font-semibold mb-1 md:mb-[10px] text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                        How It{' '}
                        <span className="bg-gradient-to-r from-[#49acac] to-[#5FC1A3] bg-clip-text text-transparent">
                            Works
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-[#171717] mb-5 md:mb-7 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                        We keep the process as straightforward and supportive as possible:
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
                        We will not promise specific turnaround times or immediate reporting, but we will always be honest about what to expect and keep you updated wherever possible.
                    </p>


                </>




            </div>
        </div>
    );
}