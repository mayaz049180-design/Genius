import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import star2 from "./assets/star2.png";
import { useNavigate } from "react-router-dom";
const Surveys = () => {
  const [activeTask, setActiveTask] = useState("To Do");
  const [activeSurvey, setActiveSurvey] = useState("Family surveys");
  const navigate = useNavigate();
  const surveys = ["Family surveys", "Student surveys"];
  const task = ["To Do", "Completed"];
  const ques = [
    {
      id: "01.",
      q: "What benefits will I receive as a Lyft Pink member?",
      number: 25,
    },

    {
      id: "02.",
      q: "How does the free Priority Pickup upgrades benefit work?",
      number: 25,
    },

    {
      id: "03.",
      q: "Which rides does member-exclusive pricing apply to?",
      number: 20,
    },

    { id: "04.", q: "Do discounts impact driver pay?", number: 20 },

    {
      id: "05.",
      q: "How does the bike benefit work and where is it available?",
      number: 15,
    },

    { id: "06.", q: "What is Bike Angels?", number: 15 },

    {
      id: "07.",
      q: "What benefits will I receive as a Lyft Pink member?",
      number: 25,
    },

    {
      id: "08.",
      q: "How does the free Priority Pickup upgrades benefit work?",
      number: 25,
    },

    {
      id: "09.",
      q: "Which rides does member-exclusive pricing apply to?",
      number: 20,
    },

    { id: "10.", q: "Do discounts impact driver pay?", number: 20 },

    {
      id: "11.",
      q: "How does the bike benefit work and where is it available?",
      number: 15,
    },

    { id: "12.", q: "What is Bike Angels?", number: 15 },
  ];
  const handleActiveSurvey = (current) => {
    setActiveSurvey(current);
  };
  const handleActiveTask = (current) => {
    setActiveTask(current);
  };
  return (
    <>
      <div className="bg-[#d9d9d9] relative z-1  p-5 sm:p-6 rounded-t-[25px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr] 2xl:gap-70 gap-5">
          <div className="flex-wrap    flex  lg:flex-nowrap justify-between lg:justify-start gap-3">
            <span className="font-medium  border-b-4 ogg text-[25px] md:text-[30px] border-[#FED302] lg:text-[40px] ">
              Surveys
            </span>
            {activeTask === "To Do" && (
              <div className="bg-white lg:flex-1  max-w-[300px] w-full  sm:max-w-none sm:w-[50%] rounded-[10px] sm:rounded-[15px] gap-1   md:space-x-2 flex p-1.5 h-12 sm:h-15 ">
                {surveys.map((item, index) => (
                  <button
                    onClick={() => {
                      handleActiveSurvey(item);
                    }}
                    className={`${
                      activeSurvey === item && "bg-[#007D69] text-sm text-white"
                    } xl:text-xl cursor-pointer transition-all  duration-400 rounded-[15px] w-1/2  h-full`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-wrap  gap-3 ">
            {/* task buttons */}
            <div className="bg-white max-w-[280px] w-full sm:max-w-none sm:w-[40%] rounded-[10px] sm:rounded-[15px] space-x-2 flex p-1.5 h-12 sm:h-15 ">
              {task.map((item, index) => (
                <button
                  onClick={() => {
                    handleActiveTask(item);
                  }}
                  className={`${
                    activeTask === item && "bg-black text-white"
                  } xl:text-xl cursor-pointer transition-all  duration-400 rounded-[15px] w-1/2  h-full`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* search */}

            <div className="bg-white rounded-[10px] flex h-12 sm:h-15 flex-1 w-full justify-between  items-center pl-4 px-1 py-1 sm:rounded-[15px] xl:w-80 2xl:w-120">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none"
              />
              <button
                // onClick={setToggle}
                className=" h-full cursor-pointer w-13 rounded-xl flex items-center justify-center bg-[#007D69]"
              >
                <IoSearchOutline className="text-xl text-white" />
              </button>
            </div>
          </div>
        </div>
        {/* ques */}
        <div className="bg-white mt-4 rounded-xl w-full pb-8">
          <div className="px-2 sm:px-4 lg:px-8">
            {ques.map((item, index) => (
              <div
                key={index}
                className="flex  flex-col gap-2 md:gap-0  md:flex-row sm:justify-between py-5 border-b border-black/35"
              >
                <div className="ogg flex items-start gap-1 lg:gap-5 sm:gap-1  md:gap-2 md:items-center">
                  <span className="text-[20px] lg:text-[32px]">{item.id}</span>
                  <span className="text-[20px] lg:text-[28px] xl:text-[32px]">
                    {item.q}
                  </span>
                </div>

                <div className="flex self-end  items-center  gap-3 ">
                  <div className="   flex gap-0.5 items-center">
                    <img src={star2} alt="" className="h-6" />
                    <span className="ogg text-xl">{item.number}</span>
                  </div>
                  {activeSurvey === "Student surveys" &&
                    activeTask !== "Completed" && (
                      <button
                        onClick={() => {
                          navigate("/surveys/submit");
                        }}
                        className="bg-[#007D69]  text-white md:text-sm px-3 py-2  cursor-pointer rounded-lg"
                      >
                        Start Survey
                      </button>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Surveys;
