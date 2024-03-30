import Egg2 from "../../assets/roadmap/trungg 1.png";
import Egg3 from "../../assets/roadmap/egg_3.png";
import Egg4 from "../../assets/roadmap/egg_4.png";

const Roadmap = () => {
  const data = [
    {
      label: "Phase 1",
      content: [
        "Launch OG NFT Collection",
        "The team plans to expand the virtual world, introducing new environments, quests, and challenges for players to explore",
      ],
      img: Egg3,
      bgColor:
        "radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
      color: "#B8200B",
      widthBlur: "335px",
      heightBlue: "270px"
    },
    {
      label: "Phase 2",
      content: [
        "Free Mint unique dinosaur eggs",
        "Blockchain Game version 1 (basic features)",
        "Activity for top leaderboard",
        "The point-earning mechanism",
      ],
      img: Egg2,
      bgColor:
        "radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
      color: "#428725",
      widthBlur: "280px",
      heightBlue: "244px"
    },
    {
      label: "Phase 3",
      content: [
        "Blockchain Game version 2 (upgraded features)",
        "Airdrop for Community",
        "Launch token $DINO",
        "Listed on Cex/ Dex",
      ],
      img: Egg3,
      bgColor:
        "radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
      color: "#EF8C20",
      widthBlur: "297px",
      heightBlue: "270px"
    },
    {
      label: "Phase 4",
      content: [
        "The token-earning mechanism",
        "Integrating Metaverse into the game",
      ],
      img: Egg4,
      bgColor:
        "radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
      color: "#C21D74",
      widthBlur: "348px",
      heightBlue: "269px"
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="hidden lg:block lg:max-w-7xl px-4 lg:px-0 mx-auto relative">
        <h4 className="font-bold text-[36px] xl:text-[75px] leading-[35px] text-center">
          Roadmap
        </h4>
       

        <div className="flex justify-between my-32 relative z-0">
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                background: "linear-gradient(0, #171717, #bfbcbc)",
                borderRadius: "38px",
                marginTop: `${(index === 0 || index === 3) && "72px"}`,
              }}
              className="relative  w-[290px] h-[362px]"
            >
                <div
                className="absolute opacity-40"
                style={{
                  filter: `blur(150px)`,
                  background: `${item.color}`,
                  height: item.heightBlue,
                  width: item.widthBlur,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
              <div className="absolute w-[275px] h-[362px] left-0 right-0 top-2 mx-auto">
                <div
                  style={{ borderRadius: "38px" }}
                  className="w-full h-[97.5%] relative"
                >
                      <div
                      style={{ borderRadius: "38px" }}
                      className="absolute inset-0 h-full w-full overflow-hidden z-0"
                    >
                      <div className="absolute inset-0 h-full w-full bg-black z-0" />
                      <div
                        style={{
                          filter: `blur(150px)`,
                          background: `${item.color}`,
                          height: item.heightBlue,
                          width: item.widthBlur,
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                        className="absolute inset-0 opacity-70 z-10"
                      />
                      <div
                        style={{
                          background:
                            "radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
                          borderRadius: "38px",
                        }}
                        className="absolute inset-0 h-full w-full z-20"
                      />
                    </div>
                  {index === 1 ? (
                    <div
                      style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                      className="h-[257px] w-[240px] absolute -top-[132px]"
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={item.img}
                        alt="gameplay"
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                      className="h-[169px] w-[152px] absolute -top-[90px]"
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={item.img}
                        alt="gameplay"
                      />
                    </div>
                  )}

                  <div
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                      borderRadius: "12px",
                      fontWeight: "700",
                    }}
                    className="absolute top-12 left-0 right-0 text-center text-[20px] px-3"
                  >
                    {item.label}
                  </div>

                  <div className="pt-28 w-[90%] mx-auto leading-[30px] text-[16px] relative z-10">
                    {item.content.map((content, index) => (
                      <div key={index}>- {content}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden">
        <h4
          style={{
            fontWeight: "900",
          }}
          className="font-bold text-[42px] xl:text-[75px] leading-[35px] text-center"
        >
          Roadmap
        </h4>

        <div className="flex flex-col gap-6 relative z-0 pt-16">
          {data.map((item, index) => (
            <div
              key={index}
              className={`relative w-full ${
                index === 2
                  ? "h-[190px]"
                  : index === 3
                  ? "h-[145px]"
                  : "h-[180px]"
              } my-2`}
            >
              <div
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(0, #171717, #bfbcbc)",
                }}
                className="h-[98%] w-[90%] m-auto relative"
              >
                <div className="absolute inset-0 w-[98%] h-[99%] top-1.5 m-auto">
                  <div
                    style={{ borderRadius: "16px" }}
                    className="bg-black w-full h-full relative"
                  >
                    <div
                      className={`absolute z-30 ${
                        index === 1
                          ? "-left-[12px] -top-[82px]"
                          : "-top-[55px] left-[30px]"
                      } `}
                    >
                      <img
                        className={` ${
                          index === 1
                            ? "w-[185px] h-[166px]"
                            : "w-[102px]  h-[113px]"
                        } object-cover`}
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div
                      style={{ borderRadius: "16px" }}
                      className="absolute inset-0 h-full w-full overflow-hidden"
                    >
                      <div
                        style={{
                          filter: `blur(150px)`,
                          background: `${item.color}`,
                        }}
                        className="absolute inset-0 h-[180px] w-[300px] opacity-80 z-0"
                      />
                      <div
                        className="absolute inset-0 m-auto h-[100%] w-[100%] z-10"
                        style={{
                          backdropFilter: "blur(12px)",
                          background:
                            "radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
                        }}
                      />
                      <div className="px-4 pt-9 relative z-30">
                        <div
                          style={{
                            background: item.color,
                            fontWeight: "700",
                            borderRadius: "8px",
                          }}
                          className="text-[16px] leading-[33px] w-[128px] flex justify-center items-center  h-[24px]"
                        >
                          {item.label}
                        </div>
                        <div className="pt-5">
                          {item.content.map((content, index) => (
                            <div
                              key={index}
                              className="text-white/80 text-[14px] leading-[19px]"
                            >
                              - {content}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
