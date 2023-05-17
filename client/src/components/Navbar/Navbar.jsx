import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav
      className="navbar navbar-expand-xl navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Weather App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse${isMenuOpen ? " show" : ""}`}
          id="navbarLight"
        >
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <Link to="/" className="nav-link ">
                <span
                  class={
                    location.pathname === "/"
                      ? "nav-link  route-flag route-hover active"
                      : "nav-link  route-hover  opcion"
                  }
                >
                  <i class="bi bi-person-rolodex"></i> Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link ">
                <span
                  class={
                    location.pathname === "/about"
                      ? "nav-link  route-flag route-hover active"
                      : "nav-link  route-hover  opcion"
                  }
                >
                  <i class="bi bi-person-rolodex"></i> About
                </span>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
