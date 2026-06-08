import user from "./assets/user.png";
import bgDashboard from "./assets/bgDashboard.png";
const Dashboard = () => {
  const cardsInfo = [
    {
      title1: "Activities",
      title2: "Completed",
      number: "10",
    },
    {
      title1: "Stars",
      title2: "Earned",
      number: "25",
    },
    {
      title1: "Pending",
      title2: "Activities",
      number: "10",
    },
    {
      title1: "Surveys",
      title2: "Completed",
      number: "05",
    },
    {
      title1: "Stars",
      title2: "Pending",
      number: "05",
    },
    {
      title1: "Surveys",
      title2: "Pending",
      number: "05",
    },
  ];
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgDashboard})` }}
        className="bg-white p-5 sm:p-7 xl:p-10   rounded-t-[25px]  bg-no-repeat  md:bg-size-[40%_100%] md:bg-right bg-bottom bg-size-[100%_60%]"
      >
        <div className="flex gap-2 items-center">
          <div className="border-2 border-[#FED302] rounded-full p-0.5">
            <img src={user} alt="" className="w-20 xl:w-25" />
          </div>
          <div className="xl:leading-10">
            <p className="ogg lg:text-[28px] xl:text-[35px] font-bold">
              Welcome Chirstina Dykes
            </p>
            <p className="lg:text[24px] xl:text-[28px] text-[#012331B2]/70">
              Discover the Statistics of Your Genius"
            </p>
          </div>
        </div>
        <div className="my-6">
          <span className="font-semibold border-b-4 ogg text-[25px] md:text-[30px] border-[#FED302] kg:text-[40px] 2xl:text-[48px]">
            Dashboard
          </span>
        </div>
        <div className="grid justify-items-center grid-cols-1 gap-7  xl:gap-10  md:pb-10 lg:pb-15  sm:grid-cols-2 lg:grid-cols-3">
          {cardsInfo.map((item, index) => (
            <div
              key={index}
              className="bg-[#012331]/90 w-full max-w-[400px]  sm:mx-0 md:w-full md:max-w-none  justify-around lg:justify-between pl-4  pr-8 sm:pr-12 py-6 rounded-[15px]  flex items-center xl:py-8"
            >
              <div className="px-2 lg:leading-9">
                <p className="text-[24px] lg:text-[30px] text-white/60">
                  {item.title1}
                </p>
                <p className="text-[24px] lg:text-[30px] text-white/60">
                  {item.title2}
                </p>
              </div>
              <span className="text-[48px]  lg:text-[60px] font-semibold text-white ogg">
                {item.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
