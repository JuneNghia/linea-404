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
    widthPercent: 100,
  },
  {
    name: "Triceratops",
    img: img2,
    widthPercent: 100,
  },
  {
    name: "Nodosaurus",
    img: img3,
    widthPercent: 100,
  },
  {
    name: "Indominus rex",
    img: img4,
    widthPercent: 100,
  },
  {
    name: "Stegosaurus",
    img: img5,
    widthPercent: 100,
  },
];

const GetDino = () => {
  return (
    <div className="h-full w-full px-0 xl:px-6 2xl:px-0">
      <div className="max-w-4xl xl:max-w-7xl mx-[30px] lg:mx-auto h-full">
        <h3 className="title text-center">Get your Dino</h3>

        <div className="mt-16 flex gap-6">
          {data.map((item, index) => (
            <div key={index} className=" border">
              <div className="flex flex-col justify-center items-center">
                <span className="font-extrabold text-[24px]">{item.name}</span>
                <span className="flex gap-2">
                  <img src={ethImg} />
                  <span>0.0018</span>
                </span>
              </div>

              <div className="mt-20">
                <img src={item.img} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex mt-10 justify-center gap-2">
          {[...Array(5)].map((x,i) => 
            <div key={i} style={{width: 50, height: 6 - ((i+1)* 0.2)}} className="bg-[#789D7C] rounded-[20px]"></div>
         )}
        </div>
      </div>
    </div>
  );
};

export default GetDino;
