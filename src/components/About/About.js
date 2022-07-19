import React from "react";
import "./About.css";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../socialmedia/Loading/Loading";

const About = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container">
      <div className="warehouse">
        <div className="mt-5">
          <img
            src={
              "https://i.ibb.co/6Y1ZCn7/portrait-man-woman-with-white-grapes.jpg"
            }
            alt=""
            width="600px"
            className="rounded"
          />
        </div>
        <div className="mt-5">
          <h3 className="mt-5 mb-4 text-success">
            We Give The Lowest <br />
            Price on Warehouse Items
          </h3>
          <p>
            Enjoy exciting offers at up to 80% off, daily deals & wide
            assortments. Discover the Best Deals & Exclusive Offers on Your
            Favorite Brands & Products Here! Lowest Price Guaranteed. Types:
            Fruits. This is a useful feature if you're searching for a
            particular product and want to see if it was available for a lower
            price—just select the Warehouse option from the dropdown menu, type
            in the product you're looking for in the search bar, and see what
            comes up.
          </p>
        </div>
      </div>
      <div className="warehouse bg-secondary bg-opacity-25 mt-5 p-5">
        <div className="goal shadow-lg p-5 me-5">
          <img
            src={"https://i.ibb.co/Y7CW7p3/3569284.jpg"}
            alt=""
            width="90px"
            className="rounded mb-3"
          />
          <h3 className="mb-3">Our Vision</h3>
          <p>
            Titan Farms will be perceived by its customers as the benchmark of
            the peach industry. While being environmentally friendly, Titan
            Farms will strive to create a safe, rewarding working environment
            for its employees. It will continue to grow and diversify using
            state-of-the art agricultural practices while achieving financial
            success with utmost efficiency.
          </p>
          <button className="text-success bg-warning  border-0 rounded h6 p-2">
            SHOP NOW
          </button>
        </div>
        <div className="goal shadow-lg p-5">
          <img
            src={"https://i.ibb.co/PGyvMdP/20943892.jpg"}
            alt=""
            width="80px"
            className="rounded mb-3"
          />
          <h3 className="mb-3">Our Goal</h3>
          <p>
            Titan Farms is a profitable company whose employees are committed to
            producing the highest-quality peaches and vegetables, thus achieving
            the highest customer satisfaction. We accomplish this through
            teamwork, embodying integrity and progressive agricultural practices
            in a safe, wholesome work environment.
          </p>
          <button className="text-success bg-warning  border-0 rounded h6 p-2">
            SHOP NOW
          </button>
        </div>
      </div>
      <br />
      <iframe
        className=" mt-5"
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/ANxjuXUpItg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default About;
