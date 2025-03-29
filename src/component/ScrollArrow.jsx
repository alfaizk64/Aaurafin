import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollArrow = () => {
  const [scrollDirection, setScrollDirection] = useState("down"); // "down" when at top, "up" when scrolled

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setScrollDirection("down"); // If at the top, arrow points down
      } else {
        setScrollDirection("up"); // Otherwise, arrow points up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (scrollDirection === "down") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); // Scroll to bottom
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 p-3 bg-[#1467D6] text-white rounded-full shadow-md transition-all"
    >
      {scrollDirection === "down" ? <FaArrowDown size={20} /> : <FaArrowUp size={20} />}
    </button>
  );
};

export default ScrollArrow;
