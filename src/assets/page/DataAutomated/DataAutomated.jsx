import React from "react";
import Button from "../../../component/ui/Button";

function DataAutomated() {
  return (
    <>
      <section className="w-full relative">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url("/portfolio/pink-union.png")' }}
        >
          {" "}
        </div>
        <div className="max-w-6xl mx-auto pt-20 md:pt-[143px] pb-[90px] mt-[90px]">
          <div className="relative z-50 flex flex-col justify-center gap-11 lg:gap-[145px] md:flex-row px-2 ">
            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="h-[388px] md:h-full flex items-center justify-center"
            >
              <img
                className="h-full"
                src="/portfolio/Automated-laptop-img.png"
              />
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-duration="1000"
              className="max-w-[571px]"
            >
              <h2 className="text-[#12122B] mobile_heading_font leading-9 md:leading-13 text-[28px] md:text-[42px] poppins-bold">
                Automated Data
              
                Import
              </h2>
              <p className="mt-[44px] poppins-regular mobile_para_font text-justify text-[#12122A] text-[16px] md:text-[18px] leading-[30px]">
                <span className="font-bold">Extensive Integration : </span>Import
                transaction data for various file format across Multiple
                brokers using intelligent automation
              </p>
              <p className="mt-[24px] poppins-regular mobile_para_font text-justify text-[#12122A] text-[16px] md:text-[18px] leading-[30px]">
                <span className="font-bold">Broker Connectivity : </span>{" "}
                Auto-import contract notes and back-office files for Stocks and
                F&O.
              </p>
              <p className="mt-[24px] poppins-regular mobile_para_font text-justify text-[#12122A] text-[16px] md:text-[18px] leading-[30px]">
                <span className="font-bold">Mutual Fund Statements : </span>
                Seamlessly import Consolidated Account Statements (CAS) from
                CAMSOnline or NSDL
              </p>
              <p className="mt-[24px] poppins-regular mobile_para_font text-justify text-[#12122A] text-[16px] md:text-[18px] leading-[30px]">
                <span className="font-bold">PMS & AIF Reports : </span>{" "}
                Effortlessly integrate Portfolio Management Services and
                Alternative Investment Fund statements with augmented data
                processing.
              </p>
              <p className="mt-[24px] poppins-regular mobile_para_font text-justify text-[#12122A] text-[16px] md:text-[18px] leading-[30px]">
                <span className="font-bold">Diverse File Support : </span>Import
                files in various formats, including PDF, Excel, HTML, CSV, TXT,
                and DBF.
              </p>
              {/* <Button bgColor={"#5D0023"} text={"Explore More"} textColor={"#FFFFFF"} mt={44}/> */}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative">
        <div className="max-w-6xl mx-auto pb-4 md:mt-[90px]">
          <div className="flex flex-col items-center gap-[39px] md:flex-row px-2">
            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="w-full flex items-center justify-center"
            >
              <img className="" src="/portfolio/accessibility-laptop.png" />
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1000" className="">
              <h2 className="text-[#12122B] mobile_heading_font leading-9 md:leading-13 text-[28px] md:text-[42px] poppins-bold">
                Accessibility Across
                <br />
                Platforms
              </h2>
              <p className="mt-[24px] poppins-regular text-justify mobile_para_font text-[#12122A] text-[16px] md:text-[18px] leading-[30px]">
                <span className="font-bold">Web Application :</span> Manage and
                track investments on any computer device with augmented user
                interfaces.
              </p>
              <p className="mt-[24px] poppins-regular text-justify mobile_para_font text-[#12122A] text-[16px] md:text-[18px] leading-[30px]">
                <span className="font-bold">Mobile Apps :</span> Access
                portfolios on-the-go with Android and iOS applications, powered
                by intelligent automation.
              </p>
              {/* <Button bgColor={"#5D0023"} text={"Explore More"} textColor={"#FFFFFF"} mt={20}/> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DataAutomated;
