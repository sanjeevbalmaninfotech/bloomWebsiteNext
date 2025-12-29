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
        <div className="fixed bottom-6 left-6 z-50">
            <div className="bg-white rounded-3xl shadow-2xl max-w-[520px] w-full p-6">
                {/* Title */}
                <h1
                    className="text-center mb-6"
                    style={{
                        fontFamily: 'Axiforma, sans-serif',
                        fontWeight: 600,
                        fontSize: '17px',
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
                        fontSize: '12px',
                        lineHeight: '24px',
                        letterSpacing: '0%',
                        color: '#000000'
                    }}
                >
                    We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-center flex-wrap">
                    <button
                        onClick={handleCustomize}
                        className="transition-all hover:scale-105 hover:shadow-lg active:scale-100 text-white font-semibold text-xs"
                        style={{
                            background: 'linear-gradient( #157DC1, #49acac)',
                            width: '123px',
                            height: '31px',
                            borderRadius: '6.74px',
                            padding: '8.09px 16.17px'
                        }}
                    >
                        Customize
                    </button>

                    <button
                        onClick={handleAccept}
                        className="transition-all hover:scale-105 hover:shadow-lg active:scale-100 text-white font-semibold text-xs"
                        style={{
                            background: 'linear-gradient( #157DC1, #49acac)',
                            width: '123px',
                            height: '31px',
                            borderRadius: '6.74px',
                            padding: '8.09px 16.17px'
                        }}
                    >
                        Accept All
                    </button>

                    <button
                        onClick={handleReject}
                        className="transition-all hover:scale-105 hover:shadow-lg active:scale-100 text-white font-semibold text-xs"
                        style={{
                            background: 'linear-gradient( #157DC1, #49acac)',
                            width: '123px',
                            height: '31px',
                            borderRadius: '6.74px',
                            padding: '8.09px 16.17px'
                        }}
                    >
                        Reject All
                    </button>
                </div>
            </div>
        </div>
    );
}