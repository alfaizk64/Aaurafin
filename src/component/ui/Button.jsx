// import React from 'react';

// function Button({ bgColor, textColor, text, mt }) {
//   return (
//     <button
//       className="cursor-pointer xl:mt-[40px] py-3 px-[30px] rounded-full text-[16px] font-medium"
//       style={{
//         backgroundColor: bgColor,
//         color: textColor,
//         marginTop: `${mt}px`,
//       }}
//     >
//       {text}
//     </button>
//   );
// }

// export default Button;










import React from 'react';

function Button({ bgColor, textColor, text, mt }) {
  return (
    <button
      className={`cursor-pointer py-3 px-6 rounded-full text-[16px] font-medium transition-all hover:bg-blue-800`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        marginTop: mt ? `${mt}px` : "0px",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
