import UpdateShelf from "./UpdateShelf";

const Book = ({ book, onShelfChange }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: "url(" + book.imageLinks.thumbnail + ")",
            }}
          ></div>
          <UpdateShelf book={book} onShelfChange={onShelfChange}></UpdateShelf>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.toString()}</div>
      </div>
    </li>
  );
};

export default Book;
