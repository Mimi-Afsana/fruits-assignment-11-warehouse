import React from "react";
import { useNavigate } from "react-router";
import "./Product.css";
const Product = ({ product }) => {
  const { _id, name } = product;
  const navigate = useNavigate();
  const fruitsDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="col-lg-4 col-12 welcome">
      <div className="mb-3 card border-0 rounded bg-white shadow">
        <img
          src={product.img}
          className="image-style card-img-top"
          alt="..."
          width="200px"
          height="200px"
        />
        <div className="card-body frame">
          <h5 className="card-title">
            <span className="text-success">Name:</span> {product.itemname}
          </h5>
          <p className="card-text">{product.description}</p>
          <p>
            {" "}
            <span className="h5 text-success">Price:</span>
            {product.price}
          </p>
          <p>
            {" "}
            <span className="h6 text-success">Quantity:</span>{" "}
            {product.quantity}
          </p>
          <p>
            <span className="h6 text-success">Suplier Name:</span>{" "}
            {product.name}
          </p>
          <button
            onClick={() => fruitsDetail(_id)}
            className="border-0 bg-warning p-2 px-3 rounded-pill text-success fw-bold"
          >
            Update Stock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
