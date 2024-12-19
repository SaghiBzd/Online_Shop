import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../style.css";

interface NavbarProps {
  totalQuantity: number;
}

const Navbar: React.FC<NavbarProps> = ({ totalQuantity }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navButton = "text-md py-2 px-4 rounded-md hover:bg-green1 transition-colors duration-300";
  const navButtons = "w-full text-md py-2 px-8 rounded-md hover:bg-green1 transition-colors duration-300";

  return (
    <header className="bg-orange1 sticky top-0 w-full shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-white1 text-2xl font-bold">Online Shop</h1>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white1 text-lg font-semibold focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? 'Close' : 'Menu'}
          </button>

          <ul className="hidden md:flex space-x-2 text-lg font-medium">
            <li>
              <NavLink to="/"
                className={({ isActive }) => `${navButton} ${isActive ? 'text-warm' : ''}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products"
                className={({ isActive }) => `${navButton} ${isActive ? 'text-warm' : ''}`}>
                Our Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart"
                className={({ isActive }) => `${navButton} ${isActive ? 'text-warm' : ''}`}>
                Shopping Cart
                {totalQuantity > 0 && (
                  <span className="bg-green1 text-md text-white1 font-bold ml-2 px-2 py-1 rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/userDetail"
                className={({ isActive }) => `${navButton} ${isActive ? 'text-warm' : ''}`}>
                User Detail
              </NavLink>
            </li>
          </ul>
        </div>

        {isOpen && (
          <div className="md:hidden bg-orange1 rounded-lg py-4">
            <ul className="flex flex-col space-y-4 text-lg font-medium text-center">
              <li>
                <NavLink to="/"
                  className={({ isActive }) => `${navButtons} ${isActive ? 'text-warm' : ''}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products"
                  className={({ isActive }) => `${navButtons} ${isActive ? 'text-warm' : ''}`}>
                  Our Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart"
                  className={({ isActive }) => `${navButtons} ${isActive ? 'text-warm' : ''}`}>
                  Shopping Cart
                  {totalQuantity > 0 && (
                    <span className="bg-green1 text-white1 font-bold ml-2 px-2 py-1 rounded-full">
                      {totalQuantity}
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/userDetail"
                  className={({ isActive }) => `${navButtons} ${isActive ? 'text-warm' : ''}`}>
                  User Detail
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
