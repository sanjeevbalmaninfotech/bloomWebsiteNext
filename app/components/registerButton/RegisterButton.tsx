import Link from "next/link";

export const RegisterButton = () => {
  return (
   <>
<Link href="/register">
  <div className="bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] hover:from-[#157DC1] hover:to-[#5FC1A3] 
    text-white font-medium px-6 py-3 rounded-lg 
    flex items-center space-x-3 transition-all duration-300 
    shadow-md hover:shadow-lg
  ">
    <span className="text-base lg:text-lg xl:text-xl">
      Register Your Interest
    </span>

    <img
      src="/Arrow-Right.svg"
      alt="Arrow Right"
      className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 invert brightness-0"
    />
  </div>
</Link>

</>

  );
};
