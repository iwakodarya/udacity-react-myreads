import { useState } from "react";

const UpdateShelf = ({ book, onShelfChange }) => {
  const [selectedShelf, setSelectedShelf] = useState(book.shelf);

  const handleShelfChange = (event) => {
    const newShelf = event.target.value;
    setSelectedShelf(newShelf);
    onShelfChange(book, newShelf);
  };

  return (
    <div className="book-shelf-changer">
      <select value={selectedShelf} onChange={handleShelfChange}>
        <option value="none" disabled>
          {selectedShelf === "none" ? "Add to..." : "Move to..."}
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        {selectedShelf !== "none" && <option value="none">None</option>}
      </select>
    </div>
  );
};

export default UpdateShelf;
