import React from "react";

const Imagen = (props) => (
  <figure className="imagen-contain" >
      <img
        className="imagen-figure"
        src={props.url}
        alt={props.titulo}
      />
  </figure>
);

export default Imagen;
