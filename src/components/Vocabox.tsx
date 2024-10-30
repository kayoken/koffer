import vocabulary from "../resources/german_danish.json";
import "../styles/styles.css";
import { useEffect, useState } from "react";
import Wordlist from "./Wordlist";
import SearchBar from "./Searchbar";

const Vocabox = () => {
  const [filterText, setFilterText] = useState("");
  const [loaded, setLoaded] = useState(false);

  // just mocking a loader
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  // mocking network
  function handleFilterText(text: string) {
    setFilterText(() => text);
  }

  return (
    <div className="voc_container">
      <div className="searchfield">
        <SearchBar filterText={filterText} onFilterText={handleFilterText} />
      </div>
      {loaded ? (
        <Wordlist filterText={filterText} content={vocabulary} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Vocabox;
