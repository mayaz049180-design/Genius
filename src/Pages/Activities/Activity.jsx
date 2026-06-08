import { useRef, useState } from "react";
import Filter from "./Modals/Filter";
import Get from "./Modals/Get";
import useToggle from "../../Custom/UseToggle";
import { RiArrowDropDownLine } from "react-icons/ri";
import filter from "./assets/filter.png";
import star from "./assets/star.png";
import Mission from "./Modals/Mission";
import useOutsideClick from "../../Custom/UseOutsideClick";

const Activity = () => {
  const [activeTask, setActiveTask] = useState("To Do");
  const [subjectValue, setSubjectValue] = useState("Subject");
  const [quarterValue, setQuarterValue] = useState("Quarter");
  const [showSubject, setSubject] = useToggle(false);
  const [showQuarter, setQuarter] = useToggle(false);
  const [toggle, setToggle] = useToggle(false);
  const [getToggle, setGetToggle] = useToggle(false);
  const subRef = useRef(null);
  const quatRef = useRef(null);
  useOutsideClick(subRef, setSubject, showSubject);
  useOutsideClick(quatRef, setQuarter, showQuarter);
  console.log("activity");
  const dropDown = [
    { title: "Subject", dropdown: ["Subject", "Eng", "Math", "Urdu"] },
    { title: "Quarter", dropdown: ["Quarter", "Q1", "Q2", "Q3"] },
  ];
  const subject = ["Subject", "Eng", "Math", "Urdu"];
  const quarter = ["Quarter", "Q1", "Q2", "Q3"];
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
  const handleActiveTask = (current) => {
    setActiveTask(current);
  };
  const handleQuarterList = (e) => {
    setQuarterValue((prev) => e.target.textContent);
    setQuarter();
  };
  const handleSubjectList = (e) => {
    console.log(e.currentTarget.contains(e.target));
    if (
      e.target &&
      e.currentTarget.contains(e.target) &&
      e.currentTarget !== e.target
    ) {
      setSubjectValue((prev) => e.target.textContent);
      setSubject();
    }
  };
  return (
    <>
      <div className="bg-[#d9d9d9] relative z-1  p-5 sm:p-6 rounded-t-[25px]">
        <div className="grid grid-cols-1 lg:items-end lg:grid-cols-[1.2fr_1.5fr] 2xl:gap-70 gap-5">
          <div className="  flex-wrap flex justify-between gap-3">
            <span className="font-semibold   border-b-4 ogg text-[25px] md:text-[30px] border-[#FED302] kg:text-[40px] ">
              Activities
            </span>
            <div
              className={`${
                activeTask === "Completed" ? "hidden" : "flex"
              }  gap-4 w-full  sm:w-[60%] lg:flex-1 `}
            >
              {/* {dropDown.map((item, index) => ( */}
              <div
                ref={subRef}
                className="relative  rounded-[10px] bg-white px-2 h-10 sm:h-12 w-full sm:w-1/2 "
              >
                <button
                  onClick={() => {
                    setSubject();
                  }}
                  // key={index}
                  className="w-full  h-full cursor-pointer  outline-none flex justify-between  items-center"
                >
                  <span className="text-sm">{subjectValue}</span>
                  <RiArrowDropDownLine className="text-black/50 text-xl" />
                </button>
                {showSubject && (
                  <div
                    onClick={handleSubjectList}
                    className="p-2 shadow-sm z-10 space-y-2 rounded-[10px] absolute bg-white left-0 w-full top-[110%]"
                  >
                    {subject.map((item, index) => (
                      <p className="cursor-pointer">{item}</p>
                    ))}
                  </div>
                )}
              </div>
              <div
                ref={quatRef}
                className="relative rounded-[10px] bg-white px-2 h-10 sm:h-12 w-full sm:w-1/2 "
              >
                <button
                  onClick={() => {
                    setQuarter();
                  }}
                  // key={index}
                  className="w-full h-full cursor-pointer  outline-none flex justify-between  items-center"
                >
                  <span className="text-sm">{quarterValue}</span>
                  <RiArrowDropDownLine className="text-black/50 text-xl" />
                </button>

                {showQuarter && (
                  <div
                    onClick={handleQuarterList}
                    className="p-2 shadow-sm z-10 space-y-2 rounded-[10px] absolute bg-white left-0 w-full top-[110%]"
                  >
                    {quarter.map((item, index) => (
                      <p className="cursor-pointer">{item}</p>
                    ))}
                  </div>
                )}
              </div>
              {/* ))} */}
            </div>
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
                onClick={setToggle}
                className=" h-full cursor-pointer w-13 rounded-xl flex items-center justify-center bg-[#012331]"
              >
                <img src={filter} alt="" className="h-4" />
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
                  <button
                    onClick={setGetToggle}
                    className="bg-[#007D69]  text-nowrap text-white md:text-sm px-3 py-2  cursor-pointer rounded-lg"
                  >
                    {activeTask === "To Do" ? "Get Started" : "Show Results"}
                  </button>
                  <div className="border border-black/15  rounded-lg   flex flex-col  items-center h-10 w-10">
                    <img src={star} alt="" className="h-4" />
                    <span className="ogg text-lg">{item.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* modal */}
      {toggle && <Filter close={toggle} closeToggle={setToggle} />}
      {getToggle && <Get close={setGetToggle} />}
      {/* {<Mission />} */}
    </>
  );
};

export default Activity;
