import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const sliceProducts = products.slice(0, 6);
  useEffect(() => {
    fetch("https://mysterious-wildwood-76982.herokuapp.com/fruit")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <h2 className="latest-products mb-5 text-danger">Inventory Item</h2>
      <div className="row">
        {sliceProducts.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
