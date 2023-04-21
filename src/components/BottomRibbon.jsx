import { FaHome, FaBinoculars } from "react-icons/fa";
import { IoShirtSharp } from "react-icons/io5";
import { useState } from "react";
import SearchBar from "./SearchBar";

const BottomRibbon = () => {
  const [isSearchBar, setSearchBar] = useState(false);

  const openSearchBar = () => {
    setSearchBar(!isSearchBar);
  };

  return (
    <div className="fixed bottom-0 left-0 h-16 w-screen m-0 flex flex-row bg-gray-900 text-white shadow-lg z-50">
      <button className="ml-5 mr-10">
        <FaHome size={30} />
      </button>

      <button className="mr-11" onClick={() => setSearchBar(true)}>
        <FaBinoculars size={30} />
      </button>

      <div className="mr-10 mt-5 text-gray-400">MUN 2 - 1 MCI</div>

      <button>
        <IoShirtSharp size={30} />
      </button>

      {isSearchBar && <SearchBar onSearchBarClick={openSearchBar}/>}
    </div>
  );
};

const BottomRibbonIcon = ({ icon }) => (
  <div className="bottomribbon-icon">{icon}</div>
);

export default BottomRibbon;
