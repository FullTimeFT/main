import { FaHome, FaBinoculars } from "react-icons/fa";
import { IoShirtSharp } from "react-icons/io5";

const BottomRibbon = () => {
  return (
    <div className="fixed bottom-0 left-0 h-16 w-screen m-0 flex flex-row bg-gray-900 text-white shadow-lg">
      <BottomRibbonIcon icon={<FaHome size="30" />} />
      <BottomRibbonIcon icon={<FaBinoculars size="30" />} />
      <div className="flex flex-col justify-items-center py-2 my-2 bg-gray-800 rounded-full">
        <a href="#">90+3'</a>

        <div className="flex space-x-1">
          <a href="#">MCI</a>
          <a href="#">1</a>
          <a href="#">-</a>
          <a href="#">2</a>
          <a href="#">MUN</a>
        </div>
      </div>
      <BottomRibbonIcon icon={<IoShirtSharp size="30" />} />
    </div>
  );
};

const BottomRibbonIcon = ({ icon }) => (
  <div className="bottomribbon-icon">{icon}</div>
);

export default BottomRibbon;
