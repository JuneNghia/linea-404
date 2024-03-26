import aboutUsImg from "../../assets/get-dino/3.png";
import bg from "../../assets/about/about_background.png";
import { useState } from "react";
import PopupMinting from "../popup";

const AboutUs = () => {
  const [popupMinting, setPopupMinting] = useState(false);
  return (
    <div
      className="h-full w-full px-0 xl:px-6 2xl:px-0"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl xl:max-w-7xl mx-[30px] lg:mx-auto h-full">
        <div className="flex flex-col-reverse items-center lg:grid lg:grid-cols-2 lg:gap-[26px] h-[80%] sm:h-[98%] lg:h-[80%] xl:h-[85%]">
          <div>
            <img style={{ borderRadius: "10px" }} src={aboutUsImg} />
          </div>
          <div className="text-[18px] font-mulish leading-0">
            <h2 className="title text-[60px] mb-[40px]">
              About Us
            </h2>
            <p className="!text-white">
              Discover a captivating world where dinosaurs have evolved over
              thousands of years in our blockchain game project on Linea. Engage
              in nurturing and witnessing their growth, and even create new
              dinosaurs through the evolutionary process.
            </p>
            <br />
            <p className="!text-white">
              Powered by the secure and transparent Linea ecosystem and
              leveraging the cutting-edge features of ERC404 technology, DINO404
              ensures the uniqueness of each dinosaur and virtual asset.
              Moreover, DINO404 introduces an exciting earning mechanism that
              addresses liquidity challenges and inflation, delivering the most
              authentic and captivating gaming experience.
            </p>

            <div className="flex gap-[10px] mt-4">
          <button onClick={() => setPopupMinting(!popupMinting)}>
            Minting
          </button>
          <button className=" !bg-transparent text-[#789D7C] border border-[#789D7C]">
            Contact Us
          </button>
        </div>
          </div>
        </div>
        
      </div>

      <PopupMinting
        popupMinting={popupMinting}
        setPopupMinting={setPopupMinting}
      />
    </div>
  );
};

export default AboutUs;
