// // // // import React, { useState, useEffect} from "react";
// // // // import { FaBars, FaTimes } from "react-icons/fa";

// // // // import { FaAngleDown } from "react-icons/fa";
// // // // import { Link, useLocation } from "react-router-dom";
// // // // import {
// // // //   DropdownMenu,
// // // //   DropdownMenuTrigger,
// // // //   DropdownMenuContent,
// // // //   DropdownMenuItem,
// // // // } from "../../components/ui/dropdown-menu";

// // // // const NaLinks = [
// // // //   { name: "Home", path: "/", scrollTo: "home" },
// // // //   { name: "About Us", path: "/aboutus", scrollTo: "aboutus" },
// // // //   {
// // // //     name: "Services",
// // // //     path: "/",
// // // //     dropdown: [
// // // //       { name: "Portfolio", path: "/portfolio", scrollTo: "portfolio" },
// // // //       {
// // // //         name: "Data Automated",
// // // //         path: "/dataAutomated",
// // // //         scrollTo: "dataAutomated",
// // // //       },
// // // //       { name: "Derivatives", path: "/derivatives", scrollTo: "derivatives" },
// // // //       {
// // // //         name: "Realtime Portfolio",
// // // //         path: "/realtimeportfolio",
// // // //         scrollTo: "realtimeportfolio",
// // // //       },
// // // //       { name: "Analytics", path: "/analytics", scrollTo: "analytics" },
// // // //       {
// // // //         name: "Inteligent Investment",
// // // //         path: "/inteligentInvestment",
// // // //         scrollTo: "inteligentInvestment",
// // // //       },
// // // //       {
// // // //         name: "Detailed Insights",
// // // //         path: "/detailedInsights",
// // // //         scrollTo: "detailedInsights",
// // // //       },
// // // //       {
// // // //         name: "Tally Integration",
// // // //         path: "/tallyintegration",
// // // //         scrollTo: "tallyintegration",
// // // //       },
// // // //       {
// // // //         name: "Portfolio Split",
// // // //         path: "/portfolioSplit",
// // // //         scrollTo: "portfolioSplit",
// // // //       },
// // // //       {
// // // //         name: "Why Choose Us",
// // // //         path: "/whychooseus",
// // // //         scrollTo: "whychooseus",
// // // //       },
// // // //     ],
// // // //   },
// // // //   { name: "Contact Us", path: "/", scrollTo: "footer" },
// // // // ];

// // // // function Navbar() {
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const { pathname } = useLocation();
// // // //   const [dropdownOpen, setDropdownOpen] = useState(null);

// // // //   const [activeSection, setActiveSection] = useState(null);
// // // //   const [activeLink, setActiveLink] = useState(null);
// // // //   // Add scroll listener to detect active section
// // // // useEffect(() => {
// // // //   const handleScroll = () => {
// // // //     const sections = NaLinks.map(item => item.scrollTo).filter(Boolean);
// // // //     const scrollPosition = window.scrollY + 100; // Adjust as needed

// // // //     for (const section of sections) {
// // // //       const element = document.getElementById(section);
// // // //       if (element &&
// // // //           element.offsetTop <= scrollPosition &&
// // // //           element.offsetTop + element.offsetHeight > scrollPosition) {
// // // //         setActiveSection(section);
// // // //         break;
// // // //       }
// // // //     }
// // // //   };

// // // //   window.addEventListener('scroll', handleScroll);
// // // //   return () => window.removeEventListener('scroll', handleScroll);
// // // // }, []);

// // // //   const handleScroll = (id) => {
// // // //     const target = document.getElementById(id);
// // // //     if (target) {
// // // //       window.scrollTo({
// // // //         top: target.offsetTop - 50, // Adjust for navbar height
// // // //         behavior: "smooth", // Smooth scrolling effect
// // // //       });
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <header className="fixed top-0 left-0 z-[100]  w-full bg-white shadow-md">
// // // //         <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
// // // //           {/* Logo */}
// // // //           <Link to="/">
// // // //             <img
// // // //               src="/Aurafin logo.png"
// // // //               className="w-[180px] h-auto cursor-pointer"
// // // //               alt="Logo"
// // // //             />
// // // //           </Link>

// // // //           {/* Desktop Navbar */}
// // // //           <div className="hidden lg:flex">
// // // //             <ul className="flex gap-8 text-[16px] font-medium text-gray-700">
// // // //               {NaLinks.map((item, index) => (
// // // //                 <li key={index} className="relative">
// // // //                   {item.dropdown ? (
// // // //                     <DropdownMenu>
// // // //                       <DropdownMenuTrigger className="flex items-center gap-1 outline-none focus:ring-0 transition">
// // // //                         {item.name}{" "}
// // // //                         <FaAngleDown className="text-lg font-bold" size={20} />
// // // //                       </DropdownMenuTrigger>
// // // //                       <DropdownMenuContent className="w-52 mt-2 bg-white shadow-lg border border-gray-200">
// // // //                         {item.dropdown.map((subItem, subIndex) => (
// // // //                           <DropdownMenuItem
// // // //                             key={subIndex}
// // // //                             className="hover:bg-gray-100"
// // // //                           >
// // // //                             <Link
// // // //                               to={"/"}
// // // //                               onClick={(e) => {
// // // //                                 e.preventDefault();
// // // //                                 handleScroll(subItem.scrollTo);
// // // //                               }}
// // // //                               className="block px-4 py-2 text-gray-700 text-[16px] font-medium  "
// // // //                             >
// // // //                               {subItem.name}
// // // //                             </Link>
// // // //                           </DropdownMenuItem>
// // // //                         ))}
// // // //                       </DropdownMenuContent>
// // // //                     </DropdownMenu>
// // // //                   ) : (
// // // //                // Then in your Link component
// // // // <Link
// // // //   className={`hover:text-[#6E41D2] transition ${
// // // //     activeLink === item.scrollTo
// // // //       ? "text-[#6E41D2] font-semibold"
// // // //       : ""
// // // //   }`}
// // // //   onClick={(e) => {
// // // //     e.preventDefault();
// // // //     handleScroll(item.scrollTo);
// // // //     setActiveLink(item.scrollTo);
// // // //   }}
// // // // >
// // // //                       {/* to={"/"}
// // // //                       onClick={(e) => {
// // // //                         e.preventDefault();
// // // //                         handleScroll(item.scrollTo);
// // // //                       }} */}

// // // //                       {item.name}
// // // //                     </Link>
// // // //                   )}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>

// // // //           {/* Mobile Menu Button */}
// // // //           <button
// // // //             className="lg:hidden text-gray-700 text-2xl"
// // // //             onClick={() => setMenuOpen(!menuOpen)}
// // // //           >
// // // //             <FaBars />
// // // //           </button>
// // // //         </nav>

