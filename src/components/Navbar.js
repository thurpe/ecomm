import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartobj = useSelector((store) => store.cartReducer);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Ecomm
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/addItem">
                  Add Items
                </a>
              </li>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="/cart" className="nav-link">
                    Cart {cartobj.cartItems.length}
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
