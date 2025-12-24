import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Phone, Mail } from 'lucide-react';

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-jakarta',
});

const InfoSection = () => {
    return (
        <section className={`w-full max-w-7xl mx-auto p-4 mt-12 ${jakarta.variable}`}>
            <div className="flex flex-col gap-4">

                {/* ==================== TOP ROW (30% - 70% Split) ==================== */}
                <div className="flex flex-col lg:flex-row gap-4 h-full">

                    {/* --- LEFT: Opening Times (30%) --- */}
                    <div
                        className="w-full lg:w-[30%] rounded-2xl p-8 text-white shadow-sm flex flex-col justify-between"
                        style={{ background: 'linear-gradient(132.66deg, #157DC1 -11.36%, #5FC1A3 150.43%)' }}
                    >
                        <div>
                            {/* Heading: Axiforma, SemiBold, 20px */}
                            <h2 className="font-axiforma text-[20px] font-semibold leading-[140%] mb-6">
                                Opening Times
                            </h2>

                            {/* Bullet Points: Axiforma, Medium, 15px */}
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start gap-3 font-axiforma text-[15px] font-medium leading-[140%]">
                                    <span className="mt-[7px] w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                    <span>
                                        Urgent Care Centre: Open 24 hours a day, 7 days a week
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 font-axiforma text-[15px] font-medium leading-[140%]">
                                    <span className="mt-[7px] w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                    <span>
                                        GP Access : Available 8:00 am – 12:00 midnight
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Description: Axiforma, 15px (matches bullet size) */}
                        <p className="font-axiforma text-[15px] leading-[140%] opacity-90">
                            This ensures care is available when you need it, whether urgently or by planned appointment.
                        </p>
                    </div>

                    {/* --- RIGHT: Visit Us (70%) --- */}
                    <div className="w-full lg:w-[70%] rounded-2xl p-8 bg-[#157DC11A] text-[#131313] flex flex-col justify-center">
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

                            {/* ================= LEFT SIDE: Visit Us & Address ================= */}
                            <div className="md:w-[30%] flex flex-col gap-4">
                                {/* Heading: Plus Jakarta Sans, Bold, 20px */}
                                <h2 className="font-jakarta font-bold text-[20px] leading-[140%] text-[#131313]">
                                    Visit Us
                                </h2>

                                {/* Address: Plus Jakarta Sans, Bold, 15px, Blue Color */}
                                <div className="font-jakarta font-bold text-[15px] leading-[140%] text-[#157DC1]">
                                    <p>Bloom Health</p>
                                    <p>163–175 Grafton Gate</p>
                                    <p>Milton Keynes</p>
                                    <p>MK9 1AE</p>
                                </div>
                            </div>

                            {/* ================= RIGHT SIDE: Description & Directions ================= */}
                            <div className="md:w-[70%]">
                                {/* Main Description: Plus Jakarta Sans, Regular, 15px */}
                                <p className="font-jakarta font-normal text-[15px] leading-[140%] text-[#131313] mb-6">
                                    Bloom Health is centrally located in Milton Keynes city centre, directly
                                    opposite the Santander building, making us easy to find and access
                                </p>

                                <div className="space-y-6">
                                    {/* Travel by Road Section */}
                                    <div>
                                        <h3 className="text-[#157DC1] font-axiforma font-medium text-[15px] leading-[140%] mb-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#157DC1] rounded-full" /> Travel by Road
                                        </h3>
                                        <ul className="pl-5 space-y-1 font-jakarta font-normal text-[12px] leading-[120%] text-[#8A8A8A]">
                                            <li>• Just 2 minutes from the A5</li>
                                            <li>• Approximately 10 minutes from the M1</li>
                                            <li>• Clearly signposted city-centre access routes</li>
                                        </ul>
                                    </div>

                                    {/* Travel by Train Section */}
                                    <div>
                                        <h3 className="text-[#157DC1] font-axiforma font-medium text-[15px] leading-[140%] mb-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#157DC1] rounded-full" /> Travel by Train
                                        </h3>
                                        <ul className="pl-5 space-y-1 font-jakarta font-normal text-[12px] leading-[120%] text-[#8A8A8A]">
                                            <li>• A 5-minute walk from Milton Keynes Central Station</li>
                                            <li>
                                                • Milton Keynes Central is one of the UK’s best-connected stations
                                                {/* Sub-list starts here */}
                                                <ul className="pl-4 mt-1 space-y-1">
                                                    <li> <span className="opacity-60 text-lg leading-none mr-2">◦</span> Direct services to London Euston in ~30–35 minutes</li>
                                                    <li> <span className="opacity-60 text-lg leading-none mr-2">◦</span> Frequent rail links to Birmingham, Manchester, Liverpool, and the North</li>
                                                    <li> <span className="opacity-60 text-lg leading-none mr-2">◦</span> Excellent regional connections across the South East and Midlands</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* ==================== BOTTOM ROW (50% - 50% Split) ==================== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    {/* --- BOTTOM LEFT: Parking (Light Blue) --- */}
                    <div className={`${jakarta.variable} rounded-2xl p-8 bg-[#157DC11A] text-[#131313] min-h-full`}>
                        {/* Heading: Plus Jakarta Sans, Bold, 24px */}
                        <h2 className="font-jakarta font-bold text-[24px] leading-[140%] mb-4 text-[#131313]">
                            Parking & Accessibility
                        </h2>

                        {/* Description: Axiforma, Regular, 15px */}
                        <p className="font-axiforma font-normal text-[15px] leading-[140%] text-[#131313] mb-4">
                            There is convenient council-operated parking located:
                        </p>

                        {/* Bullet Points: Axiforma, Blue Color (#157DC1) */}
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2 font-axiforma text-[15px] leading-[140%] text-[#157DC1] font-medium">
                                <span className="mt-[6px] w-[6px] h-[6px] bg-[#157DC1] rounded-full flex-shrink-0" />
                                <span>Directly outside and surrounding the building</span>
                            </li>
                            <li className="flex items-start gap-2 font-axiforma text-[15px] leading-[140%] text-[#157DC1] font-medium">
                                <span className="mt-[6px] w-[6px] h-[6px] bg-[#157DC1] rounded-full flex-shrink-0" />
                                <span>Offering step-free access straight into our reception</span>
                            </li>
                        </ul>

                        {/* Sub-description for payment (Matches Axiforma style) */}
                        <p className="font-axiforma text-[15px] leading-[140%] text-[#131313] mb-3">
                            Parking payment options include:
                        </p>

                        <ul className="space-y-1 font-axiforma text-[15px] leading-[140%] text-[#157DC1] font-medium">
                            <li className="flex items-start gap-2">
                                <span className="mt-[6px] w-[6px] h-[6px] bg-[#157DC1] rounded-full flex-shrink-0" />
                                <span>Pay-and-display meters</span>
                            </li>
                            <li className="pl-5 text-[#131313] font-normal">
                                <span className="opacity-60 text-lg leading-none mr-2">◦</span>
                                RingGo app
                            </li>
                            <li className="pl-5 text-[#131313] font-normal">
                                <span className="opacity-60 text-lg leading-none mr-2">◦</span>
                                Location code: 8694
                            </li>
                        </ul>
                    </div>

                    {/* --- BOTTOM RIGHT: Call Us (Gradient) --- */}
                    <div
                        className="rounded-2xl p-8 text-white shadow-sm flex flex-col justify-between"
                        style={{ background: 'linear-gradient(132.66deg, #157DC1 -11.36%, #5FC1A3 150.43%)' }}
                    >
                        <div className="flex flex-col gap-6">
                            {/* Phone Block - Stacked Column */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Phone className="w-5 h-5" />
                                    <h3 className="font-axiforma text-[20px] font-semibold leading-[140%]">
                                        Call Us
                                    </h3>
                                </div>
                                <p className="text-[18px] pl-8 font-medium">
                                    01908 227 777
                                </p>
                            </div>

                            {/* Email Block - Stacked Column */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Mail className="w-5 h-5" />
                                    <h3 className="font-axiforma text-[20px] font-semibold leading-[140%]">
                                        E mail Us
                                    </h3>
                                </div>
                                <p className="text-[18px] pl-8 font-medium break-all">
                                    example@bloom-health.co.uk
                                </p>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="mt-6">
                            <hr className="border-white/20 mb-4" />
                            <p className="text-[15px] font-axiforma font-normal leading-[140%] opacity-90">
                                For non-urgent or more detailed enquiries, email is often the quickest
                                way to receive a tailored response.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InfoSection;