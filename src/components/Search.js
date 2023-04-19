import React, {useState} from "react";

function Search({setSearchKey}) {
  const[text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setSearchKey(text)
  }

  function handleSearchText(e){
    setText(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchText}
      />
      <button type='submit'>🔍</button>
    </form>
  );
}

export default Search;
