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
      <div className="w-screen overflow-hidden relative">
        {/* <div className="fixed top-0 h-screen w-screen">
        <img className="h-full w-full object-cover" src={BG} alt="" />
        </div> */}
        <div className="relative z-0">
        <Header />
        <div id="home">
          <Intro />
        </div>

         <div className="lg:mt-40 mt-20">
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

        <div id="game_play" className="lg:mt-40 mt-28">
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
     
      </div>
    </>
  );
}

export default App;
