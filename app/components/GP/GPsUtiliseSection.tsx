export default function GPsUtiliseSection() {
    const benefits = [
        {
            title: "Walk-in GP support",
            description: "when their own practice is at capacity."
        },
        {
            title: "Faster diagnostic clarity,",
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
        <div className="bg-white py-12 px-6 md:py-16 lg:py-[60px] md:px-12 lg:px-[120px]">
            <div className="max-w-7xl mx-auto">
                {/* Main Heading */}
                <h1
                    className="font-semibold mb-4 md:mb-6"
                    style={{
                        fontSize: 'clamp(28px, 5vw, 36px)',
                        lineHeight: 'clamp(36px, 6vw, 48px)',
                        letterSpacing: '-0.72px',
                        fontFamily: 'Axiforma, sans-serif'
                    }}
                >
                    How GPs Can Utilise{' '}
                    <span
                        style={{
                            background: 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Bloom Health
                    </span>
                </h1>

                {/* Subheading */}
                <p
                    className="text-gray-700 mb-6 md:mb-8"
                    style={{
                        fontSize: 'clamp(14px, 2vw, 15px)',
                        lineHeight: '24px',
                        letterSpacing: '-0.45px',
                        fontFamily: 'Axiforma, sans-serif'
                    }}
                >
                    GPs may direct patients to Bloom Health when they would benefit from:
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {benefits.map((benefit, index) => (
                        <li
                            key={index}
                            style={{
                                fontSize: 'clamp(14px, 2vw, 15px)',
                                lineHeight: '28px',
                                letterSpacing: '-0.18px',
                                fontFamily: 'sans-serif'
                            }}
                        >
                            <span className="text-black font-normal">{benefit.title}</span>{' '}
                            <span style={{ color: 'rgba(138, 138, 138, 1)' }}>{benefit.description}</span>
                        </li>
                    ))}
                </ul>

                {/* Bottom Description */}
                <div className="space-y-3 md:space-y-4">
                    <p
                        className="text-gray-700"
                        style={{
                            fontSize: 'clamp(14px, 2vw, 15px)',
                            lineHeight: '120%',
                            letterSpacing: '-0.18px',
                            fontFamily: 'sans-serif'
                        }}
                    >
                        There is no contract or agreement required, and patients can simply walk in for urgent care or GP support. Specialist appointments can be arranged directly by the patient through our reception team.
                    </p>
                    <p
                        className="text-gray-700"
                        style={{
                            fontSize: 'clamp(14px, 2vw, 15px)',
                            lineHeight: '120%',
                            letterSpacing: '-0.18px',
                            fontFamily: 'sans-serif'
                        }}
                    >
                        We work to ensure all relevant findings, reports and results can be shared back with their GP practice for continuity of care.
                    </p>
                </div>
            </div>
        </div>
    );
}