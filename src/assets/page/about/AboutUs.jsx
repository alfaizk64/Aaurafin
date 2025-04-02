import React, { useRef } from "react";
import Button from "../../../component/ui/Button";
import AboutUsDesign from "./AboutUsDesign";
import { motion, useInView } from "framer-motion";

const financialFeatures = [
  {
    id:1,
    title: "Automated Asset Tracking",
    description: "Effortlessly track, analyze, and manage diverse assets, including stocks, mutual funds, real estate, and alternative investments.",
    img:"/about/Group_(8).png"
  },
  {
    id:2,
    title: "AI-Powered Insights",
    description: "Smarter, data-driven advanced analytics for investment portfolios.",
    img:"/about/Group_(6).png"

  },
  {
    id:3,
    title: "Seamless Connectivity",
    description: "Stay in control anytime, anywhere with quick access to your consolidated portfolio.",
    img:"/about/Group_(7).png"

  }
];
function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay each child by 0.2s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <section
       className="w-full relative mt-[90px] md:mt-[90px] px-4">
         <div className="absolute inset-0  bg-cover bg-no-repeat"
          style={{backgroundImage: "url('/about/gradient_blur.png')"}}></div>
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col items-center gap-8 md:gap-[72px] justify-between px-2 lg:flex-row pb-14 md:pb-[90px]">
            <div data-aos="fade-up" data-aos-duration="1000" className="right">
              {/* <h2 className="open-sans text-[42px] text-[#12122B] leading-[52px] font-bold"> */}
              <h2 className="text-[#12122B] mobile_heading_font text-center poppins-bold leading-9 md:leading-15 text-[28px] md:text-[42px]">
                About Us
              </h2>
              <div>
                {/* <h2 className="text-[#12122B] md:leading-16 min-w-xl text-[28px] sm:text-[42px] md:text-[42px] open-sans font-bold"> */}
                {/* <h2 className="text-[#12122B] mobile_heading_font leading-9 md:leading-13 min-w-xl text-[28px] md:text-[42px] poppins-bold">
                AI-Powered Family Office Management
                </h2> */}
                <p className="lg:mt-[32px] mt-[26px] mobile_para_font text-[#12122A] poppins-medium md:text-justify  text-[16px] md:text-[18px] leading-[30px]">
                We empower Family Offices with cutting-edge AI technology to streamline investment portfolio management and drive smarter financial decisions. Designed for High-net-worth (HNW) families, our platform offers advanced analytics, automated asset tracking, and seamless portfolio insights—all in one place.
                </p>
                <motion.div className="grid lg:grid-cols-2 xl:grid-cols-3 place-items-center lg:place-items-stretch mt-[120px] md:mt-[120px]"
                  variants={containerVariants}
                  initial="hidden"
                  ref={ref}
                  animate={isInView ? "show" : "hidden"} 
                >
                  
                  {financialFeatures.map((item, index) => (
                          // <div className="border border-[#E5E5E5] rounded-[10px] p-4 border-dashed bg-[#DEEDFF]" key={index}  > 
                          //   <h3 className="md:mt-[6px] mt-[2px] mobile_para_font poppins-bold text-justify text-[#12122A] text-[16px] md:text-[18px] leading-[30px]" key={index} > {item.title}</h3>
                          //   <p className="md:mt-[6px] mt-[4px] mobile_para_font poppins-regular lg:text-justify text-[#12122A] text-[16px] md:text-[18px] leading-[30px]">
                          //   {item.description} </p>
                          // </div>
                         <motion.div key={index} 
                         variants={itemVariants}
                         >
                          <AboutUsDesign index={index} item={item} />
                         </motion.div>
                  ))}
                </motion.div>
                <p className="mt-[24px] text-[#12122A] poppins-medium mobile_para_font md:text-justify  text-[16px] md:text-[18px] leading-[30px]">
                Aaurafin gives Family Offices emmersive experience with secure, seamless control with cutting-edge technology. Take charge of your financial future today!
                </p>
              </div>
            </div>
            {/* <div
              data-aos="fade-up-left" data-aos-duration="1000"
              className="w-full flex items-center justify-center"
            >
              <img
                src="/about/about-us-image.png"
                className="w-[full] lg:max-w-[548px] object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
