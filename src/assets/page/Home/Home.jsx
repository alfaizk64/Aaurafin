import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FlipText from "./FlipText";


function Home() {
  const financialInsights = [
    
       "Gain smarter financial insights, automated asset tracking with next-gen technology."
    ,
    
      "Say goodbye to manual tracking and embrace the future of wealth management with artificial intelligence."
    ,
    
      "Ensure long-term financial security with AI-powered analytics that help data-driven financial decisions with ease."
    ,
    
      "Elevate your wealth management strategy with cutting-edge technology designed for high-net-worth families."
    
  ];
 
 

  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-delay="600"
        className="relative w-full bg-cover bg-center lg:p-4 xl:p-0 lg:rounded-b-[60%] overflow-hidden "
        style={{ backgroundImage: "url('/Home/home_heroSection_bg.png')" }}
      >
        <div
          data-aos="flip-up"
          data-aos-delay="1000"
          className="absolute inset-0 bg-center opacity-20 bg-cover bg-no-repeat "
          style={{ backgroundImage: "url('/Home/Line_Chart_1_.png')" }}
        ></div>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto" >
          <div className="flex flex-col justify-center items-center py-[100px] h-[100%] lg:flex-row md:gap-[40px] relative">
            <div
              data-aos="fade-up-right"
              data-aos-delay="600"
              className="lg:pb-[180px] max-w-[95%] pb-[20px] md:mt-[60px]"
            >
              {/* <h1 className="open-sans text-[42px] px-2 font-bold leading-[52px] text-[#FFFFFF]"> */}
              <h1 className="leading-9 md:leading-13 mobile_heading_font md:w-[800px] text-[28px] md:text-[42px] poppins-bold text-[#FFFFFF]">
              AI-Powered Investment Tracking for Family Offices – Seamlessly Consolidate, Analyze, and Automate.
              </h1>
              <div className="">
                {/* Our ai-driven approach enables Aaurafin.ai to make intelligent,
                data-backed decisions, mitigate risks, and gain unparalleled
                financial insights. whether your Aaurafin.ai is focused on
                wealth preservation, alternative investments, or legacy
                planning, we are your trusted partner in achieving financial
                excellence. */}
                {/* <Typewriter 
                
                   text={ [
    
                    "Gain smarter financial insights, automated asset tracking with next-gen technology."
                 ,
                 
                   "Say goodbye to manual tracking and embrace the future of wealth management with artificial intelligence."
                 ,
                 
                   "Ensure long-term financial security with AI-powered analytics that help data-driven financial decisions with ease."
                 ,
                 
                   "Elevate your wealth management strategy with cutting-edge technology designed for high-net-worth families."
                 
               ]}
                   speed={70}
                   waitTime={1500}
                   deleteSpeed={60}
                   cursorChar={"_"}
                /> */}
                <FlipText/>
              </div>
              
              <div className="flex justify-center lg:justify-start lg:items-end">
                <Link to="/Contactus">
                  <button className="cursor-pointer sf-pro mobile_button_text  mt-8 bg-[#0E0E83] text-white text-[14px] sm:text-[16px] px-6 py-3 rounded-full shadow-md hover:bg-[#1A1AB3] transition w-auto self-start">
                    Request a demo
                  </button>
                </Link>
              </div>
              {/* <div className="flex justify-center lg:justify-start">
  <Button
    bgColor={"#0E0E83"}
    hover={"hover:bg-blue-800"}
    text={"Explore More"}
    textColor={"#FFFFFF"}
    mt={20}
  />
</div> */}
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-delay="600"
              className="flex px-2 lg:pb-[180px] flex-col items-center text-[#FFFFFF]"
            >
              <img src="/Home/hero-right.png" className=" max-w-[95%]" />
              <img
                className="absolute hidden max-w-[500px] girl_posiion bottom-[-257px] right-[100px] lg:block xl:bottom-[-180px] xl:right-[100px]"
                src="/Home/people-work 2.png"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
