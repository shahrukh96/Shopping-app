import * as c from "../constants/ProductConstant";

export function createProduct(name, price) {
  var id = Date.now();
  

  var data = {
    id,
    name,
    price
  };
  return { type: c.CREATE_PRODUCT, payload: data };
}
