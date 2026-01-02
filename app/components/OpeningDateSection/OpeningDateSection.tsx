'use client'
export default function OpeningDateSection() {
    return (
        <div>
            {/* Rolling Announcement Banner */}
            <div className="absolute top-0 left-0 right-0 z-20 h-[38px] flex items-center justify-end px-2 overflow-hidden bg-black/20 backdrop-blur-sm">
                <span
                    className="font-semibold text-[20px] leading-[140%] whitespace-nowrap roll-text text-white"
                    style={{ fontFamily: 'Axiforma' }}
                >
                    Bloom Health Hospital Open Day: For Medical Community: 10 Jan (12–5 PM) |
                    For Public & Medical Community: 11 Jan (10 AM–5 PM).
                </span>
            </div>

            <style jsx>{`
    @keyframes rollRightToLeft {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    .roll-text {
        animation: rollRightToLeft 60s linear infinite; /* slower */
    }
`}</style>

        </div>
    )
}