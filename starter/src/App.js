import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Bookshelf from "./Bookshelf";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [myBooks, setMyBooks] = useState([]);

  console.log(myBooks);

  useEffect(() => {
    const getCurrentBooks = async () => {
      const response = await BooksAPI.getAll();
      setMyBooks(response);
    };

    getCurrentBooks();
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content"></div>
          <Bookshelf
            books={myBooks.filter((b) => b.shelf === "currentlyReading")}
            shelfName="Currently Reading"
          ></Bookshelf>
          <Bookshelf
            books={myBooks.filter((b) => b.shelf === "wantToRead")}
            shelfName="Want To Read"
          ></Bookshelf>
          <Bookshelf
            books={myBooks.filter((b) => b.shelf === "read")}
            shelfName="Read"
          ></Bookshelf>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
