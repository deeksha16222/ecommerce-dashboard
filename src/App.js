import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./component/Login.js";
import AddProduct from "./component/AddProduct.js";
import UpdateProduct from "./component/UpdateProduct.js";
import Register from "./component/Register.js";
import HomePage from "./component/HomePage";
import ProductList from "./component/ProductList";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/add" element={<AddProduct />} />
          <Route exact path="/update" element={<UpdateProduct />} />
          <Route exact path="/list" element={<UpdateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
