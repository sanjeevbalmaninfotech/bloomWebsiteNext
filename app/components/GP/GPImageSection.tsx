import { RegisterButton } from "../registerButton/RegisterButton";

export default function ImageSection() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200"
                    alt="Information For GPs"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-cyan-800/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-8 md:px-16 lg:px-24">
                    <div className="max-w-2xl space-y-6">
                        {/* Heading */}
                        <h1 className="text-white leading-tight 
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            Information For GPs
                            <br />
                            <span className="text-cyan-300">
                                Working In Partnership
                            </span>
                        </h1>

                        {/* Description 1 */}
                        <p className="text-gray-100 
                text-sm sm:text-base md:text-lg">
                            Bloom Health is designed to support the vital work delivered by GP practices throughout
                            Milton Keynes. We provide rapid access to urgent care, diagnostics and specialist opinion,
                            helping to ease pressure on primary care, improve continuity, and ensure patients receive
                            timely assessment when they need it most.
                        </p>

                        {/* Description 2 */}
                        <p className="text-gray-100 
                text-sm sm:text-base md:text-lg">
                            Our role is complementary. We recognise the NHS as the backbone of local healthcare, and
                            our services exist to add capacity, improve access, and offer convenience for patients and
                            their GPs, particularly when speed of diagnosis or review can make a meaningful difference.
                        </p>

                        <RegisterButton />
                    </div>
                </div>
            </div>

        </div>
    );
}