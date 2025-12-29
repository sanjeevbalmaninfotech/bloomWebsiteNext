export default function HeroImage() {
    return (
        <>

            <div className="relative w-full h-screen overflow-hidden font-['Axiforma']">

                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070"
                        alt="Medical imaging professional reviewing scans"
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) -0.14%, rgba(0, 0, 0, 0.8) 42.21%)',
                        }}
                    />
                </div>

                {/* Content Container - Centered Horizontally & Vertically */}
                <div className="relative h-full flex items-center justify-center px-4 md:px-12">

                    {/* White Card */}
                    <div className="bg-white rounded-[40px] px-8 py-6 shadow-lg max-w-4xl mx-auto flex flex-col items-center justify-center">

                        {/* Main Heading */}
                        <h1 className="text-black text-center font-medium text-[36px] leading-[50px] tracking-[-0.01em]">
                            There are no current vacancies at this time.
                        </h1>

                        {/* Sub Heading */}
                        <p className="text-[#8a8a8a] text-center font-normal text-[22px] leading-[200%] tracking-[-0.01em] capitalize mt-2">
                            Please check back for updates on future openings.
                        </p>

                    </div>

                </div>
            </div>

        </>
    );
}