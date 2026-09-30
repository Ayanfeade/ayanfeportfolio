import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-session">

      <div className="myFooter">

        <div className="small-footer">
          <h3>Emails</h3>

          <ul>
            <li>
              <Link to="mailto:ogungbejeayanfe@gmail.com">
                ogungbejeayanfe@gmail.com
              </Link>
            </li>

            <li>
              <Link to="mailto:adesolaayanfe152@gmail.com">
                adesolaayanfe152@gmail.com
              </Link>
            </li>

            <li>
              <Link to="mailto:ogungbejeayanfe962@gmail.com">
                ogungbejeayanfe962@gmail.com
              </Link>
            </li>

            <li>
              <Link to="mailto:adesolaogungbeje383@gmail.com">
                adesolaogungbeje383@gmail.com
              </Link>
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
              <Link to="/">Facebook</Link>
            </li>

            <li>
              <Link to="/">Instagram</Link>
            </li>

            <li>
              <Link to="/">GitHub</Link>
            </li>

            <li>
              <Link to="/">TikTok</Link>
            </li>

            <li>
              <Link to="/">Twitter</Link>
            </li>
          </ul>
        </div>

      </div>

      <p>&copy; 2026 ADESOLA TECH</p>

    </footer>
  );
}

export default Footer;