import bg from "../src/assets/bg-1.jpg";

import Header from "./components/header";
import Intro from "./components/intro";
import JoinUs from "./components/join_us";
import MintNow from "./components/mint_now";
import RoadMap from "./components/roadmap";

function App() {
  return (
    <>
      <div className="w-screen max-w-full">
        <div
          className="min-h-full h-[1090px] min-w-full bg-cover"
          style={{ backgroundImage: `url(${bg})`}}
        >
          <Header />
          <Intro />
        </div>

        <MintNow />

        <RoadMap />

        <JoinUs />
      </div>

    </>
  );
}

export default App;
