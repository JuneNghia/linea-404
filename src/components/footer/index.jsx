import Site from "../../assets/site_logo.png";
import Discord from "../../assets/svgs/discord.svg";
import Twitter from "../../assets/svgs/twitter.svg";
import Logo from "../../assets/mint-now/logoFooter.png";
import iconC from "../../assets/svgs/iconC.svg";

const Footer = () => {
  const listInfo = [
    {
      title: "Whitepaper",
    },
    {
      title: "Terms of Use",
    },
    {
      title: "News & Updates",
    },
    {
      title: "Our Partners",
    },
  ];

  const listInfo2 = [
    {
      title: "Tokenomics & allocation",
    },
    {
      title: "Launch contribution",
    },
  ];

  return (
    <div className="mt-20">
      <div className="lg:max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex justify-between">
          <div className="">
            <div className="h-[130px] w-[339px] relative">
              <img
                className="absolute inset-0 w-full h-full object-cover -left-[54px]"
                src={Logo}
                alt="logo"
              />
            </div>

            <div className="flex-col gap-[16px] hidden lg:flex">
              <div className="flex gap-[40px]">
                {listInfo.map((item, index) => (
                  <div key={index}>
                    <span
                      style={{ fontWeight: "600", lineHeight: "24px" }}
                      className="text-[16px] "
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-[40px]">
                {listInfo2.map((item, index) => (
                  <div key={index}>
                    <span
                      style={{ fontWeight: "600", lineHeight: "24px" }}
                      className="text-[16px] "
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="h-[130px]"></div>

            <div className="flex flex-col">
              {listInfo.map((item, index) => (
                <div
                  className="text-[#789D7C] text-[16px] leading-[33px]"
                  key={index}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-[230px]">
            <div className="h-[130px] relative">
              <div className="absolute bottom-4 left-0">
                <div className="flex gap-2">
                  <div
                    className="h-[60px] w-[60px] flex justify-center items-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <img src={Twitter} />
                  </div>

                  <div
                    className="h-[60px] w-[60px] flex justify-center items-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <img src={Discord} />
                  </div>
                </div>
              </div>
            </div>

            <div>
              {listInfo2.reverse().map((item, index) => (
                <div
                  className="text-[#789D7C] text-[16px] leading-[33px]"
                  key={index}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#999999]/60 h-[1px] w-full my-10" />

      <div className="lg:max-w-7xl mx-auto px-4 lg:px-0 pb-10">
        <div className="text-[16px] leading-[33px] text-[#FFFFFF]/70 flex items-center">
          Build on <img className="pb-2.5 pl-1.5" src={Site} alt="" />
          <span
            style={{
              fontWeight: "700",
            }}
            className="flex items-center relative pl-6 font"
          >
            <div className="absolute left-2 bottom-[9.5px] h-[12px] w-[12px]">
              <img className="h-full w-full" src={iconC} alt="iconC" />
            </div>
            2024 DINO. ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
