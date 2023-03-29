
import Home from "./pages/Home";
import TopRibbon from "./components/TopRibbon"
import BottomRibbon from "./components/BottomRibbon"
import "./App.css"
import { ARI, BUF, LAR } from "react-nfl-logos";

const App = () => {

  const icons = [<ARI />, <BUF />, <LAR />];

  return (
      <div className="pt-20 pb-16 bg-black">
        <TopRibbon icons={icons}/>
        <Home postNum={6} team={"Man U"}/>
        <BottomRibbon />
      </div>
  );
}

export default App;
