
import { Phone, Mail } from "lucide-react";
export default function MapFooter() {

    return (

        <section className="relative bg-sky-600 py-16 px-4 lg:px-8 overflow-hidden min-h-[500px]">
            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* 1. Left section - Smaller height */}
                    <div className="lg:col-span-3 text-white space-y-4 bg-sky-600 rounded-2xl p-6">
                        <div>
                            <h2 className="heading-medium mb-1">
                                Find Us Easily,
                            </h2>
                            <h2 className="heading-medium">
                                Reach Us Anytime
                            </h2>
                        </div>

                        <p className="text-paragraph text-white/90">
                            At Bloom Healthcare, our superspecialist doctors provide the
                            highest quality of care through a team-based, doctor-led model.
                        </p>

                        {/* ✅ Updated Directions Button */}
                        <button
                            onClick={() =>
                                window.open(
                                    "https://www.google.com/maps/search/?api=1&query=163-175+Grafton+Gate,+Milton+Keynes,+UK,+MK9+1AE",
                                    "_blank"
                                )
                            }
                            className="flex items-center gap-2 bg-white text-sky-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-sky-50 transition-colors text-sm"
                        >
                            <span>Directions</span>
                            <img
                                src="/Arrow-Right.svg"
                                alt="Arrow Right"
                                className="w-4 h-4"
                            />
                        </button>
                    </div>

                    {/* 2. Middle section - Taller with more content */}
                    <div className="lg:col-span-4 bg-sky-950 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-white space-y-5 shadow-xl">
                        <div className="space-y-1">
                            <h3 className="heading-medium">
                                163-175 Grafton Gate,
                            </h3>
                            <h3 className="heading-medium">
                                Milton Keynes,
                            </h3>
                            <p className="text-lg font-semibold mt-2">MK9 1AE UK</p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-3">
                                {/* <Phone size={18} className="text-sky-300 flex-shrink-0" />
                                <a
                                    href="tel:07949301632"
                                    className="hover:text-sky-200 transition-colors text-base"
                                >
                                    01908 22 7777
                                </a> */}
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-sky-300 flex-shrink-0" />
                                <a
                                    href="mailto:info@bloom-health.co.uk"
                                    className="hover:text-sky-200 transition-colors break-all text-base"
                                >
                                    info@bloom-health.co.uk
                                </a>
                            </div>
                        </div>

                        {/* ✅ Updated Get Our Location Button */}
                        <button
                            onClick={() =>
                                window.open(
                                    "https://www.google.com/maps/search/?api=1&query=163-175+Grafton+Gate,+Milton+Keynes,+UK,+MK9+1AE",
                                    "_blank"
                                )
                            }
                            className="btn btn-primary flex items-center gap-2 mt-4 w-fit"
                        >
                            <span>Get Our Location</span>
                            <img
                                src="/Arrow-Right.svg"
                                alt="Arrow Right"
                                className="w-5 h-5 bg-white/20  brightness-200"
                            />
                        </button>
                    </div>

                    {/* 3. Right side - Map Image */}
                    <div className="lg:col-span-5 relative flex items-center justify-end">
                        <img
                            src="/Map.png"
                            alt="UK Map"
                            className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )

}