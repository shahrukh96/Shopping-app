var initialState = {
  products: [
    {
      id: 101,
      name: "Earphones",
      price: 800
    },
    {
      id: 102,
      name: "Mobile",
      price: 15000
    }
  ]
};

export default function ProductReducers(state = initialState, action) {
  return state;
}
