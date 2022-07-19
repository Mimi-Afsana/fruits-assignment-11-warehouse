import React from "react";
import "./ProductQuality.css";
const ProductQuality = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center text-success">Our Service</h2>
      <div className="containers container quality-products">
        <div className="text-center">
          <img
            src={"https://i.ibb.co/s94ttyD/2203-W-1.jpg"}
            width="80px"
            alt=""
          />
          <h4>Quality Products</h4>
          <p className="text-secondary">
            From our warehouse always supply quality fruits.
          </p>
          <img
            className="quality"
            src={"https://i.ibb.co/RQjVWQP/382715-PCGRW9-187.jpg"}
            width="80px"
            alt=""
          />
          <h4>Fast Delivery</h4>
          <p className="text-secondary">
            Fast delivery in the form of same-day delivery, next-day delivery.
          </p>
        </div>
        <div>
          <img
            width="500px"
            src={
              "https://i.ibb.co/ZcCVw0r/young-woman-chooses-fruits-vegetables-supermarket.jpg"
            }
            alt=""
          />
          <button className="mt-5 bg-success bg-opacity-75 border border-success text-white fw-bold px-3 py-2 rounded-pill">
            SHOP NOW
          </button>
        </div>
        <div className="text-center">
          <img
            src={"https://i.ibb.co/gz38Syv/5739256.jpg"}
            width="80px"
            alt=""
          />
          <h4>Online Order</h4>
          <p className="text-secondary">
            Customer can do online order also. We have 100 people for online
            service.
          </p>
          <img
            src={"https://i.ibb.co/0YTY3gb/SL-080420-33360-35.jpg"}
            width="100px"
            alt=""
          />
          <h4>24/7 Service</h4>
          <p className="text-secondary">
            Our warehouse open 24/7 for provide great service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductQuality;
