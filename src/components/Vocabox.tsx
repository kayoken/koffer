import vocabulary from "../resources/german_danish.json";
import "../styles/styles.css";
import { useState } from "react";
import Wordlist from "./Wordlist";
import SearchBar from "./Searchbar";

const Vocabox = () => {
  const [filterText, setFilterText] = useState("");
  const [loaded, setLoaded] = useState(true);

  // mocking network
  async function handleFilterText(text: string) {
    setFilterText(() => text);
    setLoaded(false);
    try {
      await networkRequest();
      //set elements
    } catch (err) {
      console.log(err);
    } finally {
      setLoaded(true);
    }
  }

  // mocking the network for now
  function networkRequest(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
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
