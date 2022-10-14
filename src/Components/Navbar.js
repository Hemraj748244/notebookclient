import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const currPath = location.pathname;

  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNoteBook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${currPath === "/" ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className={`nav-item ${currPath === "/about" ? "active" : ""}`}>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link
              className="btn btn-outline-dark btn-rounded mx-2"
              data-mdb-ripple-color="dark"
              to="/login"
              role="button"
            >
              Login <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>
            <Link
              className="btn btn-outline-dark btn-rounded"
              data-mdb-ripple-color="dark"
              to="/signup"
              role="button"
            >
              Signup <i className="fa-sharp fa-solid fa-user-plus"></i>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
