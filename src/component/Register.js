import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function signUp() {
    let item = { name, password, email };
    console.warn(name, password, email);
    let result = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  }

  return (
    <>
      <Header />
      <div className="col-sm6 offset-sm-3">
        <h1>Sign Up</h1> <br />
        <input
          type="text"
          className="form-control"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          className="form-control"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" onClick={signUp}>
          {" "}
          Sign Up
        </button>
      </div>
    </>
  );
}