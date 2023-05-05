import React from "react";

const Button = ({ FirstGradient, SecondGradient, Text, TextColor }) => {
  return (
    <button
      className={`mt-3 px-4 py-2 bg-gradient-to-r ${FirstGradient} ${SecondGradient} rounded-full outline-none w-[241px] font-bold ${TextColor}`}
    >
      {Text}
    </button>
  );
};

export default Button;
