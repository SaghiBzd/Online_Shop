import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useCart } from "../Store/CartContext";
import "../style.css";

function ShoppingCart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <div className="p-8">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="mb-6 text-xl text-center">
            It seems you haven't added anything to your cart yet.
          </p>
          <Link to="/products"
            className="bg-orange1 hover:bg-orange2 text-white1 px-6 py-3 rounded-lg text-lg font-semibold">
            Browse Products
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>
          <table className="hidden bg-light2 md:table w-full border-collapse">
            <thead>
              <tr className="text-center bg-green2">
                <th className="p-4 border">Number</th>
                <th className="p-4 border">Title</th>
                <th className="p-4 border hidden md:table-cell">Description</th>
                <th className="p-4 border">Quantity</th>
                <th className="p-4 border">Price</th>
                <th className="p-4 border">Total Price</th>
                <th className="p-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id} className="text-center hover:bg-green2">
                  <td className="p-4 border">{index + 1}</td>
                  <td className="p-4 border bg-green2 font-semibold text-lg">{item.title}</td>
                  <td className="p-4 border hidden md:table-cell">{item.description || 'N/A'}</td>
                  <td className="p-4 border">
                    <div className="flex justify-center items-center space-x-2">
                      <button onClick={() => decreaseQuantity(item.id)}
                        className="px-3 py-1 bg-orange1 hover:text-white1 hover:font-bold rounded-md">
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}
                        className="px-3 py-1 bg-green1 hover:text-white1 rounded-md hover:font-bold">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4 border">${item.price.toFixed(2)}</td>
                  <td className="p-4 border">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="p-4 border">
                    <button onClick={() => removeFromCart(item.id)}
                      className="bg-warm hover:bg-orange2 hover:text-white1 px-4 py-2 rounded-lg text-lg font-semibold w-3/4 md:w-full text-center">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-bold text-center bg-green2">
                <td colSpan={5} className="p-4 border text-lg">Total</td>
                <td className="p-4 border">${totalPrice.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
          <div className="md:hidden flex flex-col items-center justify-center gap-4">
            {cart.map((item) => (
              <div key={item.id}
                className="p-4 rounded-lg shadow-lg hover:bg-green2 bg-light2 text-center w-full max-w-xs">
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p className="text-md font-semibold mb-2">Price: ${item.price.toFixed(2)}</p>
                <div className="mb-2">
                  <p className="font-semibold">Quantity:</p>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-orange1 hover:font-bold rounded-md">
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-green1 hover:font-bold rounded-md">
                      +
                    </button>
                  </div>
                </div>
                <p className="text-md font-semibold mb-2">
                  Total Price: ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button onClick={() => removeFromCart(item.id)}
                  className="w-full py-2 mt-2 bg-orange1 hover:bg-orange2 rounded-lg">
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4 p-4 bg-green1 font-bold rounded-sm shadow-md text-center w-full max-w-xs">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
