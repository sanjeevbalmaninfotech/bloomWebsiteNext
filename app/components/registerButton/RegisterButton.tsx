import Link from "next/link";
import { primaryButtonClasses } from "@/app/constants/styles/buttons";

export const RegisterButton = () => {
  return (
    <Link
      href="/register"
      className={`${primaryButtonClasses} rounded-lg px-5 py-3 w-full sm:w-fit md:w-fit lg:w-fit max-w-fit text-sm sm:text-base lg:text-lg xl:text-xl`}
    >
      <span>Register Your Interest</span>
      <img
        src="/Arrow-Right.svg"
        alt="Arrow Right"
        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 invert brightness-0"
      />
    </Link>
  );
};
