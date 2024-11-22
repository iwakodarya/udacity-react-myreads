import UpdateShelf from "./UpdateShelf";

const Book = ({ bookInfo }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: "url(" + bookInfo.imageLinks.thumbnail + ")",
            }}
          ></div>
          <UpdateShelf currentShelf={bookInfo.shelf}></UpdateShelf>
        </div>
        <div className="book-title">{bookInfo.title}</div>
        <div className="book-authors">{bookInfo.authors}</div>
      </div>
    </li>
  );
};

export default Book;
