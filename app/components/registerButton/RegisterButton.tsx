"use client"; // This ensures this component is rendered client-side

import Link from "next/link";
import { usePathname } from "next/navigation";

export const RegisterButton = () => {
  const pathname = usePathname();

  // Don't render on /register page
  if (pathname === "/register") {
    return <></>;
  }

  return (
    <Link href="/register">
      <div
        className="
          bg-gradient-to-r from-[#157DC1] to-[#5FC1A3]
          hover:from-[#5FC1A3] hover:to-[#157DC1]
          text-white font-medium 
          px-5 py-3 
          rounded-lg 
          flex items-center justify-center gap-3
          transition-all duration-300 
          shadow-md hover:shadow-lg

          w-full sm:w-fit md:w-fit lg:w-fit
          max-w-fit
        "
      >
        <span className="text-sm sm:text-base lg:text-lg xl:text-xl">
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
