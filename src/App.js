import React from "react";
import Product from "./Product";

function App() {
  const products = [
    { name: "Apple Airpod", price: 350, quantity: 10 },
    { name: "Iphone 13", price: 1350, quantity: 5 },
    { name: "Microsoft Surface", price: 1050, quantity: 21 },
    { name: "Samsung Galaxy S13", price: 550, quantity: 2 },
    { name: "Oneplus 9", price: 650, quantity: 25 },
  ];
  return (
    <div>
      {products.map((product) => (
        <Product
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
      {/* <Product
        name={products[0].name}
        price={products[0].price}
        quantity={products[0].quantity}
      /> */}
    </div>
  );
}

export default App;
