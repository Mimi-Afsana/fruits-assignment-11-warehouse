import React from "react";
import { useNavigate } from "react-router";
import Loading from "../../socialmedia/Loading/Loading";
import Banner from "../Banner/Banner";
import ProductQuality from "../ProductQuality/ProductQuality";
import Products from "../Products/Products";
import SaveMoney from "../SaveMoney/SaveMoney";
import Supliers from "../Supliers/Supliers";
import "./Home.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();
  const ManageInventory = () => {
    navigate("/manage");
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <div className="style-home d-flex justify-content-end">
        <button
          onClick={ManageInventory}
          className="set-button border-0 bg-success p-2 rounded-pill text-white px-3 fw-bold"
        >
          Manage Inventories
          <span className="ms-2">
            <FaLongArrowAltRight />
          </span>
        </button>
      </div>
      <SaveMoney></SaveMoney>
      <ProductQuality></ProductQuality>
      <Supliers></Supliers>
    </div>
  );
};

export default Home;
