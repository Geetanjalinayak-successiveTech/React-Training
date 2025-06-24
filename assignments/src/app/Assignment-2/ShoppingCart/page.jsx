"use client";
import { createContext, useState} from "react";
import  {ProductList, Cart} from "../Components/Shopping-cart";

const CartContext = createContext();
export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItems = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeItems = (id) =>
    setCartItems(cartItems.filter((i) => i.id !== id));
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
   <CartContext.Provider value={{ cartItems, addItems, removeItems, total }}>
      <h1>Shopping Cart</h1>
      <div>
        <ProductList />
        <Cart />
      </div>
    </CartContext.Provider>
);
}





export {CartContext}
