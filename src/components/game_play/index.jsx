import GamePlay from "../../assets/svgs/gameplay.svg";
import ArrowRight from "../../assets/svgs/arrowright.svg";
import ArrowRightGL from "../../assets/svgs/arrowRightGL.svg";
import RightBg from "../../assets/mint-now/rightBg.png";
import LeftBg from "../../assets/mint-now/leftBg.png";

const Index = () => {
  return (
    <div className="relative">
      <div className="hidden lg:block lg:max-w-7xl px-4 lg:px-0 mx-auto z-10 relative">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-5">
            <div className="space-y-6">
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

              <h1 className="font-bold text-[42px] xl:text-[75px] leading-[35px]">
                Gameplay
              </h1>
              <p className="leading-[29px] text-[24px] text-[#FFFFFF]/80">
                Our gameplay video will be
                <br /> coming soon!
              </p>

              <button
                style={{
                  padding: "0px 24px",
                  fontWeight: "500",
                }}
                className="flex bg-[#789D7C] rounded-[12px] text-white items-center gap-4 h-[40px] text-[20px]"
              >
                Coming soon{" "}
                <div className="bg-white h-5 w-5 rounded-full flex justify-center items-center">
                  <img className="pl-0.5 pb-0.5" src={ArrowRight} alt="arrow" />
                </div>
              </button>
            </div>
          </div>

          <div className="col-span-7">
            <div className="flex gap-3">
              <div className="rounded-[20px] relative">
                <img src={LeftBg} alt="left" />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      backgroundColor: "#789D7C",
                      borderRadius: "12px",
                    }}
                    className="flex justify-center items-center"
                  >
                    <img src={ArrowRightGL} alt="arrow" />
                  </div>
                </div>
              </div>
              <div className="rounded-[20px] relative">
                <img
                  style={{
                    transform: "matrix(-1, 0, 0, 1, 0, 0)",
                    borderRadius: "20px",
                  }}
                  src={RightBg}
                  alt="right"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      backgroundColor: "#789D7C",
                      borderRadius: "12px",
                    }}
                    className="flex justify-center items-center"
                  >
                    <img src={ArrowRightGL} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 lg:hidden z-10">
        <h1
          style={{
            fontWeight: "900",
          }}
          className=" text-center text-[42px] xl:text-[75px] leading-[35px]"
        >
          Gameplay
        </h1>

        <p
          style={{
            fontWeight: "600",
          }}
          className="leading-[19px] text-[20px] text-[#FFFFFF]/60 text-center mt-6 mb-4"
        >
          Our gameplay video will be
          <br /> coming soon!
        </p>

        <button
          style={{
            padding: "0px 24px",
            fontWeight: "700",
          }}
          className="flex bg-[#789D7C] rounded-[12px] text-white items-center mx-auto gap-4 h-[32px] text-[16px]"
        >
          Coming soon{" "}
          <div className="bg-white h-5 w-5 rounded-full flex justify-center items-center">
            <img className="pl-0.5 pb-0.5" src={ArrowRight} alt="arrow" />
          </div>
        </button>
        <div className="grid grid-cols-2 gap-2 py-8">
          <div className="rounded-[20px] relative">
            <img src={LeftBg} alt="left" />
            <div className="absolute inset-0 flex justify-center items-center">
              <div
                style={{
                  height: "37px",
                  width: "37px",
                  backgroundColor: "#789D7C",
                  borderRadius: "12px",
                }}
                className="flex justify-center items-center"
              >
                <img className="h-[21px] w-[21px]" src={ArrowRightGL} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="rounded-[20px] relative">
            <img
              style={{
                transform: "matrix(-1, 0, 0, 1, 0, 0)",
                borderRadius: "20px",
              }}
              src={RightBg}
              alt="right"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div
                style={{
                  height: "37px",
                  width: "37px",
                  backgroundColor: "#789D7C",
                  borderRadius: "12px",
                }}
                className="flex justify-center items-center"
              >
                <img className="h-[21px] w-[21px]" src={ArrowRightGL} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#EB31A5",
          filter: "blur(150px)",
        }}
        className="h-[300px] w-[300px] lg:h-[439px] lg:w-[439px] absolute top-0 lg:-top-[100px] opacity-30 -right-[100px] z-0"
      />
    </div>
  );
};

export default Index;
