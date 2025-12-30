import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const NewsSection = () => {

  const articles = [
    {
      id: 1,
      date: "02, Jan, 2026",
      title: "Winter Falls, Trips and Seasonal Injuries: Why This Time of Year Is Riskier Than We Realise",
      link: "/blogs2"
    },
    {
      id: 2,
      date: "02, Jan, 2026",
      title: "Post-Holiday Recovery: How to Get Your Energy Back After the Festive Season",
      link: "/blogs3"
    }
  ];

  return (
    <>
      <section className="w-full py-12 px-6 sm:py-16 sm:px-12 lg:py-[60px] lg:px-[120px] bg-white">
        <div className="max-w-[1440px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">

            {/* LEFT SECTION */}
            <div className="flex flex-col justify-between h-full">

              {/* TOP CONTENT */}
              <div className="mb-8 lg:mb-0">
                <h1 className="font-semibold text-3xl sm:text-4xl lg:text-[36px] leading-[40px] tracking-[-0.02em] text-gray-900 mb-4">
                  News At{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient( #157DC1 0%, #49acac )'
                    }}
                  >
                    Bloom
                  </span>
                </h1>

                <p className="text-gray-600 text-sm sm:text-[15px] lg:text-[16px] leading-relaxed mb-2">
                  News at Bloom brings you timely health stories, expert perspectives and seasonal advice, created to help you better understand the health issues affecting our community. From winter illnesses and injury prevention to wellbeing trends and everyday health concerns, our content is shaped by real experiences and trusted clinical insight.
                </p>

                <p className="text-gray-600 text-sm sm:text-[15px] lg:text-[16px] leading-relaxed mb-2">
                  Through clear, reliable information and thoughtful guidance, we aim to support you and your family with care, confidence and informed decision-making. Whether you are looking to stay well, manage symptoms, or simply understand your health better, News at Bloom is here to help you feel informed, reassured and supported throughout the year.
                </p>

                {/* Get More Button */}
                {/* <button
                  className="flex items-center justify-center gap-4 rounded-lg text-white hover:opacity-90 transition-opacity w-[172px] h-[46px]"
                  style={{
                    background: "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)"
                  }}
                >
                  <span className="w-[80px] h-[24px] flex items-center justify-center text-[17px] leading-[24px] font-medium text-center">
                    Get More
                  </span>

                  <img
                    src="/Arrow-Right.svg"
                    alt="Arrow Right"
                    className="invert brightness-0 w-[20px] h-[20px]"
                  />
                </button> */}


              </div>

              {/* 2x2 NEWS CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* 2. Map through the array instead of [1, 2] */}
                {articles.map((article) => (
                  <Link href={article.link} key={article.id}>
                    <div className="bg-blue-50 rounded-lg px-8 py-12 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="space-y-3">
                        <div className="text-sm text-gray-600">{article.date}</div>

                        <h3 className="font-semibold text-[22px] text-gray-900 leading-tight">
                          {article.title}
                        </h3>

                        <span className="inline-block text-blue-600 text-sm font-medium pt-2">
                          See More
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>


            <div className="h-full min-h-[400px]">
              <Link href="/blogs">
                <div className="bg-[#157dc1] rounded-lg overflow-hidden w-full h-full flex flex-col cursor-pointer hover:opacity-95 transition-opacity">

                  {/* IMAGE - 40% height */}
                  <div className="relative w-full h-[50%] flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=400&fit=crop"
                      alt="Featured News"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT - 60% height */}
                  <div className="px-4 py-1 h-[50%] flex flex-col justify-center">

                    {/* Date and Category - Same Line with Gap */}
                    <div className="flex items-center gap-6 mb-1 lg:mb-1">
                      <span className="text-white text-[24px] font-semibold">
                        15, Jan, 2026
                      </span>
                    </div>

                    <h2 className="font-semibold text-[24px] text-white mb-4 lg:mb-6 leading-tight">
                      What Is the "Super Flu" and Why This Winter Has Put the UK Healthcare System Under Pressure
                    </h2>
                    <p className="text-[15px] text-white opacity-90 leading-relaxed">
                      Many people in the UK are seeing something strange as winter 2025 approaches: flu appears to be widespread. Workplace sick days are increasing, local hospitals and surgeries are feeling the strain. Health services are referring to this as one of the most difficult flu seasons in recent memory because influenza infections are increasing earlier and more quickly than usual.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default NewsSection;
