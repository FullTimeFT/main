import { ARI, BUF, CHI, LAR } from 'react-nfl-logos';
import { CiCirclePlus } from 'react-icons/ci';
import { FooBar} from "react-avatar"

const TopRibbon = () => {
  return (
    <div className="flex top-0 left-0 h-16 w-screen m-0 flex-row bg-gray-900 text-white shadow-lg pr-4">
      <div className = "justify-start items-start flex flex-row space-x-4 mx-2">
      <TopRibbonIcon icon={<CiCirclePlus size="40" pr/>} />
      <TopRibbonIcon icon={<ARI size = "40" />} />
      <TopRibbonIcon icon={<BUF size="40" />} />
      <TopRibbonIcon icon={<LAR size="40" />} />
      </div>

      <div class="p-10 h-screen">

        <img class = "absolute top-0 right-2 top - 2 w-16 h-16 rounded-full border-2 border-white"
              src = "https://pbs.twimg.com/profile_images/1333896976602193922/MtWztkxt_400x400.jpg">

        </img>

      </div> 
    </div>
  );
};



const TopRibbonIcon = ({ icon }) => (
  <div className="topribbon-icon">{icon}</div>
);

export default TopRibbon;
