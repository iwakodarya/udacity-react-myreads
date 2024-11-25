import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";

function App() {
  const [myBooks, setMyBooks] = useState([]);

  const updateShelf = (bookToUpdate, newShelf) => {
    const updateBookInfo = async () => {
      const response = await BooksAPI.update(bookToUpdate, newShelf);
      setMyBooks(
        myBooks.some((book) => book.id === bookToUpdate.id)
          ? myBooks.map((book) =>
              book.id === bookToUpdate.id ? { ...book, shelf: newShelf } : book
            )
          : [...myBooks, { ...bookToUpdate, shelf: newShelf }]
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
      <Routes>
        <Route
          exact
          path="/search"
          element={
            <SearchPage
              myBooks={myBooks}
              onShelfChange={updateShelf}
            ></SearchPage>
          }
        />
        <Route
          exact
          path="/"
          element={
            <HomePage books={myBooks} onShelfChange={updateShelf}></HomePage>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
