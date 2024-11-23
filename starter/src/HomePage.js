import { Bookshelf } from "./Bookshelf";

const HomePage = ({ books, onShelfChange }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content"></div>
      <Bookshelf
        books={books.filter((b) => b.shelf === "currentlyReading")}
        onShelfChange={onShelfChange}
        shelfName="Currently Reading"
      ></Bookshelf>
      <Bookshelf
        books={books.filter((b) => b.shelf === "wantToRead")}
        onShelfChange={onShelfChange}
        shelfName="Want To Read"
      ></Bookshelf>
      <Bookshelf
        books={books.filter((b) => b.shelf === "read")}
        onShelfChange={onShelfChange}
        shelfName="Read"
      ></Bookshelf>
      <div className="open-search">
        <a onClick={() => {}}>Add a book</a>
      </div>
    </div>
  );
};

export default HomePage;
