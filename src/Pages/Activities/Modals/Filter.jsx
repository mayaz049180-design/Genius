import { RiArrowDropDownLine } from "react-icons/ri";
const Filter = ({ closeToggle }) => {
  const button = ["Cancel", "Apply"];
  return (
    <>
      <div className="fixed w-full z-20 inset-0 bg-black/30">
        <div className="overflow-y-auto h-screen">
          <div className="min-h-full flex py-3 items-center justify-center">
            <div className=" rounded-[20px] py-3 px-3 md:py-5 lg:px-10  md:px-6 w-[95%]  lg:w-[60%] md:w-[70%] bg-[#F4F4F4] 2xl:h-[max(50vh,400px)] 2xl:flex 2xl:flex-col 2xl:justify-center">
              <div className="flex justify-center mb-3 md:mb-6 ">
                <span className="font-medium  border-b-4 px-2 ogg text-[25px] md:text-[30px] border-[#FED302] kg:text-[40px] 2xl:text-[48px]">
                  Filter
                </span>
              </div>
              <div className="grid gap-4 lg:gap-6 sm:grid-cols-2">
                <div>
                  <p className="font-bold">Start Date</p>
                  <div className="w-full mt-1.5 h-13 px-2 rounded-[15px] flex text-center bg-white/80">
                    <input type="Date" className="w-full" />
                  </div>
                </div>
                <div>
                  <p className="font-bold">End Date</p>
                  <div className="w-full border border-[#E3E3E3] mt-1.5 h-13 px-2 rounded-[15px] flex text-center bg-white/80">
                    <input type="Date" className="w-full" />
                  </div>
                </div>
                <div>
                  <p className="font-bold">Select Subject</p>
                  <div className="w-full border flex justify-end items-center border-[#E3E3E3] mt-1.5 h-13 px-2 rounded-[15px] text-center bg-white/80">
                    <RiArrowDropDownLine className="text-black/50 text-xl" />
                  </div>
                </div>
                <div>
                  <p className="font-bold">Quarter</p>
                  <div className="w-full border flex justify-end items-center border-[#E3E3E3] mt-1.5 h-13 px-2 rounded-[15px] text-center bg-white/80">
                    <RiArrowDropDownLine className="text-black/50 text-xl" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-3 lg:mt-6 lg:gap-6 ">
                {button.map((btn, index) => (
                  <button
                    onClick={btn === "Cancel" ? closeToggle : undefined}
                    className={`${
                      btn === "Cancel"
                        ? "bg-[#DEDEDE]"
                        : "bg-[#007D69] text-white"
                    } font-medium cursor-pointer px-6 py-2 w-25 sm:w-40 sm:py-3 xl:w-50 xl:py-4 rounded-[10px]`}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
