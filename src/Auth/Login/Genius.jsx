import videoimage from "./assets/videoimage.png";
import geniuslogo from "./assets/geniuslogo.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const Genius = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center min-h-screen w-full flex items-center"
        style={{ backgroundImage: `url(${videoimage})` }}
      >
        <div className="flex  w-full h-screen bg-gray-900/70 px-6 md:px-12 lg:px-24 ">
          <div className="flex flex-col w-full justify-center items-start gap-5">
            <div className="flex  justify-center items-center w-full ">
              <img
                src={geniuslogo}
                alt="Logo"
                className="w-28 md:w-40 lg:w-52 object-contain"
              />
            </div>
            <h1 className="ogg text-white text-[32px] md:text-[60px]  leading-tight">
              Where education
              <br className="lg:block md:block hidden" />
              and imagination meet.
            </h1>
            <p className="text-white  lg:text-[32px] md:text-[26px] text-base tracking-widest leading-tight  ">
              Unlock your full potential with
              <br className="lg:block md:block hidden" />
              customized learning experiences for every
              <br className="lg:block md:block hidden" />
              curious mind.
            </p>
            <Link
              to="/login"
              className="flex outline-none justify-center items-center lg:text-[32px] md:text-[26px] text-[20px] gap-2"
            >
              <span className="text-[#FED302]">Login</span>{" "}
              <FaArrowRightLong className="text-white bg-[#252320] w-[40px] border border-#62615E]  h-[40px] p-[7px] rounded-full" />
            </Link>
          </div>
          {/* <><span className="text-[#FED302]">Login</span> < FaArrowRightLong /></> */}
        </div>
      </div>
    </>
  );
};

export default Genius;
