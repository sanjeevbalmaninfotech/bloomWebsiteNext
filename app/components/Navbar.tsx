"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { RegisterButton } from "./registerButton/RegisterButton";

const Navbar = () => {

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const servicesRef = useRef<HTMLDivElement | null>(null);

  const mobileServicesRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      // Only handle desktop dropdowns
      if (window.innerWidth >= 768) {
        const clickedOutsideServices = servicesRef.current && !servicesRef.current.contains(target);

        // Only close if clicked outside both (not switching between them)
        if (clickedOutsideServices) {

          setIsServicesOpen(false);
        }
      } else {
        // Handle mobile dropdowns

        const clickedOutsideMobileServices = mobileServicesRef.current && !mobileServicesRef.current.contains(target);


      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);

    setIsServicesOpen(false);
  };

  return (
    <nav className="bg-white  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 ">
        <div className="flex items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" onClick={handleLinkClick}>
              <Image
                src="/BloomLogo.svg"
                alt="Bloom Health Logo"
                width={180}
                height={50}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mx-auto">
            <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Home
            </Link>


            {/* Services */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);

                }}
                className="text-gray-700 hover:text-teal-600 font-medium flex items-center transition-colors"
              >
                Services
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                  <Link
                    href="/pathology"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Pathology
                  </Link>
                  <Link
                    href="/imaging"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Imaging & Screening
                  </Link>
                  <Link
                    href="/ucc"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Urgent Care Centre
                  </Link>
                  <Link
                    href="/plannedCare"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Planned Care (Coming Soon)
                  </Link>
                </div>
              )}
            </div>

            <Link href="/careers" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Careers
            </Link>
            <Link href="/GP" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              For GPs
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Register Button - Right aligned */}
          <div className="hidden md:block">
            <RegisterButton />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-3">


            {/* Mobile Services */}
            <div ref={mobileServicesRef}>
              <button
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);

                }}
                className="w-full text-left text-gray-700 hover:text-teal-600 font-medium flex justify-between items-center py-2 transition-colors"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/pathology"
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    Pathology
                  </Link>
                  <Link
                    href="/imaging"
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    Imaging & Screening
                  </Link>
                  <Link
                    href="/ucc"
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    Urgent Care Centre
                  </Link>
                  <Link
                    href="/plannedCare"
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    Planned Care (Coming Soon)
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/careers"
              onClick={handleLinkClick}
              className="block py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Careers
            </Link>
            <Link href="/GP" className="block py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors">
              For GPs
            </Link>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="block py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Contact
            </Link>

            <div onClick={handleLinkClick} className="mt-4">
              <RegisterButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;