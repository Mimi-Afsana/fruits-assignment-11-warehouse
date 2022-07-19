import Button from "@restart/ui/esm/Button";
import React from "react";
import { useNavigate } from "react-router";
import useFruits from "../components/hooks/useFruits";

const ManageItem = () => {
  const [fruitss, setFruitss] = useFruits();
  const navigate = useNavigate();
  const addNewItem = () => {
    navigate("/addnewitem");
  };
  const deleteItem = (id) => {
    const success = window.confirm("Are u want o delete");
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
    <div className="mt-4">
      <h4 className="text-center mb-3 text-success">Manage item</h4>
      <div className="myItem container">
        {fruitss.map((item) => (
          <div key={item._id} className="card">
            <div className="card border-success">
              <div className="card-header">
                <span className="fw-bold text-danger">Name: </span>
                {item.name}
              </div>
              <div className="card-body">
                <p className="card-text">{item.description}</p>
                <p>
                  <span className="text-danger fw-bold">Price:</span>{" "}
                  {item.price}
                </p>
                <p>
                  <span className="text-danger fw-bold">Quantity:</span>{" "}
                  {item.quantity}
                </p>
                <p>
                  <span className="text-danger fw-bold">Sold:</span> {item.sold}
                </p>
                <p>
                  <span className="text-danger fw-bold">Suplier Name:</span>{" "}
                  {item.name}
                </p>
              </div>
            </div>
            <div className="card-body">
              <Button
                className=" border-0 bg-warning rounded text-success fw-bold px-3 ms- "
                onClick={() => deleteItem(item._id)}
              >
                Delete
              </Button>
              <Button
                onClick={addNewItem}
                className="border-0 bg-success  rounded text-warning ms-2"
              >
                Additem
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageItem;
