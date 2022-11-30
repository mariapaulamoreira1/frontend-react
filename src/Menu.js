import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li class = "itemMenu">
            <Link to="/">Home </Link>{" "}
          </li>
          <li class = "itemMenu">
            <Link to="/usuarios">CLIENTES</Link>
          </li>
          <li class = "itemMenu">
            <Link to="/sobre"> SOBRE </Link>
          </li>
          <li class = "itemMenu">
            <Link to="/pessoas"> PESSOAS </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
