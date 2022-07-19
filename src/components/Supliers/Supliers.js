import React from "react";
import "./Supliers.css";
const Supliers = () => {
  return (
    <div className="mt-5 text-center mb-5">
      <h2 className="text-center mt-5 mb-3 text-success">Our Supliers</h2>
      <div className="supliers">
        <div className="style">
          <img
            src={
              "https://i.ibb.co/N2sVnDL/close-up-photo-amicable-man-black-shirt-posing-his-passport-picture-removebg-preview.png"
            }
            width="150px"
            height="150px"
            alt=""
            className="mb-3 border rounded-circle"
          />
          <h5 className="text-danger">Name: Towhidul Islam</h5>
          <p>
            <span className="text-danger">Address: </span>47 Washington Square
            W, New York, NY 10011, USA
          </p>
          <p className="me-5 ms-5 mt-3 text-secondary">
            Nice person good hearted. Supply on time.
          </p>
        </div>
        <div className="style">
          <img
            src={
              "https://i.ibb.co/QFmrn3G/delivery-concept-portrait-happy-african-american-delivery-man-red-cloth-holding-box-package-isolated.png"
            }
            width="150px"
            height="150px"
            alt=""
            className="mb-3 border rounded-circle"
          />
          <h5 className="text-danger">Name: Kalam Mia</h5>
          <p>
            <span className="text-danger">Address: </span>47 W 13th St, New
            York, NY 10011, USA
          </p>
          <p className="me-5 ms-5 mt-3 text-secondary">
            Always supply good fruits. Delivered on time and never be late.
            Every time delivered order on time.
          </p>
        </div>
        <div className="style">
          <img
            src={
              "https://i.ibb.co/v1k4d1x/picture-elegant-young-fashion-man-removebg-preview.png"
            }
            width="150px"
            height="150px"
            alt=""
            className="mb-3 border rounded-circle"
          />
          <h5 className="text-danger">Name: Sahadat Hossain</h5>
          <p>
            <span className="text-danger">Address: </span>50 Washington Square
            S, New York, NY 10012, USA
          </p>

          <p className="me-5 ms-5 mt-3 text-secondary">
            Always supply high quality fruits from a manufacturer at a good
            price to a distributor or retailer for resale.
          </p>
        </div>
        <div className="style">
          <img
            src={
              "https://i.ibb.co/D59r4SZ/want-some-cookie-picture-attractive-joyful-young-european-brunette-man-removebg-preview.png"
            }
            width="150px"
            height="150px"
            alt=""
            className="mb-3 border rounded-circle"
          />
          <h5 className="text-danger">Name: Abul Hossen</h5>
          <p>
            <span className="text-danger">Address: </span>80 Washington Square
            E, New York, NY 10003, USA
          </p>

          <p className="me-5 ms-5 mt-3 text-secondary">
            A supplier is a person or business that provides a product or
            service to another entity. He supply fruits in our warehouse about
            10 years.
          </p>
        </div>
        <div className="style">
          <img
            src={"https://i.ibb.co/fH8JWb5/myphoto-removebg-preview.png"}
            width="150px"
            height="150px"
            alt=""
            className="mb-3 border rounded-circle"
          />
          <h5 className="text-danger">Name: Darudul Islam</h5>
          <p>
            <span className="text-danger">Address: </span>East 8th Street, New
            York, NY 10003, United States
          </p>

          <p className="me-5 ms-5 mt-3 text-secondary">
            Always supply good fruits. Delivered on time and never be late.
            Every time delivered order on time.
          </p>
        </div>
        <div className="style">
          <img
            src={
              "https://i.ibb.co/pbnKZpH/people-travel-adventure-concept-attractive-young-bearded-adventurer-wearing-backpack-cap-taking-self.png"
            }
            width="150px"
            height="150px"
            alt=""
            className="mb-3 border rounded-circle"
          />
          <h5 className="text-danger">Name: Hossen Shaikder</h5>
          <p>
            <span className="text-danger">Address: </span> 55 Clark St,
            Brooklyn, NY 11201, USA
          </p>

          <p className="me-5 ms-5 mt-3 text-secondary">
            Always supply high quality fruits from a manufacturer at a good
            price to a distributor or retailer for resale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Supliers;
