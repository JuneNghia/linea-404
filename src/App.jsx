import bg from "../src/assets/bg-1.jpg";
import AboutUs from "./components/about_us";

import Header from "./components/header";
import Intro from "./components/intro";
import MintNow from "./components/mint_now";
import RoadMap from "./components/roadmap";

function App() {
  return (
    <>
      <div className="w-screen max-w-full">
        <div
        id="home"
          className="min-h-full h-[1090px] min-w-full bg-cover"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <Header />
          <Intro />
        </div>

        <div id="about-us">
          <div className="sm:h-[900px] h-[1043px] lg:h-[800px] ">
            <AboutUs />
          </div>
          <MintNow />
        </div>

        <div id="roadmap">
          <RoadMap />
        </div>
      </div>
    </>
  );
}

export default App;
