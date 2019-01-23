import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../actions/ProductAction";

class Product extends Component {
  //   state = {
  //     newProduct: " "
  //   };
  //   addProduct() {
  //     this.props.dispatch(createProduct(this.state.newProduct));
  //     this.setState({ newProduct: " " });
  //   }

  //   onInputChange(event) {
  //     const value = event.target.value;
  //     this.setState({ newProduct: value });
  //   }

  render() {
    const { products } = this.props.product;

    const items = products.map(product => {
      return (
        <div>
            <img src={product.img} height="100" width="100" />
            <div>
            {product.name}
            </div>
        </div>
      );
    });

    return <div>{items}</div>;
  }
}
const mapStateToProps = store => {
  return { product: store.ProductReducer };
};
export default connect(mapStateToProps)(Product);
