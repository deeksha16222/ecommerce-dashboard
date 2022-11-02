import React, { useState } from "react";
import Header from "./Header";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  async function AddProduct() {
    console.warn(name, file, price, description);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    let result = await fetch("", {
      method: "POST",
      body: formData,
    });
    alert("data has been saved");
  }
  return (
    <div>
      <Header />
      <div className="col-sm6 offset-sm-3">
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
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