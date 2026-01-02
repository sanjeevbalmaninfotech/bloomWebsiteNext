
const privacyPolicyMainSection = () => {
    return (
        // Section Padding: Top/Bottom 60px, Left/Right 120px
        <div className="min-h-screen bg-white px-6 py-8 lg:px-[120px] lg:py-[80px] selection:bg-blue-100">
            <div className=" mx-auto">



                {/* Heading: Bloom Health Hospitals Ltd */}
                <h1 className="font-['Axiforma'] font-semibold text-[24px] lg:text-[36px] leading-[110%] tracking-[0%] text-[#000000] mb-4">
                    PRIVACY POLICY – BLOOM HEALTH HOSPITALS LTD
                </h1>

                {/* Date Section */}
                <p className="font-['Axiforma'] font-semibold text-[18px] leading-[100%] tracking-[0%] capitalize text-[#000000] mb-2">
                    Location: Milton Keynes, UK

                </p>
                {/* Date Section */}
                <p className="font-['Axiforma'] font-semibold text-[18px] leading-[100%] tracking-[0%] capitalize text-[#000000] mb-8">
                    Last updated: 27-11-2025
                </p>

                {/* --- Section 0: Introduction --- */}
                <section className="mb-5">

                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] space-y-1">
                        <p>
                            Bloom Health Hospitals Ltd (“we”, “our”, “us”) is committed to protecting your privacy and
                            ensuring that your personal data is handled lawfully, fairly, and transparently in accordance
                            with the UK GDPR, Data Protection Act 2018, and NHS/UK healthcare confidentiality
                            standards.

                        </p>
                        <p>
                            This Privacy Policy explains how we collect, use, store, share, and protect your information when you access our website, receive medical treatment, or interact with us.
                        </p>
                    </div>
                </section>

                {/* --- Section 1: Introduction --- */}
                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        1. Who We Are
                    </h2>

                    {/* Sub-heading in Section 2 */}
                    <span className="font-['Axiforma'] font-semibold text-[15px] leading-[200%] tracking-[0%] text-justify text-[#8A8A8A]">
                        Bloom Health Hospitals Ltd
                    </span>

                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>Registered Office: <span className="text-[#8A8A8A] font-semibold"> 3 Barrett Court, 70 Cardiff Road, Reading, RG1 8ED, United Kingdom</span></p>
                        <p>Company Registration Number (CRN): <span className="text-[#8A8A8A] font-semibold">15494321</span></p>
                        <p>Contact email: <span className="text-[#8A8A8A] font-semibold">compliance@bloom-hospital.co.uk</span></p>
                        <p className="mt-2">
                            This Privacy Policy explains how we collect, use, store, share, and protect your information when you access our website, receive medical treatment, or interact with us.
                        </p>
                    </div>
                </section>




                <section className="mb-5">
                    {/* Existing Section Header */}
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        2. Personal Data We Collect
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                        <p>We may collect the following categories of data:</p>
                    </div>
                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">

                            a) Identity And Contact Information
                        </h3>



                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                'Full name',
                                'Date of birth',
                                'Address',
                                'Email address',
                                'Phone number',
                                'Emergency contact details',

                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                >

                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* New Content from Screenshot */}
                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            b) Medical And Health Information (Special Category Data)
                        </h3>

                        {/* "This includes..." Heading */}
                        <p className="font-['Axiforma'] font-normal text-[16px] leading-[150%] tracking-[0%] text-justify text-[#000000]">
                            This includes, but is not limited to:
                        </p>

                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Medical history",
                                "Diagnosis and treatment plans",
                                "Imaging, pathology, and diagnostic reports",
                                "Consultation notes",
                                "Medication details",
                                "GP referral and previous medical records",
                                "NHS number (where applicable)"
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                >

                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">

                            c) Appointment And Service Information

                        </h3>



                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[

                                "Consultation bookings",
                                " Payment records",
                                "Insurance details",
                                "Communications related to treatment"
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                >

                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">

                            d) Website & Technical Data

                        </h3>

                        {/* "This includes..." Heading */}
                        <p className="font-['Axiforma'] font-normal text-[16px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                            Collected through cookies or analytics:
                        </p>

                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "IP address (anonymised where possible)",
                                "Device and browser type",
                                "Website usage and behavioural patterns",
                                "Google Analytics data",
                                "Google Ads conversions",
                                "Social media pixels (Meta, TikTok, LinkedIn) tracking",
                                "Email marketing engagement (open/click rates)"

                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                >

                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">

                            e) Marketing & Communication Preferences

                        </h3>



                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Consent to email marketing",
                                "Subscription preferences",
                                "Opt-out records"

                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                >

                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>



                </section>

                <section className="mb-5">
                    {/* Existing Section Header */}
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        3. Legal Basis for Processing
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-1">
                        <p>At Bloom, we always process your data under the following lawful bases of UK GDPR, all to ensure that you receive the highest standard of care:</p>
                    </div>

                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">

                            Healthcare Provision
                        </h3>

                        <p className="font-['Axiforma'] font-normal text-[16px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]">
                            For delivering safe, effective medical care, we abide by Article 6(1)(e) & Article 9(2)(h) including:
                        </p>

                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Diagnosis",
                                "Treatment",
                                "Referrals",
                                "Medical reporting",
                                ,].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                    >

                                        <div className="flex h-[22.5px] items-center shrink-0">
                                            <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    <div className=" mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-2">

                            Consent

                        </h3>

                        <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">

                            <p className="font-['Axiforma'] font-normal text-[16px] leading-[150%] tracking-[0%] mb-2 text-justify text-[#8A8A8A]">
                                At Bloom, we always process your data under the following lawful bases of UK GDPR, all to ensure that you receive the highest standard of care:
                            </p>

                        </div>
                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                `Marketing communications`,
                                `Analytics/advertising cookies`,
                                `Optional tracking tools`,
                                `Patient feedback (when not required for care)`


                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                >

                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                            <p>You can withdraw consent at any time through contacting the DPO.</p>
                        </div>

                    </div>
                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            Legal Obligations
                        </h3>

                        <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">


                            <p className="font-['Axiforma'] font-normal text-[16px] leading-[150%] tracking-[0%] mb-2 text-justify text-[#8A8A8A]">
                                At Bloom, we always process your data under the following lawful bases of UK GDPR, all to ensure that you receive the highest standard of care:
                            </p>



                        </div>

                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "UK healthcare laws",
                                "Data accuracy requirements",
                                "Record-keeping rules",
                                "Safeguarding obligations",


                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                >

                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            Legitimate Interests
                        </h3>


                        <p className="font-['Axiforma'] font-normal text-[16px] leading-[150%] tracking-[0%] mb-2 text-justify text-[#8A8A8A]">

                            The following are legitimate interests for our data collection, under Article 6 (1)(f), For purposes such as: </p>
                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Improving services",
                                "Website optimisation",
                                "Security and fraud monitoring",



                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                >

                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>



                </section>

                {/*  section no 4 */}

                <section className="mb-5">
                    {/* Existing Section Header */}
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        4. How We Use Your Information
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-1">
                        <p>
                            The primary instances in which we may use your data to:
                        </p>
                    </div>

                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            Healthcare Delivery
                        </h3>



                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Provide diagnosis, treatment, and medical consultations",
                                "Maintain accurate clinical records",
                                "Share information with clinicians involved in your care",
                                "Handle prescriptions, tests, imaging, and referrals",

                                ,].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                    >

                                        <div className="flex h-[22.5px] items-center shrink-0">
                                            <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            Administrative & Operational
                        </h3>



                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Manage appointments",
                                "Process payments and insurance",
                                "Improve patient experience",


                                ,].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                    >

                                        <div className="flex h-[22.5px] items-center shrink-0">
                                            <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">

                            Marketing

                        </h3>

                        <p className="font-['Axiforma'] font-normal text-[16px] leading-[150%] tracking-[0%] mb-2 text-justify text-[#8A8A8A]">
                            We only send marketing emails with your explicit opt-in consent.  This may include:
                        </p>


                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Health updates",
                                "Service announcements",
                                "Promotions",
                                "Event information",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                >

                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="font-['Axiforma'] font-normal text-[16px] leading-[150%] tracking-[0%] mb-2 text-justify text-[#000000]">
                            Email marketing tools may track:
                        </p>


                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Opens",
                                "Clicks",
                                "Devices used",

                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                >

                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                            <p>You may unsubscribe at any time, and your consent record is securely maintained.</p>
                        </div>
                    </div>

                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">

                            Analytics & Digital Tracking

                        </h3>

                        <p className="font-['Axiforma'] font-normal text-[16px] leading-[150%] tracking-[0%] mb-2 text-justify text-[#000000]">
                            We use tracking technologies to:
                        </p>

                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Improve website performance",
                                "Understand user behaviour",
                                "Optimise ads (Google, Meta, TikTok, LinkedIn)",
                                "Measure campaign effectiveness",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                >

                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                            <p>
                                Tracking is only enabled <strong className="font-semibold">after consent</strong>.
                            </p>
                        </div>
                    </div>




                </section>

                {/*  section number 5 */}
                <section className="mb-5">
                    {/* Existing Section Header */}
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        5. Sharing Your Information
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-1">
                        <p>
                            We may share personal data with; this is subject to your consent:
                        </p>
                    </div>

                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            Healthcare Providers
                        </h3>



                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Clinicians and consultants",
                                "Diagnostic laboratories",
                                "Imaging centres",
                                "NHS services (as part of your care pathway)",


                                ,].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                    >

                                        <div className="flex h-[22.5px] items-center shrink-0">
                                            <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            Technology & Service Partners
                        </h3>



                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Website hosting providers",
                                "Email marketing providers (Brevo/Klaviyo)",
                                "Google Analytics",
                                "Google Ads",
                                "Meta/TikTok/LinkedIn pixel partners",

                                ,].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                    >

                                        <div className="flex h-[22.5px] items-center shrink-0">
                                            <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="space-y-1 mb-2">
                        {/* b) Medical And Health Information */}
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            Regulatory Bodies
                        </h3>
                        <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                            <p>We may share information with the required regulatory bodies, only in instances where there is a legal and statutory obligation. At Bloom, the integrity of our data is central to our organisation. </p>

                            <p>
                                We <strong className="font-semibold">do not sell</strong> personal data.
                            </p>
                        </div>
                    </div>
                </section>
                {/* section 6 */}

                <section className="mb-5">
                    {/* Existing Section Header */}
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        6. Data Retention
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-1">
                        <p>
                            Medical records are stored in accordance with UK healthcare retention standards, typically:
                        </p>
                    </div>

                    <div className="space-y-1 mb-2">


                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Adult medical records: 8 years from last contact",
                                "Children’s records: until age 25",
                                "Imaging/diagnostic records: per NHS retention schedule",
                                "Marketing consent records: until consent withdrawn",

                                ,].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                    >

                                        <div className="flex h-[22.5px] items-center shrink-0">
                                            <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                        </ul>
                        <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                            <p>Website analytics data is retained according to third-party policies.</p>
                        </div>
                    </div>

                </section>

                {/* section 7 */}
                <section className="mb-5">
                    {/* Existing Section Header */}
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        7. Your Rights Under GDPR
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-1">
                        <p>
                            You have the right to:
                        </p>
                    </div>

                    <div className="space-y-1 mb-2">


                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "•	Access your data",
                                "•	Request correction",
                                "•	Request deletion (where applicable)",
                                "•	Restrict processing",
                                "•	Withdraw consent",
                                "•	Object to marketing",
                                "•	Data portability",


                                ,].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                    >

                                        <div className="flex h-[22.5px] items-center shrink-0">
                                            <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                        </ul>
                        <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                            <p>
                                To exercise rights, email:
                                <a
                                    href="mailto:compliance@bloom-hospital.co.uk"
                                    className="font-semibold text-blue-600 underline hover:text-blue-800 ml-1"
                                >
                                    compliance@bloom-hospital.co.uk
                                </a>
                            </p>

                            <p className="mt-2">
                                You may also contact the DPO at
                                <a
                                    href="mailto:dpo@bloom-hospital.co.uk"
                                    className="font-semibold text-blue-600 underline hover:text-blue-800 ml-1"
                                >
                                    {` dpo@bloom-hospital.co.uk `}
                                </a>
                                to find out more information regarding these rights.
                            </p>
                        </div>

                    </div>

                </section>

                {/* section 8 */}

                <section className="mb-5">
                    {/* Existing Section Header */}
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        8. Cookies & Tracking
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-1">
                        <p>
                            We use cookies for:
                        </p>
                    </div>

                    <div className="space-y-1 mb-2">


                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Website functionality",
                                "Analytics",
                                "Advertising (Google Ads)",
                                "Email marketing tracking",
                                "Social media remarketing",


                                ,].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                    >

                                        <div className="flex h-[22.5px] items-center shrink-0">
                                            <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                        </ul>
                        <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                            <p>
                                See our detailed <strong className="font-semibold">Cookie &amp; Tracking Policy</strong> for full information, and this can be found.
                            </p>
                        </div>


                    </div>

                </section>

                {/* section 9 */}
                <section className="mb-5">
                    {/* Existing Section Header */}
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        9. Data Security
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-1">
                        <p>
                            We implement strong security measures including:
                        </p>
                    </div>

                    <div className="space-y-1 mb-2">


                        {/* Bullet Points with 4x4px bullets */}
                        <ul className="space-y-1 mb-5">
                            {[
                                "Encryption (at rest and in transit)",
                                "Access controls",
                                "Secure medical systems",
                                "Regular audits",
                                "GDPR-compliant data storage"



                                ,].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]"
                                    >

                                        <div className="flex h-[22.5px] items-center shrink-0">
                                            <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                        </ul>



                    </div>

                </section>
                {/* section 10 */}
                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        10. Contact Details
                    </h2>
                    <div className="font-['Axiforma'] font-semibold text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-1">
                        <p>
                            Bloom Health Hospitals Ltd
                        </p>
                    </div>


                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">


                        <p>
                            3 Barrett Court, 70 Cardiff Road </p>
                        <p>Reading RG1 8ED</p>
                        <p>
                            {`Email : `}
                            <a href="mailto:compliance@bloom-hospital.co.uk">
                                compliance@bloom-hospital.co.uk
                            </a>
                        </p>
                    </div>
                </section>

                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        MEDICAL DISCLAIMER
                    </h2>

                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]">
                        <p>
                            The content on the Bloom Health Hospitals website, including articles, blogs,
                            service descriptions, and general health information, is provided <span className="font-semibold ">for educational and informational purposes only</span>.
                        </p>

                        <p className="mt-2">
                            It is <span className="font-semibold ">not a substitute</span> for professional medical
                            advice, diagnosis, or treatment.
                        </p>

                        <p className="mt-4">You should always:</p>

                        <ul className="mt-2 space-y-1">
                            {[
                                "Consult a qualified healthcare professional for personalised medical advice",
                                "Not disregard medical advice because of something you read on our site",
                                "Seek immediate emergency care if your condition is urgent"
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    {/* Centered Bullet Point Logic */}
                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-4">
                            Bloom Health Hospitals Ltd does not guarantee that the information on the website is fully accurate, complete, or up to date at all times.
                        </p>

                        <p className="mt-4">
                            Any reliance on the website's content is <span className="font-semibold">at your own risk</span>.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default privacyPolicyMainSection;

