import React from "react";
import Button from "../../../component/ui/Button";

function Analytics() {
  return (
    <>
      <section className="w-full relative">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="absolute inset-0  bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/analytics/Maskgroup.png')" }}
        ></div>
        <div className="py-[90px] bg-[#1467d6]">
          <div className="max-w-7xl mx-auto px-2 md:px-12">
            <div className="flex flex-col gap-[39px] lg:flex-row px-2">
              <div
                data-aos="fade-up-right" data-aos-duration="1000"
                className=" flex items-center justify-center"
              >
                <img
                  className="xl:min-w-[548px] min-w-full "
                  src="/analytics/analytics-1.png"
                />
              </div>
              <div data-aos="fade-up-left" data-aos-duration="1000" className=" text-white">
                <h2 className="leading-9 mobile_heading_font md:leading-13 text-[28px] md:text-[42px] poppins-bold">
                  Analytics and{" "} <br />
                  {/* <span className="bg-gradient-to-r from-[#FFBE0C] to-[#7A41FF] text-transparent bg-clip-text"> */}
                  Performance
                  {/* </span> */} {" "}
                  Tracking
                </h2>
                <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-justify text-[16px] md:text-[18px]">
                  <span className="font-bold">New Analytics Dashboards : </span>{" "}
                  Engaging interface with enhanced features for insightful
                  portfolio tracking, powered by augmented analytics.
                </p>
                <p className="mt-[24px] poppins-regular text-justify mobile_para_font md:leading-[30px] text-[16px] md:text-[18px]">
                  <span className="font-bold">PMS Analytics :</span>Calculate
                  XIRR considering cash inflows and outflows for Portfolio
                  Management Services with intelligent automation
                </p>

                {/* <Button
                    bgColor={"#FFFFFF"}
                    text={"Explore More"}
                    textColor={"#5D0023"}
                    mt={50}
                  /> */}
              </div>
            </div>
            {/* second section begins  */}
            <div className="flex flex-col gap-[39px] lg:flex-row px-2 pt-14 md:mt-[20px]">
              <div
                data-aos="fade-up-right" data-aos-duration="1000"
                className="md:min-w-[548px] flex items-center justify-center"
              >
                <img
                  className="xl:min-w-[548px] min-w-full "
                  src="/analytics/analytics-2.png"
                />
              </div>
              <div data-aos="fade-up-left" data-aos-duration="1000" className="text-white">
                <h2 className="leading-9 mobile_heading_font md:leading-13 text-[28px] md:text-[42px] poppins-bold">
                  Reconciliation{" "}
                  {/* <span className="bg-gradient-to-r from-[#FFBE0C] to-[#7A41FF] text-transparent bg-clip-text"> */}
                  Module
                  {/* </span> */}
                </h2>
                <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-justify text-[16px] md:text-[18px]">
                  <span className="font-bold">Data Verification : </span>
                  Reconcile imported stock and mutual fund data by uploading
                  holding or AUM statements with assisted reconciliation tools.
                </p>
                <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-justify text-[16px] md:text-[18px]">
                  <span className="font-bold">
                    Discrepancy Identification :
                  </span>
                  Easily spot any discrepancies in investment portfolios using
                  autonomous error detection.
                </p>
                {/* <Button
                    bgColor={"#FFFFFF"}
                    text={"Explore More"}
                    textColor={"#5D0023"}
                    mt={50}
                  /> */}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* <img
            className=" absolute w-[300px] md:w-[400px]  right-0 top-[900px] md:top-[300px]"
            src="/analytics/analytics-right.png"
          /> */}
        {/* second section  */}
        {/* <div className="relative">
        
          <div className="py-[120px]   ">
            <div className="max-w-7xl px-2 md:px-12 mx-auto">
              
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Analytics;
