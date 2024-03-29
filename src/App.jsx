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
      <div className="w-screen overflow-hidden">
        <Header />
        <div id="home">
          <Intro />
        </div>

        <div className="mt-40">
          <GetDino />
        </div>

        <div id="about-us">
          <div className="my-16">
            <AboutUs />
          </div>
        </div>

        <div id="marketplace">
          <Marketplace />
        </div>

        <div id="game_play" className="mt-40">
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