// // // //         {/* Mobile Menu */}
// // // //         <div
// // // //           className={`fixed top-0 left-0 w-2/3 h-screen bg-white shadow-lg transform transition-transform ${
// // // //             menuOpen ? "translate-x-0" : "-translate-x-full"
// // // //           } lg:hidden`}
// // // //         >
// // // //           <div className="flex justify-between items-center px-2 py-4">
// // // //             <Link to="/">
// // // //               <img
// // // //                 src="/Aurafin logo.png"
// // // //                 className="w-[160px] h-auto"
// // // //                 alt="Logo"
// // // //               />
// // // //             </Link>
// // // //             <button className="text-xl" onClick={() => setMenuOpen(false)}>
// // // //               <FaTimes />
// // // //             </button>
// // // //           </div>
// // // //           <ul className="flex flex-col items-start ml-4 px-2 space-y-4 mt-2">
// // // //             {NaLinks.map((link, index) => (
// // // //               <li key={index} className="relative w-full">
// // // //                 {link.dropdown ? (
// // // //                   <>
// // // //                     <button
// // // //                       className="flex items-center w-full text-xl text-gray-700 font-medium"
// // // //                       onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
// // // //                     >
// // // //                       {link.name} <FaAngleDown className="ml-2 text-lg" />
// // // //                     </button>
// // // //                     {dropdownOpen === index && (
// // // //                       <div className="mt-2 bg-white shadow-lg border border-gray-200 w-full rounded-md ">
// // // //                         {link.dropdown.map((subItem, subIndex) => (
// // // //                           <Link
// // // //                             key={subIndex}
// // // //                             to={"/"}
// // // //                             className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full"
// // // //                             onClick={() => {
// // // //                               handleScroll(subItem.scrollTo);
// // // //                               setDropdownOpen(null);
// // // //                               setMenuOpen(false);
// // // //                             }}
// // // //                           >
// // // //                             {subItem.name}
// // // //                           </Link>
// // // //                         ))}
// // // //                       </div>
// // // //                     )}
// // // //                   </>
// // // //                 ) : (
// // // //                   <Link
// // // //                     to={"/"}
// // // //                     onClick={(e) => {
// // // //                       e.preventDefault();
// // // //                       handleScroll(link.scrollTo);
// // // //                       setMenuOpen(false);
// // // //                     }}
// // // //                     className="text-xl text-gray-700 hover:text-[#6E41D2] font-medium"
// // // //                   >
// // // //                     {link.name}
// // // //                   </Link>
// // // //                 )}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>
// // // //       </header>
// // // //     </>
// // // //   );
// // // // }

// // // // export default Navbar;

// // // // import React, { useState, useEffect } from "react";
// // // // import { FaBars, FaTimes } from "react-icons/fa";

// // // // import { FaAngleDown } from "react-icons/fa";
// // // // import { Link, useLocation } from "react-router-dom";
// // // // import {
// // // //   DropdownMenu,
// // // //   DropdownMenuTrigger,
// // // //   DropdownMenuContent,
// // // //   DropdownMenuItem,
// // // // } from "../../components/ui/dropdown-menu";

// // // // const NaLinks = [
// // // //   { name: "Home", path: "/", scrollTo: "home" },
// // // //   { name: "About Us", path: "/aboutus", scrollTo: "aboutus" },
// // // //   {
// // // //     name: "Services",
// // // //     path: "/",
// // // //     dropdown: [
// // // //       { name: "Portfolio", path: "/portfolio", scrollTo: "portfolio" },
// // // //       {
// // // //         name: "Data Automated",
// // // //         path: "/dataAutomated",
// // // //         scrollTo: "dataAutomated",
// // // //       },
// // // //       { name: "Derivatives", path: "/derivatives", scrollTo: "derivatives" },
// // // //       {
// // // //         name: "Realtime Portfolio",
// // // //         path: "/realtimeportfolio",
// // // //         scrollTo: "realtimeportfolio",
// // // //       },
// // // //       { name: "Analytics", path: "/analytics", scrollTo: "analytics" },
// // // //       {
// // // //         name: "Inteligent Investment",
// // // //         path: "/inteligentInvestment",
// // // //         scrollTo: "inteligentInvestment",
// // // //       },
// // // //       {
// // // //         name: "Detailed Insights",
// // // //         path: "/detailedInsights",
// // // //         scrollTo: "detailedInsights",
// // // //       },
// // // //       {
// // // //         name: "Tally Integration",
// // // //         path: "/tallyintegration",
// // // //         scrollTo: "tallyintegration",
// // // //       },
// // // //       {
// // // //         name: "Portfolio Split",
// // // //         path: "/portfolioSplit",
// // // //         scrollTo: "portfolioSplit",
// // // //       },
// // // //       {
// // // //         name: "Why Choose Us",
// // // //         path: "/whychooseus",
// // // //         scrollTo: "whychooseus",
// // // //       },
// // // //     ],
// // // //   },
// // // //   { name: "Contact Us", path: "/", scrollTo: "footer" },
// // // // ];

// // // // function Navbar() {
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const { pathname } = useLocation();
// // // //   const [dropdownOpen, setDropdownOpen] = useState(null);
// // // //   const [activeLink, setActiveLink] = useState(null);

// // // //   // Scroll position tracking
// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const sections = NaLinks.flatMap((item) =>
// // // //         item.dropdown ? item.dropdown.map((sub) => sub.scrollTo) : item.scrollTo
// // // //       ).filter(Boolean);

// // // //       const scrollPosition = window.scrollY + 100;

