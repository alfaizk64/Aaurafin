
import React from 'react';
import Button from '../../../component/ui/Button';

const insights = [
  {
    id: 1,
    text: "Side-by-side analysis of PMS, mutual funds, bonds, AIFs, and stocks.",
  },
  {
    id: 2,
    text: "Automated portfolio rebalancing suggestions based on AI-driven insights.",
  },
  {
    id: 3,
    text: "Risk and return heatmaps, allowing families to visualize investment strengths and weaknesses.",
  },
  {
    id: 4,
    text: "Performance tracking of individual brokers and fund managers, helping in selecting the best performers.",
  },
];

function IntelligentInvestment() {
  return (
    <section className="w-full relative mt-[90px]">
      <div className="max-w-7xl mx-auto px-2 md:px-12 z-20">
        <div className="flex flex-col-reverse lg:flex-row gap-[58px] items-center">
          {/* Left Side: Text Content */}
          <div data-aos="fade-up-right" data-aos-duration="1000" className="z-40 relative">
            <h2 className="text-[#12122B] mobile_heading_font leading-9 md:leading-13 text-[28px] md:text-[42px] poppins-bold">
            <p className='whitespace-nowrap'>
            Intelligent Investment 
            </p>
              Portfolio Comparison
            </h2>
            <p className="lg:mt-[32px] mt-[26px] mobile_para_font text-[#12122A] poppins-semibold text-justify text-[16px] md:text-[18px] md:leading-[30px]">
              Our AI-powered system automates the comparison of investment portfolios across multiple parameters:
            </p>
            <div className="mt-4">
              {insights.map((item) => (
                <div key={item.id} className="flex items-start gap-2.5 mt-4">
                  {/* <div className="h-2.5 w-2.5 rounded-full shrink-0 bg-[#FFBA41] mt-2"></div> */}
                  <img src="/point_arrow.png" className='mt-1.5' alt="" />
                  <span className="poppins-regular mobile_para_font text-justify md:leading-[30px] text-[16px] md:text-[18px] text-[#12122A]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-[24px] text-[#12122A] poppins-semibold mobile_para_font text-justify text-[16px] md:text-[18px] md:leading-[30px]">
              Make informed decisions with AI-driven portfolio comparison and risk optimization!
            </p>
            {/* <div className="flex justify-center lg:justify-start mt-6">
              <Button
                bgColor={"#5D0023"}
                text={"Explore More"}
                textColor={"#FFFFFF"}
              />
            </div> */}
          </div>

          {/* Right Side: Image */}
          <div data-aos="fade-up-left" data-aos-duration="1000" className="w-full flex items-center justify-center">
            <img
              className=""
              src="./Integilent-Investment/integilentInvestment.png"
              alt="Portfolio Comparison"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntelligentInvestment;
