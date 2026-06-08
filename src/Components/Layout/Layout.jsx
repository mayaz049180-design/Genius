import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="bg-[#012331] min-h-screen flex flex-col">
      <Navbar />
      <div className="px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
