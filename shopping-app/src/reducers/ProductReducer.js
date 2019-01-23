import * as c from "../constants/ProductConstant";
var initialState = {
  products: [
    {
      id: 101,
      name: "Mobile",
      img:"ProductImage/ip.jpg",
      price: 800
    },
    {
      id: 102,
      name: "Mobile",
      img:"ProductImage/iPx.jpg",
      price: 15000
    }
  ]
};

export default function ProductReducers(state = initialState) {
  // var allProducts = state.products;
  // console.log("name is: "+action.payload)
  // switch (action.type) {
  //   case c.CREATE_PRODUCT: {
  //    allProducts.push(action.payload);
  //    break;
  //   }
  //   default:
  // }
 return state;
}
