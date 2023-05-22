import React from "react";

const Button = ({ firstGradient, secondGradient, text, textColor }) => {
  return (
    <li
      className={`mt-3 px-4 py-2 bg-gradient-to-r ${firstGradient} ${secondGradient} rounded-full outline-none w-[241px] font-bold ${textColor} list-none text-center cursor-pointer font-SegeoUI font-bold`}
    >
      {text}
    </li>
  );
};

export default Button;
