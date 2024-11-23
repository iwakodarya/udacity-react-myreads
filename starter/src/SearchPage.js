import { BooksList } from "./Bookshelf";

const SearchPage = ({}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => {}}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <BooksList books={[]}></BooksList>
      </div>
    </div>
  );
};

export default SearchPage;