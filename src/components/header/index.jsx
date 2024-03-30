import logo from "../../../src/assets/logo.png";
import homeIcon from "../../../src/assets/icon-home.png";
import aboutUsIcon from "../../../src/assets/icon-about-us.png";
import roadmapIcon from "../../../src/assets/icon-roadmap.png";
import bridgeIcon from "../../../src/assets/icon-bridge.png";
import walletIcon from "../../../src/assets/svgs/wallet.svg";
import Menu from "../../../src/assets/svgs/menubar.svg";
import { useEffect, useState } from "react";
import Twitter from "../../assets/svgs/twitter.svg";
import Discord from "../../assets/svgs/discord.svg";
import iconC from "../../assets/svgs/iconC.svg";
import Site from "../../assets/site_logo.png";

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
        isScroll ? "py-2 lg:py-0" : "my-[20px]"
      }`}
      style={{
        transition: "all 0.4s ease",
        backgroundColor: isScroll ? "#03011d" : "transparent",
      }}
    >
      <div className="relative py-[15px]">
        <div className="relative max-w-7xl flex px-3 lg:px-0 justify-between items-center mx-auto h-4 lg:h-[64px]">
          <div className="inline-block">
            <a href="/" className="cursor-pointer">
              <img
                className="w-[150px] sm:w-[200px] lg:w-[264.66px] transform -translate-x-[20px] lg:-translate-x-[42px]"
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
              className="items-center lg:flex mr-3 !text-[20px] hidden"
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
              style={{
                transform: "translateX(10px)",
              }}
              className=" lg:hidden !bg-transparent"
            >
              {showMenu ? (
                <i className="fa fa-times"></i>
              ) : (
                <img src={Menu} alt="menu" />
              )}
            </button>
          </div>
        </div>
        <div className="topnav lg:hidden">
          <div
            className="fixed h-screen z-[999] top-0 bg-[#333333]"
            id="myLinks"
          >
            <div
              onClick={handleShowMenu}
              className="absolute top-2 right-2 h-[32px] w-[32px] bg-[#131A13] rounded-[1px] text-lg flex justify-center items-center"
            >
              <i className="fa fa-times"></i>
            </div>

            <div className="h-[88px] w-[258px] mx-auto mt-5">
              <img className="h-full w-full object-cover" src={logo} alt="" />
            </div>

            <div className="flex flex-col justify-center pt-4 pb-4">
              <a
                href="#home"
                onClick={handleShowMenu}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img className="mr-2" src={homeIcon} />
                <span
                  style={{
                    fontWeight: "900",
                  }}
                  className=""
                >
                  Home
                </span>
              </a>

              <a
                href="#about-us"
                onClick={handleShowMenu}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img className="mr-2" src={aboutUsIcon} />
                <div
                  style={{
                    fontWeight: "900",
                  }}
                >
                  About us
                </div>
              </a>

              <a
                href="#roadmap"
                onClick={handleShowMenu}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img className="mr-2" src={roadmapIcon} />
                <div
                  style={{
                    fontWeight: "900",
                  }}
                >
                  Roadmap
                </div>
              </a>
              <a
                target="_blank"
                href="https://bridge.linea.build/"
                onClick={handleShowMenu}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img className="mr-2" src={bridgeIcon} />
                <div
                  style={{
                    fontWeight: "900",
                  }}
                >
                  Bridge
                </div>
              </a>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.2)",
              }}
              className="h-[1px] w-full mb-4"
            />

            <div className="flex justify-center gap-2 mb-8 mr-2">
              <a
                className="h-[36px] w-[36px]"
                target="_blank"
                href="https://twitter.com/linea_erc404"
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                  }}
                  className="h-[36px] w-[36px] flex justify-center items-center rounded-[2px]"
                >
                  <img className="w-[16px] h-[16px]" src={Twitter} alt="" />
                </div>
              </a>

              <a
                className="h-[36px] w-[36px]"
                target="_blank"
                href="https://discord.gg/YFvNXUXE"
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                  }}
                  className="h-[36px] w-[36px] flex justify-center items-center rounded-[2px]"
                >
                  <img className="w-[16px] h-[16px]" src={Discord} alt="" />
                </div>
              </a>
            </div>

            <button
              style={{
                padding: "2px 36px",
                borderRadius: "12px",
              }}
              className="items-center flex mx-auto"
            >
              <img
                style={{
                  transform: "translateX(4px)",
                }}
                className="w-[24px] h-[20px]"
                src={walletIcon}
              />
              <span className="text-[20px]">Connect Wallet</span>
            </button>

            <div className="text-[10px] leading-[33px] text-[#FFFFFF]/70 flex items-center justify-center py-4">
              Build on{" "}
              <img className="pb-2.5 pl-1.5 h-[28px]" src={Site} alt="" />
              <span
                style={{
                  fontWeight: "700",
                }}
                className="flex items-center relative pl-6 font"
              >
                <div className="absolute left-2 bottom-[9.5px] h-[12px] w-[12px]">
                  <img className="h-full w-full" src={iconC} alt="iconC" />
                </div>
                2024 DINO. ALL RIGHTS RESERVED
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
