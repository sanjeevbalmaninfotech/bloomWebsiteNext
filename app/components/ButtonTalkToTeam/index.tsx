import Link from "next/link";

export default function ButtonTalkToTeam() {
    return (
        <Link href="/contact">
            <button
                className="
          w-[142px] sm:w-[174px] 
          h-[28px] sm:h-[46px] 
          bg-[#157DC1] 
          text-white 
          rounded-[8px] 
          text-[18px] 
          font-normal 
          leading-[28px] 
          tracking-[-0.18px] 
          text-center 
          align-middle 
          font-axiforma
          transition-all
        "
            >
                Talk to our Team
            </button>
        </Link>
    );
}
