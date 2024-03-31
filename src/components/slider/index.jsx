import pic1 from "../../assets/slider/1.png";
import pic2 from "../../assets/slider/2.png";
import pic3 from "../../assets/slider/3.png";
import pic4 from "../../assets/slider/4.png";
import pic5 from "../../assets/slider/5.png";
import pic6 from "../../assets/slider/6.png";
import pic7 from "../../assets/slider/7.png";
import pic8 from "../../assets/slider/8.png";
import pic9 from "../../assets/slider/9.png";
import pic10 from "../../assets/slider/10.png";
import pic11 from "../../assets/slider/11.png";
import pic12 from "../../assets/slider/12.png";
import pic13 from "../../assets/slider/13.png";
import pic14 from "../../assets/slider/14.png";
import pic15 from "../../assets/slider/15.png";
import pic16 from "../../assets/slider/16.png";
import pic17 from "../../assets/slider/17.png";
import pic18 from "../../assets/slider/18.png";
import pic19 from "../../assets/slider/19.png";
import pic20 from "../../assets/slider/20.png";
import pic21 from "../../assets/slider/21.png";
import pic22 from "../../assets/slider/22.png";
import pic23 from "../../assets/slider/23.png";
import pic24 from "../../assets/slider/24.png";
import BG from '../../assets/Noise.png'
import ethImg from "../../assets/eth.png";

import { useEffect, useRef, useState } from "react";
import PopupMinting from "../popup";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "Triceratops",
    image: pic1,
    bg: "4E6F73",
    heightBlur: "258px",
    widthBlur: "378px",
  },
  {
    name: "Pteranodon",
    image: pic2,
    bg: "BE5A35",
    heightBlur: "238px",
    widthBlur: "348px",
  },
  {
    name: "Indominus rex",
    image: pic3,
    bg: "704CB3",
    heightBlur: "208px",
    widthBlur: "304px",
  },
  {
    name: "Stegosaurus",
    image: pic4,
    bg: "961E18",
    heightBlur: "208px",
    widthBlur: "304px",
  },
  {
    name: "Velociraptor",
    image: pic5,
    bg: "4E6F73",
    heightBlur: "258px",
    widthBlur: "378px",
  },
  {
    name: "Spinosaurus",
    image: pic6,
    bg: "BE5A35",
    heightBlur: "238px",
    widthBlur: "348px",
  },
  {
    name: "Mosasaurus",
    image: pic7,
    bg: "6AAFC3",
    heightBlur: "181px",
    widthBlur: "264px",
  },
  {
    name: "Pachycephalosaurus",
    image: pic8,
    bg: "A6AC7F",
    heightBlur: "208px",
    widthBlur: "304px",
  },
  {
    name: "Ankylosaurus",
    image: pic9,
    bg: "AFA748",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Baryonyx",
    image: pic10,
    bg: "95B0AE",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Dimorphodon",
    image: pic11,
    bg: "E19242",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Tylosaurus",
    image: pic12,
    bg: "4D535E",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Dilophosaurus",
    image: pic13,
    bg: "AFA748",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Ankylosaurus",
    image: pic14,
    bg: "95B0AE",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Paychycephalosaurus",
    image: pic15,
    bg: "E19242",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Apatosaurus",
    image: pic16,
    bg: "4D535E",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Stegosaurus",
    image: pic17,
    bg: "AFA748",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Dilophosaurus",
    image: pic18,
    bg: "95B0AE",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Mosasaurus",
    image: pic19,
    bg: "76B2C5",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Triceratops",
    image: pic20,
    bg: "4D535E",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Baryonyx",
    image: pic21,
    bg: "AFA748",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Pteranodon",
    image: pic22,
    bg: "95B0AE",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Spinosaurus",
    image: pic23,
    bg: "E19242",
    heightBlur: "204px",
    widthBlur: "298px",
  },
  {
    name: "Indominus rex",
    image: pic24,
    bg: "764CC0",
    heightBlur: "204px",
    widthBlur: "298px",
  },
];

