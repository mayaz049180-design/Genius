import star from "./assets/star.png";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Earning = () => {
  const navigate = useNavigate();
  const redem = [
    {
      title: "Available Star Power",
      number: "350",
      bg: "bg-[#FED302]",
      clr: "text-black",
    },
    {
      title: "Pending Delivery",
      number: "150",
      bg: "bg-[#FF5A5A]",
      clr: "text-white",
    },
  ];
  const starInfo = [
    { img: s1, title: "Tasty jelly rings", status: "Delivered" },
    { img: s2, title: "Heap of bright candies", status: "Pending" },
    {
      img: s3,
      title: "Variety party hundreds celebration yummy",
      status: "Delivered",
    },
    {
      img: s4,
      title: "Lollipops candies and sugar jelly multi colored Colorful sweets",
      status: "Pending",
    },
  ];
  return (
    <>
      <div className="bg-[#d9d9d9] relative z-1  p-5 sm:p-6 rounded-t-[25px]">
        <div className="mb-5">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="h-8 w-8 sm:w-10 sm:h-10 flex border-[#012331] cursor-pointer border-2 justify-center items-center rounded-full "
          >
            <FaArrowLeft className="text-lg sm:text-xl text-[#012331]" />
          </button>
        </div>
        <span className="font-semibold   border-b-4 ogg text-[25px] md:text-[30px] border-[#FED302] 2xl:text-[40px] ">
          Earnings Overview
        </span>
        <div className="mt-5 md:mt-1 md:flex md:justify-between items-center">
          <span className="font-medium text-[25px] md:text-[30px]  2xl:text-[40px] ">
            Redemption Status
          </span>
          <div className="flex  gap-6 md:ml-0 justify-between mt-2 md:mt-0 md:gap-8">
            {redem.map((item, index) => (
              <div
                key={index}
                className={`${item.bg} ${item.clr} relative flex flex-col items-center justify-center  w-1/2  md:w-42 py-1.5 md:py-2.5 ogg border border-black/15 rounded-[10px]`}
              >
                <div className="leading-4 pl-2">
                  <p className="text-[10px] md:text-sm font-light">
                    {item.title}
                  </p>
                  <p className="text-lg">{item.number}</p>
                </div>
                <div className="bg-white border-3 border-[#D9D9D9] flex items-center justify-center h-8 w-8 md:h-12 rounded-full left-0 -translate-x-1/2  -translate-y-1/2 absolute top-1/2 md:w-12">
                  <img src={star} alt="" className="h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4 gap-5">
          {starInfo.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 82%,rgba(0,0,0,1)), url(${item.img})`,
              }}
              className=" h-80 bg-no-repeat bg-cover rounded-[10px] overflow-hidden"
            >
              <div className="p-3 h-full flex flex-col justify-between">
                <div className="border self-end border-black/15 bg-white  rounded-lg   flex flex-col  items-center px-3 py-1">
                  <span className="ogg text-xl font-medium">{item.status}</span>
                </div>
                <div>
                  <p className="text-2xl text-white text-center ogg mb-1.5">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Earning;
