import Footer from "./components/footer";

import Header from "./components/header";
import Intro from "./components/intro";
import GamePlay from "./components/game_play";
import RoadMap from "./components/roadmap";
import MintNow from "./components/mint_now";
import GetDino from "./components/get_dino";
import AboutUs from "./components/about_us";
import Marketplace from "./components/marketplace";
import JoinUs from "./components/join_us";

function App() {
  return (
    <>
      <div className="w-screen max-w-full">
        <Header />
        <div id="home" className="min-h-full min-w-full bg-cover relative">
          <Intro />
        </div>

        <div className="mt-10">
          <GetDino />
        </div>

        <div id="about-us">
          <div className="sm:h-[900px] h-[1043px] lg:h-[800px] my-28">
            <AboutUs />
          </div>
        </div>

        <div id="marketplace">
          <Marketplace />
        </div>

        <div id="game_play">
          <GamePlay />
        </div>

        <div id="mint-now">
          <MintNow />
        </div>

        <div id="roadmap">
          <RoadMap />
        </div>
        <div id="join_us">
          <JoinUs />
        </div>

        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
