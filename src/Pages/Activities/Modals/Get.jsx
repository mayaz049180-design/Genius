import star from "../assets/star.png";
import getModal from "../assets/getModal.png";
import { useNavigate } from "react-router-dom";
const Get = ({ close }) => {
  const navigate = useNavigate();
  const button = ["Cancel", "Submit Activity"];
  return (
    <div className="fixed w-full z-20 inset-0 bg-black/30">
      <div className="overflow-y-auto w-full h-screen">
        <div className="min-h-full w-full flex py-3 items-center justify-center">
          <div className="bg-white rounded-[20px] pl-7 pr-5 pt-6 pb-4 w-[95%]  sm:w-[80%] lg:w-[70%] rounded-[20px]2xl:h-[max(50vh,400px)] 2xl:flex 2xl:flex-col 2xl:justify-center">
            <div className="flex md:items-baseline-last justify-between ">
              <span className="text-[20px]  flex-1 ogg lg:text-[24px] xl:text-[28px]">
                What benefits will I receive as a Lyft Pink member?
              </span>
              <div className="border   border-black/15  rounded-lg   flex flex-col justify-center  items-center h-[40px] w-[40px]">
                <img src={star} alt="" className="h-4 " />
                <span className="ogg text-lg">25</span>
              </div>
            </div>
            <div className="flex gap-5  mt-2">
              <p className="text-black/60 lg:text-[22px]   ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                accusamus a libero repellendus obcaecati repudiandae, ducimus
                nulla sit voluptatibus animi, officiis culpa officia vitae
                aperiam consectetur doloribus ratione placeat laudantium maiores
                ipsum ad vel quo quisquam optio. Maiores iure nam dolorum aut
                provident. Natus obcaecati deleniti alias error, atque vel.
              </p>
              <img src={getModal} alt="" className=" h-70 hidden md:block" />
            </div>
            <div className="mt-4 flex justify-center  items-center gap-3 lg:mt-6 lg:gap-6 ">
              {button.map((btn, index) => (
                <button
                  onClick={
                    btn === "Cancel"
                      ? close
                      : () => {
                          navigate("/submitactivity");
                        }
                  }
                  className={`${
                    btn === "Cancel"
                      ? "bg-[#DEDEDE]"
                      : "bg-[#007D69] text-white"
                  } font-medium cursor-pointer px-6 py-2 text-nowrap sm:w-40 sm:py-3 lg:w-50 xl:w-60 xl:py-4 rounded-[10px]`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Get;
