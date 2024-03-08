import React from "react";
import Header from "./Header";
import Imagen from "./Imagen";
import Sidebar from "./Sidebar";
import "./styles.css";
const Home = () => (
  <>
    <Header titulo="Proyecto React" subtitulo="Libros de Informática" />
    <Imagen url="https://decofilia.com/wp-content/uploads/2013/12/biblioteca-15.jpg" />
    <Sidebar />
  </>
);
export default Home;
