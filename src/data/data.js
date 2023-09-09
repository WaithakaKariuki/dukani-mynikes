// import product1 from "../assets/product1.png";
// import product2 from "../assets/product2.png";
// import product3 from "../assets/product3.png";
// import product4 from "../assets/product4.png";
// import product5 from "../assets/product5.png";
// import product6 from "../assets/product6.png";
// import product7 from "../assets/product7.png";
// import product8 from "../assets/product8.png";
// import product9 from "../assets/product9.png";
// import product10 from "../assets/product10.png";
// import product11 from "../assets/product11.png";
// import product12 from "../assets/product12.png";
// import {useState, useEffect} from 'react'

const product1 = "https://sneakernews.com/wp-content/uploads/2023/01/air-jordan-3-reimagined-official-images-DN3707-100-3.jpg?w=1140"
const product2 = "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg"
const product3 = "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg"
const product4 = "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg"
const product5 = "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg"
const product6 = "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-officially-unveiled-2.jpg"
const product7 = "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg"
const product8 = "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-1.jpg"
const product9 = "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-6.jpg"
const product10 = "https://sneakernews.com/wp-content/uploads/2022/03/nike-lebron-2-retro-usa-DR0826-100-1.jpg"
const product11 = "https://sneakernews.com/wp-content/uploads/2023/02/Nike-Air-Max-1-Safari-Summit-White-FB5059-100-5.jpg?w=1140"
const product12 = "https://sneakernews.com/wp-content/uploads/2023/01/Air-Jordan-2-Low-Cherrywood-DV9956-103-04.jpg"


// const api_url = "http://localhost:9292/products"
// async function getProducts(){
//   const response = await fetch(api_url)
//   const data = await response.json()
//   const {productArray} = data
//   const prodArray = productArray
// }
// console.log(prodArray)

// getProducts()


  // fetch("http://localhost:9292/products")
  // .then((r)=> r.json())
  // .then((d) => {
  //   const productA = d }) 

  // console.log(productA)

  // console.log(product)
  // const products = JSON.parse(d)
  // console.log(products)
  //   const data = d})

  // for (const key in data) {
  //   console.log(data[key]);
  // }

// function Products (){

//     console.log(productArray)
//     return (
//       <>
//         <Context>
//           {productArray}
//         </Context>
//       </>
//     )
  
//   }


// const productsArray= [
//     {
//       id: "1",
//       name: "Nike Air Low Premium",
//       ratings: 2,
//       image: product7,
//       price: "160",
//       inStock: 5,
//       fastDelivery: false,
//     },
//     {
//       id: "2",
//       name: "Nike Air Force Green",
//       ratings: 2,
//       image: product2,
//       price: "130",
//       inStock: 6,
//       fastDelivery: false,
//     },
//     {
//       id: "3",
//       name: "Nike Addapt BB Rose",

//       ratings: 4,
     
//       image: product3,
//       price: "160",
//       inStock: 3,
//       fastDelivery: true,
//     },
//     {
//       id: "4",
//       name: "Nike Air Premium",

//       ratings: 3,
     
//       image: product4,
//       price: "150",
//       inStock: 5,
//       fastDelivery: false,
//     },
//     {
//       id: "5",
//       name: "Nike Adapt BB Pro",

//       ratings: 3,
     
//       image: product5,
//       price: "155",
//       inStock: 6,
//       fastDelivery: true,
//     },
//     {
//       id: "6",
//       name: "Air Jordan PR3",

//       ratings: 4,
     
//       image: product6,
//       price: "145",
//       inStock: 3,
//       fastDelivery: true,
//     },
//     {
//       id: "7",
//       name: "Nike Multi Smart Shoe",

//       ratings: 5,
     
//       image: product1,
//       price: "159",
//       inStock: 5,
//       fastDelivery: false,
//     },
//     {
//       id: "8",
//       name: "Nike Jordan Air Max",

//       ratings: 5,
     
//       image: product9,
//       price: "150",
//       inStock: 0,
//       fastDelivery: true,
//     },
//     {
//       id: "9",
//       name: "Nike Old Max-x",

//       ratings: 3,
     
//       image: product10,
//       price: "170",
//       inStock: 6,
//       fastDelivery: false,
//     },
//     {
//       id: "10",
//       name: "Nike Lime Jordan 11",

//       ratings: 4,
     
//       image: product12,
//       price: "190",
//       inStock: 0,
//       fastDelivery: false,
//     },
//     {
//       id: "11",
//       name: "Nike Air Black Max",

//       ratings: 3,
     
//       image: product11,
//       price: "140",
//       inStock: 7,
//       fastDelivery: true,
//     },
//     {
//       id: "12",
//       name: "Nike Zoom Max",

//       ratings: 2,
     
//       image: product8,
//       price: "150",
//       inStock: 7,
//       fastDelivery: true,
//     },
//   ]


const productsArray= [
  {
    id: 1,
    name: "Nike Air Low Premium",
    ratings: 2,
    image: product7,
    price: "160",
    inStock: 5,
    fastDelivery: false,
  },
  {
    id: 2,
    name: "Nike Air Force Green",
    ratings: 2,
    image: product2,
    price: "130",
    inStock: 6,
    fastDelivery: false,
  },
  {
    id: 3,
    name: "Nike Addapt BB Rose",

    ratings: 4,
   
    image: product3,
    price: "160",
    inStock: 3,
    fastDelivery: true,
  },
  {
    id: 4,
    name: "Nike Air Premium",

    ratings: 3,
   
    image: product4,
    price: "150",
    inStock: 5,
    fastDelivery: false,
  },
  {
    id: 5,
    name: "Nike Adapt BB Pro",

    ratings: 3,
   
    image: product5,
    price: "155",
    inStock: 6,
    fastDelivery: true,
  },
  {
    id: 6,
    name: "Air Jordan PR3",

    ratings: 4,
   
    image: product6,
    price: "145",
    inStock: 3,
    fastDelivery: true,
  },
  {
    id: 7,
    name: "Nike Multi Smart Shoe",

    ratings: 5,
   
    image: product1,
    price: "159",
    inStock: 5,
    fastDelivery: false,
  },
  {
    id: 8,
    name: "Nike Jordan Air Max",

    ratings: 5,
   
    image: product9,
    price: "150",
    inStock: 0,
    fastDelivery: true,
  },
  {
    id: 9,
    name: "Nike Old Max-x",

    ratings: 3,
   
    image: product10,
    price: "170",
    inStock: 6,
    fastDelivery: false,
  },
  {
    id: 10,
    name: "Nike Lime Jordan 11",

    ratings: 4,
   
    image: product12,
    price: "190",
    inStock: 0,
    fastDelivery: false,
  },
  {
    id: 11,
    name: "Nike Air Black Max",

    ratings: 3,
   
    image: product11,
    price: "140",
    inStock: 7,
    fastDelivery: true,
  },
  {
    id: 12,
    name: "Nike Zoom Max",

    ratings: 2,
   
    image: product8,
    price: "150",
    inStock: 7,
    fastDelivery: true,
  },
]

  export {productsArray }
