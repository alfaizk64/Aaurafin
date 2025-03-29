import React from "react";
import Button from "../../../component/ui/Button";
const driveAsset = [
  {
    title: "Equities (Stocks & ETFs)",
  },
  {
    title: "Mutual Funds",
  },
  {
    title: "Fixed Income (Bonds, Fixed Deposits)",
  },
  {
    title: "Derivatives (Futures & Options)",
  },
  {
    title: "Alternative Investments (PMS, AIF, Real Estate, Gold)",
  },
  {
    title: "National Pension System (NPS)",
  },
];
function Portfolio() {
  return (
    <>
      <section className="relative w-full overflow-hidden ">
        <div className="bg-[#DEEDFF] py-[90px] md:py-[90px]">
          <div className=" max-w-7xl mx-auto px-2 md:px-12 z-20 ">
            <div className="flex flex-col lg:flex-row gap-[58px]">
              <div data-aos="fade-up-right" data-aos-duration="1000" className="flex items-center">
                <img
                  className="xl:min-w-[548px] min-w-full z-40 relative"
                  src="/portfolio/Portfolio-img.png"
                />
              </div>

              <div data-aos="fade-up-left" data-aos-duration="1000" className=" z-40 relative ">
                {/* <h2 className="text-[#12122B] md:leading-16 min-w-xl text-[28px] sm:text-[42px] md:text-[42px] open-sans font-bold"> */}
                <h2 className="text-[#12122B] mobile_heading_font leading-9 md:leading-13 min-w-xl text-[28px] md:text-[42px] poppins-bold">
                  Multi-Asset Portfolio <br />
                  Management
                </h2>
                <p className="lg:mt-[32px] mt-[26px] mobile_para_font text-[#12122A] poppins-bold text-justify  text-[16px] md:text-[18px] leading-[30px]">
                  Diverse Asset Tracking :
                  <span className="font-normal text-[#12122A]">
                    {" "}
                    Manage investments across various asset classes, including
                  </span>
                </p>
                <div className=" mt-4 ">
                  {driveAsset.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 mt-4">
                      <img src="/point_arrow.png" className="mt-1.5" alt="" />
                      <span className="poppins-regular mobile_para_font text-justify text-[16px] md:text-[18px] text-[#12122A]">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-[24px] text-[#12122A] poppins-bold mobile_para_font text-justify font-bold text-[16px] md:text-[18px] leading-[30px]">
                  Performance Metrics :
                  <span className="font-normal">
                    {" "}
                    Evaluate Absolute Gain and Annualized Return (XIRR) for all
                    assets and portfolios using augmented analytics.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto my-6 md:mt-[90px]">
          <div className="flex flex-col gap-[39px] md:flex-row px-2">
            <div data-aos="fade-up-right" data-aos-duration="1000" className="">
              <h2 className="text-[#12122B] mobile_heading_font leading-9 md:leading-13 min-w-xl text-[28px] md:text-[42px] poppins-bold">
                Our{" "}
                {/* <span className="bg-gradient-to-r from-[#FFBE0C] to-[#7A41FF] text-transparent bg-clip-text"> */}
                Portfolio
                {/* </span>{" "} */}
                <br />
                Organization
              </h2>
              <p className="md:mt-[44px] mt-[30px] mobile_para_font poppins-regular text-justify text-[#12122A] text-[16px] md:text-[18px] leading-[30px]">
                <span className="font-bold">Multiple Portfolios :</span>{" "}
                Maintain individual portfolios and create groups for
                consolidated views with assisted portfolio management tools.
              </p>
              <p className="mt-[24px] poppins-regular text-justify text-[#12122A] text-[16px] md:text-[18px] leading-[30px]">
                <span className="font-bold">Advisor Support :</span> Enable
                advisors to manage client investments by categorizing them into
                individual and family-wise portfolios with autonomous data
                integration.
              </p>
              {/* <Button
                bgColor={"#5D0023"}
                text={"Explore More"}
                textColor={"#FFFFFF"}
                mt={20}
              /> */}
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1000" className=" w-full flex items-center justify-center">
              <img className="" src="/portfolio/portfolio-organization.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