const dataMobile = [
  {
    name: "Spinosaurus",
    image: pic6,
    bg: "BE5A35",
  },
  {
    name: "Indominus rex",
    image: pic3,
    bg: "704CB3",
  },
  {
    name: "Mosasaurus",
    image: pic7,
    bg: "E19242",
  },

  {
    name: "Triceratops",
    image: pic1,
    bg: "4E6F73",
  },
  {
    name: "Ankylosaurus",
    image: pic9,
    bg: "6AAFC3",
  },
  {
    name: "Dimorphodon",
    image: pic11,
    bg: "E19242",
  },
  {
    name: "Baryonyx",
    image: pic10,
    bg: "95B0AE",
  },
  {
    name: "Tylosaurus",
    image: pic12,
    bg: "4D535E",
  },
  {
    name: "Pteranodon",
    image: pic2,
    bg: "BE5A35",
  },
  {
    name: "Apatosaurus",
    image: pic16,
    bg: "4D535E",
  },
  {
    name: "Ankylosaurus",
    image: pic14,
    bg: "AFA748",
  },
  {
    name: "Triceratops",
    image: pic1,
    bg: "4E6F73",
  },
];

const SliderCustom = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [popupMinting, setPopupMinting] = useState(false);
  const [width, setWidth] = useState(1024);
  let sliderRef = useRef(null);

  console.log(isDesktop);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settingsMobile = {
    className: "center !pb-[50px]",
    arrows: false,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    centerPadding: "0",
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}>
          <li onClick={previous}>
            <div
              id="previous"
              className={`flex items-center justify-center ${
                dots[0].props.className !== "slick-active" && "text-[#789D7C]"
              }`}
            >
              <div>
                <i className="fa-solid fa-arrow-left"></i>
              </div>
            </div>
          </li>
          {dots}{" "}
          <li onClick={next}>
            <div
              id="next"
              className={`flex items-center justify-center ${
                dots[2].props.className !== "slick-active" && "text-[#789D7C]"
              }`}
            >
              <div>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="flex items-center justify-center">{i + 1}</div>
    ),
  };

  const settings = {
    className: "center ",
    arrows: false,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    centerPadding: "0",
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}>
          <li onClick={previous}>
            <div
              id="previous"
              className={`flex items-center justify-center ${
                dots[0].props.className !== "slick-active" && "text-[#789D7C]"
              }`}
            >
              <div>
                <i className="fa-solid fa-arrow-left"></i>
              </div>
            </div>
          </li>
          {dots}{" "}
          <li onClick={next}>
            <div
              id="next"
              className={`flex items-center justify-center ${
                dots[2].props.className !== "slick-active" && "text-[#789D7C]"
              }`}
            >
              <div>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="flex items-center justify-center">{i + 1}</div>
    ),
  };

  useEffect(() => {
    if (width < 1024) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }, [width]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <>
      <div className="cursor-pointer lg:block hidden market">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {data.map((item, index) => (
            <div key={index} className="relative w-full h-[378px] my-10">
                    <div
                className={`absolute ${[1,2,5,6,9,10,13,14,17,18,21,22].includes(index) ? `h-[170px] w-[280px]` : ""}`}
                style={{
                  filter: `blur(150px)`,
                  background: `#${item.bg}`,
           
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
                    className="w-full h-full relative"
                  >
                       <div
                      style={{ borderRadius: "38px" }}
                      className="absolute inset-0 h-full w-full overflow-hidden z-0"
                    >
                      <div className="absolute inset-0 h-full w-full bg-black z-0" />
                      <div
                        style={{
                          filter: `blur(150px)`,
                          background: `#${item.bg}`,
                          height: item.heightBlur,
                          width: item.widthBlur,
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
                      <div className="absolute inset-0 h-full w-full z-30">
                        <img className="h-full w-full object-cover" src={BG} alt="" />
                      </div>
                 
                    </div>

                    <div className="flex flex-col items-center pt-8 relative z-10">
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

                    {index === 0 && (
                        <div className="absolute -bottom-[56px] left-[-50px] w-[353px] object-cover h-[348px] ">
                          <img
                            className="h-full w-full object-cover"
                            src={data[0]?.image}
                          />
                        </div>
                      )}

                      {index === 1 && (
                        <div className="absolute h-[360px] w-[368px] left-[-50px]  -bottom-[60px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[1]?.image}
                          />
                        </div>
                      )}

                      {index === 2 && (
                        <div className="absolute h-[369px] w-[369px] -bottom-[50px] -left-[55px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[2]?.image}
                          />
                        </div>
                      )}
                      {index === 3 && (
                        <div className="absolute h-[349px] w-[360px] -bottom-[50px] -left-[35px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[3]?.image}
                          />
                        </div>
                      )}
                      {index === 4 && (
                        <div
                          style={{
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                          className="absolute h-[345px] w-[345px] -bottom-[50px] -left-[35px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={data[4]?.image}
                          />
                        </div>
                      )}

                      {index === 5 && (
                        <div
                          style={{
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                          className="absolute h-[326px] w-[326px] -bottom-[40px] -left-[35px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={data[5]?.image}
                          />
                        </div>
                      )}
                      {index === 6 && (
                        <div
                          style={{
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                          className="absolute h-[365px] w-[365px] -bottom-[70px] -left-[50px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={data[6]?.image}
                          />
                        </div>
                      )}

                      {index === 7 && (
                        <div
                          style={{
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                          className="absolute h-[335px] w-[340px] -bottom-[50px] -left-[40px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={data[7]?.image}
                          />
                        </div>
                      )}

                      {index === 8 && (
                        <div className="absolute h-[328px] w-[333px] -bottom-[40px] -left-[35px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[8]?.image}
                          />
                        </div>
                      )}

                      {index === 9 && (
                        <div className="absolute h-[305px] w-[338px] -bottom-[40px] -left-[35px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[9]?.image}
                          />
                        </div>
                      )}

                      {index === 10 && (
                        <div
                          style={{
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                          className="absolute h-[349px] w-[349px] -bottom-[50px] -left-[45px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={data[10]?.image}
                          />
                        </div>
                      )}

                      {index === 11 && (
                        <div className="absolute h-[340px] w-[320px] -bottom-[50px] -left-[20px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[11]?.image}
                          />
                        </div>
                      )}

                      {index === 12 && (
                        <div className="absolute h-[289px] w-[299px] -bottom-[30px] -left-[15px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[12]?.image}
                          />
                        </div>
                      )}

                      {index === 13 && (
                        <div className="absolute h-[314px] w-[312px] -bottom-[50px] -left-[25px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[13]?.image}
                          />
                        </div>
                      )}

                      {index === 14 && (
                        <div className="absolute h-[312px] w-[326px] -bottom-[20px] -left-[35px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[14]?.image}
                          />
                        </div>
                      )}

                      {index === 15 && (
                        <div className="absolute h-[293px] w-[305px] -bottom-[10px] -left-[10px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[15]?.image}
                          />
                        </div>
                      )}

                      {index === 16 && (
                        <div className="absolute h-[349px] w-[360px] -bottom-[50px] -left-[35px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[3]?.image}
                          />
                        </div>
                      )}

                      {index === 17 && (
                        <div className="absolute h-[289px] w-[299px] -bottom-[30px] -left-[15px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[12]?.image}
                          />
                        </div>
                      )}

                      {index === 18 && (
                        <div
                          style={{
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                          className="absolute h-[365px] w-[365px] -bottom-[70px] -left-[50px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={data[6]?.image}
                          />
                        </div>
                      )}

                      {index === 19 && (
                        <img
                          className="absolute -bottom-[56px] left-[-5px] w-[353px] object-cover h-[348px]"
                          src={data[0]?.image}
                        />
                      )}

                      {index === 20 && (
                        <div className="absolute h-[305px] w-[338px] -bottom-[40px] -left-[35px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[9]?.image}
                          />
                        </div>
                      )}

                      {index === 21 && (
                        <div className="absolute h-[360px] w-[368px] -bottom-[60px] -left-[50px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[1]?.image}
                          />
                        </div>
                      )}

                      {index === 22 && (
                        <div
                          style={{
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                          className="absolute h-[326px] w-[326px] -bottom-[40px] -left-[30px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={data[5]?.image}
                          />
                        </div>
                      )}

                      {index === 23 && (
                        <div className="absolute h-[369px] w-[369px] -bottom-[50px] -left-[55px]">
                          <img
                            className="h-full w-full object-cover"
                            src={data[2]?.image}
                          />
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* <Swiper
          slidesPerView={10}
          // pagination={pagination}
          spaceBetween={30}
          grid={{
            rows: 2,
          }}
          // loop={true}
          // centeredSlides={true}
          speed={1200}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border">
                <div className="flex flex-col items-center">
                  <span>{item.name}</span>
                  <span className="flex gap-2">
                    <img className="w-[13px] h-[20px]" src={ethImg} />
                    <span>0.0018</span>
                  </span>

                  <img src={item.image} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>

      <div className="cursor-pointer lg:hidden mt-8">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settingsMobile}
        >
          {dataMobile.map((item, index) => (
            <div
              style={{
                height: "112.71px",
              }}
              key={index}
              className="relative w-full h-[62px] my-2"
            >
              
              <div
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(0, #171717, #bfbcbc)",
                }}
                className="h-[98%] w-[90%] m-auto relative"
              >
                <div className="absolute inset-0 w-[97%] h-[98%] top-1.5 m-auto">
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
                          background: `#${item.bg}`,
                        }}
                        className="absolute inset-0 h-[258px] w-[378px] opacity-60"
                      />
                    </div>

                    <div className="flex flex-col pl-24 pt-2">
                      <div className="flex justify-between pr-5 items-center">
                        <div>
                          <span
                            style={{
                              fontWeight: "800",
                              fontSize: "20px",
                              fontStyle: "normal",
                              lineHeight: "18px",
                              letterSpacing: "-1px",
                            }}
                            className="font-mulish"
                          >
                            {item.name}
                          </span>
                          <span className="flex gap-1 items-center">
                            <img className="w-[10px] h-[14px]" src={ethImg} />
                            <span style={{ fontSize: "14px" }}>0.0018</span>
                          </span>
                        </div>

                        <div
                          style={{
                            background: "rgba(120, 157, 124, 1)",
                          }}
                          className="h-[34.19px] w-[34.19px] flex justify-center items-center rounded-[12px]"
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>

                      {index === 0 && (
                        <div className="absolute -top-[35px] -left-[25px] w-[103px] object-cover h-[103px] ">
                          <img
                            className="h-full w-full object-cover"
                            src={dataMobile[0]?.image}
                          />
                        </div>
                      )}

                      {index === 1 && (
                        <div className="absolute h-[107px] w-[107px] -top-[30px] -left-[25px]">
                          <img
                            className="h-full w-full object-cover"
                            src={dataMobile[1]?.image}
                          />
                        </div>
                      )}

                      {index === 2 && (
                        <div
                          style={{
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                          className="absolute h-[113px] w-[113px] -top-[30px] -left-[25px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={dataMobile[2]?.image}
                          />
                        </div>
                      )}
                      {index === 3 && (
                        <div className="absolute h-[101px] w-[100px] -top-[25px] -left-[25px]">
                          <img
                            className="h-full w-full object-cover"
                            src={dataMobile[3]?.image}
                          />
                        </div>
                      )}
                      {index === 4 && (
                        <div className="absolute h-[112px] w-[110px] -top-[35px] -left-[25px]">
                          <img
                            className="h-full w-full object-cover"
                            src={dataMobile[4]?.image}
                          />
                        </div>
                      )}

                      {index === 5 && (
                        <div
                          style={{
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                          className="absolute h-[98px] w-[98px] -top-[25px] -left-[20px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={dataMobile[5]?.image}
                          />
                        </div>
                      )}
                      {index === 6 && (
                        <div className="absolute h-[100px] w-[91px] -top-[25px] -left-[20px]">
                          <img
                            className="h-full w-full object-cover"
                            src={dataMobile[6]?.image}
                          />
                        </div>
                      )}

                      {index === 7 && (
                        <div
                          style={{
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                          className="absolute h-[100px] w-[100px] -top-[20px] -left-[22px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={dataMobile[7]?.image}
                          />
                        </div>
                      )}

                      {index === 8 && (
                        <div
                          style={{
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                          className="absolute h-[107px] w-[105px] -top-[25px] -left-[24px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={dataMobile[8]?.image}
                          />
                        </div>
                      )}

                      {index === 9 && (
                        <div className="absolute h-[107px] w-[103px] -top-[25px] -left-[24px]">
                          <img
                            className="h-full w-full object-cover"
                            src={dataMobile[9]?.image}
                          />
                        </div>
                      )}

                      {index === 10 && (
                        <div
                          style={{
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                          className="absolute h-[109px] w-[109px] -top-[25px] -left-[24px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={dataMobile[10]?.image}
                          />
                        </div>
                      )}

                      {index === 11 && (
                        <div className="absolute h-[109px] w-[108px] -top-[25px] -left-[24px]">
                          <img
                            className="h-full w-full object-cover"
                            src={dataMobile[11]?.image}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* <Swiper
          slidesPerView={10}
          // pagination={pagination}
          spaceBetween={30}
          grid={{
            rows: 2,
          }}
          // loop={true}
          // centeredSlides={true}
          speed={1200}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border">
                <div className="flex flex-col items-center">
                  <span>{item.name}</span>
                  <span className="flex gap-2">
                    <img className="w-[13px] h-[20px]" src={ethImg} />
                    <span>0.0018</span>
                  </span>

                  <img src={item.image} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>

      <PopupMinting
        popupMinting={popupMinting}
        setPopupMinting={setPopupMinting}
      />
    </>
  );
};

export default SliderCustom;
