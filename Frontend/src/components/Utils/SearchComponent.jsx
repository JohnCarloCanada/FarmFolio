import React, { useState, useEffect, useContext } from "react";
import searchIcon from "../../assets/search.png";
import FarmFolioContext from "../../context/FarmFolioContext";

const SearchComponent = () => {
  const { search, setSearch } = useContext(FarmFolioContext);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative self-start w-full"
    >
      <img
        className="w-[20px] h-[20px] absolute top-3 left-3"
        src={searchIcon}
        alt="Search Icon"
      />
      <label htmlFor="search" className="text-[0]">
        Search Posts
      </label>
      <input
        className="pl-10 px-4 py-2 rounded-full outline-none border-[#67b96b] border-[2px] w-full duration-300 ease-in"
        type="text"
        id="search"
        placeholder="search variety name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchComponent;
