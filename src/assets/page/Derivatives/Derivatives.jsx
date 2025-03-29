import React from "react";
import Button from "../../../component/ui/Button";

const AiInsights = [
  {
    id: 1,
    text: "Automated portfolio tracking across all investment entities",
  },
  {
    id: 2,
    text: " capital allocation insights to optimize risk and returns",
  },
  {
    id: 3,
    text: "AI-based forecasting models for future wealth growth projections.",
  },
  {
    id: 4,
    text: "Entity-wise capital split reports, detailing ownership and distribution",
  },
  {
    id: 5,
    text: "Intelligent liquidity management to optimize cash reserves and asset allocation.",
  },
];

const benchmarkingInsights = [
  {
    id: 1,
    text: " benchmarking of portfolios against market indices like NIFTY, SENSEX, and global benchmarks.",
  },
  {
    id: 2,
    text: "Risk-adjusted return analysis using AI to compare performance with industry standards.",
  },
  {
    id: 3,
    text: "Automated alerts for underperforming assets, allowing proactive investment decisions.",
  },
  {
    id: 4,
    text: "Custom benchmarking tools to compare individual portfolios, mutual funds, PMS, and alternative investments.",
  },
];

function Derivatives() {
  return (
    <>
      <section className="w-full relative mt-[60px] md:mt-[90px]">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/derivative/derivative_bg.png')",
          }}
        ></div>
        <div className="bg-[#1467d6] py-[65px] md:py-[90px]">
          <div className=" max-w-7xl mx-auto px-2 md:px-12 z-20 ">
            <div className="flex flex-col lg:flex-row gap-[58px]  ">
              <div
                data-aos="fade-up-right"
                data-aos-duration="1000"
                className=" z-40 relative "
              >
                <h2 className="text-white mobile_heading_font leading-9 md:leading-13 text-[28px] md:text-[42px] poppins-bold">
                  Derivatives <br />
                  {/* <span className="bg-gradient-to-r from-[#FFBE0C] to-[#7A41FF] text-transparent bg-clip-text leading-4"> */}
                  Management {/* </span>{" "} */}
                </h2>
                <p className="lg:mt-[32px] mt-[26px] mobile_para_font text-white poppins-bold text-justify  text-[16px] md:text-[18px] leading-[30px]">
                  F&O Tracking :
                  <span className="font-normal">
                    {" "}
                    Manage Stock, Currency, and Commodity Futures & Options
                    positions with autonomous tracking systems.
                  </span>
                </p>
                <p className="mt-[24px] text-white mobile_para_font poppins-bold text-justify text-[16px] md:text-[18px] leading-[30px]">
                  Data Import :
                  <span className="font-normal">
                    {" "}
                     Import F&O digital contract notes and trade-book files.
                  </span>
                </p>
                <p className="mt-[24px] text-white mobile_para_font poppins-bold text-justify text-[16px] md:text-[18px] leading-[30px]">
                  Profit/Loss Analysis :
                  <span className="font-normal">
                    {" "}
                    Track Realized and Unrealized F&O Profit/Loss with
                    intelligent automation.
                  </span>
                </p>
                <div className="flex justify-center lg:justify-start">
                  {/* <Button
                    bgColor={"#FFFFFF"}
                    text={"Explore More"}
                    textColor={"#5D0023"}
                    mt={20}
                  /> */}
                </div>
              </div>
              <div
                data-aos="fade-up-left"
                data-aos-duration="1000"
                className=" w-full flex items-center justify-center"
              >
                <img
                  className=""
                  src="/derivative/derivative-managment-points.png"
                />
              </div>
            </div>
          </div>
          {/* <img
            className="absolute w-[300px] left-0 top-[100px] sm:top-[60px] md:top-[40px] lg:top-44"
            src="/derivative/left-circle-derivatie.png"
          /> */}
        </div>
      </section>
      <section className="w-full relative">
        <div className="max-w-6xl mx-auto pb-4 py-[65px] md:py-[90px]">
          <div className="flex flex-col gap-[39px] md:flex-row px-2 md:px-12">
            <div data-aos="fade-up-right" data-aos-duration="1000" className="">
              <h2 className="leading-9 mobile_heading_font text-[#12122B] md:leading-13 text-[28px] md:text-[42px] poppins-bold">
                AI & Intelligent <br />{" "}
                {/* <span className="bg-gradient-to-r from-[#FFBE0C] to-[#7A41FF] text-transparent bg-clip-text"> */}
                Automation for <br />
                Capital Holdings
              </h2>
              <p className="mt-[24px] mobile_para_font poppins-semibold md:leading-[30px] text-[#12122A] text-justify text-[16px] md:text-[18px] md:max-w-7xl">
                Managing multiple capital investments across stocks, mutual
                funds (MF), bonds, AIFs, commodities, and private equity
                requires a robust system. Our AI-powered solution ensures:
              </p>
              <div className="mt-4 ">
                {AiInsights.map((item) => (
                  <div key={item.id} className="flex items-start gap-2.5 mt-4">
                    {/* <div className="h-2.5 w-2.5 rounded-full bg-[#FFBA41]"></div> */}
                    <img src="/point_arrow.png" className="mt-1.5" alt="" />
                    <span className="poppins-regular md:leading-[30px] mobile_para_font text-justify  text-[16px] md:text-[18px] text-[#12122A]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-[25px] poppins-semibold mobile_para_font text-justify text-[#12122A] md:leading-[30px] text-[16px] md:text-[18px]">
                Gain full visibility into your capital holdings with AI-powered
                automation!
              </p>
              {/* <Button
                bgColor={"#5D0023"}
                text={"Explore More"}
                textColor={"#FFFFFF"}
                mt={20}
              /> */}
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-duration="1000"
              className=" w-full flex items-center justify-center"
            >
              <img className="" src="/derivative/ai-intelligent.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative  ">
        {/* <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/derivative/derivative-gradient.png')",
          }}
        ></div> */}
        <div className="bg-[#DEEDFF] py-[90px]">
          <div className=" max-w-7xl mx-auto px-2 md:px-12 z-20 ">
            <div className="flex flex-col lg:flex-row gap-[58px]  ">
              <div
                data-aos="fade-up-right"
                data-aos-duration="1000"
                className=" w-full flex items-center justify-center"
              >
                <img className="" src="/derivative/benchmark-image.png" />
              </div>
              <div
                data-aos="fade-up-left"
                data-aos-duration="1000"
                className=" z-40 relative "
              >
                <h2 className="text-[#12122B] mobile_heading_font leading-9 md:leading-13 text-[28px] md:text-[42px] poppins-bold">
                  AI-Based{" "}
                  {/* <span className="bg-gradient-to-r from-[#FFBE0C] to-[#7A41FF] text-transparent bg-clip-text leading-4"> */}
                  Investment {/* </span>{" "} */}
                  <br />
                  Benchmarking
                </h2>
                <p className="lg:mt-[32px] mobile_para_font mt-[26px] text-[#12122A] poppins-semibold text-justify text-[16px] md:text-[18px] md:leading-[30px]">
                  Benchmarking investments against market standards ensures
                  optimal financial performance. Our intelligent automation
                  offers:
                </p>
                <div className="mt-4">
                  {benchmarkingInsights.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-2.5 mt-4"
                    >
                      {/* <div className="h-2.5 w-2.5 rounded-full shrink-0 bg-[#FFBA41]"></div> */}
                      <img src="/point_arrow.png" className="mt-1.5" alt="" />
                      <span className="poppins-regular text-justify text-[16px] md:text-[18px] text-[#12122A]">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-[24px] text-[#12122A] mobile_para_font poppins-semibold text-justify  text-[16px] md:text-[18px] md:leading-[30px]">
                  Optimize your investments by benchmarking against the
                  best-performing portfolios!
                </p>

                {/* <div className="flex justify-center lg:justify-start">
                  <Button
                    bgColor={"#FFFFFF"}
                    text={"Explore More"}
                    textColor={"#5D0023"}
                    mt={20}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Derivatives;
