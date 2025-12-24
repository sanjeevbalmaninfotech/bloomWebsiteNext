import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Setup Plus Jakarta Sans
const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-jakarta',
});

const ContactSection = () => {
    return (
        <section className={`w-full max-w-7xl mx-auto px-4 py-12 ${jakarta.variable} font-jakarta`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                {/* ================= LEFT SIDE: Description ================= */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <h2 className="text-[40px] font-bold leading-[100%] text-[#171717]">
                        Contact Us
                    </h2>

                    <div className="text-[15px] font-medium leading-[200%] capitalize">
                        {/* First Heading/Paragraph - Darker Color */}
                        <p className="text-[#8A8A8A] mb-6">
                            For More Complex Questions Or Requests, Please Complete Our Enquiry Form.
                            Providing Detailed Information Helps Us Direct Your Enquiry To The Right
                            Team And Respond More Efficiently.
                        </p>

                        {/* Second Heading/Paragraph - Lighter Grey Color */}
                        <p className="text-[#171717]">
                            We Aim To Respond Within 24 Hours, Though Response Times May Be Slightly
                            Longer During Periods Of High Demand.
                        </p>
                    </div>
                </div>
                {/* ================= RIGHT SIDE: Form ================= */}
                <div className="lg:col-span-8">
                    <form className="space-y-6">

                        {/* Row 1: Names */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="firstName" className="font-semibold text-[#171717]">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="w-full border border-gray-400 rounded-lg p-3 outline-none focus:border-[#2E93A1] transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="lastName" className="font-semibold text-[#171717]">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="w-full border border-gray-400 rounded-lg p-3 outline-none focus:border-[#2E93A1] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Row 2: Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-semibold text-[#171717]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border border-gray-400 rounded-lg p-3 outline-none focus:border-[#2E93A1] transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="font-semibold text-[#171717]">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full border border-gray-400 rounded-lg p-3 outline-none focus:border-[#2E93A1] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Row 3: Service Select */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="service" className="font-semibold text-[#171717]">
                                Service Select
                            </label>
                            <div className="relative">
                                <select
                                    id="service"
                                    className="w-full border border-gray-400 rounded-lg p-3 appearance-none bg-white outline-none focus:border-[#2E93A1] text-gray-600"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select Service</option>
                                    <option value="general">General Enquiry</option>
                                    <option value="appointment">Appointment</option>
                                    <option value="support">Support</option>
                                </select>
                                {/* Custom chevron icon to match design */}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#2E93A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Row 4: Message */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="font-semibold text-[#171717]">
                                Tell Us More About Your Enquiry
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Type your message..."
                                className="w-full border border-gray-400 rounded-lg p-3 outline-none focus:border-[#2E93A1] transition-colors resize-none"
                            ></textarea>
                        </div>

                        {/* Row 5: Terms Checkbox */}
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="terms"
                                className="w-5 h-5 rounded border-gray-300 accent-[#2E93A1] cursor-pointer"
                            />
                            <label htmlFor="terms" className="text-sm font-medium text-gray-700 cursor-pointer select-none">
                                I accept the <span className="underline">Terms</span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="button"
                                className="px-10 py-4 rounded-xl text-white transition-transform active:scale-95 shadow-md"
                                style={{
                                    background: 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)',
                                    fontFamily: 'Axiforma, sans-serif',
                                    fontWeight: 500,
                                    fontSize: '17px',
                                    lineHeight: '160%',
                                    letterSpacing: '-0.02em', // Matches -2% letter spacing
                                    textAlign: 'center',
                                    textTransform: 'capitalize'
                                }}
                            >
                                Submit Enquiry
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;