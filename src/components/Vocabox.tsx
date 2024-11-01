import initialVocabulary from "../resources/german_danish.json";
import logo from "../../koffer.svg";
import "../styles/styles.css";
import { useEffect, useReducer, useState } from "react";
import Wordlist from "./Wordlist";
import SearchBar from "./Searchbar";
import { vocabularyReducer } from "../reducers/vocabularyReducer";

const Vocabox = () => {
  const [filterText, setFilterText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [vocabulary, dispatch] = useReducer(
    vocabularyReducer,
    initialVocabulary
  );

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
      <img src={logo} />
      <h2>Koffer - Vocabulary trainer</h2>
      <div className="searchfield">
        <SearchBar filterText={filterText} onFilterText={handleFilterText} />
      </div>
      {loaded ? (
        <Wordlist
          filterText={filterText}
          content={vocabulary}
          dispatch={dispatch}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Vocabox;
