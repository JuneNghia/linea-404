import logo from "../../../src/assets/logo.png";
import homeIcon from "../../../src/assets/icon-home.png";
import aboutUsIcon from "../../../src/assets/icon-about-us.png";
import roadmapIcon from "../../../src/assets/icon-roadmap.png";
import bridgeIcon from "../../../src/assets/icon-bridge.png";
import walletIcon from "../../../src/assets/svgs/wallet.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setIsScroll(false);
    } else if (window.scrollY > 70) {
      return setIsScroll(true);
    }
  };

  const handleShowMenu = () => {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      setShowMenu(false);
    } else {
      x.style.display = "block";
      setShowMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-[999] ${
        isScroll ? "py-0" : "my-[20px]"
      }`}
      style={{
        transition: "all 0.4s ease",
        backgroundColor: isScroll ? "#03011d" : "transparent",
      }}
    >
      <div className="relative py-[15px]">
        <div className="relative max-w-7xl flex justify-between items-center mx-auto h-[64px]">
          <div className="inline-block">
            <a href="/" className="cursor-pointer">
              <img
                style={{ transform: "translateX(-42px)" }}
                className="w-[150px] sm:w-[200px] lg:w-[264.66px]"
                src={logo}
              />
            </a>
          </div>
          <div>
            <ul className="hidden gap-[32px] text-[20px] xs:text-[15px] xl:flex font-bold leading-[18px] -tracking-[1px]">
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
                <a
                  href="https://bridge.linea.build"
                  className="flex items-center"
                >
                  <img className="mr-2" src={bridgeIcon} />
                  <div>Bridge</div>
                </a>
              </li>
              <li className=" h-full gap-2 cursor-pointer hover:text-blue-500">
                <a href="#roadmap" className="flex items-center">
                  <img className="mr-2" src={roadmapIcon} />
                  <div>Roadmap</div>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex">
            <button
              style={{
                padding: "6px 24px",
              }}
              className="items-center flex mr-3 !text-[20px] "
            >
              <img
                style={{
                  transform: "translateX(4px)",
                }}
                className="w-[30px] h-[24px] sm:mr-[8px]"
                src={walletIcon}
              />
              <span className="hidden sm:inline-block">Connect Wallet</span>
            </button>
            <button
              onClick={handleShowMenu}
              className="!px-[14px] py-[10px] lg:hidden"
            >
              {showMenu ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
        <div className="topnav lg:hidden">
          <div className="absolute z-[99] bg-[#283645]" id="myLinks">
            <li className="h-full gap-2 cursor-pointer hover:text-blue-500 list-none">
              <a
                href="#home"
                onClick={handleShowMenu}
                style={{ display: "flex", alignItems: "center" }}
              >
                <img className="mr-2" src={homeIcon} />
                <span>Home</span>
              </a>
            </li>
            <li className=" h-full gap-2 cursor-pointer hover:text-blue-500 list-none">
              <a
                href="#about-us"
                onClick={handleShowMenu}
                style={{ display: "flex", alignItems: "center" }}
              >
                <img className="mr-2" src={aboutUsIcon} />
                <div>About us</div>
              </a>
            </li>
            <li className=" h-full gap-2 cursor-pointer hover:text-blue-500 list-none">
              <a
                href="https://bridge.linea.build"
                onClick={handleShowMenu}
                style={{ display: "flex", alignItems: "center" }}
              >
                <img className="mr-2" src={bridgeIcon} />
                <div>Bridge</div>
              </a>
            </li>
            <li className=" h-full gap-2 cursor-pointer hover:text-blue-500 list-none">
              <a
                href="#roadmap"
                onClick={handleShowMenu}
                style={{ display: "flex", alignItems: "center" }}
              >
                <img className="mr-2" src={roadmapIcon} />
                <div>Roadmap</div>
              </a>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
