import Bg from "../../assets/mint-now/bgJoinUs.jpg";
import BG01 from "../../assets/mint-now/bg01.png";
import BG02 from "../../assets/mint-now/bg02.png";
import BG03 from "../../assets/mint-now/bg03.png";

const JoinUs = () => {
  return (
    <div className="relative">
      <div className="lg:max-w-7xl px-4 lg:px-0 mx-auto">
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
      <div
        style={{
          right: "-400px",
          bottom: "-80px",
          backgroundColor: "#11E2E6",
          filter: "blur(150px)",
        }}
        className="w-[523px] h-[358px] absolute opacity-70"
      ></div>
    </div>
  );
};

export default JoinUs;
