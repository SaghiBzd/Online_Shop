import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "../Store/CartContext";

const RootLayout: React.FC = () => {
  const { cart } = useCart();

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar totalQuantity={totalQuantity} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
