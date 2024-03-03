import pic1 from "../../assets/slider/Baryonyx.png";
import pic2 from "../../assets/slider/Triceratops.png";
import pic3 from "../../assets/slider/Velociraptor.png";
import pic4 from "../../assets/slider/Stegosaurus.png";
import pic5 from "../../assets/slider/Pachycephalosaurus.png";
import pic6 from "../../assets/slider/Pachycephalosaurus-2.png";
import pic7 from "../../assets/slider/Pachycephalosaurus-3.png";
import pic8 from "../../assets/slider/Pachycephalosaurus-4.png";
import pic9 from "../../assets/slider/Pachycephalosaurus-5.png";
import pic10 from "../../assets/slider/Pachycephalosaurus-6.png";
import pic11 from "../../assets/slider/Pachycephalosaurus-7.png";
import pic12 from "../../assets/slider/Pachycephalosaurus-8.png";
import pic13 from "../../assets/slider/Pachycephalosaurus-9.png";
import pic14 from "../../assets/slider/Pachycephalosaurus-10.png";
import pic15 from "../../assets/slider/Pachycephalosaurus-11.png";
import pic16 from "../../assets/slider/Pachycephalosaurus-12.png";
import pic17 from "../../assets/slider/Pachycephalosaurus-13.png";
import pic18 from "../../assets/slider/Pachycephalosaurus-14.png";
import pic19 from "../../assets/slider/Pachycephalosaurus-15.png";
import pic20 from "../../assets/slider/Pachycephalosaurus-16.png";
import bg from "../../assets/slider/bg.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { useBreakpointValue } from "../../hooks/useBreakpoint";

const data = [
  {
    name: "Baryonyx",
    image: pic1,
  },
  {
    name: "Triceratops",
    image: pic2,
  },
  {
    name: "Velociraptor",
    image: pic3,
  },
  {
    name: "Stegosaurus",
    image: pic4,
  },
  {
    name: "Pachycephalosaurus",
    image: pic5,
  },
  {
    name: "Pachycephalosaurus",
    image: pic6,
  },
  {
    name: "Pachycephalosaurus",
    image: pic7,
  },
  {
    name: "Pachycephalosaurus",
    image: pic8,
  },
  {
    name: "Pachycephalosaurus",
    image: pic9,
  },
  {
    name: "Pachycephalosaurus",
    image: pic10,
  },
  {
    name: "Pachycephalosaurus",
    image: pic11,
  },
  {
    name: "Pachycephalosaurus",
    image: pic12,
  },
  {
    name: "Pachycephalosaurus",
    image: pic13,
  },
  {
    name: "Pachycephalosaurus",
    image: pic14,
  },
  {
    name: "Pachycephalosaurus",
    image: pic15,
  },
  {
    name: "Pachycephalosaurus",
    image: pic16,
  },
  {
    name: "Pachycephalosaurus",
    image: pic17,
  },
  {
    name: "Pachycephalosaurus",
    image: pic17,
  },
  {
    name: "Pachycephalosaurus",
    image: pic18,
  },
  {
    name: "Pachycephalosaurus",
    image: pic19,
  },
  {
    name: "Pachycephalosaurus",
    image: pic20,
  },
];

const Slider = () => {
  const value = useBreakpointValue("md", "lg", "xl");

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingBottom: "100px",
        }}
      >
        <div className="cursor-pointer select-none">
          <Swiper
            slidesPerView={value === "lg" ? 3 : 1}
            spaceBetween={100}
            loop={true}
            centeredSlides={true}
            speed={1200}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-end">
                  <div className="w-[200px] h-[200px] flex items-end">
                    <img src={item.image} />
                  </div>
                  <div>
                    <p className="text-white text-left font-bold text-[16px]">
                      {item.name}
                    </p>
                    <div className="flex items-center border border-1 border-l-0 pt-[20px] rounded-r-[20px]  rounded-br-[20px] px-5">
                      <button className="flex items-center justify-center text-[15px] p-[12px] w-[151px] h-[40px] leading-[24px] mb-5">
                        Random Minting
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;
