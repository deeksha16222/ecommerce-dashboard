import React, {useState} from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function UpdateProduct() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
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
            <button> Add Product </button>
          </div>
        </div>
  );
}
