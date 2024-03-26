import Pic1 from "../../assets/mint-now/pic1.png";
import Pic2 from "../../assets/mint-now/pic2.png";
import Pic3 from "../../assets/mint-now/pic3.png";
import Pach from "../../assets/mint-now/mintNow.png";

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
    <div className="w-full h-full ">
      <div className="lg:max-w-7xl px-4 lg:px-0 mx-auto">
        <h4 className="font-bold text-[36px] xl:text-[75px] leading-[35px] text-center">
          Mint Now
        </h4>

        <div className="flex gap-1">
          <div className="w-[30%]">
            <img src={Pach} alt="bg" />
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
    </div>
  );
};

export default MintNow;
