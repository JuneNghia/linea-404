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
  },
  {
    name: "Pteranodon",
    image: pic2,
  },
  {
    name: "Indominus rex",
    image: pic3,
  },
  {
    name: "Stegosaurus",
    image: pic4,
  },
  {
    name: "Velociraptor",
    image: pic5,
  },
  {
    name: "Spinosaurus",
    image: pic6,
  },
  {
    name: "Ankylosaurus",
    image: pic7,
  },
  {
    name: "Pachycephalosaurus",
    image: pic8,
  },
  {
    name: "Ankylosaurus",
    image: pic9,
  },
  {
    name: "Baryonyx",
    image: pic10,
  },
  {
    name: "Dimorphodon",
    image: pic11,
  },
  {
    name: "Tylosaurus",
    image: pic12,
  },
  {
    name: "Dilophosaurus",
    image: pic13,
  },
  {
    name: "Ankylosaurus",
    image: pic14,
  },
  {
    name: "Mosasaurus",
    image: pic15,
  },
  {
    name: "Apatosaurus",
    image: pic16,
  },
  {
    name: "Ankylosaurus",
    image: pic17,
  },
  {
    name: "Dilophosaurus",
    image: pic18,
  },
  {
    name: "Mosasaurus",
    image: pic19,
  },
  {
    name: "Triceratops",
    image: pic20,
  },
  {
    name: "Baryonyx",
    image: pic21,
  },
  {
    name: "Ankylosaurus",
    image: pic22,
  },
  {
    name: "Spinosaurus",
    image: pic23,
  },
  {
    name: "Indominus",
    image: pic24,
  },
];

const SliderCustom = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [popupMinting, setPopupMinting] = useState(false);
  const [width, setWidth] = useState(1024);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    className: "center !pb-[50px]",
    centerMode: true,
    arrows: false,
    accessibility: true,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    centerPadding: "0",
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
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
      <div className="cursor-pointer">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {data.map((item, index) => (
            <div key={index} className="mb-[200px] h-[300px]">
              <div className="flex flex-col items-center">
                <span>{item.name}</span>
                <span className="flex gap-2">
                  <img className="w-[13px] h-[20px]" src={ethImg} />
                  <span>0.0018</span>
                </span>

                <img src={item.image} />
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
