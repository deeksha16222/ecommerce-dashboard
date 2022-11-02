import React from "react";
import { NavDropdown } from "react-bootstrap";

import { Link, Navigate } from "react-router-dom";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  function logout() {
    localStorage.clear();
    Navigate("/register");
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav nav_bar_wrapper">
              {localStorage.getItem("user-info") ? (
                <>
                  <Link to="/add"> Add Product </Link>
                  <Link to="/update"> Update Product</Link>
                </>
              ) : (
                <>
                  <Link to="/register"> Register </Link>
                  <Link to="/login"> Login </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {localStorage.getItem("user-info") ? (
          <nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logout}> Logout </NavDropdown.Item>
            </NavDropdown>
          </nav>
        ) : null}
      </nav>
    </div>
  );
}
