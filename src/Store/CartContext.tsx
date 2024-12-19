import { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { Product, CartItem, CartContextType } from '../Types/Type';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const newCart = [...prev];
      const existingProduct = newCart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        newCart.push({ ...product, quantity: 1 });
      }

      return newCart;
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const increaseQuantity = useCallback((id: number) => {
    setCart((prev) => {
      const newCart = [...prev];
      const targetItem = newCart.find((item) => item.id === id);

      if (targetItem) {
        targetItem.quantity += 1;
      }

      return newCart;
    });
  }, []);

  const decreaseQuantity = useCallback((id: number) => {
    setCart((prev) => {
      const newCart = [...prev];
      const targetItemIndex = newCart.findIndex((item) => item.id === id);

      if (targetItemIndex !== -1) {
        const targetItem = newCart[targetItemIndex];
        if (targetItem.quantity > 1) {
          targetItem.quantity -= 1;
        } else {
          newCart.splice(targetItemIndex, 1);
        }
      }

      return newCart;
    });
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
