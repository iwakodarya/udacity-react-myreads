import Book from "./Book";

const Bookshelf = ({ books, shelfName }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} bookInfo={book}></Book>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
