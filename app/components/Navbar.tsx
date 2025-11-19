
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RegisterButton } from './registerButton/RegisterButton';


const Navbar = () => {
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Discover Bloom - Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDiscoverOpen(true)}
              onMouseLeave={() => setIsDiscoverOpen(false)}
            >
              <button className="text-gray-700 hover:text-teal-600 font-medium flex items-center">
                Discover Bloom
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDiscoverOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                    About Us
                  </Link>
                  <Link href="/team" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Services - Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-teal-600 font-medium flex items-center">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link href="/services/consultation" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                    Consultation
                  </Link>
                  <Link href="/services/therapy" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                    Therapy
                  </Link>
                </div>
              )}
            </div>

            {/* Careers */}
            <Link href="/careers" className="text-gray-700 hover:text-teal-600 font-medium">
              Careers
            </Link>

            {/* Contact */}
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium">
              Contact
            </Link>

       <RegisterButton/>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-teal-600"
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
            {/* Discover Bloom Mobile */}
            <div>
              <button 
                onClick={() => setIsDiscoverOpen(!isDiscoverOpen)}
                className="w-full text-left text-gray-700 hover:text-teal-600 font-medium flex justify-between items-center py-2"
              >
                Discover Bloom
                <svg className={`w-4 h-4 transition-transform ${isDiscoverOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDiscoverOpen && (
                <div className="pl-4 space-y-2">
                  <Link href="/about" className="block py-2 text-gray-600 hover:text-teal-600">
                    About Us
                  </Link>
                  <Link href="/team" className="block py-2 text-gray-600 hover:text-teal-600">
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Services Mobile */}
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left text-gray-700 hover:text-teal-600 font-medium flex justify-between items-center py-2"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-2">
                  <Link href="/services/consultation" className="block py-2 text-gray-600 hover:text-teal-600">
                    Consultation
                  </Link>
                  <Link href="/services/therapy" className="block py-2 text-gray-600 hover:text-teal-600">
                    Therapy
                  </Link>
                </div>
              )}
            </div>

            {/* Careers Mobile */}
            <Link href="/careers" className="block text-gray-700 hover:text-teal-600 font-medium py-2">
              Careers
            </Link>

            {/* Contact Mobile */}
            <Link href="/contact" className="block text-gray-700 hover:text-teal-600 font-medium py-2">
              Contact
            </Link>

            {/* Register Button Mobile */}
          <Link href="/register" className="block cursor-pointer">
  <div className="cursor-pointer w-full bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-md cursor-pointer">
    <span>Register Your Interest</span>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  </div>
</Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;