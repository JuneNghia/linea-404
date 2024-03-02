import bg from "../src/assets/header/bg.png";
import bg2 from "./assets/slider/bg.png";
import AboutUs from "./components/about_us";
import Footer from "./components/footer";

import Header from "./components/header";
import Intro from "./components/intro";
import JoinUs from "./components/join_us";
import MintNow from "./components/mint_now";
import RoadMap from "./components/roadmap";
import Slider from "./components/slider";

function App() {
  return (
    <>
      <div className="w-screen max-w-full">
        <div
          id="home"
          className="min-h-full h-[1100px] sm:h-[1100px] min-w-full bg-cover relative"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <Header />
          <Intro />
          <div style={{ backgroundImage: `url(${bg2})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }} className="h-[25%]">
            <Slider />
          </div>
        </div>

        <div id="about-us">
          <div className="sm:h-[900px] h-[1043px] lg:h-[800px] ">
            <AboutUs />
          </div>
          <MintNow />
          <RoadMap />
        </div>

        <JoinUs />

        <Footer />
      </div>
    </>
  );
}

export default App;
