import React from "react";
import { NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
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
        <nav>
          <NavDropdown title={user.name}>
            <NavDropdown.Item> Logout </NavDropdown.Item>
          </NavDropdown>
        </nav>
      </nav>
    </div>
  );
}
