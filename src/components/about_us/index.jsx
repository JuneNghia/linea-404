import aboutUsImg from "../../assets/get-dino/3.png";
import { useState } from "react";
import PopupMinting from "../popup";

const AboutUs = () => {
  const [popupMinting, setPopupMinting] = useState(false);
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 relative z-50">
        <div className="flex flex-col-reverse items-center lg:grid lg:grid-cols-2 lg:gap-[26px] h-[80%] sm:h-[98%] lg:h-[80%] xl:h-[85%]">
          <div className="hidden lg:block">
            <img style={{ borderRadius: "10px" }} src={aboutUsImg} />
          </div>

          <div>
            <h2 className="title mb-[40px] hidden lg:block">About Us</h2>
            <h2
              style={{
                fontWeight: "900",
              }}
              className="text-[42px] lg:hidden text-center"
            >
              About Us
            </h2>
            <div className="lg:hidden">
              <img
                className="h-[258px] w-[258px] mx-auto"
                style={{ borderRadius: "10px" }}
                src={aboutUsImg}
              />
            </div>
            <p
              className={`!text-white text-center lg:text-start font-mulish text-[14px] lg:text-[18px] leading-[19px] lg:leading-[23px]`}
            >
              Discover a captivating world where dinosaurs have evolved over
              thousands of years in our blockchain game project on Linea. Engage
              in nurturing and witnessing their growth, and even create new
              dinosaurs through the evolutionary process.
            </p>
            <br />
            <p
              className={`!text-white text-center lg:text-start font-mulish text-[14px] lg:text-[18px] leading-[19px] lg:leading-[23px]`}
            >
              Powered by the secure and transparent Linea ecosystem and
              leveraging the cutting-edge features of ERC404 technology, DINO404
              ensures the uniqueness of each dinosaur and virtual asset.
              Moreover, DINO404 introduces an exciting earning mechanism that
              addresses liquidity challenges and inflation, delivering the most
              authentic and captivating gaming experience.
            </p>

            <div className="flex gap-[10px] lg:mt-6 mt-4 justify-center lg:justify-start">
              <button
                onClick={() => setPopupMinting(!popupMinting)}
                className="text-[16px] lg:text-[24px] py-0.5 px-4 lg:px-6 lg:py-1.5 rounded-[12px] lg:rounded-[20px]"
              >
                Minting
              </button>
              <button className="rounded-[12px] lg:rounded-[20px] !bg-transparent text-[#789D7C] border border-[#789D7C] text-[16px] lg:text-[24px] py-0.5 px-4 lg:px-6 lg:py-1.5">
              <a
                  style={{
                    padding: "12px 24px",
                  }}
                  target="_blank"
                  className="hover:text-[#789D7C]"
                  href="https://twitter.com/linea_erc404"
                >
                  
                  Contact Us
                </a>
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
        className="lg:h-[439px] h-[200px] w-[200px] lg:w-[439px] absolute top-[170px] opacity-30 right-0 lg:-right-[100px]"
      />

      <div
        style={{
          background: "#8657CC",
          filter: "blur(150px)",
        }}
        className="lg:h-[371px] h-[200px] w-[200px] lg:w-[541px] absolute top-[170px] opacity-50 left-[-50px] lg:left-[200px]"
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
