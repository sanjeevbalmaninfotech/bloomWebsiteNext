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
        className="btn btn-primary flex items-center justify-center gap-3 w-full sm:w-fit md:w-fit lg:w-fit max-w-fit"
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
