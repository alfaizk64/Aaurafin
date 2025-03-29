// import { Link, NavLink } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
//   FaFacebook,
//   FaLinkedin,
// } from "react-icons/fa";
// import logo from "/Footer/footer-logo.png"; // Replace with the actual path to your logo

// const Footer = () => {
//   return (
//     <footer
//       data-aos="flip-down"
//       data-aos-duration="1000"
//       className="bg-[#000D1E]  text-white"
//     >
//       <div className=" flex flex-col items-center space-y-4">
//         {/* Logo */}
//         <div className="flex lg:px-0 md:px-2 flex-col w-full justify-between md:flex-row pt-[55px] pb-[30px] max-w-4xl mx-auto items-center">
//           <img src={logo} alt="Aurafin AI" className="h-12" />

//           {/* Navigation Links */}
//           <div className="flex mt-4 md:mt-0 gap-[18px]">
//             {[
//               { icon: <FaFacebook />, path: "#" },
//               { icon: <FaInstagram />, path: "#" },
//               { icon: <FaTwitter />, path: "#" },
//               { icon: <FaLinkedin />, path: "#" },
//             ].map(({ icon, path }, index) => (
//               <div
//                 key={index}
//                 className="rounded-full h-[35px] w-[35px] bg-white/20  p-2 flex items-center justify-center "
//               >
//                 <Link to={path} className="">
//                   <span className=" text-white h-[21px] w-[20px]">{icon}</span>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Social Media Links */}
//         <div className="w-full flex items-center md:justify-center py-[30px] border-y border-white/35">
//           <nav className="flex flex-col md:flex-row gap-4 md:gap-0 px-2  items-start space-x-11">
//             {[
//               { name: "Home", path: "/home" },
//               { name: "About Us", path: "/about" },
//               { name: "Contact Us", path: "/contact" },
//               { name: "Privacy Policy", path: "/privacy-policy" },
//               { name: "Terms & Conditions", path: "/terms" },
//             ].map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={"/"}
//                 className="text-[20px] open-sans font-normal"
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </nav>
//         </div>

//         {/* Copyright Text */}
//         <p className=" text-[16px] text-center px-2 md:pt-[30px] pb-4 md:pb-[28px] font-normal text-[#6E7984]">
//           &copy; Copyright 2025, 9A Business All Rights Reserved |{" "}
//           <NavLink to="/privacy-policy" className="">
//             Privacy Policy
//           </NavLink>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import { Link, NavLink } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
//   FaFacebook,
//   FaLinkedin,
// } from "react-icons/fa";
// import logo from "/Footer/footer-logo.png";
// import { useEffect } from "react";

// const Footer = () => {
// ;
//   const handleScroll = (id) => {
//     const target = document.getElementById(id);
//     if (target) {
//       window.scrollTo({
//         top: target.offsetTop - 50,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <footer
//       // data-aos="fade-up"
//       // data-aos-duration="800"
//       className="bg-[#000D1E] text-white"
//     >
//       <div className="flex flex-col items-center space-y-4">
//         {/* Logo */}
//         <div className="flex lg:px-0 md:px-2 flex-col w-full justify-between md:flex-row pt-[55px] pb-[30px] max-w-4xl mx-auto items-center">
//           <Link
//             to="/"
//             onClick={(e) => {
//               handleScroll("home");
//             }}
//           >
//             <img src={logo} alt="Aurafin AI" className="h-12" />
//           </Link>

