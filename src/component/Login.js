import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function login() {
    let item = { email, password };
    let result = fetch("https://reqres.in/api/register", {
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
    <div>
      <Header />
      <div className="col-sm6 offset-sm-3">
        <h1>Login Up</h1> <br />
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
        <button className="btn btn-primary" onClick={login}> Login </button>
      </div>
    </div>
  );
}
