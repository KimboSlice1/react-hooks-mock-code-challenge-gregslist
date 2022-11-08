import React from "react";

function Search({listingsData}) {
  const filteredName = listingsData.filter((filteredListings) => {
    if (filteredListings === listingsData.description ) return true 
    else{
      return false
    }
  })
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={""}
        onChange={(e) => console.log(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
