import React, { useState, useEffect } from "react";
import Header from "./Header";

export default function ProductList() {
  const [show, setShow] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setShow(result);
      });
  });
  console.warn("data", show);
  return (
    <div>
      <Header />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(show)
            ? show.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td><img style={{width:140}} src={item.image}/></td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
