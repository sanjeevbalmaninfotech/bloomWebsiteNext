"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { RegisterButton } from "./registerButton/RegisterButton";

const Navbar = () => {
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const discoverRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const mobileDiscoverRef = useRef<HTMLDivElement | null>(null);
  const mobileServicesRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      // Only handle desktop dropdowns
      if (window.innerWidth >= 768) {
        // Check if click is outside both refs
        const clickedOutsideDiscover = discoverRef.current && !discoverRef.current.contains(target);
        const clickedOutsideServices = servicesRef.current && !servicesRef.current.contains(target);

        // Only close if clicked outside both (not switching between them)
        if (clickedOutsideDiscover && clickedOutsideServices) {
          setIsDiscoverOpen(false);
          setIsServicesOpen(false);
        }
      } else {
        // Handle mobile dropdowns
        const clickedOutsideMobileDiscover = mobileDiscoverRef.current && !mobileDiscoverRef.current.contains(target);
        const clickedOutsideMobileServices = mobileServicesRef.current && !mobileServicesRef.current.contains(target);

        // Only close if clicked outside both
        if (clickedOutsideMobileDiscover && clickedOutsideMobileServices) {
          setIsDiscoverOpen(false);
          setIsServicesOpen(false);
        }
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
    setIsDiscoverOpen(false);
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
            {/* Discover Bloom */}
            <div className="relative" ref={discoverRef}>
              <button
                onClick={() => {
                  setIsDiscoverOpen(!isDiscoverOpen);
                  setIsServicesOpen(false);
                }}
                className="text-gray-700 hover:text-teal-600 font-medium flex items-center transition-colors"
              >
                Discover Bloom
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isDiscoverOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDiscoverOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                  <Link
                    href="/about"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/team"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Services */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);
                  setIsDiscoverOpen(false);
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
                    href="/services/consultation"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Consultation
                  </Link>
                  <Link
                    href="/services/therapy"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Therapy
                  </Link>
                </div>
              )}
            </div>

            <Link href="/careers" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Careers
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
          <div className="md:hidden">
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
            {/* Mobile Discover */}
            <div ref={mobileDiscoverRef}>
              <button
                onClick={() => {
                  setIsDiscoverOpen(!isDiscoverOpen);
                  setIsServicesOpen(false);
                }}
                className="w-full text-left text-gray-700 hover:text-teal-600 font-medium flex justify-between items-center py-2 transition-colors"
              >
                Discover Bloom
                <svg
                  className={`w-4 h-4 transition-transform ${isDiscoverOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDiscoverOpen && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/about"
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/team"
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Services */}
            <div ref={mobileServicesRef}>
              <button
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);
                  setIsDiscoverOpen(false);
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
                    href="/services/consultation"
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    Consultation
                  </Link>
                  <Link
                    href="/services/therapy"
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    Therapy
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
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="block py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Contact
            </Link>

            <Link href="/register" onClick={handleLinkClick}>
              <div className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-6 py-3 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
                Register Your Interest
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;