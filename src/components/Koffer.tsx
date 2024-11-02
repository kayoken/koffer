import initialVocabulary from "../resources/german_danish.json";
import logo from "../../koffer.svg";
import "../styles/styles.css";
import { useEffect, useReducer, useState } from "react";
import Wordlist from "./Wordlist";
import SearchBar from "./Searchbar";
import { vocabularyReducer } from "../reducers/vocabularyReducer";

const Koffer = () => {
  const [filterText, setFilterText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [vocabulary, dispatch] = useReducer(
    vocabularyReducer,
    initialVocabulary
  );

  //mocking a loader
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  function handleFilterText(text: string) {
    setFilterText(() => text);
  }

  return (
    <div className="voc_container montserrat-koffer">
      <header>
        <div className="header-left">
          <img src={logo} width={65} alt="Logo" />
          <h1>Koffer</h1>
        </div>
        <div className="searchfield">
          <SearchBar filterText={filterText} onFilterText={handleFilterText} />
        </div>
      </header>
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

export default Koffer;
