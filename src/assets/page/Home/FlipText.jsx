import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts = [
  "Gain smarter financial insights, automated asset tracking with next-gen technology.",
  "Say goodbye to manual tracking and embrace the future of wealth management with artificial intelligence.",
  "Ensure long-term financial security with AI-powered analytics that help data-driven financial decisions with ease.",
  "Elevate your wealth management strategy with cutting-edge technology designed for high-net-worth families."
];

const FlipText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          // className="absolute"
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FlipText;
