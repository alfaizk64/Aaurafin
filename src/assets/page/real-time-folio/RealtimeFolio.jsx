import React from "react";
import Button from "../../../component/ui/Button";

function RealtimeFolio() {
  return (
    <>
      <section className="w-full relative bg-[#FFFCFD] ">
        <div data-aos="fade-down" data-aos-duration="1000"
          className="inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/realtime/top-blur-realtime.png')" }}
        >
          <div className="py-[60px] md:py-[90px] ">
            <div className="max-w-7xl mx-auto px-2 md:px-12">
              <div className="flex flex-col gap-[39px] lg:flex-row px-2">
                <div data-aos="fade-up-right" data-aos-duration="1000" className="">
                  <h2 className="leading-9 mobile_heading_font md:leading-13 text-[28px] md:text-[42px] text-[#12122B] poppins-bold">
                      Portfolio valuations
                  </h2>
                  <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-[#12122A] text-justify text-[16px] md:text-[18px]">
                    <span className="font-bold"> Price Updates: </span>{" "}
                    Receive valuations for Stocks and ETFs  using autonomous data
                    feeds.
                  </p>
                  <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-[#12122A] text-justify text-[16px] md:text-[18px]">
                    <span className="font-bold"> NAV Updates: </span>Get
                     Net Asset Value updates for Mutual Funds and
                    price updates for Listed Bonds.
                  </p>
                  <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-[#12122A] text-justify text-[16px] md:text-[18px]">
                    <span className="font-bold">Corporate Actions: </span>
                    Automatic updates for dividends, bonuses, splits, mergers,
                    and demergers with intelligent automation.
                  </p>
                  <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-[#12122A] text-justify text-[16px] md:text-[18px]">
                    <span className="font-bold">Historical Valuations: </span>
                    Access end-of-month valuations for comprehensive performance
                    analysis.
                  </p>
                  {/* <Button
                    bgColor={"#5D0023"}
                    text={"Explore More"}
                    textColor={"#FFFFFF"}
                    mt={50}
                  /> */}
                </div>
                <div data-aos="fade-up-left" data-aos-duration="1000" className="md:min-w-[548px] flex items-center justify-center">
                  <img className="" src="/realtime/portfolio-right-1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* <img
            className=" absolute w-[300px] md:w-[400px] md:max-w-[450px] left-0 top-[900px] md:top-[400px]"
            src="/realtime/left-circle.png"
          /> */}
        {/* second section  */}
        <div className="relative">
        <div
          className="inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/realtime/bottom-blur-realtime.png')" }}
        >
          <div className="py-[90px]">
            <div className="max-w-7xl px-2 md:px-12 mx-auto">
              <div className="flex flex-col gap-[39px] lg:flex-row px-2">
                <div data-aos="fade-up-right" data-aos-duration="1000" className="">
                  <h2 className="leading-9 md:leading-13 mobile_heading_font text-[28px] md:text-[42px] text-[#12122B] poppins-bold">
                    Advanced{" "}
                    {/* <span className="bg-gradient-to-r from-[#FFBE0C] to-[#7A41FF] text-transparent bg-clip-text"> */}
                      capital
                    {/* </span>{" "} */}
                    <br />
                    Gains Reporting
                  </h2>
                  <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-[#12122A] text-justify text-[16px] md:text-[18px]">
                    <span className="font-bold">ITR-Compatible Reports: </span>
                    Generate capital gain reports in formats compatible with
                    income tax returns using augmented reporting tools.
                  </p>
                  <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-[#12122A] text-justify text-[16px] md:text-[18px]">
                    <span className="font-bold">
                      Asset-Specific Calculations :
                    </span>
                    Compute gains for Stocks, Mutual Funds, and Traded Bonds.
                  </p>
                  <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-[#12122A] text-justify text-[16px] md:text-[18px]">
                    <span className="font-bold">Tax Provisions: </span>Account
                    for LTCG grandfathering and indexation benefits where
                    applicable.
                  </p>
                  <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-[#12122A] text-justify text-[16px] md:text-[18px]">
                    <span className="font-bold">Unrealized Gains: </span>View
                    unrealized capital gains to estimate tax liabilities before
                    selling assets with assisted tax planning tools.
                  </p>
                  {/* <Button
                    bgColor={"#5D0023"}
                    text={"Explore More"}
                    textColor={"#FFFFFF"}
                    mt={50}
                  /> */}
                </div>
                <div data-aos="fade-up-left" data-aos-duration="1000" className="md:min-w-[548px] flex items-center justify-center">
                  <img className="" src="/realtime/doller-portfolio.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default RealtimeFolio;
