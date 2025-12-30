



export default function BulletPoints() {


    return (
        <ul className="flex items-center gap-6 mb-6 text-[#000000]">
            <li className="flex items-center gap-2">
                <span className="w-[10px] h-[10px] rounded-full bg-[#157dc1] flex-shrink-0 -translate-y-[1px]"></span>
                <span className="font-['Axiforma'] text-[14px] leading-none">
                    Category
                </span>
            </li>

            <li className="flex items-center gap-2">
                <span className="w-[10px] h-[10px] bg-[#157dc1] rounded-full  flex-shrink-0 -translate-y-[1px]"></span>
                <span className="font-['Axiforma'] text-[14px] leading-none">
                    10 min read
                </span>
            </li>
        </ul>

    )

}

