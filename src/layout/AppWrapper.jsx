import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppWrapper = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" && (
        <div className="h-[478px] bg-white opacity-5 w-full">
          <div className="bg-[url('https://i.ibb.co/CBP7p28/Rectangle-4281.png')] w-full h-full bg-cover"></div>
        </div>
      )}
      <div className={`${pathname === "/" && "fixed top-0 left-0 w-full"}`}>
        <Navbar />
      </div>
      <div className="container mx-auto px-5 sm:px-10">
        <Outlet />
      </div>
    </>
  );
};
export default AppWrapper;
