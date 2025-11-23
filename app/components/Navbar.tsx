"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { RegisterButton } from "./registerButton/RegisterButton";

const Navbar = () => {
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ---------- Properly Typed Refs ----------
  const discoverRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // ---------- CLICK OUTSIDE HANDLER ----------
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        discoverRef.current &&
        !discoverRef.current.contains(target)
      ) {
        setIsDiscoverOpen(false);
      }

      if (
        servicesRef.current &&
        !servicesRef.current.contains(target)
      ) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/">
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
          <div className="hidden md:flex items-center space-x-8">

            {/* Discover Bloom */}
            <div className="relative" ref={discoverRef}>
              <button
                onClick={() => setIsDiscoverOpen(!isDiscoverOpen)}
                className="text-gray-700 hover:text-teal-600 font-medium flex items-center"
              >
                Discover Bloom
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {isDiscoverOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-teal-50">
                    About Us
                  </Link>
                  <Link href="/team" className="block px-4 py-2 text-gray-700 hover:bg-teal-50">
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Services */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-teal-600 font-medium flex items-center"
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link href="/services/consultation" className="block px-4 py-2 text-gray-700 hover:bg-teal-50">
                    Consultation
                  </Link>
                  <Link href="/services/therapy" className="block px-4 py-2 text-gray-700 hover:bg-teal-50">
                    Therapy
                  </Link>
                </div>
              )}
            </div>

            <Link href="/careers" className="text-gray-700 hover:text-teal-600 font-medium">Careers</Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium">Contact</Link>

            <RegisterButton />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-teal-600"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
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
            <div>
              <button
                onClick={() => setIsDiscoverOpen(!isDiscoverOpen)}
                className="w-full text-left text-gray-700 hover:text-teal-600 font-medium flex justify-between items-center py-2"
              >
                Discover Bloom
                <svg className={`w-4 h-4 transition-transform ${isDiscoverOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {isDiscoverOpen && (
                <div className="pl-4 space-y-2">
                  <Link href="/about" className="block py-2 text-gray-600 hover:text-teal-600">About Us</Link>
                  <Link href="/team" className="block py-2 text-gray-600 hover:text-teal-600">Our Team</Link>
                </div>
              )}
            </div>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left text-gray-700 hover:text-teal-600 font-medium flex justify-between items-center py-2"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {isServicesOpen && (
                <div className="pl-4 space-y-2">
                  <Link href="/services/consultation" className="block py-2 text-gray-600 hover:text-teal-600">Consultation</Link>
                  <Link href="/services/therapy" className="block py-2 text-gray-600 hover:text-teal-600">Therapy</Link>
                </div>
              )}
            </div>

            <Link href="/careers" className="block py-2 text-gray-700 hover:text-teal-600 font-medium">Careers</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-teal-600 font-medium">Contact</Link>

            <Link href="/register">
              <div className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-6 py-3 rounded-lg text-center shadow-md">
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
