import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const EbookAll = () => {
  const books = useFetch(
    "https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json"
  );
  return (
    <div className="portada-imagen">
      {books.map((book, i) => (
        <div className="contenedor-book" key={i}>
          <Link to={"/EbookDetails/"+ book.isbn}>
            <img
              className="libros-imagen"
              src={book.thumbnailUrl}
              alt={book.title}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default EbookAll;
