import React, { useEffect, useState } from "react";
import { Input } from "semantic-ui-react";
import Client from "../services/Client";
import Post from "./CardPosts/Post";
import styles from "../styles/Home.module.css";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchApi = async () => {
      const { data } = await Client(
        `search?key=${encodeURIComponent(query)}&scope=${encodeURIComponent(
          `["POST", "QUESTION"]`
        )}`,
        "GET"
      );
      setResults(data);
    };
    searchApi();
    console.log("L7", query);
  }, [query]);

  console.log(results);

  const searchResultsMapped = () => {
    return results.map((result, id) => {
      switch (result.type) {
        case "posts":
          return <Post post={result} key={id} />;
        case "questions":
          return <Question question={result} key={id} />;
      }
    });
  };

  return (
    <div>
      <Input
        style={{ width: "350px" }}
        size="small"
        icon="search"
        placeholder="Search trainers, questions, blogs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {searchResultsMapped}
    </div>
  );
}

export default SearchBar;
