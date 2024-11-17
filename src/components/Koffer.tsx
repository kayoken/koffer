import initialVocabulary from "../resources/german_danish.json";
import "../styles/styles.css";
import { useEffect, useReducer, useRef, useState } from "react";
import Wordlist from "./Wordlist/Wordlist";
import { vocabularyReducer } from "../reducers/vocabularyReducer";
import Header from "./Header";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

const Koffer = () => {
  const [filterText, setFilterText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const transitionRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    setTimeout(() => {
      if (transitionRef.current) transitionRef.current.classList.add("loaded");
    }, 200);
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
      <div ref={transitionRef} className="hero">
        <div>
          This Is Koffer. <br />
          A new kind of vocabulary
          <br /> <span className="skewed">trainer!</span>
        </div>
      </div>
      {loaded ? (
        <>
          <Wordlist
            filterText={filterText}
            content={vocabulary}
            dispatch={dispatch}
          />
          <Footer />
        </>
      ) : (
        <div
          style={{
            minHeight: "50vh",
          }}
        >
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default Koffer;
