const TopRibbon = (props) => {

  const {icons} = props;

  return (
    <div className="flex top-0 left-0 h-16 w-screen m-0 flex-row bg-gray-900 text-white">
      <div className = "justify-start rounded-full items-start flex flex-row space-x-4">
        {
          icons.map((icons,index) =>
          (
            <TopRibbonIcon key = {index} icon = {icons} />
          ))}
      </div>

      <div className="p-10 h-screen">

        <img className = "absolute top-0 right-4 top - 2 w-16 h-18 rounded-full border-2 border-white"
              src = "https://pbs.twimg.com/profile_images/1333896976602193922/MtWztkxt_400x400.jpg" alt ="profile-picture">

        </img>

      </div> 
    </div>
  );
};



const TopRibbonIcon = ({ icon }) => (
  <div className="topribbon-icon border rounded-full h-10 w-10 p-1">{icon}</div>
);

export default TopRibbon;
