import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout: React.FC = () => {
    return <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
};

export default RootLayout;