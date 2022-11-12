import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function AddProduct() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const AddProduct = async () => {
    let result = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({ title, price, file, description }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/list");
  };
  return (
    <div>
      <Header />
      <div className="col-sm6 offset-sm-3">
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <input
          type="file"
          className="form-control"
          placeholder="file"
          onChange={(e) => setFile(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        <br />
        <button onClick={AddProduct}> Add Product </button>
      </div>
    </div>
  );
}
