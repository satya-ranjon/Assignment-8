import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppWrapper = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 sm:px-10">
        <Outlet />
      </div>
    </>
  );
};

export default AppWrapper;
