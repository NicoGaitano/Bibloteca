import React from "react";
import EbookAll from "./EbooksAll";
import EbookDetails from "./EbookDetails";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

const Ebook = () => (
  <>
    <header>
      <h1 className="titulo-imagen">Libros de Informática</h1>
    </header>
    <Routes>
      <Route path="/" element={<EbookAll />} />
      <Route path="EbookDetails/:isbn" element={<EbookDetails />} />
    </Routes>
  </>
);
export default Ebook;
