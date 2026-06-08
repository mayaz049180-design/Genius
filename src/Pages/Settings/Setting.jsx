import { FaArrowRightLong } from "react-icons/fa6";
import user from "./assets/user.png";
import star from "./assets/star.png";
import { Link, useNavigate } from "react-router-dom";
const Setting = () => {
  const navigation = useNavigate();
  const settingsInfo = [
    { title: "Earnings Overview", path: "/settings/earning" },
    { title: "About Us", path: "/settings/about" },
    { title: "Privacy Policy", path: "/settings/privacy" },
  ];
  // const handleNavigation = (path) => {
  //   navigation(path);
  // };
  return (
    <>
      <div className="bg-[#d9d9d9] relative z-1  p-5 sm:p-6 rounded-t-[25px]">
        <span className="font-semibold    border-b-4 ogg text-[25px] md:text-[30px] border-[#FED302] xl:text-[40px] ">
          Setting
        </span>
        <div className="flex flex-col-reverse items-center sm:flex-row sm:justify-between sm:items-start">
          <div className="space-y-5 w-full sm:w-[70%] lg:w-[65%] mt-4">
            {settingsInfo.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                // onClick={() => {
                //   handleNavigation(item.path);
                // }}
                className="bg-white w-full cursor-pointer flex justify-between py-3 rounded-[15px] pl-6 pr-4 items-center"
              >
                <span className="ogg text-xl md:text-[24px] lg:text-[30px]">
                  {item.title}
                </span>
                <FaArrowRightLong className="text-[#CDCDCD]" />
              </Link>
            ))}
            <button
              onClick={() => navigation("/")}
              className="bg-[#FF5A5A] ogg outline-none cursor-pointer text-white py-3 rounded-xl md:py-4 w-[60%] md:w-[40%] md:rounded-[15px] "
            >
              Logout
            </button>
          </div>
          <div>
            <div className="lg:mr-15  md:ml-12 ">
              <div className="relative mb-3 ">
                <img src={user} alt="" className="lg:w-50 w-35" />
                <div className="h-8 w-17 flex gap-0.5 items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 rounded-2xl translate-y-1/4  bg-white">
                  <img src={star} alt="" className="w-5" />
                  <span className="text-[#012331] ">250</span>
                </div>
              </div>
              <div className="text-center">
                <p className="xl:text-xl text-lg font-medium ">
                  Ellington Thom
                </p>
                <p className="xl:text-lg text-[#012331] font-extralight">
                  123-456-7890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
