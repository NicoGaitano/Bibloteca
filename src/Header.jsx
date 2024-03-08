import React from "react";

const Header = (props) => (
  <header>
    <h1 className="titulos">{props.titulo}</h1>
    <h2 className="titulos">{props.subtitulo}</h2>
  </header>
);

export default Header;