//           {/* Social Media Links */}
//           <div className="flex mt-4 md:mt-0 gap-[18px]">
//             {[
//               { icon: <FaFacebook />, path: "#" },
//               { icon: <FaInstagram />, path: "#" },
//               { icon: <FaTwitter />, path: "#" },
//               { icon: <FaLinkedin />, path: "#" },
//             ].map(({ icon, path }, index) => (
//               <div
//                 key={index}
//                 className="rounded-full text-white flex items-center hover:text-xl hover:text-[#c18435] transition-all duration-500 justify-center"
//               >
//                 <Link to={path} className="">
//                   <span className="bg-white/20 p-2 rounded-full flex">{icon}</span>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div className="w-full flex items-center justify-center  md:justify-center py-[30px] border-y border-white/35">
//           <nav className="flex flex-col  md:flex-row gap-4 md:gap-0 px-2 items-start space-x-11">
//             {[
//               { name: "Home", path: "/", scrollTo: "home" },
//               { name: "About Us", path: "/", scrollTo: "aboutus" },
//               { name: "Contact Us", path: "/contactus",  },
//               { name: "Privacy Policy", path: "#" },
//               { name: "Terms & Conditions", path: "#" },
//             ].map((link) =>
//               link.scrollTo ? (
//                 <NavLink
//                   key={link.name}
//                   to={link.path}
//                   onClick={(e) => {
//                     // e.preventDefault();
//                     handleScroll(link.scrollTo);
//                   }}
//                   className="text-[18px] md:text-[20px] open-sans font-normal hover:text-[#c18435] transition"
//                 >
//                   {link.name}
//                 </NavLink>
//               ) : (
//                 <NavLink
//                   key={link.name}
//                   to={link.path}
//                   className="text-[18px] md:text-[20px] open-sans font-normal hover:text-[#c18435] transition"
//                 >
//                   {link.name}
//                 </NavLink>
//               )
//             )}
//           </nav>
//         </div>

//         {/* Copyright Text */}
//         <p className="text-[14px] md:text-[16px] text-center px-2 md:pt-[30px] pb-4 md:pb-[28px] font-normal text-[#6E7984]">
//           &copy; Copyright 2025, 9A Business All Rights Reserved |{" "}
//           <NavLink to="#" className="hover:text-[#c18435] transition">
//             Privacy Policy
//           </NavLink>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useEffect } from "react";
import logo from "/Footer/footer-logo.png";
import LetterSwapForward from "@/fancy/components/text/letter-swap-forward-anim";

const Footer = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on page load
  },[])
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to home first
      setTimeout(() => {
        scrollToSection(id);
      }, 100); // Adjust delay as needed
    } else {
      scrollToSection(id);
    }
  };

  const scrollToSection = (id) => {
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#000D1E] text-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Logo */}
        <div className="flex lg:px-0 md:px-2 flex-col w-full justify-between md:flex-row pt-[55px] pb-[30px] max-w-4xl mx-auto items-center">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("home");
            }}
          >
            <img src={logo} alt="Aurafin AI" className="h-12" />
          </Link>

          {/* Social Media Links */}
          <div className="flex mt-4 md:mt-0 gap-[18px]">
            {[
              { icon: <FaFacebook />, path: "#" },
              { icon: <FaInstagram />, path: "#" },
              { icon: <FaTwitter />, path: "#" },
              { icon: <FaLinkedin />, path: "#" },
            ].map(({ icon, path }, index) => (
              <div
                key={index}
                className="rounded-full text-white flex items-center hover:text-xl hover:text-[#c18435] transition-all duration-500 justify-center"
              >
                <Link to={path} className="">
                  <span className="bg-white/20 p-2 rounded-full flex">{icon}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="w-full flex items-center justify-center md:justify-center py-[30px] border-y border-white/35">
          <nav className="flex flex-col md:flex-row gap-4 md:gap-0 px-2 items-start space-x-11">
            {[
              { name: "Home", path: "/", scrollTo: "home" },
              { name: "About Us", path: "/", scrollTo: "aboutus" },
              { name: "Contact Us", path: "/contactus" },
              { name: "Privacy Policy", path: "#" },
              { name: "Terms & Conditions", path: "#" },
            ].map((link) =>
              link.scrollTo ? (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                  handleScroll(link.scrollTo);
                  }}
                  className="text-[18px] md:text-[20px] open-sans font-normal hover:text-[#c18435] transition"
                >
                                         <LetterSwapForward label={link.name} />

                </NavLink>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="text-[18px] md:text-[20px] open-sans font-normal hover:text-[#c18435] transition"
                >
                  <LetterSwapForward label={link.name} />
                </NavLink>
              )
            )}
          </nav>
        </div>

        {/* Copyright Text */}
        <p className="text-[14px] md:text-[16px] text-center px-2 md:pt-[30px] pb-4 md:pb-[28px] sf-pro text-[#6E7984]">
          &copy; Copyright 2025, 9A Business All Rights Reserved |{" "}
          <NavLink to="#" className="hover:text-[#c18435] transition">
            Privacy Policy
          </NavLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
