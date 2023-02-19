import { CiCirclePlus } from "react-icons/ci"
import { FaJoget } from "react-icons/fa"


const TopRibbon = () =>
{
    return(
        <div className = "fixed top-0 left-0 h-16 w-screen m-0 flex flex-row bg-gray-900 text-white shadow-lg">
            
            <TopRibbonIcon icon = {<CiCirclePlus size = "40"  />} />
            <TopRibbonIcon icon = {<FaJoget size = "40"  />} />
            <TopRibbonIcon icon = {<FaJoget size = "40"  />} />
            <TopRibbonIcon icon = {<FaJoget size = "40"  />} />
        </div>
    )
};


const TopRibbonIcon = ({icon}) => (
    <div className="topribbon-icon">
        {icon}
    </div>
);

export default TopRibbon; 