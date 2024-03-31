import img1 from "../../assets/intro/t-rex.png";
import img2 from "../../assets/get-dino/2.png";
import img3 from "../../assets/get-dino/3.png";
import img4 from "../../assets/get-dino/4.png";
import img5 from "../../assets/get-dino/5.png";
import ethImg from "../../assets/eth.png";
import { useState } from "react";

const data = [
  {
    name: "Triceratops",
    img: img2,
    width: 240,
    height: 286,
    bg: "#789D7C",
    heightBlue: 119,
    widthBlue: 174,
  },
  {
    name: "Nodosaurus",
    img: img3,
    width: 258,
    height: 312,
    bg: "#775E46",
    heightBlue: 179,
    widthBlue: 262,
  },
  {
    name: "Spinosaurus",
    img: img1,
    width: 338,
    height: 413,
    bg: "#E76153",
    heightBlue: 142,
    widthBlue: 212,
  },
  {
    name: "Stegosaurus",
    img: img5,
    width: 258,
    height: 312,
    heightBlue: 135,
    widthBlue: 203,
    bg: "#6C4130",
  },
  {
    name: "Indominus rex",
    img: img4,
    width: 240,
    height: 286,
    bg: "#7951C0",
    heightBlue: 106,
    widthBlue: 179,
  },
];

const dataMB = [
  {
    name: "Nodosaurus",
    img: img3,
    width: 198,
    height: 198,
    bg: "#513E42",
    heightBlue: 119,
    widthBlue: 174,
  },
  {
    name: "Indominus rex",
    img: img4,
    width: 156.19,
    height: 156.19,
    bg: "#624298",
    heightBlue: 179,
    widthBlue: 262,
  },

  {
    name: "Triceratops",
    img: img2,
    width: 154,
    height: 156.25,
    bg: "#979E74",
    heightBlue: 119,
    widthBlue: 174,
  },

  {
    name: "Stegosaurus",
    img: img5,
    width: 133.9,
    height: 128.94,
    bg: "#E76153",
  },
];

