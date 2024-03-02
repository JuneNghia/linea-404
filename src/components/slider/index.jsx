import pic1 from "../../assets/slider/Baryonyx.png";
import pic2 from "../../assets/slider/Triceratops.png";
import pic3 from "../../assets/slider/Velociraptor.png";
import pic4 from "../../assets/slider/Stegosaurus.png";
import pic5 from "../../assets/slider/Pachycephalosaurus.png";
import pic6 from "../../assets/slider/Pachycephalosaurus-2.png";

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
      <div className="relative pb-8 z-[9999] cursor-pointer select-none" style={{backgroundColor: 'rgba(3, 1, 29, 0.1)'}}>
        <Swiper
          slidesPerView={5}
          spaceBetween={400}
          loop={true}
          centeredSlides={true}
          speed={1200}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true
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
                <div className="flex flex-col justify-end border border-1 border-l-0 rounded-r-sm rouded-tr-sm rounded-br-sm px-5">
                  <p>{item.name}</p>
                  <button className="flex items-center justify-center text-[15px] p-[12px] w-[151px] h-[33px] leading-[24px] mb-2">
                    Random Minting
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
