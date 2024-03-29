import aboutUsImg from "../../assets/get-dino/3.png";
import { useState } from "react";
import PopupMinting from "../popup";

const AboutUs = () => {
  const [popupMinting, setPopupMinting] = useState(false);
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 relative z-50">
        <div className="flex flex-col-reverse items-center lg:grid lg:grid-cols-2 lg:gap-[26px] h-[80%] sm:h-[98%] lg:h-[80%] xl:h-[85%]">
          <div>
            <img style={{ borderRadius: "10px" }} src={aboutUsImg} />
          </div>
          <div>
            <h2 className="title mb-[40px]">About Us</h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "23px",
              }}
              className="!text-white font-mulish"
            >
              Discover a captivating world where dinosaurs have evolved over
              thousands of years in our blockchain game project on Linea. Engage
              in nurturing and witnessing their growth, and even create new
              dinosaurs through the evolutionary process.
            </p>
            <br />
            <p
              style={{
                fontSize: "18px",
                lineHeight: "23px",
              }}
              className="!text-white font-mulish"
            >
              Powered by the secure and transparent Linea ecosystem and
              leveraging the cutting-edge features of ERC404 technology, DINO404
              ensures the uniqueness of each dinosaur and virtual asset.
              Moreover, DINO404 introduces an exciting earning mechanism that
              addresses liquidity challenges and inflation, delivering the most
              authentic and captivating gaming experience.
            </p>

            <div className="flex gap-[10px] mt-6">
              <button
                style={{
                  padding: "6px 24px",
                }}
                onClick={() => setPopupMinting(!popupMinting)}
              >
                Minting
              </button>
              <button
                style={{
                  padding: "6px 24px",
                }}
                className=" !bg-transparent text-[#789D7C] border border-[#789D7C]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#EB31A5",
          filter: "blur(150px)",
        }}
        className="h-[439px] w-[439px] absolute top-[170px] opacity-30 -right-[100px]"
      />

      <div
        style={{
          background: "#8657CC",
          filter: "blur(150px)",
        }}
        className="h-[371px] w-[541px] absolute top-[170px] opacity-30 left-[200px]"
      />

      <div
        style={{
          background: "#F0C08B",
          filter: "blur(150px)",
        }}
        className="h-[287px] w-[418px] absolute top-[100px] opacity-30 left-[100px]"
      />

      <PopupMinting
        popupMinting={popupMinting}
        setPopupMinting={setPopupMinting}
      />
    </div>
  );
};

export default AboutUs;
