import SliderCustom from "../slider";
import BG from '../../assets/nois2.png'

const Marketplace = () => {
  return (
    <div className=" relative h-full">
      <div className="absolute inset-0 h-[94%] -bottom-14 m-auto w-full z-10">
        <img
          src={BG}
          alt=""
          className="object-cover w-full h-full"
        />

      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-0 relative z-0">
        <h3 className="title mb-20 hidden lg:block">Marketplace</h3>
        <h3
          style={{
            letterSpacing: "-1px",
            fontWeight: "900",
          }}
          className="text-[42px] leading-[35px] text-center lg:hidden"
        >
          Marketplace
        </h3>
        <SliderCustom />
      </div>
    </div>
  );
};

export default Marketplace;
