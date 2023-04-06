import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("thapaCart");

  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];

  return parsedData;
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (_id, color,user, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { _id, color, amount, user,product } });
  };

  // increment and decrement the product

  const setDecrease = (_id) => {
    dispatch({ type: "SET_DECREMENT", payload: _id });
  };

  const setIncrement = (_id) => {
    dispatch({ type: "SET_INCREMENT", payload: _id });
  };

  // to remove the individual item from cart
  const removeItem = (_id) => {
    dispatch({ type: "REMOVE_ITEM", payload: _id });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // to add the data in localStorage
  // get vs set

  useEffect(() => {
    // dispatch({ type: "CART_TOTAL_ITEM" });
    // dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

    localStorage.setItem("thapaCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };