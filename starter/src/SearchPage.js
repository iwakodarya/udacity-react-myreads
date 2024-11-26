import { BooksList } from "./Bookshelf";
import * as BooksAPI from "./BooksAPI";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchPage = ({ myBooks, onShelfChange }) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchBookResults, setSearchBookResults] = useState([]);

  const handleNewSearch = async (event) => {
    setSearchStr(event.target.value);

    try {
      const bookSearchList = await BooksAPI.search(searchStr, 10);

      const results = bookSearchList.map((book) => {
        const foundBook = myBooks.find((myBook) => myBook.id === book.id);

        if (foundBook) return foundBook;
        else return { ...book, shelf: "none" };
      });

      setSearchBookResults(results);
    } catch (error) {
      setSearchBookResults([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={searchStr}
            onChange={handleNewSearch}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        {searchBookResults.length > 0 ? (
          <BooksList
            books={searchBookResults}
            onShelfChange={onShelfChange}
          ></BooksList>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
