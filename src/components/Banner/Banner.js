import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner position-relative">
      <img
        src={"https://i.ibb.co/xfwJ5R9/assorted-mixed-fruits-1.png"}
        alt=""
        className=" "
        height="700px"
      />
      <div className="banner text-center w-50  shadow-lg p-4 mb-5 bg-body rounded container position-absolute top-100 start-50 translate-middle">
        <h3>Welcome</h3>
        <p className="w-50 text-secondary  mx-auto">
        Welcome to the company. We are delighted that you have selected our company. I extend you a very warm welcome and trust your dealing with us will be both enjoyable and comfortable.
        </p>
      </div>
    </div>
  );
};

export default Banner;
