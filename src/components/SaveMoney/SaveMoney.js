import React from "react";
import "./SaveMoney.css";
const SaveMoney = () => {
  return (
    <div className="containers container mb-5 mt-5">
      <div className="free-shipping">
        <div className="d-flex bg-light pt-4 pb-4 ps-5">
          <div className="pe-5 text-center mt-5">
            <h3 className="text-danger mb-3">Free Shipping</h3>
            <h6>ON ORDER UPTO $2000</h6>
            <button className="border border-danger bg-white danger rounded-pill text-success px-4 py-2 h6 mt-3">
              Order Now
            </button>
          </div>
          <div>
            <img
              width="300px"
              height="250"
              src={"https://i.ibb.co/Sr16W7k/colorful-fruit.jpg"}
              alt=""
            />
          </div>
        </div>
        <div className="d-flex bg-light pt-4 pb-4 ps-5">
          <div className="pe-5 pe-2 text-center mt-5">
            <p className="h3 mb-3">Save upto 5%</p>
            <h6>ON YOUR FIRST ORDER</h6>
            <button className="border border-dark  bg-white rounded-pill text-success px-4 py-2 h6 mt-3">
              Order Now
            </button>
          </div>
          <div>
            <img
              width="300px"
              height="250"
              src={
                "https://i.ibb.co/SRNk2xY/fresh-fruits-isolated-white-background.jpg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveMoney;
