import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [myBooks, setMyBooks] = useState([]);

  const updateShelf = (bookToUpdate, newShelf) => {
    const updateBookInfo = async () => {
      const response = await BooksAPI.update(bookToUpdate, newShelf);
      setMyBooks(
        myBooks.map((book) =>
          book === bookToUpdate ? { ...book, shelf: newShelf } : book
        )
      );
    };

    updateBookInfo();
  };

  useEffect(() => {
    const getCurrentBooks = async () => {
      const response = await BooksAPI.getAll();
      setMyBooks(response);
    };

    getCurrentBooks();
  }, []);

  return (
    <div className="app">
      <SearchPage></SearchPage>
      <HomePage books={myBooks} onShelfChange={updateShelf}></HomePage>
    </div>
  );
}

export default App;
