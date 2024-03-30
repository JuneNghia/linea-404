import SliderCustom from "../slider";

const Marketplace = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
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
