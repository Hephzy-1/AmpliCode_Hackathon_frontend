import React from "react";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Study Buddy</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="../pages/AuthPage.jsx">Sign In</a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Nav;