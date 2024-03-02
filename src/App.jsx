import logo from "../src/assets/logo.png";
import bg from "../src/assets/bg-1.jpg";
import homeIcon from "../src/assets/icon-home.png";
import aboutUsIcon from "../src/assets/icon-about-us.png";
import roadmapIcon from "../src/assets/icon-roadmap.png";
import bridgeIcon from "../src/assets/icon-bridge.png";

function App() {
  return (
    <>
      <div className="w-screen max-w-full">
        <div
          className="min-h-full h-[1090px]"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="h-[64px] flex justify-between items-center mx-20  pt-16">
            <div className="inline-block">
              <img width={300} src={logo} />
            </div>
            <ul className="flex gap-[32px] text-[20px]  xs:text-[15px] font-extrabold">
              <li className="flex items-center h-full gap-2 cursor-pointer hover:text-blue-500">
                <img src={homeIcon} />
                <div>Home</div>
              </li>
              <li className="flex items-center h-full gap-2">
                <img src={aboutUsIcon} />
                <div>About us</div>
              </li>
              <li className="flex items-center h-full gap-2">
                <img src={roadmapIcon} />
                <div>Roadmap</div>
              </li>
              <li className="flex items-center h-full gap-2">
                <img src={bridgeIcon} />
                <div>Bridge</div>
              </li>
            </ul>
            <div>
              <button className="font-extrabold">Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
