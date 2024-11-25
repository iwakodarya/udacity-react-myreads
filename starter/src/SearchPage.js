import { BooksList } from "./Bookshelf";
import * as BooksAPI from "./BooksAPI";
import { useState } from "react";

const SearchPage = ({ myBooks, onShelfChange = { onShelfChange } }) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchBookResults, setSearchBookResults] = useState([]);

  const handleNewSearch = (event) => {
    setSearchStr(event.target.value);

    const getSearchResults = async (query) => {
      const bookSearchList = await BooksAPI.search(query, 10);

      try {
        // Books on my shelf that are searched
        const currBooks = myBooks.filter((currBook) =>
          bookSearchList.some((book) => book.id === currBook.id)
        );
        // Searched books that aren't in my shelves
        const newBooks = bookSearchList.filter(
          (searchedBook) => !myBooks.some((book) => book.id === searchedBook.id)
        );

        setSearchBookResults(currBooks.concat(newBooks));
      } catch (error) {
        setSearchBookResults([]);
      }
    };

    getSearchResults(searchStr);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => {}}>
          Close
        </a>
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
        <BooksList
          books={searchBookResults}
          onShelfChange={onShelfChange}
        ></BooksList>
      </div>
    </div>
  );
};

export default SearchPage;
