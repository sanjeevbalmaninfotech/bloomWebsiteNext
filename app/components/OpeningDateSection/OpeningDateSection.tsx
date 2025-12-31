'use client'
export default function OpeningDateSection() {
    return (
        <div>
            {/* Rolling Announcement Banner */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-end p-2 overflow-hidden bg-black/20 backdrop-blur-sm">
                <span
                    className="font-semibold text-[16px] leading-[140%] tracking-normal whitespace-nowrap roll-text text-white"
                    style={{
                        fontFamily: 'Axiforma',
                    }}
                >
                    Opening on 15th January!
                </span>
            </div>
            <style jsx>{`
        @keyframes rollRightToLeft {
            0% {
                transform: translateX(100%);
            }
            100% {
                transform: translateX(-700%);
            }
        }

        .roll-text {
            animation: rollRightToLeft 30s linear infinite;
        }
    `}</style>
        </div>
    )
}