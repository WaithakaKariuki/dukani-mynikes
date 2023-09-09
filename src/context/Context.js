import { createContext, useContext, useReducer, useState, useEffect } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";
import { commerce } from '../lib/commerce'
// import { productsArray } from "../data/data";
// import {useState, useEffect} from "react"
// import {products} from "./src./App.js"
// const header = new Headers({ "Access-Control-Allow-Origin": "*" });

const Cart = createContext();
faker.seed(99);

// async function getData() {
//   const data = await fetch('http://localhost:9292/products')
//       .then(res => res.json())
//       .then (products =>{
//         // payload : data
//         // dispatch({payload : products})
//         return products}
//         )
        
//       // .catch(e => {
//       //     console.error(e);
//       // })
//       // console.log(data)
//       return data;
     
// }



const Context = ({ children }) => {
  // const products = [...Array(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: faker.random.image(),
  //   inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
  //   fastDelivery: faker.datatype.boolean(),
  //   ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  // }));
// console.log(productsArray)

// const [ products, setProductArray ] = useState([]);
// useEffect(() => {
//   (async () => {
//       const products = await getData();
//       dispatch({payload : products})
//       setProductArray(products);
//       console.log(products)
//   })();
// }, []);
 
const [products, setProducts] = useState([])


const fetchProducts = async () => {
  const { data } = await commerce.products.list()
  setProducts(data)
}

useEffect(() => {
  fetchProducts()
}, [])


// const products=productsArray
// console.log(productsArray)
// console.log(products)

// const products = productsArray

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
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
