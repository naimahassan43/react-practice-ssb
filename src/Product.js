import React from "react";
import "./style.css";

function Product(props) {
  return (
    <div className="block-unit">
      <h1>Product name: {props.name}</h1>
      <h3>Product price: {props.price}</h3>
      <p>Product quantity: {props.quantity}</p>
    </div>
  );
}

export default Product;
