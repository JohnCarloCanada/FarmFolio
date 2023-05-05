import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/search.png";

const SearchComponent = () => {
  const [input, setInput] = useState(false);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    !inputText ? setInput(false) : setInput(true);
  }, [inputText]);

  const handleClick = () => {
    setInput((curr) => !curr);
  };

  return (
    <form className="relative self-start">
      <img onClick={handleClick} className="w-[20px] h-[20px] absolute top-3 left-3" src={searchIcon} alt="Search Icon" />
      <input
        className={
          !input
            ? "pl-10 px-4 py-2 rounded-full outline-none border-[#67b96b] border-[2px] w-[5px] pr-0 duration-300 ease-in"
            : "pl-10 px-4 py-2 rounded-full outline-none border-[#67b96b] border-[2px] w-full duration-300 ease-in"
        }
        type="text"
        placeholder="search variety name"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </form>
  );
};

export default SearchComponent;
