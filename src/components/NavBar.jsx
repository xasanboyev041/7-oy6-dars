import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Ro'yxatga olish</Link>
        </li>
        <li>
          <Link to="/list">Guruhdagilar ro'yxati</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
