'use client';
import React, { useState } from 'react';
import ConsentPopup from './ConsentPopup';


export default function PrivacyModal() {
    const [isVisible, setIsVisible] = useState(true);
    const [showCustomize, setShowCustomize] = useState(false);

    const handleCustomize = () => {
        console.log('Customize clicked');
        setShowCustomize(true);
        setIsVisible(false);
    };

    const handleAccept = () => {
        console.log('Accept All clicked');
        setIsVisible(false);

    };

    const handleReject = () => {
        console.log('Reject All clicked');
        setIsVisible(false);

    };

    if (showCustomize) {
        return <ConsentPopup />;
    }

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:left-6 md:right-auto md:bottom-6 md:w-auto">
            <div className="bg-white rounded-3xl shadow-2xl max-w-[520px] w-full p-4 md:p-6 mx-auto">
                {/* Title */}
                <h1
                    className="text-center mb-6"
                    style={{
                        fontFamily: 'Axiforma, sans-serif',
                        fontWeight: 600,
                        fontSize: '22px',
                        lineHeight: '24px',
                        letterSpacing: '0%',
                        color: '#000000'
                    }}
                >
                    We value your privacy
                </h1>

                {/* Description */}
                <p
                    className="mb-8"
                    style={{
                        fontFamily: 'Axiforma, sans-serif',
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: '30px',
                        letterSpacing: '130%',
                        color: '#000000'
                    }}
                >
                    We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-center flex-wrap">
                    <button
                        onClick={handleCustomize}
                        className="transition-all  active:scale-100 text-white font-semibold text-xs  bg-gradient-to-r from-[#157DC1] to-[#49acac] w-full sm:w-[123px]"
                        style={{
                            height: '45px',
                            borderRadius: '6.74px',
                            padding: '8.09px 16.17px'
                        }}
                    >
                        <span
                            className="text-base sm:text-lg lg:text-xl xl:text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-center capitalize"
                            style={{ fontFamily: 'Axiforma, sans-serif' }}
                        >
                            Customize
                        </span>

                    </button>

                    <button
                        onClick={handleAccept}
                        className="transition-all  active:scale-100 text-white font-semibold text-xs  bg-gradient-to-r from-[#157DC1] to-[#49acac] w-full sm:w-[123px]"
                        style={{
                            height: '45px',
                            borderRadius: '6.74px',
                            padding: '8.09px 16.17px'
                        }}
                    >
                        <span
                            className="text-base sm:text-lg lg:text-xl xl:text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-center capitalize"
                            style={{ fontFamily: 'Axiforma, sans-serif' }}
                        >
                            Accept All
                        </span>

                    </button>

                    <button
                        onClick={handleReject}
                        className="transition-all  active:scale-100 text-white font-semibold text-xs  bg-gradient-to-r from-[#157DC1] to-[#49acac] w-full sm:w-[123px]"
                        style={{
                            height: '45px',
                            borderRadius: '6.74px',
                            padding: '8.09px 16.17px'
                        }}
                    >
                        <span
                            className="text-base sm:text-lg lg:text-xl xl:text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-center capitalize"
                            style={{ fontFamily: 'Axiforma, sans-serif' }}
                        >
                            Reject All
                        </span>

                    </button>
                </div>
            </div>
        </div>
    );
}