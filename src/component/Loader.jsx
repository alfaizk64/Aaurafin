  import NumberTicker from '@/fancy/components/text/basic-number-ticker'
  import Typewriter from '@/fancy/components/text/typewriter'
  import { motion } from  "framer-motion"
  import React from 'react'


  function Loader() {
    
    return (
      <>
      <motion.div 
        initial={{ opacity: 1, y: "0%" }}
        animate={{
          opacity: [1, 1.5, 0.8, 0.5, 0], 
          y: ["0%", "-30%", "-60%", "-100%"], 
        }}
        transition={{
          ease: [0.25, 0.1, 0.25, 1], 
          duration: 1.2,
          delay: 2.5,
        }}
      className='bg-black flex flex-col justify-center items-center poppins-semibold uppercase  h-[675px]  m-6'>
                
                <h1 className='text-[12vw] sm:text-[14vw] text-[#1467D6]'>
                  <Typewriter text={ " Aaurafin.ai"} />
                </h1>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 80, damping: 12 }}
                  className='text-[#1467D6] text-[12vw] sm:text-[14vw]'>
                  <NumberTicker 
                    transition={{
                      duration: 3.3,
                    }}
                  />
                  %
                  </motion.div>
      </motion.div> 
      </>
    )
  }

  export default Loader