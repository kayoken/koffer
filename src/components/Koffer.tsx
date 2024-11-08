import initialVocabulary from "../resources/german_danish.json";
import "../styles/styles.css";
import { useEffect, useReducer, useState } from "react";
import Wordlist from "./Wordlist/Wordlist";
import { vocabularyReducer } from "../reducers/vocabularyReducer";
import Header from "./Header";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

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
      <Header
        title="Koffer"
        filterText={filterText}
        onFilterText={handleFilterText}
      />
      <div
        style={{
          height: "50vh",
          width: "100%",
          backgroundColor: "beige",
        }}
      ></div>
      {loaded ? (
        <Wordlist
          filterText={filterText}
          content={vocabulary}
          dispatch={dispatch}
        />
      ) : (
        <LoadingSpinner />
      )}
      <Footer />
    </div>
  );
};

export default Koffer;
