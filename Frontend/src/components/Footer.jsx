import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[5px] bg-[url('/src/assets/Line.png')] bg-center bg-no-repeat bg-cover" />
      <footer className="w-full h-[80px] flex justify-between items-center px-5 md:px-8">
        <h2 className="font-bold font-SegeoUIBold text-[#6cb770] text-2xl md:text-3xl">
          FarmFolio
        </h2>
        <h2 className="text-sm">
          © Copyright 2023. System Integration and Architecture 2
        </h2>
      </footer>
    </>
  );
};

export default Footer;
