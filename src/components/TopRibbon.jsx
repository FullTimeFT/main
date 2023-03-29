import { useState } from "react";
import NotificationBar from "./NotificationBar";
const TopRibbon = (props) => {
  const [isProPicClicked, setIsProPicClicked] = useState(false);

  const { icons } = props;

  const handleProPictureClick = () => {
    setIsProPicClicked(!isProPicClicked);
  };

  return (
    <div className="flex top-0 left-0 h-18 w-screen m-0 flex-row bg-gray-900 text-white fixed z-50 px-5 py-5 rounded-b-lg shadow-xl">
      <div className="flex flex-row items-start space-x-4">
        {icons.map((icons, index) => (
          <TopRibbonIcon key={index} icon={icons} />
        ))}
      </div>

      <button className=" ml-auto" onClick={handleProPictureClick}>
        <img
          className="rotate w-10 h-10 rounded-full border-2 border-white"
          src="https://pbs.twimg.com/profile_images/1333896976602193922/MtWztkxt_400x400.jpg"
          alt="profile-picture"
        />
      </button>

      {isProPicClicked && <NotificationBar />}
    </div>
  );
};

const TopRibbonIcon = ({ icon }) => (
  <div className="topribbon-icon border rounded-full h-6 w-6 p-1">{icon}</div>
);

export default TopRibbon;
