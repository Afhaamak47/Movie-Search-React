import react from "react";
import { Outlet } from "react-router-dom";
import Headers from "./components/Headers";
import Footers from "./components/Footers";

const Layout = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footers />
    </div>
  );
};

export default Layout;
