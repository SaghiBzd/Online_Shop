import { Link } from "react-router-dom";
import cartImage from "../PIC/home.jpg";

export default function HomePage() {
  const catBox1 = "text-lg bg-green1 p-4 rounded-lg text-center font-semibold";
  const catBox2 = "text-lg bg-warm p-4 rounded-lg text-center font-semibold";

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="flex flex-col justify-center items-center md:w-2/3 p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Our Online Shop!</h1>
        <p className="text-xl mb-6 text-center">Start Exploring Our Amazing Products!</p>
        <div className="grid grid-cols-2 gap-4 mb-6 w-full max-w-md">
          <div className={catBox1}>Electronics</div>
          <div className={catBox1}>Jewelry</div>
          <div className={catBox2}>Men's Clothing</div>
          <div className={catBox2}>Women's Clothing</div>
        </div>
        <Link to="/products"
          className="bg-orange1 hover:bg-orange2 text-white px-8 py-4 rounded-lg text-lg font-semibold w-3/4 md:w-full text-center transition-colors duration-300">
          Our Products
        </Link>
      </div>
      <div className="md:w-1/2 h-80 md:h-screen flex items-center justify-center">
        <div className="w-full h-full relative">
          <img
            src={cartImage}
            alt="A shopping cart on a laptop"
            className="w-full h-full object-cover"/>
          <div className="absolute inset-0"></div>
        </div>
      </div>
    </div>
  );
}
