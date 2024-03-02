import logo from "../../../src/assets/logo.png";
import homeIcon from "../../../src/assets/icon-home.png";
import aboutUsIcon from "../../../src/assets/icon-about-us.png";
import roadmapIcon from "../../../src/assets/icon-roadmap.png";
import bridgeIcon from "../../../src/assets/icon-bridge.png";
import walletIcon from "../../../src/assets/wallet.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false)

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setIsScroll(false)
    } else if (window.scrollY > 70) {
      return setIsScroll(true)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header
      className="fixed w-full top-0 left-0"
      style={{ transition: "all 0.4s ease", backgroundColor: isScroll ? '#03011d' : 'transparent' }}
    >
      <div className="relative">
        <div className="relative max-w-7xl flex justify-between items-center mx-auto h-[64px]">
          <div className="inline-block">
            <img
              className="w-[150px] sm:w-[200px] lg:w-[264.66px]"
              src={logo}
            />
          </div>
          <ul className="hidden gap-[32px] text-[20px] xs:text-[15px] xl:flex font-extrabold">
            <li className=" h-full gap-2 cursor-pointer hover:text-blue-500">
              <a href="#home" className="flex items-center">
                <img className="mr-2" src={homeIcon} />
                <div>Home</div>
              </a>
            </li>
            <li className=" h-full gap-2 cursor-pointer hover:text-blue-500">
              <a href="#about-us" className="flex items-center">
                <img className="mr-2" src={aboutUsIcon} />
                <div>About us</div>
              </a>
            </li>
            <li className=" h-full gap-2 cursor-pointer hover:text-blue-500">
              <a href="#roadmap" className="flex items-center">
                <img className="mr-2" src={roadmapIcon} />
                <div>Roadmap</div>
              </a>
            </li>
            <li className=" h-full gap-2 cursor-pointer hover:text-blue-500">
              <a
                href="https://bridge.linea.build"
                className="flex items-center"
              >
                <img src={bridgeIcon} />
                <div>Bridge</div>
              </a>
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
