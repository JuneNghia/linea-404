import img1 from "../../assets/intro/t-rex.png";
import img2 from "../../assets/get-dino/2.png";
import img3 from "../../assets/get-dino/3.png";
import img4 from "../../assets/get-dino/4.png";
import img5 from "../../assets/get-dino/5.png";
import ethImg from "../../assets/eth.png";

const data = [
  {
    name: "Spinosaurus",
    img: img1,
    width: 350,
    height: 420,
  },
  {
    name: "Triceratops",
    img: img2,
    width: 300,
    height: 360,
  },
  {
    name: "Nodosaurus",
    img: img3,
    width: 300,
    height: 360,
  },
  {
    name: "Indominus rex",
    img: img4,
    width: 250,
    height: 300,
  },
  {
    name: "Stegosaurus",
    img: img5,
    width: 250,
    height: 300,
  },
];

const GetDino = () => {
  return (
    <div className="h-full w-full px-0 xl:px-6 2xl:px-0">
      <div className="max-w-4xl xl:max-w-7xl mx-[30px] lg:mx-auto h-full">
        <h3 className="title text-center">Get your Dino</h3>

        <div className="mt-16 flex gap-6 items-end">
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                background: "linear-gradient(0, #171717, #bfbcbc)",
                borderRadius: "38px",
                height: item.height,
                width: item.width,
              }}
              className="relative"
            >
              <div className="absolute left-0 right-0 top-2 mx-2">
                <div
                  style={{ borderRadius: "38px" }}
                  className="relative bg-black "
                >
                  <div className="flex flex-col items-center pt-6">
                    <span className="font-extrabold text-[18px]">
                      {item.name}
                    </span>
                    <span className="flex gap-2">
                      <img src={ethImg} />
                      <span>0.0018</span>
                    </span>
                  </div>

                  <div className="absolute" style={{width: item.width, left: index === 3 || index === 4 ? -29 : -47, top: index === 0 ? 120 : 100}} >
                    <img className={index === 1 && "horizontal-flip"} src={item.img} />
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

        <div className="flex mt-20 justify-center gap-2">
          {[...Array(5)].map((x, i) => (
            <div
              key={i}
              style={{backgroundColor: `rgba(120, 157, 124, ${1 - ((i) * 0.2)})` , width: i === 0 ? 50 : 50 - ((i+1) * 6), height: 6 - (i + 1) * 0.2 }}
              className="rounded-[20px]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetDino;
