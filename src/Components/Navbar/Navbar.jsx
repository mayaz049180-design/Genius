import { useEffect, useState } from "react";
import geniusLogo from "./assets/geniusLogo.png";
import n1 from "./assets/n1.png";
import n2 from "./assets/n2.png";
import n3 from "./assets/n3.png";
import n4 from "./assets/n4.png";
import n5 from "./assets/n5.png";
import na1 from "./assets/na1.png";
import na2 from "./assets/na2.png";
import na3 from "./assets/na3.png";
import na4 from "./assets/na4.png";
import na5 from "./assets/na5.png";
import user from "./assets/user.png";
import star from "./assets/star.png";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(null);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const menu = [
    { title: "Dashboard", icon1: n1, icon2: na1, path: "/home" },
    { title: "Activities", icon1: n2, icon2: na2, path: "/activities" },
    { title: "Starfall Store", icon1: n3, icon2: na3, path: "/starfall-store" },
    { title: "Surveys", icon1: n4, icon2: na4, path: "/surveys" },
    { title: "Settings", icon1: n5, icon2: na5, path: "/settings" },
  ];
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  useEffect(() => {
    console.log(location.pathname);
    // const current = menu.find((item) => item.path === location.pathname);
    let current;
    for (let item of menu) {
      if (location.pathname.includes(`${item.path}`)) {
        current = item;
      }
      // if (location.pathname === "/") {
      //   console.log(location.pathname === item.path);
      //   current = item;
      //   break;
      // } else {
      //   if (location.pathname.startsWith(item.path)) {
      //     current = item;
      //   }
      // }
    }
    console.log(current);
    setActive(current?.title);
    if (show) {
      handleShow();
    }
  }, [location.pathname]);

  return (
    <>
      <div className="relative z-10 lg:z-0">
        <div className="px-3 sm:px-9 xl:px-12 py-3 lg:py-5">
          <div className="flex  justify-between items-end sm:items-center ">
            <div>
              <img
                src={geniusLogo}
                alt=""
                className="xl:h-18  h-13 sm:h-15 object-cover"
              />
            </div>
            <div
              className={`${show ? "block" : "hidden"}
                absolute  py-5 left-0 px-12 border-b border-[#FED302] sm:px-17 lg:px-0 lg:py-0  bg-[#012331] md:border-none lg:p-0 rounded-b-xl w-full top-full z-10 lg:w-auto lg:relative lg:block`}
            >
              <ul className="flex gap-5  lg:gap-0 lg:items-center flex-col lg:flex-row lg:space-x-5 xl:space-x-8">
                {menu.map((item, index) => (
                  <li key={index} className="relative">
                    <Link to={item.path}>
                      <div className="flex ml-4 gap-1 items-center">
                        <img
                          src={active === item.title ? item.icon2 : item.icon1}
                          alt=""
                          className="w-5"
                        />
                        <span
                          className={`
                                ${
                                  active === item.title
                                    ? "text-white"
                                    : "text-white/60"
                                } `}
                        >
                          {item.title}
                        </span>
                      </div>
                    </Link>
                    {active === item.title && (
                      <div
                        className={`h-6 hidden  lg:block w-6 lg:w-12 lg:h-12 top-0  lg:top-auto -left-4 -rotate-46  absolute lg:left-1/2  rounded-lg -translate-x-1/2 lg:-bottom-20.5 ${
                          item.title === "Dashboard"
                            ? "bg-white"
                            : "bg-[#d9d9d9]"
                        } `}
                      ></div>
                    )}
                  </li>
                ))}
              </ul>
              <div className=" flex mt-7 -ml-8 sm:hidden gap-2 ">
                <div className="relative">
                  <img src={user} alt="" className="xl:w-15 w-12" />
                  <div className="h-5 w-[37px] flex items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 rounded-2xl gap-0.5 bg-white">
                    <img src={star} alt="" className="w-3" />
                    <span className="text-[#012331] text-[9px]">250</span>
                  </div>
                </div>
                <div>
                  <p className="xl:text-xl text-lg font-medium text-white">
                    Ellington Thom
                  </p>
                  <p className="xl:text-lg  text-white/80">12345678</p>
                </div>
              </div>
            </div>
            <div className="flex gap-10  items-center">
              <div className=" hidden sm:flex gap-2 ">
                <div className="relative">
                  <img src={user} alt="" className="xl:w-15 w-12" />
                  <div className="h-5 w-[37px] flex gap-0.5 items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 rounded-2xl translate-y-1/4  bg-white">
                    <img src={star} alt="" className="w-3" />
                    <span className="text-[#012331] text-[9px]">250</span>
                  </div>
                </div>
                <div>
                  <p className="xl:text-xl text-lg font-medium text-white">
                    Ellington Thom
                  </p>
                  <p className="xl:text-lg  text-white/80">12345678</p>
                </div>
              </div>
              {show ? (
                <div onClick={handleShow} className="block lg:hidden">
                  <IoCloseSharp className="text-white text-[40px]" />
                </div>
              ) : (
                <div onClick={handleShow} className="block lg:hidden">
                  <CgMenuRightAlt className="text-white text-[40px]" />
                </div>
              )}
            </div>
            {/* menu */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
