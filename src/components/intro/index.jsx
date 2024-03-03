import groupImg from "../../assets/group_img.png";
import checkedImg from "../../assets/checked.png";
import ethImg from "../../assets/eth.png";
import bg from "../../assets/header/bg.png";
import Collext13 from "../../assets/collect_13.png";
import Plus from "../../assets/svgs/plus.svg";
import Ethe from "../../assets/ethe.png";
import Minus from "../../assets/svgs/minus.svg";
import Delete from "../../assets/svgs/delete.svg";
import { useState } from "react";

const Intro = () => {
  const [popupMinting, setPopupMinting] = useState(false);

  const handleContentClick = (e) => {
    // Ngăn chặn sự kiện click từ việc lan rộng ra nền đen
    e.stopPropagation();
  };

  return (
    <section
    className="px-0 xl:px-6 2xl:px-0"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-[9] max-w-4xl xl:max-w-7xl mx-[30px] sm:mx-auto flex flex-col lg:flex-row justify-center xl:justify-between items-center py-[70px] min-h-[850px] h-[50%] sm:h-[80%] lg:h-[80%] xl:h-[100%]">
        <div className="text-white text-center lg:text-left">
          <h1 className="font-bold text-[36px] xl:text-[64px] mb-[30px]">
            DINO 404
          </h1>
          <h3 className="text-[16px] font-normal mb-[20px]">
            The first NFT ERC404 for Early Contributors on the Linea
          </h3>
          <h3 className="text-[16px] font-normal mb-[20px]">
            <br />
            You will be eligible to mint an OG NFT if your wallet meets one of
            the
            <br />
            following conditions:
          </h3>
          <h3 className="font-normal mb-[20px]">
            <img src={checkedImg} className="mr-[10px] inline-block" />
            <span>Whitelist</span>
            <br />
            <img src={checkedImg} className="mr-[10px] inline-block" />
            <span>Linea Voyage NFT holders</span>
          </h3>

          <button
            onClick={() => setPopupMinting(!popupMinting)}
            className="w-[198px]"
          >
            Minting
          </button>

          <h3 className="font-normal mt-[25px]">
            <span>Max 01 NFT Per Wallet.</span>
            <br />
            <span className="flex items-center justify-center lg:justify-start">
              Price:
              <span className="flex items-center">
                <img src={ethImg} className="ml-2 mr-1 inline-block" />
                <span>0.0018</span>
              </span>
            </span>
          </h3>
        </div>
        <div className="hidden sm:block max-w-[350px] lg:max-w-full">
          <img src={groupImg} />
        </div>
      </div>
      {popupMinting && (
        <div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              backgroundColor: "rgba(6, 24, 44, 0.9)",
              width: "100vw",
              height: "100vh",
              zIndex: 999,
              overflow: "auto",
            }}
            onClick={() => setPopupMinting(false)}
          >
            <div
              style={{
                padding: "8% 20px 30px",
              }}
            >
              <div
                style={{
                  maxWidth: "500px",
                  width: "100%",
                  margin: "auto",
                  position: "relative",
                }}
                onClick={handleContentClick}
              >
                <div>
                  <button
                    onClick={() => setPopupMinting(false)}
                    className="flex justify-center items-center hover:opacity-80 active:opacity-100"
                    style={{
                      zIndex: "9",
                      border: "none",
                      height: "32px",
                      width: "32px",
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      backgroundColor: "#06182c",
                      padding: "0",
                    }}
                  >
                    <img src={Delete} alt="" />
                  </button>
                </div>
                <div
                  style={{
                    backgroundColor: "#1a1a1a",
                    padding: "50px",
                    borderRadius: "10px",
                    opacity: "0.9",
                  }}
                >
                  <h2 className="text-white text-[22px] text-center">
                    MINT YOUR NFT
                  </h2>
                  <div className="pt-6 pb-10">
                    <img
                      style={{ borderRadius: "10px" }}
                      src={Collext13}
                      alt=""
                    />
                  </div>

                  <ul
                    style={{ fontWeight: "600", fontSize: "16px" }}
                    className="text-white pb-8 space-y-4"
                  >
                    <li className="flex justify-between">
                      <div>Total supply:</div>
                      <div>5555 NFTs</div>
                    </li>

                    <li className="flex justify-between items-center">
                      <div>Quantity:</div>
                      <div>
                        <div
                          className="flex justify-between items-center"
                          style={{
                            border: "1px solid #eaeaea",
                            height: "45px",
                            borderRadius: "5px",
                            width: "150px",
                            padding: "0 16px",
                          }}
                        >
                          <button
                            className="hover:opacity-80 duration-200 active:opacity-100 w-[28px] h-[24px]"
                            style={{
                              outline: "none",
                              padding: "0",
                              fontSize: "24px",
                              backgroundColor: "transparent",
                            }}
                          >
                            <img className="h-full w-full" src={Minus} alt="" />
                          </button>
                          <input
                            style={{
                              width: "40px",
                              textAlign: "center",
                              border: "none",
                              backgroundColor: "transparent",
                              outline: "none",
                            }}
                            type="text"
                            value={1}
                          />
                          <button
                            className="hover:opacity-80 duration-200 active:opacity-100 w-[24px] h-[24px]"
                            style={{
                              outline: "none",
                              padding: "0",
                              fontSize: "24px",
                              backgroundColor: "transparent",
                            }}
                          >
                            <img className="w-full h-full" src={Plus} alt="" />
                          </button>
                        </div>
                      </div>
                    </li>

                    <li className="flex justify-between items-center">
                      <div>Total Price:</div>
                      <div>
                        <span className="flex gap-2 items-center">
                          <img src={Ethe} alt="" />
                          0.0018 ETH
                        </span>
                      </div>
                    </li>
                  </ul>
                  <button
                    style={{
                      fontWeight: "600",
                      padding: "12px 0px",
                      borderRadius: "8px",
                      lineHeight: "24px",
                    }}
                    className="bg-[#7C9B7C] text-white uppercase text-[18px] w-full flex justify-center items-center opacity-90 hover:opacity-100 border-none transition-all active:opacity-80 active:border-none"
                  >
                    Mint Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Intro;
