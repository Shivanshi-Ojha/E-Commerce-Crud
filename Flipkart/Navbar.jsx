import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DataProvider } from "../Action/MyStore";

const Navbar = ({ setSearchValue }) => {

  const { handleShow, dispatch } = useContext(DataProvider);

  const [text, setText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(text);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">Navbar</Link>

        <div className="collapse navbar-collapse">

          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Flipkart</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Deshboard">Dashboard</Link>
            </li>
          </ul>

          {/* SEARCH + SIGNUP */}
          <form className="d-flex align-items-center" onSubmit={handleSearch}>
            <input
              className="form-control me-2 bg-white text-dark"
              type="search"
              placeholder="Search products..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button className="btn btn-warning me-2">
              Search
            </button>

            {/* ✅ SIGNUP BUTTON */}
            <Button
              variant="success"
              onClick={() => {
                dispatch({
                  type: "addUser",
                  newUser: {
                    id: "",
                    name: "",
                    email: "",
                    age: "",
                    address: "",
                    image: "",
                  },
                });
                handleShow();
              }}
            >
              Signup
            </Button>
          </form>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
