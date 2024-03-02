import bg from "../src/assets/bg-1.jpg";

import Header from "./components/header";
import Intro from "./components/intro";
import MintNow from "./components/mint_now";

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
      </div>

    </>
  );
}

export default App;