// // // //       for (const section of sections) {
// // // //         const element = document.getElementById(section);
// // // //         if (
// // // //           element &&
// // // //           element.offsetTop <= scrollPosition &&
// // // //           element.offsetTop + element.offsetHeight > scrollPosition
// // // //         ) {
// // // //           setActiveLink(section);
// // // //           break;
// // // //         }
// // // //       }
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     handleScroll(); // Initial check
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   const handleScroll = (id) => {
// // // //     const target = document.getElementById(id);
// // // //     if (target) {
// // // //       window.scrollTo({
// // // //         top: target.offsetTop - 50,
// // // //         behavior: "smooth",
// // // //       });
// // // //       setActiveLink(id);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <header className="fixed top-0 left-0 z-[100] w-full bg-white shadow-md">
// // // //       <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
// // // //         {/* Logo */}
// // // //         <Link to="/">
// // // //           <img
// // // //             src="/Aurafin logo.png"
// // // //             className="w-[180px] h-auto cursor-pointer"
// // // //             alt="Logo"
// // // //           />
// // // //         </Link>

// // // //         {/* Desktop Navbar */}
// // // //         <div className="hidden lg:flex">
// // // //           <ul className="flex gap-8 text-[16px] font-medium text-gray-700">
// // // //             {NaLinks.map((item, index) => (
// // // //               <li key={index} className="relative">
// // // //                 {item.dropdown ? (
// // // //                   <DropdownMenu>
// // // //                     <DropdownMenuTrigger className="flex items-center gap-1 outline-none focus:ring-0 transition hover:text-[#6E41D2]">
// // // //                       {item.name}
// // // //                       <FaAngleDown className="text-lg font-bold" size={20} />
// // // //                     </DropdownMenuTrigger>
// // // //                     <DropdownMenuContent className="w-52 mt-2 bg-white shadow-lg border border-gray-200">
// // // //                       {item.dropdown.map((subItem, subIndex) => (
// // // //                     <DropdownMenuItem
// // // //                     key={subIndex}
// // // //                     className="hover:bg-gray-100 p-0"
// // // //                   >
// // // //                     <Link
// // // //                       to={"/"}
// // // //                       onClick={(e) => {
// // // //                         e.preventDefault();
// // // //                         handleScroll(subItem.scrollTo);
// // // //                         setActiveLink(subItem.scrollTo);
// // // //                       }}
// // // //                       className={`block px-4 py-2 text-gray-700 text-[16px] font-medium w-full hover:text-[#6E41D2] ${
// // // //                         activeLink === subItem.scrollTo ? "text-[#6E41D2] font-semibold" : ""
// // // //                       }`}
// // // //                     >
// // // //                       {subItem.name}
// // // //                     </Link>
// // // //                   </DropdownMenuItem>
// // // //                       ))}
// // // //                     </DropdownMenuContent>
// // // //                   </DropdownMenu>
// // // //                 ) : (
// // // //                   <Link
// // // //                     className={`hover:text-[#6E41D2] transition ${
// // // //                       activeLink === item.scrollTo
// // // //                         ? "text-[#6E41D2] font-semibold"
// // // //                         : ""
// // // //                     }`}
// // // //                     to={"/"}
// // // //                     onClick={(e) => {
// // // //                       e.preventDefault();
// // // //                       handleScroll(item.scrollTo);
// // // //                     }}
// // // //                   >
// // // //                     {item.name}
// // // //                   </Link>
// // // //                 )}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>

// // // //         {/* Mobile Menu */}
// // // //         {/* ... (keep existing mobile menu code but update the dropdown items as shown above) ... */}

// // // //         {/* Mobile Menu */}
// // // //         <div
// // // //           className={`fixed top-0 left-0 w-2/3 h-screen bg-white shadow-lg transform transition-transform ${
// // // //             menuOpen ? "translate-x-0" : "-translate-x-full"
// // // //           } lg:hidden`}
// // // //         >
// // // //           <div className="flex justify-between items-center px-2 py-4">
// // // //             <Link to="/">
// // // //               <img
// // // //                 src="/Aurafin logo.png"
// // // //                 className="w-[160px] h-auto"
// // // //                 alt="Logo"
// // // //               />
// // // //             </Link>
// // // //             <button className="text-xl" onClick={() => setMenuOpen(false)}>
// // // //               <FaTimes />
// // // //             </button>
// // // //           </div>
// // // //           <ul className="flex flex-col items-start ml-4 px-2 space-y-4 mt-2">
// // // //             {NaLinks.map((link, index) => (
// // // //               <li key={index} className="relative w-full">
// // // //                 {link.dropdown ? (
// // // //                   <>
// // // //                     <button
// // // //                       className="flex items-center w-full text-xl text-gray-700 font-medium"
// // // //                       onClick={() =>
// // // //                         setDropdownOpen(dropdownOpen === index ? null : index)
// // // //                       }
// // // //                     >
// // // //                       {link.name} <FaAngleDown className="ml-2 text-lg" />
// // // //                     </button>
// // // //                     {dropdownOpen === index && (
// // // //                       <div className="mt-2 bg-white shadow-lg border border-gray-200 w-full rounded-md ">
// // // //                         {link.dropdown.map((subItem, subIndex) => (
// // // //                           <Link
// // // //                             key={subIndex}
// // // //                             to={"/"}
// // // //                             className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full"
// // // //                             onClick={() => {
// // // //                               handleScroll(subItem.scrollTo);
// // // //                               setDropdownOpen(null);
// // // //                               setMenuOpen(false);
// // // //                             }}
// // // //                           >
// // // //                             {subItem.name}
// // // //                           </Link>
// // // //                         ))}
// // // //                       </div>
// // // //                     )}
// // // //                   </>
// // // //                 ) : (
// // // //                   <Link
// // // //                     to={"/"}
// // // //                     onClick={(e) => {
// // // //                       e.preventDefault();
// // // //                       handleScroll(link.scrollTo);
// // // //                       setMenuOpen(false);
// // // //                     }}
// // // //                     className="text-xl text-gray-700 hover:text-[#6E41D2] font-medium"
// // // //                   >
// // // //                     {link.name}
// // // //                   </Link>
// // // //                 )}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>
// // // //       </nav>
// // // //     </header>
// // // //   );
// // // // }

// // // // export default Navbar;

// // // import React, { useState, useEffect } from "react";
// // // import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
// // // import { Link, useLocation } from "react-router-dom";
// // // import {
// // //   DropdownMenu,
// // //   DropdownMenuTrigger,
// // //   DropdownMenuContent,
// // //   DropdownMenuItem,
// // // } from "../../components/ui/dropdown-menu";

// // // const NaLinks = [
// // //   { name: "Home", path: "/", scrollTo: "home" },
// // //   { name: "About Us", path: "/aboutus", scrollTo: "aboutus" },
// // //   {
// // //     name: "Services",
// // //     path: "/",
// // //     dropdown: [
// // //       { name: "Portfolio", path: "/portfolio", scrollTo: "portfolio" },
// // //       { name: "Data Automated", path: "/dataAutomated", scrollTo: "dataAutomated" },
// // //       { name: "Derivatives", path: "/derivatives", scrollTo: "derivatives" },
// // //       { name: "Realtime Portfolio", path: "/realtimeportfolio", scrollTo: "realtimeportfolio" },
// // //       { name: "Analytics", path: "/analytics", scrollTo: "analytics" },
// // //       { name: "Inteligent Investment", path: "/inteligentInvestment", scrollTo: "inteligentInvestment" },
// // //       { name: "Detailed Insights", path: "/detailedInsights", scrollTo: "detailedInsights" },
// // //       { name: "Tally Integration", path: "/tallyintegration", scrollTo: "tallyintegration" },
// // //       { name: "Portfolio Split", path: "/portfolioSplit", scrollTo: "portfolioSplit" },
// // //       { name: "Why Choose Us", path: "/whychooseus", scrollTo: "whychooseus" },
// // //     ],
// // //   },
// // //   { name: "Contact Us", path: "/", scrollTo: "footer" },
// // // ];

// // // function Navbar() {
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const { pathname } = useLocation();
// // //   const [dropdownOpen, setDropdownOpen] = useState(null);
// // //   const [activeLink, setActiveLink] = useState(null);

// // //   // Scroll position tracking with debounce
// // //   useEffect(() => {
// // //     let ticking = false;

// // //     const handleScroll = () => {
// // //       if (!ticking) {
// // //         window.requestAnimationFrame(() => {
// // //           // Special handling for footer
// // //           const footer = document.getElementById('footer');
// // //           if (footer && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
// // //             setActiveLink('footer');
// // //             ticking = false;
// // //             return;
// // //           }

// // //           const sections = NaLinks.flatMap((item) =>
// // //             item.dropdown ? item.dropdown.map((sub) => sub.scrollTo) : item.scrollTo
// // //           ).filter(Boolean);

// // //           const scrollPosition = window.scrollY + 100;

// // //           for (const section of sections) {
// // //             const element = document.getElementById(section);
// // //             if (
// // //               element &&
// // //               element.offsetTop <= scrollPosition &&
// // //               element.offsetTop + element.offsetHeight > scrollPosition
// // //             ) {
// // //               setActiveLink(section);
// // //               break;
// // //             }
// // //           }
// // //           ticking = false;
// // //         });
// // //         ticking = true;
// // //       }
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     handleScroll(); // Initial check
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const handleScroll = (id) => {
// // //     const target = document.getElementById(id);
// // //     if (target) {
// // //       window.scrollTo({
// // //         top: target.offsetTop - 50,
// // //         behavior: "smooth",
// // //       });
// // //       setActiveLink(id);
// // //     }
// // //   };

// // //   return (
// // //     <header className="fixed top-0 left-0 z-[100] w-full bg-white shadow-md">
// // //       <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
// // //         {/* Logo */}
// // //         <Link to="/">
// // //           <img
// // //             src="/Aurafin logo.png"
// // //             className="w-[180px] h-auto cursor-pointer"
// // //             alt="Logo"
// // //           />
// // //         </Link>

// // //         {/* Desktop Navbar */}
// // //         <div className="hidden lg:flex">
// // //           <ul className="flex gap-8 text-[16px] font-medium text-gray-700">
// // //             {NaLinks.map((item, index) => (
// // //               <li key={index} className="relative">
// // //                 {item.dropdown ? (
// // //                   <DropdownMenu>
// // //                     <DropdownMenuTrigger
// // //                       className={`flex items-center gap-1 outline-none focus:ring-0 transition hover:text-[#6E41D2] ${
// // //                         item.dropdown?.some(sub => activeLink === sub.scrollTo)
// // //                           ? "text-[#6E41D2] font-semibold"
// // //                           : ""
// // //                       }`}
// // //                     >
// // //                       {item.name}
// // //                       <FaAngleDown className="text-lg font-bold" size={20} />
// // //                     </DropdownMenuTrigger>
// // //                     <DropdownMenuContent className="w-52 mt-2 bg-white shadow-lg border border-gray-200">
// // //                       {item.dropdown.map((subItem, subIndex) => (
// // //                         <DropdownMenuItem
// // //                           key={subIndex}
// // //                           className="hover:bg-gray-100 p-0"
// // //                         >
// // //                           <Link
// // //                             to={"/"}
// // //                             onClick={(e) => {
// // //                               e.preventDefault();
// // //                               handleScroll(subItem.scrollTo);
// // //                               setActiveLink(subItem.scrollTo);
// // //                             }}
// // //                             className={`block px-4 py-2 text-gray-700 text-[16px] font-medium w-full hover:text-[#6E41D2] ${
// // //                               activeLink === subItem.scrollTo ? "text-[#6E41D2] font-semibold" : ""
// // //                             }`}
// // //                           >
// // //                             {subItem.name}
// // //                           </Link>
// // //                         </DropdownMenuItem>
// // //                       ))}
// // //                     </DropdownMenuContent>
// // //                   </DropdownMenu>
// // //                 ) : (
// // //                   <Link
// // //                     className={`hover:text-[#6E41D2] transition ${
// // //                       activeLink === item.scrollTo
// // //                         ? "text-[#6E41D2] font-semibold"
// // //                         : ""
// // //                     }`}
// // //                     to={"/"}
// // //                     onClick={(e) => {
// // //                       e.preventDefault();
// // //                       handleScroll(item.scrollTo);
// // //                     }}
// // //                   >
// // //                     {item.name}
// // //                   </Link>
// // //                 )}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //         {/* Mobile Menu Button */}
// // //         <button
// // //           className="lg:hidden text-gray-700 text-2xl"
// // //           onClick={() => setMenuOpen(!menuOpen)}
// // //         >
// // //           <FaBars />
// // //         </button>

// // //         {/* Mobile Menu */}
// // //         <div
// // //           className={`fixed top-0 left-0 w-2/3 h-screen bg-white shadow-lg transform transition-transform ${
// // //             menuOpen ? "translate-x-0" : "-translate-x-full"
// // //           } lg:hidden`}
// // //         >
// // //           <div className="flex justify-between items-center px-2 py-4">
// // //             <Link to="/" onClick={() => setMenuOpen(false)}>
// // //               <img
// // //                 src="/Aurafin logo.png"
// // //                 className="w-[160px] h-auto"
// // //                 alt="Logo"
// // //               />
// // //             </Link>
// // //             <button className="text-xl" onClick={() => setMenuOpen(false)}>
// // //               <FaTimes />
// // //             </button>
// // //           </div>
// // //           <ul className="flex flex-col items-start ml-4 px-2 space-y-4 mt-2">
// // //             {NaLinks.map((link, index) => (
// // //               <li key={index} className="relative w-full">
// // //                 {link.dropdown ? (
// // //                   <>
// // //                     <button
// // //                       className={`flex items-center w-full text-xl font-medium ${
// // //                         link.dropdown.some(sub => activeLink === sub.scrollTo)
// // //                           ? "text-[#6E41D2] font-semibold"
// // //                           : "text-gray-700"
// // //                       }`}
// // //                       onClick={() =>
// // //                         setDropdownOpen(dropdownOpen === index ? null : index)
// // //                       }
// // //                     >
// // //                       {link.name} <FaAngleDown className="ml-2 text-lg" />
// // //                     </button>
// // //                     {dropdownOpen === index && (
// // //                       <div className="mt-2 bg-white shadow-lg border border-gray-200 w-full rounded-md">
// // //                         {link.dropdown.map((subItem, subIndex) => (
// // //                           <Link
// // //                             key={subIndex}
// // //                             to={"/"}
// // //                             className={`block px-4 py-2 w-full ${
// // //                               activeLink === subItem.scrollTo
// // //                                 ? "text-[#6E41D2] font-semibold"
// // //                                 : "text-gray-700 hover:text-[#6E41D2]"
// // //                             } hover:bg-gray-200`}
// // //                             onClick={() => {
// // //                               handleScroll(subItem.scrollTo);
// // //                               setActiveLink(subItem.scrollTo);
// // //                               setDropdownOpen(null);
// // //                               setMenuOpen(false);
// // //                             }}
// // //                           >
// // //                             {subItem.name}
// // //                           </Link>
// // //                         ))}
// // //                       </div>
// // //                     )}
// // //                   </>
// // //                 ) : (
// // //                   <Link
// // //                     to={"/"}
// // //                     onClick={(e) => {
// // //                       e.preventDefault();
// // //                       handleScroll(link.scrollTo);
// // //                       setActiveLink(link.scrollTo);
// // //                       setMenuOpen(false);
// // //                     }}
// // //                     className={`text-xl font-medium ${
// // //                       activeLink === link.scrollTo
// // //                         ? "text-[#6E41D2] font-semibold"
// // //                         : "text-gray-700 hover:text-[#6E41D2]"
// // //                     }`}
// // //                   >
// // //                     {link.name}
// // //                   </Link>
// // //                 )}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //       </nav>
// // //     </header>
// // //   );
// // // }

// // // export default Navbar;

// // import React, { useState, useEffect } from "react";
// // import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
// // import { Link, useLocation } from "react-router-dom";
// // import {
// //   DropdownMenu,
// //   DropdownMenuTrigger,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// // } from "../../components/ui/dropdown-menu";

// // const NaLinks = [
// //   { name: "Home", path: "/", scrollTo: "home" },
// //   { name: "About Us", path: "/aboutus", scrollTo: "aboutus" },
// //   {
// //     name: "Services",
// //     path: "/",
// //     dropdown: [
// //       { name: "Portfolio", path: "/portfolio", scrollTo: "portfolio" },
// //       { name: "Data Automated", path: "/dataAutomated", scrollTo: "dataAutomated" },
// //       { name: "Derivatives", path: "/derivatives", scrollTo: "derivatives" },
// //       { name: "Realtime Portfolio", path: "/realtimeportfolio", scrollTo: "realtimeportfolio" },
// //       { name: "Analytics", path: "/analytics", scrollTo: "analytics" },
// //       { name: "Inteligent Investment", path: "/inteligentInvestment", scrollTo: "inteligentInvestment" },
// //       { name: "Detailed Insights", path: "/detailedInsights", scrollTo: "detailedInsights" },
// //       { name: "Tally Integration", path: "/tallyintegration", scrollTo: "tallyintegration" },
// //       { name: "Portfolio Split", path: "/portfolioSplit", scrollTo: "portfolioSplit" },
// //       { name: "Why Choose Us", path: "/whychooseus", scrollTo: "whychooseus" },
// //     ],
// //   },
// //   { name: "Contact Us", path: "/", scrollTo: "footer" },
// // ];

// // function Navbar() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const { pathname } = useLocation();
// //   const [dropdownOpen, setDropdownOpen] = useState(null);
// //   const [activeLink, setActiveLink] = useState(null);

// //   // Scroll position tracking with debounce
// //   useEffect(() => {
// //     let ticking = false;

// //     const handleScroll = () => {
// //       if (!ticking) {
// //         window.requestAnimationFrame(() => {
// //           // Special handling for footer
// //           const footer = document.getElementById('footer');
// //           if (footer && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
// //             setActiveLink('footer');
// //             ticking = false;
// //             return;
// //           }

// //           const sections = NaLinks.flatMap((item) =>
// //             item.dropdown ? item.dropdown.map((sub) => sub.scrollTo) : item.scrollTo
// //           ).filter(Boolean);

// //           const scrollPosition = window.scrollY + 100;

// //           for (const section of sections) {
// //             const element = document.getElementById(section);
// //             if (
// //               element &&
// //               element.offsetTop <= scrollPosition &&
// //               element.offsetTop + element.offsetHeight > scrollPosition
// //             ) {
// //               setActiveLink(section);
// //               break;
// //             }
// //           }
// //           ticking = false;
// //         });
// //         ticking = true;
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     handleScroll(); // Initial check
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const handleScroll = (id) => {
// //     const target = document.getElementById(id);
// //     if (target) {
// //       window.scrollTo({
// //         top: target.offsetTop - 50,
// //         behavior: "smooth",
// //       });
// //       setActiveLink(id);
// //     }
// //   };

// //   return (
// //     <header className="fixed top-0 left-0 z-[100] w-full bg-white shadow-md">
// //       <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
// //         {/* Logo */}
// //         <Link to="/">
// //           <img
// //             src="/Aurafin logo.png"
// //             className="w-[180px] h-auto cursor-pointer"
// //             alt="Logo"
// //           />
// //         </Link>

// //         {/* Desktop Navbar */}
// //         <div className="hidden lg:flex">
// //           <ul className="flex gap-8 text-[16px] font-medium text-gray-700">
// //             {NaLinks.map((item, index) => (
// //               <li key={index} className="relative">
// //                 {item.dropdown ? (
// //                   <DropdownMenu>
// //                     <DropdownMenuTrigger
// //                       className={`flex items-center gap-1 outline-none focus:ring-0 transition hover:text-[#6E41D2] ${
// //                         item.dropdown?.some(sub => activeLink === sub.scrollTo)
// //                           ? "text-[#6E41D2] font-semibold"
// //                           : ""
// //                       }`}
// //                     >
// //                       {item.name}
// //                       <FaAngleDown className="text-lg font-bold" size={20} />
// //                     </DropdownMenuTrigger>
// //                     <DropdownMenuContent className="w-52 mt-2 bg-white shadow-lg border border-gray-200">
// //                       {item.dropdown.map((subItem, subIndex) => (
// //                         <DropdownMenuItem
// //                           key={subIndex}
// //                           className={`p-0 ${activeLink === subItem.scrollTo ? 'bg-[#6E41D2]/10' : 'hover:bg-gray-100'}`}
// //                         >
// //                           <Link
// //                             to={subItem.path}
// //                             onClick={(e) => {
// //                               e.preventDefault();
// //                               handleScroll(subItem.scrollTo);
// //                               setActiveLink(subItem.scrollTo);
// //                             }}
// //                             className={`block px-4 py-2 w-full ${
// //                               activeLink === subItem.scrollTo
// //                                 ? "text-[#6E41D2] font-semibold"
// //                                 : "text-gray-700 hover:text-[#6E41D2]"
// //                             }`}
// //                           >
// //                             {subItem.name}
// //                           </Link>
// //                         </DropdownMenuItem>
// //                       ))}
// //                     </DropdownMenuContent>
// //                   </DropdownMenu>
// //                 ) : (
// //                   <Link
// //                     className={`hover:text-[#6E41D2] transition ${
// //                       activeLink === item.scrollTo
// //                         ? "text-[#6E41D2] font-semibold"
// //                         : ""
// //                     }`}
// //                     to={item.path}
// //                     onClick={(e) => {
// //                       e.preventDefault();
// //                       handleScroll(item.scrollTo);
// //                     }}
// //                   >
// //                     {item.name}
// //                   </Link>
// //                 )}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <button
// //           className="lg:hidden text-gray-700 text-2xl"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //         >
// //           <FaBars />
// //         </button>

// //         {/* Mobile Menu */}
// //         <div
// //           className={`fixed top-0 left-0 w-2/3 h-screen bg-white shadow-lg transform transition-transform ${
// //             menuOpen ? "translate-x-0" : "-translate-x-full"
// //           } lg:hidden`}
// //         >
// //           <div className="flex justify-between items-center px-2 py-4">
// //             <Link to="/" onClick={() => setMenuOpen(false)}>
// //               <img
// //                 src="/Aurafin logo.png"
// //                 className="w-[160px] h-auto"
// //                 alt="Logo"
// //               />
// //             </Link>
// //             <button className="text-xl" onClick={() => setMenuOpen(false)}>
// //               <FaTimes />
// //             </button>
// //           </div>
// //           <ul className="flex flex-col items-start ml-4 px-2 space-y-4 mt-2">
// //             {NaLinks.map((link, index) => (
// //               <li key={index} className="relative w-full">
// //                 {link.dropdown ? (
// //                   <>
// //                     <button
// //                       className={`flex items-center w-full text-xl font-medium ${
// //                         link.dropdown.some(sub => activeLink === sub.scrollTo)
// //                           ? "text-[#6E41D2] font-semibold"
// //                           : "text-gray-700"
// //                       }`}
// //                       onClick={() =>
// //                         setDropdownOpen(dropdownOpen === index ? null : index)
// //                       }
// //                     >
// //                       {link.name} <FaAngleDown className="ml-2 text-lg" />
// //                     </button>
// //                     {dropdownOpen === index && (
// //                       <div className="mt-2 bg-white shadow-lg border border-gray-200 w-full rounded-md">
// //                         {link.dropdown.map((subItem, subIndex) => (
// //                           <Link
// //                             key={subIndex}
// //                             to={subItem.path}
// //                             className={`block px-4 py-2 w-full ${
// //                               activeLink === subItem.scrollTo
// //                                 ? "text-[#6E41D2] font-semibold bg-[#6E41D2]/10"
// //                                 : "text-gray-700 hover:text-[#6E41D2] hover:bg-gray-200"
// //                             }`}
// //                             onClick={() => {
// //                               handleScroll(subItem.scrollTo);
// //                               setActiveLink(subItem.scrollTo);
// //                               setDropdownOpen(null);
// //                               setMenuOpen(false);
// //                             }}
// //                           >
// //                             {subItem.name}
// //                           </Link>
// //                         ))}
// //                       </div>
// //                     )}
// //                   </>
// //                 ) : (
// //                   <Link
// //                     to={link.path}
// //                     onClick={(e) => {
// //                       e.preventDefault();
// //                       handleScroll(link.scrollTo);
// //                       setActiveLink(link.scrollTo);
// //                       setMenuOpen(false);
// //                     }}
// //                     className={`text-xl font-medium ${
// //                       activeLink === link.scrollTo
// //                         ? "text-[#6E41D2] font-semibold"
// //                         : "text-gray-700 hover:text-[#6E41D2]"
// //                     }`}
// //                   >
// //                     {link.name}
// //                   </Link>
// //                 )}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // }

// // export default Navbar;




















// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "../../components/ui/dropdown-menu";

// const NaLinks = [
//   { name: "Home", path: "/", scrollTo: "home" },
//   { name: "About Us", path: "/aboutus", scrollTo: "aboutus" },
//   {
//     name: "Services",
//     path: "/",
//     dropdown: [
//       { name: "Portfolio", path: "/portfolio", scrollTo: "portfolio" },
//       {
//         name: "Data Automated",
//         path: "/dataAutomated",
//         scrollTo: "dataAutomated",
//       },
//       { name: "Derivatives", path: "/derivatives", scrollTo: "derivatives" },
//       {
//         name: "Realtime Portfolio",
//         path: "/realtimeportfolio",
//         scrollTo: "realtimeportfolio",
//       },
//       { name: "Analytics", path: "/analytics", scrollTo: "analytics" },
//       {
//         name: "Inteligent Investment",
//         path: "/inteligentInvestment",
//         scrollTo: "inteligentInvestment",
//       },
//       {
//         name: "Detailed Insights",
//         path: "/detailedInsights",
//         scrollTo: "detailedInsights",
//       },
//       {
//         name: "Tally Integration",
//         path: "/tallyintegration",
//         scrollTo: "tallyintegration",
//       },
//       {
//         name: "Portfolio Split",
//         path: "/portfolioSplit",
//         scrollTo: "portfolioSplit",
//       },
//       { name: "Why Choose Us", path: "/whychooseus", scrollTo: "whychooseus" },
//     ],
//   },
//   { name: "Contact Us", path: "/", scrollTo: "footer" },
// ];

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { pathname } = useLocation();
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [activeLink, setActiveLink] = useState(null);
//   const [isServicesOpen, setIsServicesOpen] = useState(false); // New state for Services dropdown

//   // Scroll position tracking with debounce
//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           // Special handling for footer
//           const footer = document.getElementById("footer");
//           if (
//             footer &&
//             window.innerHeight + window.scrollY >=
//               document.body.offsetHeight - 100
//           ) {
//             setActiveLink("footer");
//             ticking = false;
//             return;
//           }

//           const sections = NaLinks.flatMap((item) =>
//             item.dropdown
//               ? item.dropdown.map((sub) => sub.scrollTo)
//               : item.scrollTo
//           ).filter(Boolean);

//           const scrollPosition = window.scrollY + 100;

//           for (const section of sections) {
//             const element = document.getElementById(section);
//             if (
//               element &&
//               element.offsetTop <= scrollPosition &&
//               element.offsetTop + element.offsetHeight > scrollPosition
//             ) {
//               setActiveLink(section);
//               break;
//             }
//           }
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial check
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleScroll = (id) => {
//     const target = document.getElementById(id);
//     if (target) {
//       window.scrollTo({
//         top: target.offsetTop - 50,
//         behavior: "smooth",
//       });
//       setActiveLink(id);
//       setIsServicesOpen(false); // Close Services dropdown when an option is selected
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 z-[100] w-full bg-white shadow-md">
//       <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/">
//           <img
//             src="/Aurafin logo.png"
//             className="w-[180px] h-auto cursor-pointer"
//             alt="Logo"
//           />
//         </Link>

//         {/* Desktop Navbar */}
//         <div className="hidden lg:flex">
//           <ul className="flex gap-8 text-[16px] font-medium text-gray-700">
//             {NaLinks.map((item, index) => (
//               <li key={index} className="relative">
//                 {item.dropdown ? (
//                   <DropdownMenu
//                     open={isServicesOpen}
//                     onOpenChange={setIsServicesOpen}
//                   >
//                     <DropdownMenuTrigger
//                       className={`flex items-center gap-1 outline-none focus:ring-0 transition hover:text-[#6E41D2] ${
//                         item.dropdown?.some(
//                           (sub) => activeLink === sub.scrollTo
//                         )
//                           ? "text-[#6E41D2] font-semibold"
//                           : ""
//                       }`}
//                     >
//                       {item.name}
//                       <FaAngleDown className="text-lg font-bold" size={20} />
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent className="w-52 mt-2 bg-white shadow-lg border border-gray-200">
//                       {item.dropdown.map((subItem, subIndex) => (
//                         <DropdownMenuItem
//                           key={subIndex}
//                           className={`p-0 ${
//                             activeLink === subItem.scrollTo
//                               ? "bg-[#6E41D2]/10"
//                               : "hover:bg-gray-100"
//                           }`}
//                         >
//                           <Link
//                             to={subItem.path}
//                             onClick={(e) => {
//                               e.preventDefault();
//                               handleScroll(subItem.scrollTo);
//                             }}
//                             className={`block px-4 py-2 w-full ${
//                               activeLink === subItem.scrollTo
//                                 ? "text-[#6E41D2] font-semibold"
//                                 : "text-gray-700 hover:text-[#6E41D2]"
//                             }`}
//                           >
//                             {subItem.name}
//                           </Link>
//                         </DropdownMenuItem>
//                       ))}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 ) : (
//                   <Link
//                     className={`hover:text-[#6E41D2] transition ${
//                       activeLink === item.scrollTo
//                         ? "text-[#6E41D2] font-semibold"
//                         : ""
//                     }`}
//                     to={item.path}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleScroll(item.scrollTo);
//                     }}
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden text-gray-700 text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <FaBars />
//         </button>

//         {/* Mobile Menu */}
//         <div
//           className={`fixed top-0 left-0 w-2/3 sm:w-[50%] h-screen bg-white shadow-lg transform transition-transform ${
//             menuOpen ? "translate-x-0" : "-translate-x-full"
//           } lg:hidden`}
//         >
//           <div className="flex justify-between items-center px-2 py-4">
//             <Link to="/" onClick={() => setMenuOpen(false)}>
//               <img
//                 src="/Aurafin logo.png"
//                 className="w-[160px] h-auto"
//                 alt="Logo"
//               />
//             </Link>
//             <button className="text-xl" onClick={() => setMenuOpen(false)}>
//               <FaTimes />
//             </button>
//           </div>
//           <ul className="flex flex-col items-start ml-4 px-2 space-y-4 mt-2">
//             {NaLinks.map((link, index) => (
//               <li key={index} className="relative w-full">
//                 {link.dropdown ? (
//                   <>
//                     <button
//                       className={`flex items-center w-full text-xl font-medium ${
//                         link.dropdown.some((sub) => activeLink === sub.scrollTo)
//                           ? "text-[#6E41D2] font-semibold"
//                           : "text-gray-700"
//                       }`}
//                       onClick={() =>
//                         setDropdownOpen(dropdownOpen === index ? null : index)
//                       }
//                     >
//                       {link.name} <FaAngleDown className="ml-2 text-lg" />
//                     </button>
//                     {dropdownOpen === index && (
//                       <div className="mt-2 bg-white shadow-lg border border-gray-200 w-full rounded-md">
//                         {link.dropdown.map((subItem, subIndex) => (
//                           <button
//                             key={subIndex}
//                             className={`block px-4 py-2 w-full text-left ${
//                               activeLink === subItem.scrollTo
//                                 ? "text-[#6E41D2] font-semibold bg-[#6E41D2]/10"
//                                 : "text-gray-700 hover:text-[#6E41D2] hover:bg-gray-200"
//                             }`}
//                             onClick={() => {
//                               handleScroll(subItem.scrollTo);
//                               setActiveLink(subItem.scrollTo);
//                               setDropdownOpen(null);
//                               setMenuOpen(false);
//                             }}
//                           >
//                             {subItem.name}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     to={link.path}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleScroll(link.scrollTo);
//                       setMenuOpen(false);
//                     }}
//                     className={`text-xl font-medium ${
//                       activeLink === link.scrollTo
//                         ? "text-[#6E41D2] font-semibold"
//                         : "text-gray-700 hover:text-[#6E41D2]"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
























import React, { useState, useEffect,useRef  } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../components/ui/dropdown-menu";
import LetterSwapForward from "@/fancy/components/text/letter-swap-forward-anim";


const NaLinks = [
  { name: "Home", path: "/", scrollTo: "home" },
  { name: "About Us", path: "/", scrollTo: "aboutus" },
  {
    name: "Features",
    path: "/",
    dropdown: [
      { name: "Portfolio", path: "/", scrollTo: "portfolio" },
      {
        name: "Data Automated",
        path: "/",
        scrollTo: "dataAutomated",
      },
      { name: "Derivatives", path: "/", scrollTo: "derivatives" },
      {
        name: "Realtime Portfolio",
        path: "/",
        scrollTo: "realtimeportfolio",
      },
      { name: "Analytics", path: "/", scrollTo: "analytics" },
      {
        name: "Inteligent Investment",
        path: "/",
        scrollTo: "inteligentInvestment",
      },
      {
        name: "Detailed Insights",
        path: "/",
        scrollTo: "detailedInsights",
      },
      {
        name: "Tally Integration",
        path: "/",
        scrollTo: "tallyintegration",
      },
      {
        name: "Portfolio Split",
        path: "/",
        scrollTo: "portfolioSplit",
      },
      // {
      //   name: "Why Choose Us",
      //   path: "/",
      //   scrollTo: "whychooseus",
      // },
    ],
  },
  { name: "Contact Us", path: "contactus" ,scrollTo:"contactus"},
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
 
  const navItemsRef = useRef([]); // Ref for nav items

  // GSAP animation on mount
  useEffect(() => {
    gsap.from(navItemsRef.current, {
      opacity: 0,
      y: -30,
      duration: 1,
      stagger: 0.7, // Delay between each item
      ease: "power3.out",
    });
  }, []);

  // Scroll position tracking with debounce
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Special handling for footer
          const footer = document.getElementById('footer');
          if (footer && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            setActiveLink('footer');
            ticking = false;
            return;
          }

          const sections = NaLinks.flatMap((item) =>
            item.dropdown ? item.dropdown.map((sub) => sub.scrollTo) : item.scrollTo
          ).filter(Boolean);

          const scrollPosition = window.scrollY + 100;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (
              element &&
              element.offsetTop <= scrollPosition &&
              element.offsetTop + element.offsetHeight > scrollPosition
            ) {
              setActiveLink(section);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
useEffect(() => {
  // Extract the last part of the path as the active section
  const routeToSectionMap = {
    "/": "home",
    "/aboutus": "aboutus",
    "/portfolio": "portfolio",
    "/dataAutomated": "dataAutomated",
    "/derivatives": "derivatives",
    "/realtimeportfolio": "realtimeportfolio",
    "/analytics": "analytics",
    "/inteligentInvestment": "inteligentInvestment",
    "/detailedInsights": "detailedInsights",
    "/tallyintegration": "tallyintegration",
    "/portfolioSplit": "portfolioSplit",
    "/whychooseus": "whychooseus",
    "/contactus": "contactus", // Ensure contactus is mapped
  };
 
  if (routeToSectionMap[pathname]) {
    setActiveLink(routeToSectionMap[pathname]);
  }
}, [pathname]);

  //   const target = document.getElementById(id);
  //   if (target) {
  //     window.scrollTo({
  //       top: target.offsetTop - 50,
  //       behavior: "smooth",
  //     });
  //     setActiveLink(id);
  //     setIsServicesOpen(false); // Close Services dropdown when an option is selected
  //   }else if (path) {
  //     window.location.href = path; // Redirect for pages without a scroll section
  //   }
  // };
  const handleScroll = (id, path) => {
    const target = document.getElementById(id);
    
    if (target) {
      // Smooth scroll if section exists on the current page
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth",
      });
      setActiveLink(id);
      setIsServicesOpen(false);
    } else {
      // Store section ID before navigating
      if (path) {
        console.log(path)
        localStorage.setItem("scrollToSection", id);
        window.location.href = path; // Redirect
      }
    }
  };
  
  // After page load, check for stored section ID and scroll
  useEffect(() => {
    const scrollToSection = localStorage.getItem("scrollToSection");
    if (scrollToSection) {
      const element = document.getElementById(scrollToSection);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 50,
            behavior: "smooth",
          });
          setActiveLink(scrollToSection);
          localStorage.removeItem("scrollToSection"); // Clear after scrolling
        }, 500); // Delay to ensure page load
      }
    }
  }, []);
  
    
  return (
    <header className="fixed top-0 left-0 z-[100] w-full bg-white shadow-md">
      <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/Aurafin_logo.png"
            className="w-[180px] h-auto cursor-pointer"
            alt="Logo"
          />
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex">
          <ul className="flex gap-8 text-[16px]  font-medium text-gray-700">
            {NaLinks.map((item, index) => (
              <li key={index} ref={(el) => (navItemsRef.current[index] = el)} className="relative">
                {item.dropdown ? (
                  <DropdownMenu open={isServicesOpen} onOpenChange={setIsServicesOpen}>
                    <DropdownMenuTrigger 
                    
                      className={`flex items-center gap-1 open-sans cursor-pointer outline-none focus:ring-0 transition hover:text-[#c18435] ${
                        item.dropdown?.some(sub => activeLink === sub.scrollTo) 
                          ? "text-[#c18435] font-semibold" 
                          : ""
                      }`}
                    >
                       <LetterSwapForward label={item.name} />

                      <FaAngleDown 
                        className={`text-lg font-bold transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`} 
                        size={20} 
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-52 mt-4.5 bg-white shadow-lg border border-gray-200">
                      {item.dropdown.map((subItem, subIndex) => (
                        <DropdownMenuItem
                          key={subIndex}
                          className={`p-0 ${activeLink === subItem.scrollTo ? 'bg-[#c18435]/10' : 'hover:bg-gray-100'}`}
                        >
                          <button
                            onClick={(e) => {
                              // e.preventDefault();
                              handleScroll(subItem.scrollTo,subItem.path);
                            }}
                            className={`block px-4 py-2 w-full cursor-pointer open-sans text-left ${
                              activeLink === subItem.scrollTo 
                                ? "text-[#c18435] font-semibold" 
                                : "text-[#57625E] hover:text-[#c18435]"
                            }`}
                          >
                           <LetterSwapForward label={subItem.name} />
                          </button>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    className={`hover:text-[#c18435] transition open-sans ${
                      activeLink === item.scrollTo
                        ? "text-[#c18435] font-semibold"
                        : ""
                    }`}
                    to={item.path}
                    onClick={(e) => {
                      // e.preventDefault();
                      handleScroll(item.scrollTo,item.path);
                    }}
                  >
                   <LetterSwapForward label={item.name}/>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-2/3 h-screen bg-white/65 backdrop-blur-sm  shadow-lg transform transition-transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div className="flex justify-between items-center px-2 py-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img
                src="/Aurafin_logo.png"
                className="w-[160px] h-auto"
                alt="Logo"
              />
            </Link>
            {/* <button className="text-xl" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </button> */}
          </div>
          <ul className="flex flex-col items-start ml-4 open-sans px-2 space-y-4 mt-2" >
            {NaLinks.map((link, index) => (
              <li key={index} className="relative w-full">
                {link.dropdown ? (
                  <>
                    <button
                      className={`flex items-center w-full text-xl open-sans font-medium ${
                        link.dropdown.some(sub => activeLink === sub.scrollTo)
                          ? "text-[#c18435] font-semibold"
                          : "text-gray-700"
                      }`}
                      onClick={() =>
                        setDropdownOpen(dropdownOpen === index ? null : index)
                      }
                    >
                      {link.name} 
                      <FaAngleDown 
                        className={`ml-2 text-lg transition-transform duration-200 ${
                          dropdownOpen === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {dropdownOpen === index && (
                      <div className="mt-2 bg-white shadow-lg border   border-gray-200 w-full rounded-md">
                        {link.dropdown.map((subItem, subIndex) => (
                          
                          <button
                            key={subIndex}
                            className={`block px-4 py-2 w-full text-left ${
                              activeLink === subItem.scrollTo
                                ? "text-[#c18435] font-semibold open-sans bg-[#c18435]/10"
                                : "text-gray-700 hover:text-[#c18435] hover:bg-gray-200"
                            }`}
                            onClick={() => {
                              handleScroll(subItem.scrollTo);
                              setActiveLink(subItem.scrollTo);
                              setDropdownOpen(null);
                              setMenuOpen(false);
                            }}
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.scrollTo,link.path );
                      setMenuOpen(false);
                    }}
                    className={`text-xl font-medium ${
                      activeLink === link.scrollTo
                        ? "text-[#c18435] font-semibold"
                        : "text-gray-700 hover:text-[#c18435] open-sans"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;