import { useNavigate } from "react-router-dom";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import star from "./assets/star.png";
const Starfall = () => {
  const navigate = useNavigate();
  const starInfo = [
    { img: s1, title: "Tasty jelly rings", number: "25" },
    { img: s2, title: "Heap of bright candies", number: "25" },
    {
      img: s3,
      title: "Variety party hundreds celebration yummy",
      number: "20",
    },
    {
      img: s4,
      title: "Lollipops candies and sugar jelly multi colored Colorful sweets",
      number: "15",
    },
    { img: s2, title: "Heap of bright candies", number: "25" },
    {
      img: s1,
      title: "Variety party hundreds celebration yummy",
      number: "20",
    },
  ];
  return (
    <>
      <div className="bg-[#d9d9d9] relative z-1   sm:p-6 rounded-t-[25px]">
        <div>
          <span className="font-semibold  border-b-4 ogg text-[25px] md:text-[30px] border-[#FED302] kg:text-[40px] ">
            Starfall Store
          </span>
        </div>
        <div className="grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4 gap-5">
          {starInfo.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 85%,rgba(0,0,0,1)), url(${item.img})`,
              }}
              className=" h-80 bg-no-repeat bg-cover rounded-[10px] overflow-hidden"
            >
              <div className="p-3 h-full flex flex-col justify-between">
                <div className="border self-end border-black/15 bg-white  rounded-lg   flex flex-col  items-center h-10 w-10">
                  <img src={star} alt="" className="h-4" />
                  <span className="ogg text-lg">{item.number}</span>
                </div>
                <div>
                  <p className="text-2xl text-white text-center ogg mb-1.5">
                    {item.title}
                  </p>
                  <button
                    onClick={() => {
                      navigate("cart");
                    }}
                    className="bg-[#012331] cursor-pointer w-full py-3 text-xl text-white rounded-[12px]"
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Starfall;
