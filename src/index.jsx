import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Ebook from "./Ebook";
import Orders from "./Orders";
import EbookDetails from "./EbookDetails";
import Error from "./Error";
import Footer from "./Footer";

const App = () => (
  <BrowserRouter>
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ebook/*" element={<Ebook />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="*" element={<Error />} />
        <Route path="/EbookDetails/:isbn" element={<EbookDetails />} />
      </Routes>
      <Footer />
    </>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
