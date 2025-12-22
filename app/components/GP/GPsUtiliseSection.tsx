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
        <div className="bg-white py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]">
            <div className="max-w-7xl mx-auto">
                {/* Main Heading */}
                <h1 className="font-semibold mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                    How GPs Can Utilise{' '}
                    <span className="bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] bg-clip-text text-transparent">
                        Bloom Health
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-gray-700 mb-6 md:mb-8 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                    GPs may direct patients to Bloom Health when they would benefit from:
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {benefits.map((benefit, index) => (
                        <li
                            key={index}
                            className="text-sm sm:text-base leading-7 tracking-tight"
                        >
                            <span className="text-black font-normal">{benefit.title}</span>{' '}
                            <span className="text-[#8A8A8A]">{benefit.description}</span>
                        </li>
                    ))}
                </ul>

                {/* Bottom Description */}
                <div className="space-y-3 md:space-y-4">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-tight">
                        There is no contract or agreement required, and patients can simply walk in for urgent care or GP support. Specialist appointments can be arranged directly by the patient through our reception team.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-tight">
                        We work to ensure all relevant findings, reports and results can be shared back with their GP practice for continuity of care.
                    </p>
                </div>
            </div>
        </div>
    );
}