import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
const EbookDetails = () => {
  const { isbn } = useParams();
  const libros = useFetch(
    "https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json"
  );
  return (
    <>
      {libros
        .filter((libro) => libro.isbn === isbn)
        .map((libro, i) => (
          <section className="details-book" key={i}>
            <article>
              <h1>
                {libro.title} 
              </h1>
              <p>Páginas: {libro.pageCount}</p>
              <br />
              <img src={libro.thumbnailUrl} alt={libro.title} />
              <p>{libro.longDescription}</p>
              <h2>Autores</h2>
              <ul className="autor-book">
                {libro.authors.map((autor, j) => (
                  <li key={j}>{autor}</li>
                ))}
              </ul>
              <h2>Categorías</h2>
              <ul className="category-book">
                {libro.categories.map((categoria, j) => (
                  <li key={j}>{categoria}</li>
                ))}
              </ul>
            </article>
          </section>
        ))}
    </>
  );
};
export default EbookDetails;
