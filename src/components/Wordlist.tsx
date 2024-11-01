import Card from "./Card";
import NewCard from "./NewCard";

interface WordlistProps {
  content: {
    id: number;
    values: {
      [key: string]: string;
    };
    related?: number[];
  }[];
  filterText: string;
  dispatch: (action: { type: string }) => void;
}

const Wordlist = ({ content, filterText, dispatch }: WordlistProps) => {
  const filteredList = content
    .filter((wordObj) => {
      const lowerCaseFilterText = filterText.toLowerCase();
      if (filterText.length > 1) {
        //check if any of the words in the language values array matches
        return Object.values(wordObj.values).some((value) =>
          value.toLowerCase().includes(lowerCaseFilterText)
        );
      }
      return wordObj;
    })
    .map((wordObj) => {
      return <Card key={wordObj.id} item={wordObj} />;
    });

  return (
    <div className="cards">
      <NewCard dispatch={dispatch} />
      {filteredList.length > 0 && filteredList}
    </div>
  );
};

export default Wordlist;
