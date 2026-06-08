import { Outlet } from "react-router-dom";
const Starmain = () => {
  return (
    <div className="bg-[#d9d9d9] relative z-1 p-5 sm:p-6 rounded-t-[25px]">
      <Outlet />
    </div>
  );
};

export default Starmain;
