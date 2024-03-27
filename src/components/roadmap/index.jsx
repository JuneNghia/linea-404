import Egg1 from "../../assets/roadmap/egg_1.png";
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
      img: Egg1,
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
    <div className="w-full h-full ">
      <div className="lg:max-w-7xl px-4 lg:px-0 mx-auto">
        <div className="flex justify-between">

        {data.map((item, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(0, #000, #bfbcbc)",
              borderRadius: "36px",
            }}
            className="relative  w-[290px] h-[362px] overflow-hidden"
          >
            <div className="absolute w-[275px] h-[362px] left-0 right-0 top-2 mx-auto">
              <div
                style={{ borderRadius: "34px" }}
                className="bg-black w-full h-full relative"
              >
                <div className="h-[169px] w-[152px] absolute">
                  <img className="w-full h-full" src={item.img} alt="gameplay" />
                </div>

                <div>{item.label}</div>

                <div>
                  {item.content.map((content, index) => (
                    <div key={index}>{content}</div>
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
