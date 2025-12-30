
import { RegisterButton } from '../registerButton/RegisterButton';
export default function ImageSection() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/ucc/uccHero.jpg"
                    alt="Information For GPs"
                    className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-cyan-800/80 to-transparent"></div> */}
                {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)]"></div> */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center px-6 md:px-12 lg:px-[120px]">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="max-w-2xl space-y-4">
                        {/* Heading */}
                        <h1 className="font-axiforma font-semibold text-white text-[22px] sm:text-3xl md:text-4xl lg:text-5xl leading-[38px] tracking-[-0.02em] capitalize">
                            Private Urgent Care Centre
                        </h1>
                        <p className="font-axiforma font-semibold text-white text-lg sm:text-xl md:text-[22px] leading-[42px] tracking-[-0.02em] capitalize mt-1">
                            Hospital-based urgent care with on-site diagnostics, open 24/7
                        </p>


                        {/* Description 1 */}
                        <p className="text-gray-100 font-axiforma
                text-base text-[15px] leading-relaxed tracking-tight">
                            Bloom Health Hospital’s Urgent Care Centre provides immediate assessment, diagnosis and treatment without the long waits often associated with emergency departments.
                        </p>

                        {/* Description 2 */}
                        {/* <p className="text-gray-100 font-axiforma
                text-base text-[15px] leading-relaxed tracking-tight">
                            Our </p> */}
                        <div className="mt-6">
                            <RegisterButton />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}