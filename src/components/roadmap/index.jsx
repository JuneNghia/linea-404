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
      color: "#C32B12",
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
      color: "#8ED24E",
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
      color: "#EC811F",
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
      color: "#D8299B",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="hidden lg:block lg:max-w-7xl px-4 lg:px-0 mx-auto relative">
        <h4 className="font-bold text-[36px] xl:text-[75px] leading-[35px] text-center">
          Roadmap
        </h4>
        <div className="absolute left-0 top-[175px] right-0 flex justify-between z-10 opacity-60">
          <div className="w-[275px]">
            <div
              className=" w-[90%] mx-auto h-[280px] "
              style={{
                backgroundColor: "rgba(184, 32, 11, 1)",
                marginTop: "72px",
                filter: "blur(150px)",
              }}
            />
          </div>

          <div className="w-[275px]">
            <div
              className=" w-[90%] mx-auto h-[280px] "
              style={{
                backgroundColor: "rgba(66, 135, 37, 1)",
                marginTop: "72px",
                filter: "blur(150px)",
              }}
            />
          </div>

          <div className="w-[275px]">
            <div
              className=" w-[90%] mx-auto h-[280px] "
              style={{
                backgroundColor: "rgba(239, 140, 32, 1)",
                marginTop: "72px",
                filter: "blur(150px)",
              }}
            />
          </div>

          <div className="w-[275px]">
            <div
              className=" w-[90%] mx-auto h-[280px] "
              style={{
                backgroundColor: "rgba(194, 29, 116, 1)",
                marginTop: "72px",
                filter: "blur(150px)",
              }}
            />
          </div>
        </div>

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
              <div className="absolute w-[275px] h-[362px] left-0 right-0 top-2 mx-auto">
                <div
                  style={{ borderRadius: "38px" }}
                  className="bg-black w-full h-full relative"
                >
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
                      background: item.color,
                      left: "50%",
                      transform: "translateX(-50%)",
                      borderRadius: "12px",
                      fontWeight: "700",
                    }}
                    className="absolute top-12 left-0 right-0 text-center text-[20px] px-3"
                  >
                    {item.label}
                  </div>

                  <div className="pt-28 w-[90%] mx-auto leading-[30px] text-[16px]">
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