const GetDino = () => {
  const [activeItemMobile, setActiveItemMobile] = useState(0);
  return (
    <div>
      <div className="max-w-7xl px-4 lg:px-0 mx-auto">
        <h3 className="title text-center hidden lg:block">Get your Dino</h3>

        <h4
          style={{
            letterSpacing: "-1px",
          }}
          className="font-black text-[42px] leading-[35px] text-center lg:hidden"
        >
          Get your Dino
        </h4>

        <div className="mt-28 items-end justify-between hidden lg:flex">
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                height: item.height,
                width: item.width,
              }}
              className="relative"
            >
              <div
                className="absolute"
                style={{
                  filter: `blur(150px)`,
                  background: `${item.bg}`,
                  height: item.heightBlue + 30,
                  width: item.widthBlue + 30,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
              <div
                style={{
                  borderRadius: "38px",
                  background: "linear-gradient(0, #171717, #bfbcbc)",
                }}
                className="h-[98%] w-[90%] m-auto relative"
              >
                <div className="absolute inset-0 w-[95%] h-[98%] top-1.5 m-auto">
                  <div
                    style={{ borderRadius: "38px" }}
                    className=" w-full h-full relative"
                  >
                    <div
                      style={{ borderRadius: "38px" }}
                      className="absolute inset-0 h-full w-full overflow-hidden z-0"
                    >
                      <div className="absolute inset-0 h-full w-full bg-black z-0" />
                      <div
                        style={{
                          filter: `blur(150px)`,
                          background: `${item.bg}`,
                          height: item.heightBlue,
                          width: item.widthBlue,
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                        className="absolute inset-0 opacity-100 z-10"
                      />
                      <div
                        style={{
                          background:
                            "radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
                          borderRadius: "38px",
                        }}
                        className="absolute inset-0 h-full w-full z-20"
                      />
                    </div>

                    <div className="flex flex-col items-center pt-6 relative z-10">
                      <span
                        style={{
                          fontWeight: "900",
                          fontSize: "24px",
                          fontStyle: "normal",
                          lineHeight: "18px",
                          letterSpacing: "-1px",
                        }}
                        className="font-mulish"
                      >
                        {item.name}
                      </span>
                      <span className="flex gap-2 items-center">
                        <img className="w-[10px] h-[14px]" src={ethImg} />
                        <span>0.0018</span>
                      </span>
                    </div>

                    <div
                      className="absolute"
                      style={{
                        width: item.width,
                        left:
                          index === 0
                            ? "-22px"
                            : index === 1
                            ? "-24px"
                            : index === 2
                            ? "-30px"
                            : index === 3
                            ? "-20px"
                            : "-22px",
                        bottom:
                          index === 0
                            ? "-32px"
                            : index === 1
                            ? "-34px"
                            : index === 2
                            ? "-50px"
                            : index === 3
                            ? "-32px"
                            : "-32px",
                      }}
                    >
                      <img
                        className={index === 0 && "horizontal-flip"}
                        src={item.img}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-col justify-center items-center">
                <span className="font-extrabold text-[24px]">{item.name}</span>
                <span className="flex gap-2">
                  <img src={ethImg} />
                  <span>0.0018</span>
                </span>
              </div>

              <div className="mt-20">
                <img src={item.img} />
              </div> */}
            </div>
          ))}
        </div>

        <div className="lg:flex hidden mt-24 justify-center gap-2 items-center">
          {[...Array(5)].map((x, i) => (
            <div
              key={i}
              style={{
                width: i === 2 ? "60px" : "40px",
                height: i === 2 ? "6px" : "5px",
                background:
                  i === 2
                    ? "rgba(120, 157, 124, 0.6)"
                    : "rgba(120, 157, 124, 0.6)",
                opacity: i === 2 ? 1 : 0.3,
              }}
              className="rounded-[20px]"
            ></div>
          ))}
        </div>

        <div className="mt-10 flex lg:hidden flex-col gap-5 w-full">
          {dataMB.map((item, index) => (
            <div
              key={index}
              style={{
                height: "112.71px",
              }}
              onClick={() => setActiveItemMobile(index)}
              className={`relative mx-auto  ${
                index === activeItemMobile
                  ? "opacity-100 w-full"
                  : "opacity-30 w-[94%]"
              } duration-300`}
            >
              <div
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(0, #171717, #bfbcbc)",
                }}
                className="h-[98%] w-[100%] m-auto relative"
              >
                <div className="absolute inset-0 w-[97%] h-[98%] top-1.5 m-auto">
                  <div className="absolute inset-0 w-[95%] h-[98%] top-1.5 m-auto">
                    <div
                      style={{ borderRadius: "38px" }}
                      className=" w-full h-full relative"
                    >
                      <div
                        style={{ borderRadius: "38px" }}
                        className="absolute inset-0 h-full w-full overflow-hidden z-0"
                      >
                        <div className="absolute inset-0 h-full w-full bg-black z-0" />
                        <div
                          style={{
                            filter: `blur(150px)`,
                            background: `${item.bg}`,
                            height: item.heightBlue,
                            width: item.widthBlue,
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                          className="absolute inset-0 opacity-100 z-10"
                        />
                        <div
                          style={{
                            background:
                              "radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
                            borderRadius: "38px",
                          }}
                          className="absolute inset-0 h-full w-full z-20"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ borderRadius: "16px" }}
                    className="bg-black w-full h-full relative"
                  >
                    <div
                      style={{ borderRadius: "16px" }}
                      className="absolute inset-0 h-full w-full overflow-hidden"
                    >
                      <div
                        style={{
                          filter: `blur(150px)`,
                          background: `${item.bg}`,
                        }}
                        className={`absolute top-[-80px] ${
                          index % 2 === 0
                            ? index === 0
                              ? "-right-[100px] opacity-100"
                              : "-right-[200px] opacity-60"
                            : "-left-[200px] opacity-60"
                        } h-[258px] w-[378px]  `}
                      />
                    </div>

                    <div
                      className={`flex flex-col ${
                        index % 2 === 0 ? "items-start ml-6" : "items-end mr-6"
                      } pt-7`}
                    >
                      <div>
                        <span
                          style={{
                            fontWeight: "900",
                            fontSize: "24px",
                            fontStyle: "normal",
                            lineHeight: "18px",
                            letterSpacing: "-1px",
                          }}
                          className="font-mulish"
                        >
                          {item.name}
                        </span>
                        <span className="flex gap-2 items-center">
                          <img className="w-[10px] h-[14px]" src={ethImg} />
                          <span>0.0018</span>
                        </span>
                      </div>
                    </div>

                    <div
                      className={`absolute ${index === 0 && "-right-[14px]"} ${
                        index === 2 && "right-[14px]"
                      }`}
                      style={{
                        width: item.width,
                        height: item.height,

                        bottom:
                          index === 0
                            ? "-28px"
                            : index === 1
                            ? "-10px"
                            : index === 2
                            ? "-20px"
                            : index === 3
                            ? "-10px"
                            : "-10px",
                      }}
                    >
                      <img
                        className={`${
                          index === 2 && "horizontal-flip"
                        } h-full w-full object-cover`}
                        src={item.img}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden flex mt-8 justify-center gap-1 items-center">
          {[...Array(5)].map((x, i) => (
            <div
              key={i}
              style={{
                width: i === 0 ? "36px" : `${20 - i * 2}px`, // Width của phần tử đầu tiên là 100px, các phần tử sau trừ 10px
                height: i === 0 ? "4px" : "3px",
                background:
                  i === 0
                    ? "rgba(120, 157, 124, 0.6)"
                    : "rgba(120, 157, 124, 0.6)",
                opacity: i === 0 ? 1 : 0.7 - i * 0.1, // Mờ dần cho các phần tử sau
                borderRadius: "20px", // Làm tròn góc
              }}
              className="rounded-[20px]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetDino;
