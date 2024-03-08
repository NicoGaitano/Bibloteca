import React from "react";
import { Link } from "react-router-dom";
const Nav = () => (
  <nav id="navegacion">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Ebook">Libros</Link>
      </li>
      <li>
        <Link to="/Orders">Pedidios</Link>
      </li>
    </ul>
  </nav>
);
export default Nav;
