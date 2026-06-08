import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import star2 from "./assets/star2.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const cartInfo = [
    { title: "Tasty jelly rings", img: s1 },
    { title: "Heap of bright candies", img: s2 },
  ];
  return (
    <>
      <div>
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
        <div>
          <span className="font-medium  border-b-4 ogg text-[25px] md:text-[30px] border-[#FED302] kg:text-[40px] ">
            Cart
          </span>
        </div>
        <div className="bg-white rounded-[10px] mt-3 space-y-4 p-4">
          {cartInfo.map((item, index) => (
            <div className="border gap-3 flex flex-col sm:flex-row justify-between border-black/20 rounded-[10px] p-3 sm:px-3 sm:pr-6 sm:py-3">
              <div className="flex flex-wrap items-start sm:items-center gap-4">
                <img
                  src={item.img}
                  alt=""
                  className="sm:h-20  h-30 object-cover rounded-[8px] w-full sm:w-35"
                />
                <div className="w-full sm:w-auto items-start flex sm:block justify-between">
                  <p className="font-semibold sm:text-lg">{item.title}</p>
                  <div className="flex items-center gap-0.5">
                    <img src={star2} alt="" className="h-5" />
                    <span className="ogg text-xl">20</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-3 justify-center sm:flex-col sm:justify-between items-center ">
                <button className="bg-[#007D69] text-center flex justify-center items-center text-white h-6 w-6 sm:h-5 sm:w-5 rounded-full">
                  <span>+</span>
                </button>
                <span className="ogg">2</span>
                <button className="bg-[#007D69] text-center flex justify-center items-center text-white h-6 w-6 sm:h-5 sm:w-5 rounded-full">
                  <span>-</span>
                </button>
              </div>
            </div>
          ))}
          <button className="bg-[#007D69] mx-auto mt-12 mb-15 gap-2 flex items-center justify-center rounded-[15px] px-4 py-3 md:py-4 cursor-pointer">
            <img src={star2} alt="" className="w-5" />
            <span className=" text-white ">Hard Work Pays Off!</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
