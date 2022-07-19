import React, { useEffect, useState } from "react";
import useFruits from "../hooks/useFruits";
import { useForm } from "react-hook-form";
import "./ManageInventories.css";
import { useNavigate } from "react-router";
import { Table } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const ManageInventories = () => {
  const [fruitss, setFruitss] = useFruits();
  const navigate = useNavigate();
  const addNewItem = () => {
    navigate("/addnewitem");
  };
  const deleteItem = (id) => {
    const success = window.confirm("Are you sure you want to delete this item");
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
      <h4 className="text-center text-success mb-4 mt-4">Manage inventories</h4>
      <div className="ms-5">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Suplier Name</th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody>
            {fruitss.map((item) => (
              <tr key={item._id}>
                <td>{item.itemname}</td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
                <td>{item.name}</td>
                <td>{item.sold}</td>
                <td>
                  <Button
                    className=" border-0 bg-warning rounded text-success fw-bold px-3 ms- "
                    onClick={() => deleteItem(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <button
          onClick={addNewItem}
          className="d-flex mx-auto border-0 bg-success p-2 rounded-pill text-warning fw-bold px-3"
        >
          Add New Item
        </button>
      </div>
    </div>
  );
};

export default ManageInventories;
