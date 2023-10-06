import React, { Component } from "react";
import Child from "../Child/Child";

export default class Parent extends Component {
  state = {
    products: [
      {
        Name: "BMW",
        color: "green",
        price: 2000000,
      },
      {
        Name: "mazda",
        color: "blue",
        price: 600000,
      },
      {
        Name: "benz",
        color: "red",
        price: 3050000,
      },
       {
        Name: "golf",
        color: "gray",
        price: 300000,
      },
      {
        Name: "renult",
        color: "blue",
        price: 100000,
      },
      {
        Name: "lanser",
        color: "gold",
        price: 250000,
      },
    ],
  };

  handleAddCar = () => {
    const newCar = {
      Name: "passat",
      color: "black",
      price: "$100$100$",
    };
    this.setState((prevState) => ({
      products: [...prevState.products, newCar],
    }));
  };

  handleRemoveCar = (carToRemove) => {
    this.setState((prevState) => ({
      products: prevState.products.filter((product) => product !== carToRemove),
    }));
  };

  render() {
    return (
      <div className="container bg-warning  p-3">
        <button className="btn btn-success" onClick={this.handleAddCar}>
          Add Car
        </button>
        <div className="row">
          {this.state.products.map((product, index) => (
            <Child
              key={index}
              productDetails={product}
              onRemove={() => this.handleRemoveCar(product)}
            />
          ))}
        </div>
      </div>
    );
  }
}
