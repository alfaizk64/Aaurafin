// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
// import Home from "./assets/page/Home/Home";
// import MainLayout from "./layout/MainLayout";
// import LocomotiveScroll from "locomotive-scroll";
// import { useEffect } from "react";
// import Footer from "./assets/page/Footer/Footer";
// import AboutUs from "./assets/page/about/AboutUs";
// import Portfolio from "./assets/page/Portfolio/Portfolio";
// import DataAutomated from "./assets/page/DataAutomated/DataAutomated";
// import Derivatives from "./assets/page/Derivatives/Derivatives";
// import RealtimeFolio from "./assets/page/real-time-folio/RealtimeFolio";
// import Analytics from "./assets/page/Analytics/Analytics";
// import DetailedInsights from "./assets/page/detailedInsights/detailedInsights";
// import WhyChoose from "./assets/page/whyChoose/WhyChoose";
// import PortfolioSplit from "./assets/page/portfolioSplit/portfolioSplit";
// import InteligentInvestment from "./assets/page/InteligentInvestment/inteligentInvestment";
// import TallyIntegration from "./assets/page/tallyinsight/TallyIntegration";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/",
//         element: (
//           <>
//               <div id="home" ><Home /></div>
//             <div id="aboutus" ><AboutUs /></div>
//             <div id="portfolio" ><Portfolio /></div>
//             <div id="dataAutomated" ><DataAutomated /></div>
//             <div id="derivatives" ><Derivatives /></div>
//             <div id="realtimeportfolio" ><RealtimeFolio /></div>
//             <div id="analytics" ><Analytics /></div>

//             {/* added by Yatendra */}
//             <div id="inteligentInvestment"><InteligentInvestment /></div>
//             <div id="detailedInsights"><DetailedInsights /></div>
//             <div id="tallyintegration"> <TallyIntegration/> </div>
//             <div id="portfolioSplit"><PortfolioSplit /></div>

//             <div id="whychooseus"><WhyChoose /></div>
//             <div id="footer"><Footer /></div>
//           </>
//         ),
//       },
//       // {
//       //   path: "about",
//       //   element: <AboutUs />,
//       // },
//     ],
//   },
// ]);
// function App() {
//   useEffect(() => {
//     const locomotiveScroll = new LocomotiveScroll();
//     return () => locomotiveScroll.destroy(); // Cleanup on unmount
//   }, []);
//   useEffect(() => {
//     Aos.init({
//       duration: 1000, 
//       once: false,  
//       easing: "ease-in-out", 
//       mirror: false,
//       offset: 0,
//     });
//   }, []);
//   return (
//     <>
//       <RouterProvider router={router}></RouterProvider>
//     </>
//   );
// }

// export default App;


























import { createBrowserRouter, RouterProvider, useFetcher } from "react-router-dom";
import "./App.css";
import Home from "./assets/page/Home/Home";
import MainLayout from "./layout/MainLayout";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import Footer from "./assets/page/Footer/Footer";
import AboutUs from "./assets/page/about/AboutUs";
import Portfolio from "./assets/page/Portfolio/Portfolio";
import DataAutomated from "./assets/page/DataAutomated/DataAutomated";
import Derivatives from "./assets/page/Derivatives/Derivatives";
import RealtimeFolio from "./assets/page/real-time-folio/RealtimeFolio";
import Analytics from "./assets/page/Analytics/Analytics";
import DetailedInsights from "./assets/page/detailedInsights/detailedInsights";

import PortfolioSplit from "./assets/page/portfolioSplit/portfolioSplit";
import InteligentInvestment from "./assets/page/InteligentInvestment/inteligentInvestment";
import TallyIntegration from "./assets/page/tallyinsight/TallyIntegration";
import Aos from "aos";
import "aos/dist/aos.css";
import ContactUs from "./assets/page/contactUs/ContactUs";
import { useState } from "react";
import Loader from "./component/Loader";
import WhyChoose from "./assets/page/whyChoose/whyChoose";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
    
            <div id="home"><Home /></div>
            <div id="aboutus"><AboutUs /></div>
            <div id="portfolio"><Portfolio /></div>
            <div id="dataAutomated"><DataAutomated /></div>
            <div id="derivatives"><Derivatives /></div>
            <div id="realtimeportfolio"><RealtimeFolio /></div>
            <div id="analytics"><Analytics /></div>

            {/* added by Yatendra */}
            <div id="inteligentInvestment"><InteligentInvestment /></div>
            <div id="detailedInsights"><DetailedInsights /></div>
            <div id="tallyintegration"><TallyIntegration /></div>
            <div id="portfolioSplit"><PortfolioSplit /></div>

            <div id="whychooseus"><WhyChoose/></div>
            <div id="footer"><Footer /></div>
          </>
        ),
      },
      {
        path: "/contactus",
        element:<>
          <div id="contactus">
          <ContactUs/>
          </div>
        </>,
      }
    ],
  },
]);

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  // useEffect(() => {
  //   const scrollContainer = document.querySelector("[data-scroll-container]");
  //   if (scrollContainer) {
  //     const locomotiveScroll = new LocomotiveScroll({
  //       el: scrollContainer,
  //       smooth: true,
  //     });

  //     locomotiveScroll.on("scroll", () => {
  //       Aos.refresh(); // Refresh AOS on scroll
  //     });

  //     return () => locomotiveScroll.destroy(); // Cleanup on unmount
  //   }
  // }, []);

  // useEffect(() => {
  //   Aos.init({
  //     duration: 1000,
  //     once: false,
  //     easing: "ease-in-out",
  //     mirror: false,
  //     offset: 150, // Set offset to delay animation start
  //   });

  //   // Ensure AOS detects elements after page loads
  //   setTimeout(() => {
  //     Aos.refresh();
  //   }, 1000);
  // }, []);


  useEffect(() => {
    Aos.init({
      duration: 1500, // Increase duration for a slower effect
      once: false,  
      easing: "ease-in-out", 
      mirror: false, 
      offset: window.innerHeight / 3, // Trigger when half of the viewport is scrolled
    });
  
    // Ensure AOS detects elements after page loads
    setTimeout(() => {
      Aos.refresh();
    }, 1000);
  }, []);
  
   const [isLoader,setIsLoader] = useState(true)
   const [timer,setTimer] = useState(3)

    const id = useRef(null)
 
    const clear = ()=>{
      window.clearInterval(id.current)
      setIsLoader(false)
    }

    useEffect(() => {
    id.current=window.setInterval(()=>{
      setTimer((timer) => timer - 1)
    },1000)  
    }, [])

    useEffect(() => {
     if(timer === 0){
      clear();
     }
    },[timer])

  return (
    <>
       {
        isLoader? <Loader/> : ( <>

      <RouterProvider router={router} />

        </>)
       }
    </>
  );
}

export default App;



