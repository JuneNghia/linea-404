import groupImg from "../../assets/group_img.png";
import checkedImg from "../../assets/checked.png";
import ethImg from "../../assets/eth.png";

const Intro = () => {
  return (
    <section className="max-w-7xl mx-auto flex py-[10%] justify-between">
      <div className="text-white">
        <h1 className="font-bold text-[64px] mb-[30px]">DINO 404</h1>
        <h3 className="text-[16px] font-normal mb-[20px]">
          The first NFT ERC404 for Early Contributors on the Linea
        </h3>
        <h3 className="text-[16px] font-normal mb-[20px]">
          <br />
          You will be eligible to mint an OG NFT if your wallet meets one of the{" "}
          <br />
          following conditions:
        </h3>
        <h3 className="font-normal mb-[20px]">
          <img src={checkedImg} className="mr-[10px] inline-block" />
          <span>Whitelist</span>
          <br />
          <img src={checkedImg} className="mr-[10px] inline-block" />
          <span>Linea Voyage NFT holders</span>
        </h3>

        <button className="w-[198px]">Minting</button>

        <h3 className="font-normal mt-[25px]">
          <span>Max 01 NFT Per Wallet.</span>
          <br />
          <span className="flex items-center">
            Price:
            <span className="flex items-center">
              <img src={ethImg} className="ml-2 mr-1 inline-block" />
              <span>0.0018</span>
            </span>
          </span>
        </h3>
      </div>
      <div>
        <img src={groupImg}/>
      </div>
    </section>
  );
};

export default Intro;
