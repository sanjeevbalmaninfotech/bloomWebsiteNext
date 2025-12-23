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
            <div className="relative h-full flex items-center px-6 md:px-12 lg:px-[120px]">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="max-w-2xl space-y-4">
                        {/* Heading */}
                        <h1 className="font-axiforma font-semibold text-white text-[22px] sm:text-3xl md:text-4xl lg:text-5xl leading-[38px] tracking-[-0.02em] capitalize">
                            Information For GPs
                        </h1>
                        <p className="font-axiforma font-semibold text-white text-lg sm:text-xl md:text-[22px] leading-[42px] tracking-[-0.02em] capitalize mt-1">
                            Working in Partnership with Primary Care Across Milton Keynes
                        </p>


                        {/* Description 1 */}
                        <p className="text-gray-100 font-axiforma
                text-base text-[15px] leading-relaxed tracking-tight">
                            Bloom Health is designed to support the vital work delivered by GP practices throughout
                            Milton Keynes. We provide rapid access to urgent care, diagnostics and specialist opinion,
                            helping to ease pressure on primary care, improve continuity, and ensure patients receive
                            timely assessment when they need it most.
                        </p>

                        {/* Description 2 */}
                        <p className="text-gray-100 font-axiforma
                text-base text-[15px] leading-relaxed tracking-tight">
                            Our role is complementary. We recognise the NHS as the backbone of local healthcare, and
                            our services exist to add capacity, improve access, and offer convenience for patients and
                            their GPs, particularly when speed of diagnosis or review can make a meaningful difference.
                        </p>
                        <div className="mt-6">
                            <RegisterButton />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}