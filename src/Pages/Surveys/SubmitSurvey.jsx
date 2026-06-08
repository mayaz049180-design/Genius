import bgSurvey from "./assets/bgSurvey.png";
import geniusLogo from "./assets/geniusLogo.png";
const SubmitSurvey = () => {
  const fields = [
    {
      title: "Name",
      placeholder: "Short answer text",
    },
    {
      title: "Address",
      placeholder: "Long answer text",
    },
    {
      title: "Phone number",
      placeholder: "Short answer text",
    },
    {
      title: "Comments",
      placeholder: "Long answer text",
    },
  ];

  return (
    <>
      <div className="bg-[#d9d9d9] relative z-1  p-5 sm:p-6 rounded-t-[25px]">
        <span className="font-medium  border-b-4 ogg text-[25px] md:text-[30px] border-[#FED302] lg:text-[40px] ">
          Surveys
        </span>
        <div
          style={{
            backgroundImage: `url(${bgSurvey})`,
          }}
          className="h-25 md:h-50 bg-contain flex items-center justify-center  bg-[#012331] bg-no-repeat w-full bg-bottom rounded-[15px] mt-5"
        >
          <img src={geniusLogo} alt="" className="w-25 md:w-45" />
        </div>
        <div className="my-3">
          <p className="ogg text-3xl sm:text-[35px] lg:text-[40px] font-medium">
            What is Bike Angels?
          </p>
          <p className="lg:text-xl sm:text-lg text-black/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <form action="">
          <div className="space-y-5">
            {fields.map((item, map) => (
              <div className="bg-white p-2 md:px-5 md:py-3 rounded-[10px]">
                <label
                  htmlFor="name"
                  className="ogg font-medium text-xl md:text-[26px] "
                >
                  {item.title}
                  <span className="text-[#FED302] text-2xl ">*</span>
                </label>
                <div className="md:mb-7 mb-2">
                  <input
                    required
                    type="text"
                    placeholder={item.placeholder}
                    className="border-b border-black/20 outline-none placeholder:text-[#000000]/60 w-full"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-5">
            <button className="bg-[#007D69] rounded-[10px] px-10 text-lg cursor-pointer py-3 text-white">
              Survey Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubmitSurvey;
