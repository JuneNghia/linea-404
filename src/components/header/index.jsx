import logo from "../../../src/assets/logo.png";
import homeIcon from "../../../src/assets/icon-home.png";
import aboutUsIcon from "../../../src/assets/icon-about-us.png";
import roadmapIcon from "../../../src/assets/icon-roadmap.png";
import bridgeIcon from "../../../src/assets/icon-bridge.png";
import walletIcon from "../../../src/assets/wallet.svg";

const Header = () => {
  return (
    <header
      className="fixed w-full top-0 left-0"
      style={{ transition: "all 0.4s ease" }}
    >
      <div className="relative">
        <div className="relative max-w-7xl flex justify-between items-center mx-auto h-[64px] pt-10">
          <div className="inline-block">
            <img className="w-[150px] sm:w-[200px] lg:w-[264.66px]" src={logo} />
          </div>
          <ul className="hidden gap-[32px] text-[20px] xs:text-[15px] xl:flex font-extrabold">
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
            <button className="font-extrabold flex">
              <img className="w-[22px] h-[22px] mr-[8px]" src={walletIcon} />
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
