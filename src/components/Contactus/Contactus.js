import React from "react";
import "./Contactus.css";
import { FaLocationArrow, FaPhoneVolume, FaVoicemail } from "react-icons/fa";

const Contactus = () => {
  return (
    <div className="bottom-margin">
      <div className="mb-5">
        <div className="contact-us container mt-5">
          <div className="mt-4 mb-3">
            <input
              type="name"
              className="form-control mb-2"
              id="exampleFormControlInput1"
              placeholder="name"
            />
            <input
              type="email"
              className="form-control mt-2 mb-2"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
            />

            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="Phone"
            />
            <input
              type="text"
              className="form-control mt-2 mb-2"
              id="exampleFormControlInput4"
              placeholder="Address"
            />

            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="message"
            ></textarea>
            <button className="text-white mt-3 bg-success border-0 rounded px-2 py-1">
              SHOP NOW
            </button>
          </div>
          <div className="bg-success bg-opacity-50 container rounded ps-4">
            <h2 className="mt-3 mb-3 ms-4">Reach Us</h2>
            <div className="d-flex align-items-center">
              <FaLocationArrow />
              <div className="ms-4">
                <h5>Location</h5>
                <p>50 Washington Square S, New York, NY 10012, USA</p>
                <p>80 Washington Square E, New York, NY 10003, USA</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FaPhoneVolume />
              <div className="ms-4">
                <h5>Phone</h5>
                <p>0-444-6785-6785</p>
                <p>0-754-6795-6365</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FaVoicemail></FaVoicemail>
              <div className="ms-4">
                <h5>Email</h5>
                <p>darudulislam@gmail.com</p>
                <p>info@groxistore.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
