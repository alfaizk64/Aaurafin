import React from "react";
import Button from "../../../component/ui/Button";

function DetailedInsights() {
  return (
    <>
      <section className="w-full relative mt-[90px]">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage:
              'url("./detail-insights/detailed_insights_BG.png")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="max-w-6xl mx-auto py-[90px]">
          <div className="relative">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-center mb-[60px]"
            >
              <h1 className="leading-9 md:leading-13 mobile_heading_font text-[28px] text-[#12122B] mb-[25px] md:text-[42px] poppins-bold">
                Detailed Insights on PMS,{" "}
                {/* <span className="bg-gradient-to-r from-[#FFBE0C] to-[#7A41FF] text-transparent bg-clip-text"> */}
                Brokers, MF,
                {/* </span>{" "} */}
                <br />
                Bonds, AIF & Commodities
              </h1>
              <p className="text-[16px] md:leading-[30px] mobile_para_font md:text-[18px] text-[#12122A] poppins-semibold">
                Our Aaurafin.ai solution provides a comprehensive breakdown of
                all investment instruments:
              </p>
            </div>
            <div className="flex flex-col z-50 justify-center gap-11 lg:gap-[145px] md:flex-row px-2">
              <div
                data-aos="fade-up-right"
                data-aos-duration="1000"
                className="h-[388px] md:h-full flex items-center justify-center"
              >
                <img
                  className="h-full"
                  src="/detail-insights/detailed_insights.png"
                  alt="Insights Tree"
                />
              </div>
              <ul
                data-aos="fade-up-left"
                data-aos-duration="1000"
                className="mt-[24px] open-sans text-[#12122A] text-justify text-[16px] md:text-[18px] pl-5 max-w-[571px] list-none"
              >
                <li className="flex items-start mb-4">
                  <img
                    src="/point_arrow.png"
                    alt=""
                    className="w-5 h-5 mr-2 mt-1"
                  />
                  <div className="">
                    <p className="poppins-semibold mb-3 mobile_para_font">
                      Portfolio Management Services (PMS):
                    </p>
                    <p className="mb-3 poppins-regular mobile_para_font">
                      AI-powered performance tracking of all PMS investments.
                    </p>
                    <p className="mb-3 mobile_para_font poppins-regular">
                      Fund manager comparisons based on historical and real-time
                      performance.
                    </p>
                  </div>
                </li>

                <li className="flex items-start mb-4">
                  <img
                    src="/point_arrow.png"
                    alt=""
                    className="w-5 h-5 mr-2 mt-1"
                  />
                  <div>
                    <p className="poppins-semibold mb-3 mobile_para_font">Mutual Funds (MF):</p>
                    <p className="mb-3 poppins-regular mobile_para_font">
                      Automated analysis of fund categories (Equity, Debt,
                      Hybrid, ELSS).
                    </p>
                    <p className="mb-3 poppins-regular mobile_para_font">
                      Risk-adjusted return comparison of top-performing funds.
                    </p>
                  </div>
                </li>

                <li className="flex items-start mb-4">
                  <img
                    src="/point_arrow.png"
                    alt=""
                    className="w-5 h-5 mr-2 mt-1"
                  />
                  <div>
                    <p className="poppins-semibold mb-3 mobile_para_font">Bonds & Fixed Income:</p>
                    <p className="mb-3 poppins-regular mobile_para_font">
                      AI-based bond selection for optimal yield and risk
                      mitigation.
                    </p>
                    <p className="mb-3 poppins-regular mobile_para_font">
                      Real-time interest rate tracking and bond laddering
                      strategies.
                    </p>
                  </div>
                </li>

                <li className="flex items-start mb-4">
                  <img
                    src="/point_arrow.png"
                    alt=""
                    className="w-5 h-5 mr-2 mt-1"
                  />
                  <div>
                    <p className="poppins-semibold mb-3 mobile_para_font">
                      Alternative Investment Funds (AIFs):
                    </p>
                    <p className="mb-3 poppins-regular mobile_para_font">
                      Performance analysis of all AIF categories (Category I,
                      II, III).
                    </p>
                    <p className="mb-3 poppins-regular mobile_para_font">
                      AI-powered insights for private equity, venture capital,
                      and hedge fund investments.
                    </p>
                  </div>
                </li>

                <li className="flex items-start mb-4">
                  <img
                    src="/point_arrow.png"
                    alt=""
                    className="w-5 h-5 mr-2 mt-1"
                  />
                  <div>
                    <p className="font-bold poppins-semibold mb-3 mobile_para_font">Commodities:</p>
                    <p className="mb-3 poppins-regular mobile_para_font">
                      Automated commodity price tracking and market trend
                      predictions.
                    </p>
                    <p className="mb-3 poppins-regular mobile_para_font">
                      AI-driven portfolio diversification using gold, silver,
                      crude oil, and other commodities.
                    </p>
                    <p className="mobile_para_font poppins-regular">
                      Detailed insights into every investment instrument, from
                      inception to date!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailedInsights;
