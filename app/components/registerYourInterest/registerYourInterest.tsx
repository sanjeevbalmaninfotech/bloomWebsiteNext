"use client"; // This ensures this component is rendered client-side

import Link from "next/link";
import { usePathname } from "next/navigation";

export const RegisterButton = () => {
    const pathname = usePathname();

    // Don't render on /register page
    //   if (pathname === "/contact") {
    //     return <></>;
    //   }

    return (

        <Link href="">
            {/* <Link href="/contact"></Link> */}
            <div
                className="btn btn-primary flex items-center justify-center gap-3 w-full sm:w-fit md:w-fit lg:w-fit max-w-fit bg-gradient-to-r from-[#157dc1] to-[#49acac] text-white px-6 py-3 rounded-lg hover:from-[#0f6ba3] hover:to-[#4aa88d] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
                <span
                    className="text-base sm:text-lg lg:text-xl xl:text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-center capitalize"
                    style={{ fontFamily: 'Axiforma, sans-serif' }}
                >
                    Register Your Interest
                </span>
                <img
                    src="/Arrow-Right.svg"
                    alt="Arrow Right"
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 invert brightness-0"
                />
            </div>
        </Link>

    );
};
