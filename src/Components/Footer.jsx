import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-session">
      <div className="myFooter">
        <div className="small-footer">
          <h3>Emails</h3>
          <ul>
            <li>
              <Link to=" ">ogungbejeayanfe@gmail.com</Link>
            </li>
            <li>
              <Link to=" ">adesolaayanfe152@gmail.com</Link>
            </li>
            <li>
              <Link to=" ">ogungbejeayanfe962@gmail.com</Link>
            </li>
            <li>
              <Link to=" ">adesolaogungbeje383@gmail.com</Link>
            </li>
          </ul>
        </div>
        <div className="small-footer">
          <h3>Phone Numbers</h3>
          <ul>
            <li>08073158981</li>
            <li>08138069490</li>
          </ul>
        </div>
        <div className="small-footer">
          <h3>Social Links</h3>
          <ul>
            <li>
              <Link to=" ">Facebook</Link>
            </li>
            <li>
              <Link to=" ">Instagram</Link>
            </li>
            <li>
              <Link to=" ">Git hub</Link>
            </li>
            <li>
              <Link to=" ">Tik tok</Link>
            </li>
            <li>
              <Link to=" ">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; 2026 Ogungbeje Ayanfe Adesola</p>
    </div>
  );
}

export default Footer;
