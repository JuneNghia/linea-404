import tRexImg from "../../assets/intro/t-rex.png";
import checkedImg from "../../assets/checked.png";
import ethImg from "../../assets/eth.png";
import { useState } from "react";
import PopupMinting from "../popup";

const Intro = () => {
  const [popupMinting, setPopupMinting] = useState(false);
  return (
    <section
      className="px-0 xl:px-6 2xl:px-0"
      style={{
        backgroundColor: "#000",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-[9] max-w-4xl xl:max-w-7xl mx-[30px] mt-[70px] sm:mx-auto flex flex-col lg:flex-row justify-center xl:justify-between items-center min-h-[850px] h-[50%] sm:h-[80%] lg:h-[80%] xl:h-[100%]">
        
        <div className="text-white text-center lg:text-left border border-transparent w-full p-20 rounded-[38px]">
          <h1 className="font-bold text-[36px] xl:text-[80px] leading-[35px] font-black mb-[30px]">
            Dino
          </h1>
          <div className="bg-[#D8299B] w-[450px] h-[78px] rounded-[20px] flex items-center justify-center">
            <h3 className="text-[22px] font-medium leading-[29px] h-full flex items-center justify-center -tracking-[1px] w-[85%]">
              The First Blockchain Game on Linea Integrating ERC404.
            </h3>
          </div>

          <div className="font-mulish text-[17px] leading-[23px]">
            <h3 className="mb-[20px] ">
              <br />
              You will be eligible to mint an OG NFT if your wallet meets one <br/> of
              the following conditions:
            </h3>
            <h3 className="mb-[20px]">
              <img src={checkedImg} className="mr-[10px] inline-block" />
              <span>Whitelist</span>
              <br />
              <img src={checkedImg} className="mr-[10px] inline-block" />
              <span>Linea Voyage NFT holders</span>
            </h3>
          </div>

          <div className="flex gap-[10px]">
            <button onClick={() => setPopupMinting(!popupMinting)}>
              Minting
            </button>
            <button className=" !bg-transparent text-[#789D7C] border border-[#789D7C]">
              Connect Wallet
            </button>
          </div>

          <h3 className="font-normal mt-[25px] text-[17px] leading-[23px]">
            <span>Max 01 NFT Per Wallet.</span>
            <br />
            <span className="flex items-center justify-center lg:justify-start">
              Price:
              <span className="flex items-center">
                <img src={ethImg} className="ml-2 mr-1 inline-block" />
                <span>0.0018</span>
              </span>
            </span>
          </h3>
        </div>
        <div className="hidden absolute -right-[165px] sm:block max-w-[350px] lg:max-w-[809px] horizontal-flip">
          <img src={tRexImg} />
        </div>
      </div>

      <PopupMinting
        popupMinting={popupMinting}
        setPopupMinting={setPopupMinting}
      />
    </section>
  );
};

export default Intro;
