// SearchBar.js
import React, { useState, useEffect } from "react";
import { RxMagnifyingGlass } from 'react-icons/rx';
import { SlCalender } from 'react-icons/sl';
import Calender from "./Calender";

const SearchBar = ({ onSearchBarClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [calenderOpen, setCalenderOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerStyle = {
    opacity: isMounted ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
  };

  const handleSearch = (e) => {
    e.preventDefault();
    //Do something with the search term
    console.log(searchTerm);
    setIsMounted(false);
  }

  const handleCalender = () => {
    setCalenderOpen(!calenderOpen);
  }

  const closeCalender = () => {
    setCalenderOpen(false);
  }

  return (
    <div style={containerStyle} className="flex flex-row items-center ml-5 absolute inset-0 bg-gray-900">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-l-full py-4 px-8 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-600 transition-transform duration-300 transform translate-x-0 hover:translate-x-2"
          placeholder="Search.." />

        <button
          type="Submit"
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-5 px-8 rounded-r-full focus:outline-none focus:shadow-outline transition-transform duration-300 transform translate-x-0 hover:translate-x-2">
          <RxMagnifyingGlass size={15} onClick={onSearchBarClick}/>
        </button>

      </form>

      <button className="px-2 items-end justify-end">
        <SlCalender size={30} onClick={handleCalender} />
      </button>

      {calenderOpen && <Calender onClose={closeCalender} />}
    </div>
  );
};

export default SearchBar;