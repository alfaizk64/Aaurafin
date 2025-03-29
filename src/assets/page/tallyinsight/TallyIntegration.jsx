import React from 'react'
import Button from '../../../component/ui/Button'

function TallyIntegration() {
  return (
    <>
          
          <section className="w-full relative">
        <div className="max-w-6xl mx-auto py-[45px] md:py-[90px]">
          <div className="flex flex-col-reverse gap-[39px] md:flex-row-reverse px-2">
            <div data-aos="fade-up-left" data-aos-duration="1000" className="w-full flex items-center justify-center">
              <img
                className=""
                src="./tally-integration/tally_Integration.png"
                alt="Tally Integration"
              />
            </div>
            <div data-aos="fade-up-right" 
                  data-aos-duration="1000"
            className="">
              <h2 className="leading-9 mobile_heading_font md:leading-13 text-[#12122B] text-[28px] md:text-[42px] poppins-bold">
                Tally{" "}
                {/* <span className="bg-gradient-to-r from-[#FFBE0C] to-[#7A41FF] text-transparent bg-clip-text"> */}
                  Integration
                {/* </span> */}
              </h2>
              <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-[#12122A] text-justify text-[16px] md:text-[18px]">
                <span className="font-bold">Voucher Reports :</span> Generate
                voucher reports for seamless integration with Tally accounting
                software using intelligent automation.
              </p>
              <p className="mt-[24px] poppins-regular mobile_para_font md:leading-[30px] text-[#12122A] text-justify text-[16px] md:text-[18px]">
                <span className="font-bold">User Guide :</span> Comprehensive
                guide to assist with Tally utility features and functionalities.
              </p>
              {/* <Button
                bgColor={"#5D0023"}
                text={"Explore More"}
                textColor={"#FFFFFF"}
                mt={44}
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default TallyIntegration