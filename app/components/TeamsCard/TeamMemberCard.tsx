import React from 'react';

type TeamMemberCardProps = {
    name: string;
    role: string;
    imageUrl: string;
};
// Reusable TeamMemberCard Component
export default function TeamMemberCard({ name, role, imageUrl }: TeamMemberCardProps) {
    return (
        <div
            className="relative overflow-hidden w-full rounded-2xl"
            style={{
                aspectRatio: '380 / 300', // Maintains the original proportions
                maxWidth: '380px',
                margin: '0 auto', // Centers the card if container is wider
            }}
        >
            {/* Background Image */}
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-top"
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 25%, #000000 100%)',
                }}
            />

            {/* Text Content - Bottom Left */}
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-3 text-white">
                <h3
                    className="font-semibold text-base sm:text-lg"
                    style={{
                        lineHeight: '1.4',
                        letterSpacing: '-0.18px',
                    }}
                >
                    {name}
                </h3>
                <p
                    className="font-medium text-sm sm:text-[15px] mt-[2px]"
                    style={{
                        lineHeight: '1.33',
                        letterSpacing: '0',
                    }}
                >
                    {role}
                </p>
            </div>
        </div>
    );
}
