import tRexImg from "../../assets/intro/t-rex.png";
import checkedImg from "../../assets/svgs/check.svg";
import ethImg from "../../assets/eth.png";
import { useState } from "react";
import PopupMinting from "../popup";

const Intro = () => {
  const [popupMinting, setPopupMinting] = useState(false);
  return (
    <div className="mt-[180px] relative">
      <div
        style={{
          borderRadius: "38px",
        }}
        className="max-w-7xl px-4 lg:px-0 mx-auto relative overflow-hidden"
      >
        <div
          className="px-14 py-16 relative z-50"
          style={{
            background:
              "radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
            backdropFilter: "blur(12px)",
            borderRadius: "38px",
          }}
        >
          <h4 className="font-black text-[36px] xl:text-[75px] leading-[35px]">
            Dino
          </h4>

          <div className="bg-[#D8299B] mt-8 mb-4 w-[450px] h-[70px] rounded-[20px] flex items-center justify-center">
            <h3 className="text-[20px] font-semibold leading-[29px] h-full flex items-center justify-center -tracking-[1px] w-[88%]">
              The First Blockchain Game on Linea Integrating ERC404.
            </h3>
          </div>

          <p className="font-mulish text-[17px] leading-[23px] text-white">
            You will be eligible to mint an OG NFT if your wallet meets one
            <br /> of the following conditions:
          </p>

          <div className="py-6">
            <div>
              <img src={checkedImg} className="mr-[10px] inline-block" />
              <span className="font-normal">Whitelist</span>
            </div>
            <div>
              <img src={checkedImg} className="mr-[10px] inline-block" />
              <span className="font-normal">Linea Voyage NFT holders</span>
            </div>
          </div>

          <div className="flex gap-4">
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
              Connect Wallet
            </button>
          </div>

          <div className="font-normal mt-[25px] text-[17px] leading-[23px]">
            <span>Max 01 NFT Per Wallet</span>
            <br />
            <span className="flex items-center justify-center lg:justify-start">
              Price:
              <span className="flex items-center">
                <img src={ethImg} className="ml-2 mr-1 inline-block" />
                <span>0.0018</span>
              </span>
            </span>
          </div>
        </div>

        <div
          style={{
            background:
              "radial-gradient(49.99% 50% at 50% 50%, #FFFFFF 0%, #CFCFCF 12%, #919191 30%, #5D5D5D 48%, #343434 64%, #171717 78%, #060606 91%, #000000 100%)",
            backgroundBlendMode: "color-dodge",
            mixBlendMode: "color-dodge",
          }}
          className="-top-[8px] absolute w-[797px] h-[190px] opacity-90 -left-[232px] z-10"
        />

        <div
          style={{
            background: "#789D7C",
            filter: "blur(150px)",
          }}
          className="w-[425px] h-[292px] absolute right-[100px] opacity-70 bottom-[60px]"
        />
      </div>

      <div className="horizontal-flip h-[809px] w-[809px] absolute -top-[130px] right-12 z-50">
        <img className="h-full w-full" src={tRexImg} />
      </div>

      <div
        className="absolute w-[576px] h-[395px] top-[-200px] right-[400px] opacity-20 z-10"
        style={{
          background: "#15EEED",
          filter: "blur(150px)",
        }}
      />

      <div
        className="absolute w-[842px] h-[577px] top-[-300px] left-[100px] opacity-20 z-0"
        style={{
          background: "#EE7AC3",
          filter: "blur(150px)",
        }}
      />

      <div
        className="absolute w-[715px] h-[490px] top-[200px] -left-[200px] opacity-20"
        style={{
          background: "#8657CC",
          filter: "blur(150px)",
        }}
      />

      <PopupMinting
        popupMinting={popupMinting}
        setPopupMinting={setPopupMinting}
      />
    </div>
  );
};

export default Intro;
