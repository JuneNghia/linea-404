import Pic1 from "../../assets/mint-now/pic1.png";
import Pic2 from "../../assets/mint-now/pic2.png";
import Pic3 from "../../assets/mint-now/pic3.png";
import Pach from "../../assets/mint-now/mintNow.png";
import BgLeft from "../../assets/mint-now/bg-left.jpg";

const MintNow = () => {
  const listItem = [
    {
      title: "Mint NFT",
      img: Pic1,
      content:
        "As an early contributor, users will have the privilege of gaining access to our exclusive collection of OG NFTs. Additionally, Dino404 will soon be launching an extraordinary initiative that allows users to participate in the free NFT minting process to acquire unique dinosaur eggs.",
    },
    {
      title: "Play to earn",
      img: Pic2,
      content:
        "A Land-based Metaverse in which players can create their own characters. Unleash the full potential of majestic dinosaurs by providing them with top-notch care, forging new alliances, and engaging in thrilling in-game battles to expedite their evolution, games, quests, etc",
    },
    {
      title: "Metaverse",
      img: Pic3,
      content:
        "Combining cutting-edge technology will give you an authentic and immersive experience in the world of amazing dinosaurs.",
    },
  ];

  return (
    <div className="w-full h-full relative mb-20 mt-40">
      <div className="lg:max-w-7xl px-4 lg:px-0 mx-auto relative z-10">
        <h4 className="font-bold text-[36px] xl:text-[75px] leading-[35px] text-center">
          Mint Now
        </h4>

        <div className="flex py-20">
          <div className="w-[38%] relative">
            <div className="h-full flex justify-center items-center">
              <img src={BgLeft} alt="bg" />
            </div>
            <div className="absolute h-[536px] w-[552px] top-[10%] -left-10">
              <img className="h-full w-full" src={Pach} alt="bg" />
            </div>
          </div>

          <div className="flex-1">
            {listItem.map((item, index) => (
              <div
                className="h-[175px] w-full relative"
                style={{
                  border: "0.5px solid #8eb1ff6b",
                  background: `${
                    index !== 1 &&
                    "linear-gradient(180deg, #789D7C -65%, rgba(0, 0, 0, 0) 100%)"
                  }`,
                  transform: "matrix(1, 0, 0, -1, 0, 0)",
                }}
                key={index}
              >
                <div
                  style={{
                    transform: "matrix(1, 0, 0, -1, 0, 0)",
                  }}
                  className="absolute inset-0 flex justify-center items-center flex-col"
                >
                  <div className="px-10">
                    <h4 className="text-[#789D7C] text-[24px] leading-8 font-bold">
                      {item.title}
                    </h4>
                    <p className="text-[20px] leading-6 text-white/80 mt-1">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#F5C40E",
          filter: "blur(150px)",
        }}
        className="h-[439px] w-[715px] absolute bottom-0 opacity-20 -right-[200px] z-0"
      />

      <div
        style={{
          background: "#7C0000",
          filter: "blur(150px)",
        }}
        className="h-[357px] w-[519px] absolute top-[246px] opacity-40 left-[50px] z-0"
      />
    </div>
  );
};

export default MintNow;
