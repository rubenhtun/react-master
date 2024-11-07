import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
