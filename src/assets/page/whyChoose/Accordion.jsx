import { useState } from "react";
import { X } from 'lucide-react';
import { Plus } from 'lucide-react';
const Accordion = ({whyChooseUs}) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div id="accordion-collapse" className=" accordion_bg rounded-2xl border border-[#E1E1E1] overflow-hidden  ">
      {whyChooseUs.map((item, index) => (
        <div key={index} className="mx-4">
          <h2 id={`accordion-collapse-heading-${index + 1}`} >
            <button
              type="button"
              className="flex items-center justify-between w-full p-4 font-medium text-[#060709] border-b  border-[#E1E1E1] hover:bg-gray-100  gap-3"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openItem === index}
              aria-controls={`accordion-collapse-body-${index + 1}`}
            >
            <div className="flex items-center gap-3  ">
            <div className="bg-[#F1F1F1] w-[52px] h-[52px] rounded-lg  flex items-center justify-center  ">
             <img src={item.img} width={32} height={32}/>
             </div>
             <span className="poppins-semibold mobile_para_font md:leading-[30px] text-[18px] text-left"> {item.title}</span>
            </div>
             
              
             {
                openItem === index ? <X size="24" /> : <Plus size="24" />
               
                  
             }
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index + 1}`}
            className={`  transition-all duration-200 ease-in-out overflow-hidden ${ openItem === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            aria-labelledby={`accordion-collapse-heading-${index + 1}`}
          >
            <div className="p-5 text-[18px] text-left mobile_para_font md:leading-[30px] poppins-regular border border-gray-100 rounded-md  ">
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Accordion;
