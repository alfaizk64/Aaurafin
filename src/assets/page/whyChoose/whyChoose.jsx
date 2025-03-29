import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

 const whyChooseUs =  [
  {
    title: "AI-Driven Investment Insights ",
    desc: "Smart asset allocation and risk management powered by intelligent automation.",
    img:'/why-choose/Group (1).png'
  },
  {
    title: "Automated Portfolio Tracking ",
    desc: "Real-time monitoring across multiple asset classes with autonomous tracking systems.",
    img:'/why-choose/Group (2).png'

  },
  {
    title: "Advanced Tax & Compliance Tools ",
    desc: "Seamless tax planning and regulatory reporting with assisted compliance tools.",
    img:'/why-choose/Group (3).png'

  },
  {
    title: "Intelligent Wealth Structuring ",
    desc: "AI-optimized financial decision-making with augmented analytics.",
    img:'/why-choose/Group (4).png'

  },
  {
    title: "Future-Ready & Scalable",
    desc: "Built for generational wealth growth through digital transformation.",
    img:'/why-choose/Group (5).png'

  },
]

function WhyChoose() {
  return (
    <>
      <section className="w-full relative px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto pb-4 py-[50px] sm:py-[90px]">
                      <h2 className="text-center mobile_heading_font text-[28px] md:text-[42px] md:leading-13 leading-9 poppins-bold">
                      Why Choose Our AI-Powered <br/>
                      aurafin Solution?
                      </h2>
          <div className="flex flex-col md:flex-row gap-[39px] items-center  ">
            {/* Left Side: Heading */}

            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="w-full  md:w-1/2 mt-[50px] text-center relative " 
            
            >
              
           <Accordion whyChooseUs={whyChooseUs}/>

            </div>

            {/* Right Side: Features List */}
            <div
              data-aos="fade-up-left"
              data-aos-duration="1000"
              className="w-full md:w-1/2  "
            >
              <img
          src="/why-choose/Group 1000004745.png"
          alt="Why Choose Us"
          className="w-full h-full   "
        />
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <div data-aos="zoom-in" data-aos-duration="1000" className="w-full ">
         <img
          className="w-full h-full object-cover"
          src="/why-choose/why_choose.png"
        />
      </div>

      {/* Bottom Section */}
      <section
        data-aos="fade-right"
        data-aos-duration="1000"
        className="w-full relative px-4 md:px-20 lg:px-30"
      >
        <section className="max-w-6xl mx-auto py-[50px] sm:py-[90px] flex flex-col space-y-4">
          <h1 className="leading-9 mobile_heading_font md:leading-13 text-[28px] md:text-[42px] text-[#12122B] poppins-bold">
            Transform your <span className="text-black">Aaurafin</span> with{" "}
            <br className="hidden sm:block" />
            our AI-powered solutions!
          </h1>

          <p className="text-[18px] mobile_para_font md:leading-[30px] md:text-[24px] poppins-regular  text-justify text-[#6E7984]">
            Book a Demo now and talk with our team
          </p>

         <Link to="/Contactus">
         <button className="cursor-pointer mobile_button_text bg-[#0E0E83] text-white text-[14px] md:text-[16px] px-6 py-3 rounded-full shadow-md hover:bg-[#1A1AB3] transition w-auto sf-pro self-start">
            Book A Demo
          </button>
         </Link>
        </section>
      </section>
    </>
  );
}

export default WhyChoose;
