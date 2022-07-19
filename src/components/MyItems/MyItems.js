import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import auth from "../../firebase.init";
import Loading from "../../socialmedia/Loading/Loading";
import useFruits from "../hooks/useFruits";
import "./MyItem.css";
const MyItems = () => {
  const [myItem, setMyItem] = useState([]);
  const [fruitss, setFruitss] = useFruits();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  // console.log(user.email);
  useEffect(() => {
    const loadItem = async () => {
      const email = user?.email;
      const url = `https://mysterious-wildwood-76982.herokuapp.com/myItem?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setMyItem(data);
    };
    loadItem();
  }, [myItem]);
  const addNewItem = () => {
    navigate("/addnewitem");
  };
  if (loading) {
    return <Loading></Loading>;
  }
  const deleteItem = (id) => {
    const success = window.confirm("Are you sure?? You want to delete item");
    if (success) {
      const url = `https://mysterious-wildwood-76982.herokuapp.com/fruit/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const restItem = fruitss.filter((fruit) => fruit._id !== id);
          setFruitss(restItem);
        });
    }
  };
  return (
    <div>
      <h4 className="text-center mb-3 text-success mt-4 mb-5">My Item</h4>
      <div className="myItem container">
        {myItem.map((item) => (
          <div key={item._id} className="card">
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Name: {item.itemname}</h5>
              <p className="card-text">{item.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Price: {item.price}</li>
              <li className="list-group-item">Quantity: {item.quantity}</li>
              <li className="list-group-item">Sold: {item.sold}</li>
              <li className="list-group-item">Suplier Name: {item.name}</li>
            </ul>
            <div className="card-body">
              <Button
                className=" border-0 bg-warning rounded text-success fw-bold px-3 ms- "
                onClick={() => deleteItem(item._id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-50 ms-5">
        <button
          onClick={addNewItem}
          className="border-0 bg-success  px-3 py-2 fw-bold  rounded text-warning text-center mt-5 "
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default MyItems;
