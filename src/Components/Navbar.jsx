import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/client1.png";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        {/* <img src="" alt="My Portfolio" /> */}

        <h1>ADESOLA TECH</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Project">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
