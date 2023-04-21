
import Home from "./pages/Home";
import TopRibbon from "./components/TopRibbon"
import BottomRibbon from "./components/BottomRibbon"
import "./App.css"
import { ARI, BUF, LAR } from "react-nfl-logos";

const App = () => {

  const icons = [<ARI />, <BUF />, <LAR />];

  const userName = "@baiibhav.b";

  const content = [
    {
      postUploaderName: "Erik TenHag",
      postUploaderID: "@erik_t_hag",
      content:
        "It finally feels great to win against my former Boss, Pep Guardiola at the Slaughter House! ",
      profilePicture:
        "https://resources.premierleague.com/premierleague/photos/players/250x250/man41668.png",
    },
    {
      postUploaderName: "Jurgen Klopp",
      postUploaderID: "@klopp_jg",
      content:
        "Can't believe Sancho scored against me? Van Djik needs to be sent to the mountains now",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/8/81/J%C3%BCrgen_Klopp%2C_Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg",
    },
    {
      postUploaderName: "Pep Guardiola",
      postUploaderID: "@guardiola_p",
      content:
        "Becoming the greatest manager of all time is my biggest dream",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pep_2017_%28cropped%29.jpg/330px-Pep_2017_%28cropped%29.jpg",
    },
    {
      postUploaderName: "Carlo Ancelotti",
      postUploaderID: "@ance_c",
      content: "I'm not letting Man City go away with UCL, trust me people",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/640px-Carlo_Ancelotti_2016_%28cropped%29.jpg",
    },
    {
      postUploaderName: "Antonio Conte",
      postUploaderID: "@conte_a",
      content: "So sorry people, I'll have to leave EPL now. ",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/20150616_Antonio_Conte.jpg/1200px-20150616_Antonio_Conte.jpg",
    },
    {
      postUploaderName: "Thomas Tuchel",
      postUploaderID: "@tuchel_t",
      content: "Ayurveda in India is doing me an amazing job.  ",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93175.jpg/800px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93175.jpg",
    },
  ];
  

  return (
      <div className="pt-20 pb-16 bg-black">
        <TopRibbon icons={icons} userName={userName}/>
        <Home contentDetail = {content}/>
        <BottomRibbon />
      </div>
  );
}

export default App;
