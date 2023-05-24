import React from "react";
import { Link } from "react-router-dom";

const Button = ({ firstGradient, secondGradient, textColor, link, text }) => {
  return (
    <li
      className={`mt-3 px-4 py-2 bg-gradient-to-r ${firstGradient} ${secondGradient} rounded-full outline-none w-[241px] font-bold ${textColor} list-none text-center cursor-pointer font-SegeoUI font-bold`}
    >
      <Link className="w-full block" to={`/${link}`}>
        {text}
      </Link>
    </li>
  );
};

export default Button;
