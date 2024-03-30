import Bg from "../../assets/mint-now/bgJoinUs.jpg";
import BG01 from "../../assets/mint-now/bg01.png";
import BG02 from "../../assets/mint-now/bg02.png";
import BG03 from "../../assets/mint-now/bg03.png";

const JoinUs = () => {
  return (
    <div className="relative">
      <div className="hidden lg:block lg:max-w-7xl px-4 lg:px-0 mx-auto">
        <h4
          style={{
            letterSpacing: "-1px",
          }}
          className="font-bold text-[36px] xl:text-[75px] leading-[59px] w-[40%]"
        >
          Join our community
        </h4>

        <div className="relative h-[507px] w-full my-16">
          <img
            className="absolute h-[829px] w-[841px] z-10 -top-[155px] right-0"
            style={{
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
            }}
            src={BG01}
            alt=""
          />
          <img
            className="absolute z-10 h-[277px] w-[277px] -top-[58px] left-[66px]"
            src={BG02}
            alt=""
          />
          <img
            className="absolute z-10 h-[244px] w-[244px] -right-[66px] -top-[164px]"
            src={BG03}
            alt=""
          />
          <img className="w-full h-full absolute inset-0" src={Bg} alt="" />
          <div className="absolute bottom-16 left-10">
            <h4
              style={{
                fontWeight: "700",
              }}
              className="text-[#789D7C] text-[24px] leading-[33px]"
            >
              Join our
              <br />
              community
            </h4>
            <p
              style={{
                fontWeight: "600",
              }}
              className="text-[18px] leading-[24px] text-white mt-3 mb-2"
            >
              Be part of our amazing community and
              <br />
              stay tuned for any news.
            </p>
            <div className="flex gap-2">
              <button
                style={{
                  letterSpacing: "-1px",
                  fontWeight: "700",
                  padding: "5px 0px",
                }}
                className="text-[24px] leading-[35px]"
              >
                <a
                  target="_blank"
                  style={{
                    padding: "12px 24px",
                  }}
                  className="hover:text-white"
                  href="https://discord.gg/YFvNXUXE"
                >
                  Join Discord
                </a>
              </button>
              <button
                style={{
                  letterSpacing: "-1px",
                  fontWeight: "700",
                  padding: "5px 0px",
                  backgroundColor: "transparent",
                  border: "1px solid #789D7C",
                  color: "#789D7C",
                }}
                className="text-[24px] leading-[35px]"
              >
                <a
                  style={{
                    padding: "12px 24px",
                  }}
                  target="_blank"
                  className="hover:text-[#789D7C]"
                  href="https://twitter.com/linea_erc404"
                >
                  {" "}
                  Twitter
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-20">
        <h4
          style={{
            letterSpacing: "-1px",
            fontWeight: "900",
          }}
          className="font-bold text-[42px] xl:text-[75px] leading-[35px] w-[65%] mx-auto"
        >
          Join our community
        </h4>

        <div className="relative mt-16">
          <img
            className="absolute z-0 h-[208px] object-cover"
            src={Bg}
            alt=""
          />

          <div
            style={{
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
            }}
            className="absolute -right-[14px] -bottom-[54px] z-10 h-[210px] w-[200px]"
          >
            <img className="h-full w-full object-cover" src={BG01} alt="" />
          </div>

          <div className="absolute z-10 h-[95px] w-[96px] left-[24px] -top-[30px]">
            <img className="h-full w-full object-cover" src={BG02} alt="" />
          </div>

          <div className="absolute z-10 h-[117px] w-[114px] -top-[54px] right-[10px]">
            <img className="h-full w-full object-cover" src={BG03} alt="" />
          </div>

          <div className="relative z-10 mx-4 pt-16">
            <h4
              style={{
                fontWeight: "700",
              }}
              className="text-white text-[18px] leading-[33px]"
            >
              Join our community
            </h4>

            <p
              style={{
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.5)",
              }}
              className="text-[12px] leading-[19px] mt-1 mb-4"
            >
              Be part of our amazing community <br />
              and stay tuned for any news.
            </p>

            <div className="flex gap-2">
              <button
                style={{
                  letterSpacing: "-1px",
                  fontWeight: "600",
                  padding: "1px 0px",
                  borderRadius: "12px",
                }}
                className="text-[14px] leading-[35px]"
              >
                <a
                  target="_blank"
                  style={{
                    padding: "2px 12px",
                  }}
                  className="hover:text-white"
                  href="https://discord.gg/YFvNXUXE"
                >
                  Join Discord
                </a>
              </button>
              <button
                style={{
                  letterSpacing: "-1px",
                  fontWeight: "600",
                  padding: "1px 0px",
                  backgroundColor: "transparent",
                  border: "1px solid #789D7C",
                  color: "#789D7C",
                  borderRadius: "12px",
                }}
                className="text-[14px] leading-[35px]"
              >
                <a
                  style={{
                    padding: "2px 12px",
                  }}
                  target="_blank"
                  className="hover:text-[#789D7C]"
                  href="https://twitter.com/linea_erc404"
                >
                  {" "}
                  Twitter
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#11E2E6",
          filter: "blur(150px)",
        }}
        className="lg:w-[523px] h-[200px] w-[400px] lg:-right-[400px] bottom-0 -right-[350px] lg:-bottom-[80px] lg:h-[358px] absolute opacity-70"
      ></div>
    </div>
  );
};

export default JoinUs;
