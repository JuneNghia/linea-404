import Egg2 from "../../assets/roadmap/egg_2.png";
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
      <div className="lg:max-w-7xl px-4 lg:px-0 mx-auto">
      <h4 className="font-bold text-[36px] xl:text-[75px] leading-[35px] text-center">
          Roadmap
        </h4>
        <div className="flex justify-between my-32">
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
                  <div style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                  }} className="h-[169px] w-[152px] absolute -top-[90px]">
                    <img
                      className="w-full h-full"
                      src={item.img}
                      alt="gameplay"
                    />
                  </div>

                  <div style={{
                    background: item.color,
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: "12px",
                    fontWeight: "700"
                  }} className="absolute top-12 left-0 right-0 text-center text-[20px] px-3">{item.label}</div>

                  <div className="pt-28 w-[90%] mx-auto leading-[30px] text-[15px]">
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
    </div>
  );
};

export default Roadmap;
