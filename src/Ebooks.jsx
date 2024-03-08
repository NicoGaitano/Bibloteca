import React from "react";
import useFetch from "./useFetch";
import { Routes, Route, Link, useParams } from "react-router-dom";

const Libros = () => {
  const books = useFetch(
    "https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json"
  );
  return (
    <ul>
      {books.map((book, i) => (
        <li key={i}>
          <Link to={"/libro/" + book.isbn}>{book.title}</Link>
        </li>
      ))}
    </ul>
  );
};

const Libro = () => {
  const { isbn } = useParams();
  const libros = useFetch(
    "https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json"
  );

  return (
    <>
      {libros.map((libro, i) => (
        <section key={i}>
          <article>
            <h1>
              {libro.title} <em>({libro.isbn})</em>
            </h1>
            <p>Páginas: {libro.pageCount}</p>
            <br />
            <img src={libro.thumbnailUrl} alt={libro.title} />
            <p>{libro.longDescription}</p>
            <h2>Autores</h2>
            <ul>
              {libro.authors.map((autor, j) => (
                <li key={j}>{autor}</li>
              ))}
            </ul>
            <h2>Categorías</h2>
            <ul>
              {libro.categories.map((categoria, j) => (
                <li key={j}>{categoria}</li>
              ))}
            </ul>
          </article>
        </section>
      ))}
      <p>
        <Link to="/">Regresar a la home</Link>
      </p>
    </>
  );
};

const Ebooks = () => (
  <>
    <header>
      <h1>Libros</h1>
    </header>
    <Routes>
      <Route path="/Ebook" element={<Libros />} />
      <Route path="/libro/:isbn" element={<Libro />} />
    </Routes>
  </>
);

export default Ebooks;
