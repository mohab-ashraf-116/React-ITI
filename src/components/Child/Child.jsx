import React, { Component } from "react";

export default class Child extends Component {
  handleRemoveCar = () => {
    const { productDetails, onRemove } = this.props;
    onRemove(productDetails);
  };

  render() {
    let { Name, color, price } = this.props.productDetails;
    return (
      <div className="col-4">
        <div className=" p-3">
          <div className="bg-danger p-3 text-white">
            <h5>Name: {Name}</h5>
            <h5> Color: {color}</h5>
            <h5> price: {price}</h5>
            <button className="btn btn-dark" onClick={this.handleRemoveCar}>
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}
