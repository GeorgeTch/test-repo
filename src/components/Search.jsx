import { useState } from "react";

export default function Search({ onSort, onSearch }) {
  // const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    // setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="search">
      <input type="text" placeholder="Search..." onChange={handleInputChange} />
      <button onClick={onSort}>Sort by Title</button>
    </div>
  );
}
