import pic1 from "../../assets/slider/Baryonyx.png";
import pic2 from "../../assets/slider/Triceratops.png";
import pic3 from "../../assets/slider/Velociraptor.png";
import pic4 from "../../assets/slider/Stegosaurus.png";
import pic5 from "../../assets/slider/Pachycephalosaurus.png";
import pic6 from "../../assets/slider/Pachycephalosaurus-2.png";
import bg from "../../assets/slider/bg.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

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
];

const Slider = () => {
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
            slidesPerView={3}
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
                    <p className="text-white text-left font-bold text-[16px]">{item.name}</p>
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
