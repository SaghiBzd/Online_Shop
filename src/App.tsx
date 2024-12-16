import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from "./Components/RootLayout";
import HomePage from "./Pages/HomePage";
import UserDetailPage from "./Pages/UserDetailPage";
import ShoppingCartPage from './Pages/ShoppingCartPage';
import Products from './Components/Products';


const router = createBrowserRouter([
  {path: "/", element: <RootLayout/>, children: [
    {index: true, element: <HomePage/>},
    {path: "products", element: <Products/>},
    {path: "userDetail", element: <UserDetailPage/>},
    {path: "cart", element: <ShoppingCartPage/>},
  ],}
]) 

const App: React.FC = () => {
  return <RouterProvider router={router}/>;
};

export default App;
