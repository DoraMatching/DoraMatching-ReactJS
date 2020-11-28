import React from "react";
import { Search } from "semantic-ui-react";

function SearchBar(props) {
  return (
    <Search
      placeholder="Search trainer, question, blog"
      size="mini"
      className="searchBar"
    />
  );
}

export default SearchBar;
