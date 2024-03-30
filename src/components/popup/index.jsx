import Ethe from "../../assets/ethe.png";
import Delete from "../../assets/svgs/delete.svg";
import Twitter from "../../assets/svgs/twitter.svg";
import Discord from "../../assets/svgs/discord.svg";
import iconC from "../../assets/svgs/iconC.svg";
import Site from "../../assets/site_logo.png";
import Dino1 from "../../assets/get-dino/3.png";

// eslint-disable-next-line react/prop-types
const PopupMinting = ({ popupMinting, setPopupMinting }) => {
  const handleContentClick = (e) => {
    // Ngăn chặn sự kiện click từ việc lan rộng ra nền đen
    e.stopPropagation();
  };

  return (
    <>
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
                padding: "2% 20px 30px",
              }}
            >
              <div
              className="lg:h-[678px] h-[620px] "
                style={{
                  maxWidth: "636px",
                  width: "100%",
                  margin: "auto",
                  position: "relative",
                  background: "#333333",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  overflow: "hidden",
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
                className="pt-[50px] pl-6 pr-6 lg:pl-[50px] lg:pr-[50px] pb-[30px]"
                  style={{
                    borderRadius: "10px",
                    opacity: "0.9",
                  }}
                >
                  <h2
                    style={{
                      fontWeight: "900",
                      letterSpacing: "-1px",
                    }}
                    className="text-white text-[24px] lg:text-[36px] text-center leading-[35px]"
                  >
                    MINT YOUR NFT
                  </h2>
                  <div className="pt-7">
                    <div className="relative h-[130px] lg:h-[188px] w-full">
                      <div className="lg:w-[187px] w-[109px] h-[113px] lg:h-[191px] absolute left-[70px] lg:left-[145px] z-10">
                        <div
                          className="flex justify-center items-center"
                          style={{
                            borderRadius: "8px",
                            transform: "rotate(-7.58deg)",
                            width: "109px",
                            height: "113px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              background:
                                "radial-gradient(100% 100% at -125.75% 5.36%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
                              backdropFilter: "blur(12px)",
                            }}
                            className="inset-0 h-full w-full z-20"
                          />

                          <div
                            style={{
                              position: "absolute",
                              background:
                                "radial-gradient(100% 100% at 0% 0%, rgba(235, 49, 165, 0.2) 0%, rgba(120, 157, 124, 0.2) 100%)",
                              backdropFilter: "blur(12px)",
                            }}
                            className="inset-0 h-full w-full z-10"
                          />

                          <div
                            style={{
                              borderRadius: "20px",
                              background: "#FFFFFF",
                              height: "40.25px",
                              width: "27.38px",
                              left: "12px",
                              backdropFilter: "blur(150px)",
                              bottom: "46px",
                            }}
                            className="absolute z-0"
                          />
                          <div
                            style={{
                              backgroundColor: "#EC811F",
                              borderRadius: "8px",
                              boxShadow:
                                "inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
                              height: "96.1px",
                              width: "89.5px",
                              position: "relative",
                              zIndex: 30,
                            }}
                          >
                            <img src={Dino1} />
                          </div>
                        </div>
                      </div>

                      <div className="w-[100px] h-[103.6px] absolute top-1.5 right-[68px] lg:right-[95px] z-0">
                        <div
                          className="flex justify-center items-center"
                          style={{
                            background:
                              "radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
                            backdropFilter: "blur(12px)",
                            borderRadius: "8px",
                            transform: "rotate(4.66deg)",
                            width: "100px",
                            height: "103.6px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              background:
                                "radial-gradient(100% 100% at -125.75% 5.36%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
                              backdropFilter: "blur(12px)",
                            }}
                            className="inset-0 h-full w-full z-10"
                          />

                          <div
                            style={{
                              background: "#EC811F",
                              filter: "blur(50px)",
                              height: "75px",
                              width: "75px",
                              right: "-10px",
                            }}
                            className="absolute z-0 opacity-30"
                          />

                          <div
                            style={{
                              backgroundColor: "#789D7C",
                              borderRadius: "8px",
                              boxShadow:
                                "inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
                              width: "82.2px",
                              height: "88.2px",
                              position: "relative",
                              zIndex: 20,
                            }}
                          >
                            <img
                              style={{
                                transform:
                                  "matrix(-0.98, -0.21, -0.21, 0.98, 0, 0)",
                              }}
                              src={Dino1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    style={{
                      fontWeight: "500",
                      fontStyle: "normal",
                    }}
                    className="text-white text-[16px] lg:text-[20px] pb-8 space-y-4 leading-[35px]"
                  >
                    <li className="flex justify-between">
                      <div>Total supply:</div>
                      <div>5555 NFTs</div>
                    </li>

                    <li className="flex justify-between items-center">
                      <div>Quantity:</div>
                      <div>1 NFT</div>
                    </li>

                    <li className="flex justify-between items-center">
                      <div>Price:</div>
                      <div>
                        <span className="flex gap-2 items-center">
                          <img src={Ethe} alt="" />
                          0.0018
                        </span>
                      </div>
                    </li>
                  </ul>
                  <button
                    style={{
                      fontWeight: "700",
                      padding: "12px 0px",
                      borderRadius: "20px",
                      lineHeight: "24px",
                    }}
                    className="bg-[#7C9B7C] lg:text-[20px] text-white uppercase text-[16px] w-full flex justify-center items-center opacity-90 hover:opacity-100 border-none transition-all active:opacity-80 active:border-none"
                  >
                    Mint Now
                  </button>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                  }}
                  className="h-[1px] w-full mb-4"
                />
                <div className="flex justify-center gap-2">
                  <a target="_blank" href="https://twitter.com/linea_erc404">
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                      }}
                      className="h-[36px] w-[36px] flex justify-center items-center rounded-[2px]"
                    >
                      <img className="w-[16px] h-[16px]" src={Twitter} alt="" />
                    </div>
                  </a>

                  <a target="_blank" href="">
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
        </div>
      )}
    </>
  );
};

export default PopupMinting;
