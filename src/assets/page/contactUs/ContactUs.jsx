import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

function ContactUs() {
  // useEffect(() => {
  //   window.scrollTo(20, 20);
  // }, [])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for your message. We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  const fieldWrapperClasses =
    "relative border rounded-md transition-all duration-300";
  const inputClasses = "w-full p-3 bg-transparent outline-none rounded-xl";
  const placeholderClasses =
    "absolute left-3 top-3 transition-all duration-300 pointer-events-none";

  return (
    <div className=" relative w-full">
      {/* Hero Section */}

      <section className="w-full relative flex flex-col lg:flex-row mt-16  ">
        <div className="md:w-[60%] z-13 relative mt-[40px] lg:mt-[52px]  p-2">
          <div className="max-w-xl mx-auto  ">
            <h1 className="poppins-bold mobile_heading_font text-[42px] tracking-tight leading-10 lg:leading-12">
              <p> Contact Us For</p>
              <p>More Information</p>
            </h1>
            <p className="poppins-regular text-[24px] mobile_para_font mt-[18px] lg:mt-[25px]">
              Have Questions? We're Here to Help!
            </p>
            <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[60px] mt-[30px] lg:mt-[60px] py-4 border-b  border-t border-[#000D1E33] ">
              <div className="flex ">
                <img
                  height={52}
                  width={52}
                  src="/contactus/Group_1000004736.png"
                />
                <div>
                  <p className=" text-[#6E7984] poppins-medium text-[16px]">
                    Phone
                  </p>
                  <p className="poppins-medium text-[20px]">022 2088 0099</p>
                </div>
              </div>
              <div className="flex">
                <img
                  height={52}
                  width={52}
                  src="/contactus/Group_1000004736_(1).png"
                />
                <div>
                  <p className=" text-[#6E7984] poppins-medium text-[16px]">
                    Email
                  </p>
                  <p className="poppins-medium text-[20px]">
                    info@9abusiness.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[30px] flex-col flex">
              <img
                height={52}
                width={52}
                src="/contactus/Group_1000004736_(2).png"
              />
              <div className="flex flex-col max-w-[480px]">
                <p className="text-[#6E7984] poppins-medium text-[16px] mt-[14px]">
                  Address
                </p>
                <p className="poppins-medium text-[#000000] mt-[7px] text-[18px]">
                  Unit No-904, Lodha Supremus Building, Opp. Sakivihar Telephone
                  Exchange, Sakivihar Road, Powai, Mumbai-400072, India.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 z-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            className=" w-full lg:w-1/2 rounded-lg border shadow-2xl contactUsForm lg:absolute z-40 lg:max-w-[455px] xl:right-[18%] top-[8%] bg-white p-4"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 w-full flex flex-col justify-center"
            >
              {/* Name Field */}
              <p className="text-[#6E7984] text-[18px] font-normal sf-pro pt-[20px]">
                Please fill the below form to connect us.
              </p>
              <div
                className={`text-black w-full ${fieldWrapperClasses} ${
                  focusedField === "name" || formData.name
                    ? "border-blue-600"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses} placeholder:sf-pro font-normal`}
                  required
                />
                <span
                  className={`${placeholderClasses} text-[14px] ${
                    focusedField === "name" || formData.name
                      ? "-translate-y-6 -translate-x-4 scale-75 text-blue-600 bg-white px-2"
                      : "text-gray-500  poppins-regular"
                  }`}
                >
                  Enter Your Name
                </span>
              </div>

              {/* Email Field */}
              <div
                className={`text-black ${fieldWrapperClasses} ${
                  focusedField === "email" || formData.email
                    ? "border-blue-600"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses} placeholder:sf-pro font-normal `}
                  required
                />
                <span
                  className={`${placeholderClasses} text-[14px] poppins-regular ${
                    focusedField === "email" || formData.email
                      ? "-translate-y-6 -translate-x-4 scale-75 text-blue-600 bg-white px-2"
                      : "text-gray-500"
                  }`}
                >
                  Enter Your Email
                </span>
              </div>

              <div
                className={`text-black ${fieldWrapperClasses} ${
                  focusedField === "phone" || formData.phone
                    ? "border-blue-600"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses} placeholder:sf-pro font-normal `}
                  required
                />
                <span
                  className={`${placeholderClasses} text-[14px] poppins-regular ${
                    focusedField === "phone" || formData.phone
                      ? "-translate-y-6 -translate-x-4 scale-75 text-blue-600 bg-white px-2"
                      : "text-gray-500"
                  }`}
                >
                  Enter Your phone No
                </span>
              </div>

              {/* Message Field */}
              <div
                className={`text-black ${fieldWrapperClasses} ${
                  focusedField === "message" || formData.message
                    ? "border-blue-600"
                    : "border-gray-200"
                }`}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses} placeholder:sf-pro font-normal min-h-[120px] `}

                  required
                />
                <span
                  className={`${placeholderClasses} text-[14px] poppins-regular ${
                    focusedField === "message" || formData.message
                      ? "-translate-y-6 -translate-x-4 scale-75 text-blue-600 bg-white px-2"
                      : "text-gray-500"
                  }`}
                >
                  Write A Message
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`px-[30px] self-center cursor-pointer text-white sf-pro py-[12px] bg-[#0E0E83] rounded-full transition-all duration-300 
            hover:bg-[#1A1AB3] ${
              submitted ? "bg-green-600 hover:bg-green-700" : ""
            }`}
                disabled={submitted}
              >
                {submitted ? "Submitted!" : "Submit Now"}
              </button>
            </form>
          </motion.div>
        </div>
        <div className="lg:w-[40%] z-10 bg-[#156CDA] girl_img ">
          <img src="/contactus/Mask_group_(1).png" />
        </div>
      </section>

      <div
        className="inset-0 absolute z-10 bg-cover "
        style={{ backgroundImage: "url('/contactus/Group_1000004727.png')" }}
      ></div>
      <section className="relative w-full z-20">
        <Footer />
      </section>
    </div>
  );
}

export default ContactUs;