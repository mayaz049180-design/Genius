import React from "react";
import mission from "./assets/mission.png";

const Mission = () => {
  return (
    <div className="fixed w-full z-20 inset-0 bg-black/30">
      <div className="overflow-y-auto w-full h-screen">
        <div className="min-h-full w-full  flex py-3 items-center justify-center ">
          <div className="bg-[#F7F7F7] w-[95%] flex justify-center rounded-[20px] 2xl:w-[40%] md:w-[80%] p-5 lg:w-[60%]">
            <div className="w-full xl:w-[80%]">
              <img src={mission} alt="" className="h-50 mx-auto" />
              <div className="text-center">
                <p className=" ogg font-semibold text-[24px] lg:text-[30px] xl:text-[50px]">
                  Mission Accomplished
                </p>
                <p className="lg:text-lg xl:text-2xl text-black/60">
                  Your hard work helped you navigate this challenge like a true
                  astronaut Remember, every effort expands your universe of
                  knowledge. What new constellation of skills will you explore
                  next?
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <button className="text-xl w-full max-w-[230px] sm:max-w-none text-white  bg-[#007D69] rounded-[12px] sm:w-[60%] py-3">
                  Pending Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
