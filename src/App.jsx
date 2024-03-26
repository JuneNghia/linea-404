import Footer from "./components/footer";

import Header from "./components/header";
import Intro from "./components/intro";
import Slider from "./components/slider";
import GamePlay from './components/game_play'
import RoadMap from "./components/roadmap";

function App() {
  return (
    <>
      <div className="w-screen max-w-full">
        <div id="home" className="min-h-full min-w-full bg-cover relative">
          <Header />
          <Intro />
          <Slider />
        </div>

        {/* <div id="about-us">
          <div className="sm:h-[900px] h-[1043px] lg:h-[800px] ">
            <AboutUs />
          </div>
          <MintNow />
        </div> */}

        <div id="game_play">
          <GamePlay />
        </div>

        <div id="roadmap">
          <RoadMap />
        </div>

        {/* <JoinUs />  */}

        <Footer />
      </div>
    </>
  );
}

export default App;
