import React, { Component } from "react";
import { connect } from "react-redux";
import { createCategory } from "../actions/CategoryAction";

class Category extends Component {
  state = {
    newState: " "
  };

//   addcategory = () => {
//       console.log("hello");
//    // const {categories}=this.props.category;
//     this.props.dispatch(createCategory(this.state.newState));
//     this.setState({ newState:" " });
//   };
  handleChange = e => {
    const value = e.target.value;
    this.setState({ newState: value });
  };
  render() {
    const { categories } = this.props.category;
    const Item = categories.map((category) => {
      return (
       
        <div>
            <div><span>
                <img src={category.img} height="100" width="100" />
                <div>
                {category.name}
                {category.description}
                </div>
                </span>
            </div>
        </div>
        
      );
    });
    return (
    
  <div>
      {Item}
  </div>
    );
  }
}
const mapStateToProps = store => {
  return { category: store.CategoryReducer };
};
export default connect(mapStateToProps)(Category);
