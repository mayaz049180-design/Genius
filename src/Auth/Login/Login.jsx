import { useRef, useState } from "react";
import bgLogin from "./assets/bgLogin.png";
import geniusLogo from "./assets/geniusLogo.png";
import memCard from "./assets/memCard.png";
import key from "./assets/key.png";
import eye from "./assets/eye.png";
import eyeClose from "./assets/eyeClose.png";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ email: "", pass: "" });
  const [show, setShow] = useState("false");
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value, e.target);
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleRemove = () => {
    setInput((prev) => ({ ...prev, email: "" }));
  };
  const handlePass = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <div className="h-screen flex justify-center">
        <img src={bgLogin} alt="" className="h-full relative  z-1 " />
        <div className="bg-[#012331]  fixed inset-0 z-0"></div>
        <div className="fixed  inset-0 z-10 ">
          <div className=" p-4 h-full overflow-y-auto md:p-0">
            <div className="min-h-full flex justify-center items-center">
              <div className="md:w-[60%] lg:w-[50%] max-w-[550px]">
                <img
                  src={geniusLogo}
                  alt=""
                  className="w-30 md:w-40 lg:w-50 mb-2 lg:mb-4 mx-auto"
                />
                <div className=" bg-black/80 px-3 py-3 md:px-5 lg:px-7 md:py-3  lg:py-6 rounded-[20px]">
                  <p className="capitalize ogg  text-center text-[35px] lg:text-[56px]  font-medium text-white">
                    login
                  </p>
                  <div>
                    <label htmlFor="email" className="text-lg  text-white">
                      Genius ID
                    </label>
                    <div className="border mt-2 px-2 border-white flex justify-between items-center w-full h-12 rounded-[15px]">
                      <div className="flex flex-1 gap-1">
                        <img src={memCard} alt="" className="w-7" />
                        <input
                          ref={emailRef}
                          autoFocus
                          id="email"
                          name="email"
                          value={input.email}
                          onChange={handleInput}
                          type="emial"
                          placeholder="12345678"
                          className="placeholder:text-white flex-1 pr-2 outline-none  text-white"
                        />
                      </div>
                      <button
                        onClick={handleRemove}
                        className="cursor-pointer outline-none"
                      >
                        <IoIosClose className="text-[#BFBFBF] text-3xl" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-1">
                    <label htmlFor="email" className="text-lg  text-white">
                      Password
                    </label>
                    <div className="border mt-2 px-3 border-white flex justify-between items-center w-full h-12 rounded-[15px]">
                      <div className="flex flex-1 gap-3 items-center">
                        <img src={key} alt="" className="object-cover h-4" />
                        <input
                          id="email"
                          name="pass"
                          value={input.pass}
                          onChange={handleInput}
                          type={show ? "text" : "password"}
                          placeholder="********"
                          className="placeholder:text-white pr-2 border-none outline-none   flex-1 text-white"
                        />
                      </div>
                      {show ? (
                        <button
                          onClick={handlePass}
                          className="cursor-pointer outline-none"
                        >
                          <img src={eye} alt="" className="w-5" />
                        </button>
                      ) : (
                        <button
                          onClick={handlePass}
                          className="cursor-pointer outline-none"
                        >
                          <img src={eyeClose} alt="" className="w-6.5" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center mt-6 lg:mt-8 mb-2">
                    <button
                      onClick={() => {
                        navigate("/home");
                      }}
                      className="bg-[#FED302]  font-semibold text-xl w-[70%] md:w-1/2 py-3 md:py-4 rounded-[15px]"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
