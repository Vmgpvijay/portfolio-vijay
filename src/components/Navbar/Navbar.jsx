import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid px-4">
        {/* Brand */}
        <a className="navbar-brand fw-bold fs-4 text-gradient" href="#">
          Vijay
        </a>

        {/* Toggler */}
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

        {/* Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav gap-3 text-center">
            <li className="nav-item">
              <NavLink className="nav-link text-primary fw-semibold" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-primary fw-semibold" to="/About">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-primary fw-semibold"
                to="/Education"
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-primary fw-semibold"
                to="/Myworks"
              >
                My Works
              </NavLink>
            </li>

            {/* ✅ Contact button now visible inside collapse for mobile */}
            <li className="nav-item mt-3 d-lg-none">
              <NavLink
                to="/Contact"
                className="btn contactbtn fw-bold w-100 text-center"
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>

        {/* ✅ Desktop view button (still visible on large screens) */}
        <div className="d-none d-lg-block">
          <NavLink to="/Contact" className="btn contactbtn fw-bold">
            Contact Me
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
