import img1 from "../../assets/intro/t-rex.png";
import img2 from "../../assets/get-dino/2.png";
import img3 from "../../assets/get-dino/3.png";
import img4 from "../../assets/get-dino/4.png";
import img5 from "../../assets/get-dino/5.png";
import ethImg from "../../assets/eth.png";

const data = [

  {
    name: "Triceratops",
    img: img2,
    width: 240,
    height: 286,
    bg: "#979E74"
  },
  {
    name: "Nodosaurus",
    img: img3,
    width: 258,
    height: 312,
    bg:"#513E42"
  },
  {
    name: "Spinosaurus",
    img: img1,
    width: 338,
    height: 413,
    bg:"#E76153"
  },
  {
    name: "Stegosaurus",
    img: img5,
    width: 258,
    height: 312,
    bg:"#A6AC7F"
  },
  {
    name: "Indominus rex",
    img: img4,
    width: 240,
    height: 286,
    bg:"#624298"
  },

];

const GetDino = () => {

  return (
    <div>
      <div className="max-w-7xl px-4 lg:px-0 mx-auto">
        <h3 className="title text-center">Get your Dino</h3>

        <div className="mt-28 flex items-end justify-between">
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                height: item.height,
                width: item.width,
              }}
              className="relative"
            >
              <div    style={{
                  borderRadius: "38px",
                  background: "linear-gradient(0, #171717, #bfbcbc)",
                }}
                className="h-[98%] w-[90%] m-auto relative">
                <div className="absolute inset-0 w-[95%] h-[98%] top-1.5 m-auto">

                <div
                    style={{ borderRadius: "38px" }}
                    className="bg-black w-full h-full relative"
                  >
                        <div
                      style={{ borderRadius: "38px" }}
                      className="absolute inset-0 h-full w-full overflow-hidden"
                    >
                      <div
                        style={{
                          filter: `blur(150px)`,
                          background: `${item.bg}`,
                        }}
                        className="absolute inset-0 h-[258px] w-[378px] opacity-40"
                      />
                    </div>

                    <div className="flex flex-col items-center pt-6">
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
                      left: index === 0 ? "-22px" : index === 1 ? "-24px" : index === 2 ? "-30px" : index === 3 ? "-20px" : "-22px",
                      bottom: index === 0 ? "-32px" : index === 1 ? "-34px" : index === 2 ? "-50px" : index === 3 ? "-32px" : "-32px"
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

        <div className="flex mt-24 justify-center gap-2 items-center">
          {[...Array(5)].map((x, i) => (
            <div
              key={i}
              style={{
                width: i === 2 ? "60px" : "40px",
                height: i === 2 ?  "6px" : "5px",
                background: i === 2 ?  "rgba(120, 157, 124, 0.6)" : "rgba(120, 157, 124, 0.6)",
                opacity: i === 2 ? 1 : 0.3,
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
