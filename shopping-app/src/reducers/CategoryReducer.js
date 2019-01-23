import * as c from "../constants/CategoryConstant";

var insitialState = {
  categories: [
    {
      id: 1345,
      name: "Electronics",
      description: "Item Related to Electronics",
      img:"categoryImage/Electronics.jpg"
    },
    { id: 5468, name: "Grocery",
     description: "Item Related Daily Home Needs",
     img:"categoryImage/Book.jpg"
}
  ]
};

export default function categoryReducer(state = insitialState, action) {
   // console.log(action.payload);
   // let newState=state;
   var temp=state.categories;
  // let category=state.categories;
    switch(action.type){
        case c.CREATE_CATEGORY: {
            temp.push(action.payload);
           // state=Object.assign({},state,{categories:temp})
            break;
        // newState={...state,categories:[...state.categories,action.payload.categories]};
           
          // category.push(action.payload.categories)

            break;
        }
        default:
    }
  return state;
}
