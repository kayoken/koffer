import vocabulary from "../resources/german_danish.json";
import "../styles/styles.css";
import { useState } from "react";
import Card from "./Card";
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
        <div className="cards">
          {vocabulary
            .filter((item) => {
              const lowerCaseFilterText = filterText.toLowerCase();
              if (filterText.length > 1) {
                // start filtering only from 2 chars
                //check if any of the words in the language values array matches
                return item.values.some((value) =>
                  value.toLowerCase().includes(lowerCaseFilterText)
                );
              }
              return item;
            })
            .map((item) => {
              return <Card key={item.id} item={item} />;
            })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Vocabox;
