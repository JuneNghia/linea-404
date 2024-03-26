import AboutUs from "./components/about_us";
import Footer from "./components/footer";

import Header from "./components/header";
import Intro from "./components/intro";
import JoinUs from "./components/join_us";
import MintNow from "./components/mint_now";
import RoadMap from "./components/roadmap";
import GetDino from "./components/get_dino"

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
          <div className="sm:h-[900px] h-[1043px] lg:h-[800px] ">
            <AboutUs />
          </div>
          <MintNow />
        </div>

        <div id="roadmap">
          <RoadMap />
        </div>

        <JoinUs />

        <Footer />
      </div>
    </>
  );
}

export default App;
