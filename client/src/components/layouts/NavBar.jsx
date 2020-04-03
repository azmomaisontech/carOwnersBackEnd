import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <h3>
            <Link to="/">Azmo Cars</Link>{" "}
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
