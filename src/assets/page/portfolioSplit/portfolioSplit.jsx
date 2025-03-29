// import React from "react";
// import Button from "../../../component/ui/Button";

// const AiInsights = [
//   {
//     id: 1,
//     text: "Automated portfolio tracking across all investment entities",
//   },
//   {
//     id: 2,
//     text: "Real-time capital allocation insights to optimize risk and returns",
//   },
//   {
//     id: 3,
//     text: "AI-based forecasting models for future wealth growth projections.",
//   },
//   {
//     id: 4,
//     text: "Entity-wise capital split reports, detailing ownership and distribution",
//   },
//   {
//     id: 5,
//     text: "Intelligent liquidity management to optimize cash reserves and asset allocation.",
//   },
// ];

// const benchmarkingInsights = [
//   {
//     id: 1,
//     text: "Real-time benchmarking of portfolios against market indices like NIFTY, SENSEX, and global benchmarks.",
//   },
//   {
//     id: 2,
//     text: "Risk-adjusted return analysis using AI to compare performance with industry standards.",
//   },
//   {
//     id: 3,
//     text: "Automated alerts for underperforming assets, allowing proactive investment decisions.",
//   },
//   {
//     id: 4,
//     text: "Custom benchmarking tools to compare individual portfolios, mutual funds, PMS, and alternative investments.",
//   },
// ];

// function PortfolioSplit() {
//   return (
//     <>
//       <section className="w-full relative  ">
//         <div
//           className="absolute inset-0 bg-cover bg-no-repeat"
//           style={{
//             backgroundImage: "url('/derivative/derivative-gradient.png')",
//           }}
//         ></div>
//         <div className="bg-gradient-to-tr from-[#380613] to-[#060633] py-[60px]">
//           <div className=" max-w-7xl mx-auto px-2 md:px-12 z-20 ">
//             <div className="flex flex-col lg:flex-row gap-[58px]  ">
//             <div className=" w-full flex items-center justify-center">
//                 <img
//                   className=""
//                   src="/Portfolio-Split/portfolioSplit.png"
//                 />
//               </div>
//               <div className=" z-40 relative ">
//                 <h2 className="text-white leading-16 text-[42px] md:text-[52px] open-sans font-bold">
//                 AI-Based{" "}
//                   <span className="bg-gradient-to-r from-[#FFBE0C] to-[#7A41FF] text-transparent bg-clip-text leading-4">
//                   Investment{" "}
//                   </span>{" "} <br/>
//                   Benchmarking
//                 </h2>
//                 <p className="lg:mt-[32px] mt-[26px] text-white open-sans font-semibold text-[20px] leading-relaxed">
//                 Benchmarking investments against market standards ensures optimal financial performance. Our intelligent automation offers:
//                 </p>
//                 <div className=" mt-4 ">
//                 {benchmarkingInsights.map((item) => (
//                   <div key={item.id} className="flex items-center  gap-2.5 mt-4">
//                     <div className="h-2.5 w-2.5 rounded-full shrink-0 bg-[#FFBA41]"></div>
//                     <span className="font-normal open-sans text-[20px] text-[#FFFFFF]">
//                       {item.text}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//                 <p className="mt-[24px] text-white open-sans font-semibold text-[20px] leading-relaxed">
//                 Optimize your investments by benchmarking against the best-performing portfolios!
//                 </p>

//                 <div className="flex justify-center lg:justify-start">
//                   <Button
//                     bgColor={"#FFFFFF"}
//                     text={"Explore More"}
//                     textColor={"#5D0023"}
//                     mt={20}
//                   />
//                 </div>
//               </div>

//             </div>
//           </div>
//           <img
//             className="absolute w-[300px] right-0 top-[100px] sm:top-[60px] md:top-[40px] lg:top-44"
//             src="/portfolio/portfolio-right-circle.png"
//           />
//         </div>
//       </section>
//     </>
//   );
// }

// export default PortfolioSplit;

import React from "react";
import Button from "../../../component/ui/Button";

const insights = [
  {
    id: 1,
    text: "Entity-wise investment segregation, ensuring complete visibility into ownership structures.",
  },
  {
    id: 2,
    text: "Automated portfolio splits, detailing assets held by individuals, trusts, and family businesses.",
  },
  {
    id: 3,
    text: "Historical data tracking, providing insights into financial growth from inception.",
  },
  {
    id: 4,
    text: "AI-powered risk analysis, ensuring the right diversification across entities.",
  },
];

function PortfolioSplit() {
  return (
    <section className="w-full relative">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/derivative/derivative_bg.png')",
        }}
      ></div>
      <div className="bg-[#1467d6] py-[80px]">
        <div className="max-w-7xl mx-auto px-2 md:px-12 z-20">
          <div className="flex flex-col-reverse lg:flex-row-reverse gap-[58px] items-center">
            {/* Left Side: Text Content */}
            <div data-aos="fade-up-left" data-aos-duration="1000" className="z-40 relative">
              <h2 className="text-white mobile_heading_font leading-9 md:leading-13 text-[28px] md:text-[42px] poppins-bold">
                Entity-Wise Investment Portfolio Split From Inception Till Date
              </h2>
              <p className="lg:mt-[26px] mt-[24px] mobile_para_font md:leading-[30px] text-white poppins-semibold text-justify text-[16px] md:text-[18px] leading-relaxed">
                Tracking and structuring investments across multiple entities
                (individuals, trusts, corporations, family members) requires
                intelligent automation. Our AI-driven solution ensures:
              </p>
              <div className="mt-4">
                {insights.map((item) => (
                  <div key={item.id} className="flex items-start gap-2.5 mt-4">
                    {/* <div className="h-2.5 w-2.5 rounded-full shrink-0 bg-[#FFBA41] mt-2"></div> */}
                    <img
                      src="/white_point_arrow.png"
                      className="mt-1.5"
                      alt=""
                    />
                    <span className="poppins-regular md:leading-[30px]  mobile_para_font text-justify text-[16px] md:text-[18px] text-[#FFFFFF]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-[24px] text-white mobile_para_font md:leading-[30px] poppins-semibold text-justify text-[16px] md:text-[18px] leading-relaxed">
                Manage and track investments across multiple entities with
                AI-powered automation!
              </p>

              {/* <div className="flex justify-center lg:justify-start mt-6">
                <Button
                  bgColor={"#FFFFFF"}
                  text={"Explore More"}
                  textColor={"#5D0023"}
                />
              </div> */}
            </div>

            {/* Right Side: Image */}
            <div
              data-aos="fade-up-right" data-aos-duration="1000"
              className="w-full flex items-center justify-center"
            >
              <img
                className=""
                src="/Portfolio-Split/portfolio-split.png"
                alt="Portfolio Split"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSplit;
