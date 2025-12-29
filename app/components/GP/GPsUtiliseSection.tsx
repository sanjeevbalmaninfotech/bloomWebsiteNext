export default function GPsUtiliseSection() {
    const benefits = [
        {
            title: "Walk-in GP support",
            description: "when their own practice is at capacity."
        },
        {
            title: "Faster diagnostic clarity",
            description: "including blood tests and imaging."
        },
        {
            title: "Same-day assessment",
            description: "for non-life-threatening urgent issues."
        },
        {
            title: "Timely consultant input",
            description: "for conditions requiring specialist review."
        },
        {
            title: "A smoother, faster patient journey,",
            description: "without long waits or unnecessary delays."
        }
    ];

    return (
        <div className="bg-white  px-6   mt-8 ">
            <div className="max-w-7xl mx-auto">
                {/* Main Heading */}
                <div>


                </div>
                <h1 className="font-semibold mb-2 md:mb-2 text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                    How GPs Can Utilise{' '}
                    <span className="bg-gradient-to-r from-[#157dc1] to-[#49acac] bg-clip-text text-transparent">
                        Bloom Health
                    </span>
                </h1>

                <div className="space-y-3 md:space-y-4">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-tight">
                        There is no contract or agreement required, and patients can simply walk in for urgent care or GP support. Specialist appointments can be arranged directly by the patient through our reception team. We work to ensure all relevant findings, reports and results can be shared back with their GP practice for continuity of care. GPs may direct patients to Bloom Health when they would benefit from:
                    </p>
                    {/* <p className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-tight">
                       
                    </p> */}
                </div>

                {/* Benefits List */}
                <ul className="space-y-3 md:space-y-4 mt-4 mb-4  pl-5 list-disc">
                    {benefits.map((benefit, index) => (
                        <li
                            key={index}
                            className="text-sm sm:text-base leading-7 tracking-tight marker:text-[#157DC1]"
                        >
                            <span className="text-black font-normal">{benefit.title}</span>{' '}
                            <span className="text-[#8A8A8A]">{benefit.description}</span>
                        </li>
                    ))}
                </ul>

                {/* Bottom Description */}

            </div>
        </div>
    );
}