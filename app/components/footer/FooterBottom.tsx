'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import FAQSection from "./FAQSection";
import FooterImage from "./FooterImage";

const CombineFooter = () => {
  return (
    <>
      <FooterImage />
      <FAQSection />

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
                  <Phone size={18} className="text-sky-300 flex-shrink-0" />
                  <a
                    href="tel:07949301632"
                    className="hover:text-sky-200 transition-colors text-base"
                  >
                    07949 301632
                  </a>
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

      <footer className="relative bg-[#003049] text-white overflow-hidden">
        {/* Background Text - BLOOM HEALTH */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <h2 className="text-[180px] md:text-[280px] lg:text-[350px] font-bold text-[#004d6b] whitespace-nowrap">
            BLOOM HEALTH
          </h2>
        </div>

        {/* Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Logo Section */}
            <div className="flex flex-col space-y-4">
              <Link href="/">
                <Image
                  src="/BloomLogo.svg"
                  alt="Bloom Health Logo"
                  width={150}
                  height={40}
                  className="cursor-pointer"
                />
              </Link>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="heading-small mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/cardiology"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Diagnostics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/urgent-care"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Urgent Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/outpatient"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Outpatient
                  </Link>
                </li>
              </ul>
            </div>

            {/* Important Info */}
            <div>
              <h3 className="heading-small mb-4">Important info</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    News & Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="heading-small mb-4">Contact</h3>
              <div className="space-y-3">
                <p className="text-gray-300">24 / 7 Walk-in Centre</p>
              </div>
            </div>

            <>
              <div className="flex space-x-4 pt-2">
                {/* Facebook */}
                <Link
                  href="https://facebook.com/bloomhealthhospital"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://instagram.com/bloomhealthhospitals"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/company/bloom-health-hospitals"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>

                {/* Twitter/X */}
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>

                {/* YouTube */}
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
              </div>
            </>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CombineFooter;
