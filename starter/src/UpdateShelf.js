import { useState } from "react";

const UpdateShelf = ({ currentShelf }) => {
  const [selectedShelf, setSelectedShelf] = useState(currentShelf);

  return (
    <div className="book-shelf-changer">
      <select value={selectedShelf}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default UpdateShelf;
