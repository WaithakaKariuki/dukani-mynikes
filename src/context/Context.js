import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";
// import { commerce } from '../lib/commerce'
import { productsArray as products } from "../data/data";

const Cart = createContext();
faker.seed(99);


const Context = ({ children }) => {


  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  console.log(state)
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ products, state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
