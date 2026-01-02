
export default function CookiePolicyMainSection() {


    return (
        // Section Padding: Top/Bottom 60px, Left/Right 120px
        <div className="min-h-screen bg-white px-6 py-8 lg:px-[120px] lg:py-[80px] selection:bg-blue-100">
            <div className=" mx-auto">

                <h1 className="font-['Axiforma'] font-semibold text-[24px] lg:text-[36px] leading-[110%] tracking-[0%] text-[#000000] mb-4">
                    Bloom Health Hospitals Ltd – Cookie & Tracking Policy
                </h1>

                {/* Date Section */}
                <p className="font-['Axiforma'] font-semibold text-[18px] leading-[100%] tracking-[0%] capitalize text-[#000000] mb-2">
                    Location: Milton Keynes, UK

                </p>
                {/* Date Section */}
                <p className="font-['Axiforma'] font-semibold text-[18px] leading-[100%] tracking-[0%] capitalize text-[#000000] mb-8">
                    Last updated: 02-01-2026
                </p>

                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1 space-y-1">
                        1. What Are Cookies?
                    </h2>



                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] ">
                        <p>Cookies are small text files placed on your device when you visit our website. They collect information that helps us recognise your device, remember your preferences, and analyse how visitors use our site.
                            Some cookies are <span className="font-semibold">essential</span> for the website to function,
                            while others are optional and require your consent.
                        </p>
                    </div>
                </section>

                <section className="mb-5">
                    {/* Section Header */}
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        2. Types of Cookies We Use
                    </h2>

                    {/* a) Essential Cookies */}
                    <div className="space-y-1 mb-2">
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            a) Essential Cookies
                        </h3>
                        <p className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                            These are required for:
                            <ul className="space-y-1 mb-5">
                                {[
                                    "Website security",
                                    "Session management",
                                    "Form submissions",
                                    "Booking or enquiry functions",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]">
                                        <div className="flex h-[22.5px] items-center shrink-0">
                                            <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </p>
                    </div>

                    {/* b) Performance & Analytics Cookies */}
                    <div className="space-y-1 mb-2">
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            b) Performance & Analytics Cookies
                        </h3>
                        <p className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-2">
                            These cookies are used to understand how visitors use our site so we can improve it. This is useful in enhancing your experience and our care.
                        </p>
                        <p className="font-['Axiforma'] font-normal text-[16px] leading-[150%] tracking-[0%] text-justify text-[#000000]">
                            Through Google Analytics
                        </p>

                        <p className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                            We may collect: </p>
                        <ul className="space-y-1 mb-5">
                            {[
                                "Anonymised IP address",
                                "Device and browser type",
                                "Pages visited and time spent",
                                "Clicks and navigation",
                                "City-level location",
                                "Interaction with online forms"
                            ].map((item, index) => (

                                <li key={index} className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]">
                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* c) Advertising & Remarketing Cookies */}
                    <div className="space-y-1 mb-2">
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            c) Advertising & Remarketing Cookies
                        </h3>
                        <p className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-2">
                            Our advertising and remarketing cookies will only be used with your explicit consent. These are used to allow our advertising and marketing to be relevant and useful to you.
                        </p>
                        <p className="font-['Axiforma'] font-normal text-[16px] leading-[150%] tracking-[0%] text-justify text-[#000000]">
                            Through Google Ads Tracking
                        </p>

                        <p className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                            we may collect: </p>
                        <ul className="space-y-1 mb-5">
                            {[
                                "Pages viewed",
                                "Conversions (calls, form submissions, bookings)",
                                "Interests and browsing behaviour",
                                "Anonymous identifiers for remarketing"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]">
                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* d) Email Marketing Tracking */}
                    <div className="space-y-1 mb-2">
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            d) Email Marketing Tracking
                        </h3>
                        <p className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-2">
                            If you opt in to receive marketing emails, our email tools may collect information to help us send relevant content and comply with GDPR consent requirements, including:
                        </p>
                        <ul className="space-y-1 mb-5">
                            {[
                                "Whether you opened an email",
                                "Links clicked",
                                "Time and device used",
                                "IP address used at sign-up (for GDPR consent logging)",
                                "Subscription preferences"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]">
                                    <div className="flex h-[22.5px] items-center shrink-0">
                                        <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* e) Social Media Pixels */}
                    <div className="space-y-1 mb-2">
                        <h3 className="font-['Axiforma'] font-normal text-[18px] lg:text-[22px] leading-[200%] tracking-[0%] text-justify text-[#000000]">
                            e) Social Media Pixels
                        </h3>
                        <p className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-2">
                            We use pixels from social platforms (Meta, TikTok, and LinkedIn) to measure ad performance and improve relevance. We do not receive personal profile data or direct identifiers from these platforms. They may collect:
                        </p>
                        <ul className="space-y-1 mb-5">
                            {[
                                "Pages visited on our website",
                                "Button clicks and form interactions",
                                "Device/browser information",
                                "Anonymous behavioural data for ad optimisation"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]">
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
                    {/* 3. How We Use Data Collected Through Cookies */}
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        3. How We Use Data Collected Through Cookies
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                        <p>We use cookie-collected data to enhance our services and your experience. This includes:</p>
                    </div>
                    <ul className="space-y-1 mb-5">
                        {[
                            "Improving website functionality",
                            "Analysing traffic and user behaviour",
                            "Enhancing service quality",
                            "Delivering relevant advertising (only with consent)",
                            "Personalising email marketing (only with consent)"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]">
                                <div className="flex h-[22.5px] items-center shrink-0">
                                    <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-8">
                        <p>We never sell personal data. We never share identifiable information without a lawful basis or unless we are legally required to do so.</p>
                    </div>

                    {/* 4. Email Marketing & Tracking */}
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        4. Email Marketing & Tracking
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                        <p>We only send marketing emails, such as newsletters, health updates, and service announcements, to individuals who have explicitly opted in, as required by GDPR.</p>
                        <p> For these emails, we use tracking to:</p>
                    </div>
                    <ul className="space-y-1 mb-5">
                        {[
                            "Analyse engagement (opens, clicks, and reads)",
                            "Improve relevance and content quality",
                            "Personalise communication"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]">
                                <div className="flex h-[22.5px] items-center shrink-0">
                                    <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-8">
                        <p>
                            You can withdraw your consent at any time using the “unsubscribe” link in any email or by emailing <strong>compliance@bloom-hospital.co.uk</strong>. We maintain records of consent as required under GDPR.
                        </p>
                    </div>

                    {/* 5. Third-Party Cookies */}
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        5. Third-Party Cookies
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                        <p>Our third-party partners may utilise cookies to provide their services. These partners include:</p>
                    </div>
                    <ul className="space-y-1 mb-5">
                        {[
                            "Google",
                            "Meta (Facebook/Instagram)",
                            "TikTok",
                            "LinkedIn",
                            "Brevo / Klaviyo / Hubspot / Mailchimp",
                            "Website hosting and analytics providers"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]">
                                <div className="flex h-[22.5px] items-center shrink-0">
                                    <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-8">
                        <p>All partners operate under GDPR-compliant agreements to ensure the protection of your data.</p>
                    </div>

                    {/* 6. Managing Your Cookie Preferences */}
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        6. Managing Your Cookie Preferences
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                        <p>You have full control over your cookie settings. You can choose to:</p>
                    </div>
                    <ul className="space-y-1 mb-5">
                        {[
                            "Accept all cookies",
                            "Reject non-essential cookies",
                            "Change your preferences at any time",
                            "Disable cookies through your browser settings"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]">
                                <div className="flex h-[22.5px] items-center shrink-0">
                                    <span className="block h-[4px] w-[4px] rounded-full bg-[#8A8A8A]" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-8">
                        <p>Please note that disabling some cookies may affect website performance or certain features, such as forms and booking systems.</p>
                    </div>

                    {/* 7. Changes to This Policy */}
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        7. Changes to This Policy
                    </h2>
                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-4">
                        <p>We may update this Cookie & Tracking Policy periodically to reflect changes in our practices. Any updates will be posted on this page with a revised date.</p>
                    </div>
                </section>

                <section className="mb-5">
                    <h2 className="font-['Axiforma'] font-semibold text-[20px] lg:text-[28px] leading-[150%] tracking-[0%] text-justify text-[#000000] mb-1">
                        10. Contact Details
                    </h2>

                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-1">
                        <p>For questions about cookies or tracking:</p>
                    </div>

                    <div className="font-['Axiforma'] font-semibold text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A] mb-1">
                        <p>Bloom Health Hospitals Ltd</p>
                    </div>

                    <div className="font-['Axiforma'] font-normal text-[15px] leading-[150%] tracking-[0%] text-justify text-[#8A8A8A]">
                        <p>
                            Email:
                            <span className="font-semibold ml-1">
                                <a href="mailto:compliance@bloom-hospital.co.uk">
                                    compliance@bloom-hospital.co.uk
                                </a>
                            </span>
                        </p>

                        <p>
                            Address:
                            <span className="font-semibold ml-1">
                                3 Barrett Court, 70 Cardiff Road, Reading RG1 8ED
                            </span>
                        </p>

                        <p>
                            Company Registration Number:
                            <span className="font-semibold ml-1">15494321</span>
                        </p>
                    </div>
                </section>



            </div>
        </div>
    );


}
