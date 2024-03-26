import GamePlay from "../../assets/svgs/gameplay.svg";
import ArrowRight from "../../assets/svgs/arrowright.svg";

const Index = () => {
  return (
    <div>
      <div className="lg:max-w-7xl px-4 lg:px-0 mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            <div>
              <div
                style={{
                  background: "linear-gradient(0, #000, #fff)",
                  borderRadius: "36px",
                }}
                className="relative min-w-[100px] w-[100px] h-[100px] overflow-hidden"
              >
                <div className="absolute w-[96.5px] h-[100px] left-0 right-0 top-[1.8px] mx-auto">
                  <div
                    style={{ borderRadius: "34px" }}
                    className="bg-black w-full h-full "
                  >
                    <img src={GamePlay} alt="gameplay" className="" />
                  </div>
                </div>
              </div>

              <h1 className="font-bold">Gameplay</h1>
              <p>Our gameplay video will be coming soon!</p>

              <button style={{
                padding: "0px 20px"
              }} className="flex bg-[#789D7C] rounded-[12px] text-white items-center gap-4 h-[40px]">
                Coming soon{" "}
                <div className="bg-white h-5 w-5 rounded-full flex justify-center items-center">
                  <img className="pl-0.5 pb-0.5" src={ArrowRight} alt="arrow" />
                </div>
              </button>
            </div>
          </div>

          <div className="col-span-7"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
