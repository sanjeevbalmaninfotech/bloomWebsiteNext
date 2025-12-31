
import React from 'react';

const TermsPage = () => {
    return (
        // Section Padding: Top/Bottom 60px, Left/Right 120px
        <div className="min-h-screen bg-white py-[80px] px-[120px] selection:bg-blue-100">
            <div className=" mx-auto">

                {/* Typo Info: Terms And Conditions */}
                <p className="font-['Axiforma'] font-medium text-[22px] leading-[100%] tracking-[0%] capitalize text-[#000000] mb-2">
                    Terms And Conditions
                </p>

                {/* Heading: Bloom Health Hospitals Ltd */}
                <h1 className="font-['Axiforma'] font-semibold text-[36px] leading-[110%] tracking-[0%] text-[#000000] mb-4">
                    Bloom Health Hospitals Ltd – Website And Services Terms
                </h1>

                {/* Date Section */}
                <p className="font-['Axiforma'] font-medium text-[18px] leading-[100%] tracking-[0%] capitalize text-[#000000] mb-[30px]">
                    Last updated: 02-01-2026
                </p>

                {/* --- Section 1: Introduction ---  */}
                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        1. Introduction
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] space-y-1">
                        <p>
                            1.1. These Terms And Conditions (“Terms”) govern your use of the Bloom Health Hospitals
                            Ltd website, and any appointment booking or healthcare services offered via the website or in
                            person.
                        </p>
                        <p>
                            1.2. By accessing the website or using our services, you confirm that you accept these Terms
                            in full. If you do not accept these Terms, you must not use the website or services.
                        </p>
                    </div>
                </section>

                {/* --- Section 2: About Us --- */}
                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        2. About Us
                    </h2>

                    {/* Sub-heading in Section 2 */}
                    <span className="font-['Axiforma'] font-semibold text-[15px] leading-[200%] tracking-[0%] text-justify text-[#8A8A8A]">
                        Bloom Health Hospitals Ltd
                    </span>

                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>Registered Office: <span className="text-[#8A8A8A] font-semibold"> 3 Barrett Court, 70 Cardiff Road, Reading, RG1 8ED, United Kingdom</span></p>
                        <p>Company Registration Number: <span className="text-[#8A8A8A] font-semibold">15494321</span></p>
                        <p>Contact email: <span className="text-[#8A8A8A] font-semibold">compliance@bloom-hospital.co.uk</span></p>
                        <p className="mt-2">
                            We provide urgent care, GP walk-in services, diagnostics, outpatient care, and other
                            private medical services at our facilities in Milton Keynes and as otherwise advertised.
                        </p>
                    </div>
                </section>

                {/* --- Section 3: . Website Use & Information --- */}
                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        3. Website Use & Information
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>3.1. The website content is provided for general information only. It does not constitute medical advice, diagnosis or treatment.</p>
                        <p>3.2. Use of the website does not create a doctor - patient relationship. This relationship also does not get established when interacting with the administrative and reception staff.</p>
                        <p>3.3. In case of a medical emergency, do not use the website - call 999 or attend your nearest A&E immediately. If you are unsure, please contact 111 regarding advice on non-emergent medical advice.</p>
                        <p>3.4. We make reasonable efforts to ensure information is up to date and accurate, but we do not guarantee completeness or suitability for a particular purpose.</p>
                    </div>
                </section>

                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        4. Appointments, Booking & Walk In Services
                    </h2>



                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>4.1. You may book appointments online through the website, by phone, or attend as a walk in where services allow.</p>
                        <p>4.2. All bookings require accurate and complete patient information. By submitting a booking, you confirm the information provided is true.</p>
                        <p>4.3. We reserve the right to prioritise patients based on clinical urgency. Wait times may vary.</p>
                        <p>4.4. We may cancel or reschedule bookings due to unforeseen circumstances (staff unavailability, equipment failure, emergency demand). In such cases, we will inform you as soon as reasonably possible and attempt to offer alternative slots.</p>
                    </div>
                </section>


                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        <section className="mb-3">
                            <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                                5.Payments & Fees
                            </h2>
                            <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                                <p>
                                    5.1. All services provided by Bloom Health Hospitals Ltd are private and self-pay, unless otherwise agreed.
                                </p>
                                <p>
                                    5.2. Payment must be made at or before the time of consultation, diagnostic tests, or treatment. We accept payment methods as specified on the website or at point of care.
                                </p>
                                <p>
                                    5.3. If payment is not completed, we reserve the right to refuse to provide further services until payment is settled.
                                </p>
                            </div>
                        </section>
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p></p>
                    </div>
                </section>

                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        6. Cancellation & Refund Policy
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>
                            6.1. If you cancel an appointment with less than 24 hours’ notice, a cancellation fee may apply (as per the fee schedule at the time of booking).
                        </p>
                        <p>
                            6.2. Refunds will only be provided where clinically appropriate, or when required under applicable law.
                        </p>
                        <p>
                            6.3. No-shows without prior cancellation may result in full-service charge.
                        </p>
                    </div>
                </section>

                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        7. Patient Obligations & Clinical Responsibility
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>
                            7.1. You must provide accurate, complete and truthful medical history and personal information.
                        </p>
                        <p>
                            7.2. You agree to follow any instructions provided by our clinical staff.
                        </p>
                        <p>
                            7.3. Our clinicians make treatment decisions based on professional judgement at the time of consultation, and you acknowledge that medicine has inherent limitations and risks.

                        </p>
                    </div>
                </section>

                {/* Online Services, Data & Consent */}
                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        8.Online Services, Data & Consent
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>8.1. Use of online booking, forms, contact requests or newsletter subscription constitutes consent to data collection and processing under our Privacy Policy.</p>
                        <p>8.2. You may withdraw consent at any time, subject to the terms of our Privacy Policy.</p>

                    </div>
                </section>

                {/* 9. External Links & Third-Party Content */}
                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        9. External Links & Third-Party Content
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>9.1. The website may contain links to third party websites for convenience. These links do not imply endorsement.</p>
                        <p>9.2. Bloom Health Hospitals Ltd is not responsible for the content, accuracy, compliance or availability of third-party sites. Use of third-party links is at your own risk.</p>

                    </div>
                </section>
                {/* 10. Limitation of Liability */}
                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        10. Limitation of Liability
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>10.1. To the maximum extent permitted by law, Bloom Health Hospitals Ltd, its directors, employees, agents or affiliates will not be liable for any direct, indirect, incidental, consequential or punitive damages arising from use of the website, reliance on its content, inability to use it, or use of linked external sites.</p>
                        <p>
                            {` 10.2. This includes, but is not limited to, loss or damage from viruses,
                            data corruption, delays, or inaccurate information. If you would like
                            more information regarding this, please contact the Bloom DPO at `}
                            <a
                                href="mailto:dpo@bloom-health.co.uk"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                dpo@bloom-health.co.uk
                            </a>.
                        </p>

                    </div>
                </section>
                {/* 11. Changes to Terms */}
                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        11. Changes to Terms
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>We may revise these Terms at any time by updating this page. The updated Terms will apply from the date we post them. Your continued use of the website or services after changes constitutes acceptance of the revised Terms.</p>
                    </div>
                </section>

                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">

                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p></p>
                    </div>
                </section>
                {/* 12. Governing Law & Jurisdiction */}
                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        12. Governing Law & Jurisdiction
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>These Terms are governed by and construed in accordance with English law. Any disputes arising under or in connection with these Terms shall be subject to the jurisdiction of the English courts.</p>
                    </div>
                </section>
                {/* 13. Dispute Resolution */}
                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        13. Contact Information
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>
                            {` For enquiries about these Terms or our services, email: `}
                            <a
                                href="mailto:compliance@bloom-hospital.co.uk"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                compliance@bloom-hospital.co.uk
                            </a>
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default TermsPage;

