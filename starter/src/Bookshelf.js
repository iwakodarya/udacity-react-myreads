import Book from "./Book";

const BooksList = ({ books, onShelfChange }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <Book key={book.id} book={book} onShelfChange={onShelfChange}></Book>
      ))}
    </ol>
  );
};

const Bookshelf = ({ books, shelfName, onShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <BooksList books={books} onShelfChange={onShelfChange}></BooksList>
      </div>
    </div>
  );
};

export { BooksList, Bookshelf };
