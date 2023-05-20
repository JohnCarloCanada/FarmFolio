import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose, AiFillHome, AiOutlineTeam } from "react-icons/ai";
import { GiPlantSeed } from "react-icons/gi";
import Logo from "../assets/plantation.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav((curr) => !curr);
  };

  return (
    <>
      <nav className="sticky top-0 w-full h-[50px] px-5 md:px-8 py-8 flex justify-between items-center z-10 bg-white drop-shadow-xl">
        <div className="flex items-center gap-x-3">
          <img aria-label="FarmFolio Image" className="w-[40px] h-[40px]" src={Logo} alt="FarmFolio Logo" />
          <h2 className="font-bold font-SegeoUIBold text-[#6cb770]">FarmFolio</h2>
        </div>
        <ul className="hidden items-center md:flex">
          <li aria-label="Go To Home" className="ml-8 font-semibold hover:text-[#009861] cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li aria-label="Go To Crops" className="ml-8 font-semibold hover:text-[#009861] cursor-pointer">
            <Link to="/Crops">Crops</Link>
          </li>
          <li aria-label="Go To Team" className="ml-8 font-semibold hover:text-[#009861] cursor-pointer">
            <Link to="/Team">Team</Link>
          </li>
        </ul>
        {!nav ? (
          <HiMenuAlt1 onClick={handleClick} size={24} className="md:hidden cursor-pointer" />
        ) : (
          <AiOutlineClose onClick={handleClick} size={24} className="md:hidden cursor-pointer" />
        )}
      </nav>
      {/* Mobile Nav */}
      <div className={!nav ? "hidden" : "fixed md:hidden w-full h-screen bg-black/40 z-10"} />
      <ul
        className={
          !nav
            ? "fixed md:hidden w-full h-[0%] bg-white z-10 drop-shadow-md flex items-center justify-center flex-col border-t-0 border-green-800 overflow-hidden duration-300 ease-out"
            : "fixed md:hidden w-full h-[50%] bg-white z-10 drop-shadow-md flex items-center justify-center flex-col border-t-2 border-green-800 overflow-hidden duration-300 ease-out"
        }
      >
        <li aria-label="Go To Home">
          <Link className="font-semibold hover:text-[#009861] cursor-pointer mb-5 flex-nav-links" to="/">
            <AiFillHome /> Home
          </Link>
        </li>
        <li aria-label="Go To Crops">
          <Link className="font-semibold hover:text-[#009861] cursor-pointer mb-5 flex-nav-links" to="/Crops">
            <GiPlantSeed />
            Crops
          </Link>
        </li>
        <li aria-label="Go To Team">
          <Link className="font-semibold hover:text-[#009861] cursor-pointer mb-5 flex-nav-links" to="/Team">
            <AiOutlineTeam />
            Team
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
