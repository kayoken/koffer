import Card from "./Card";

interface WordlistProps {
  content: {
    id: number;
    values: string[];
    related?: number[];
  }[];
  filterText: string;
}

const Wordlist = ({ content, filterText }: WordlistProps) => {
  const filteredList = content
    .filter((word) => {
      const lowerCaseFilterText = filterText.toLowerCase();
      if (filterText.length > 1) {
        //check if any of the words in the language values array matches
        return word.values.some((value) =>
          value.toLowerCase().includes(lowerCaseFilterText)
        );
      }
      return word;
    })
    .map((word) => {
      return <Card key={word.id} item={word} />;
    });

  return (
    <div className="cards">
      {filteredList.length > 0 ? filteredList : <span>No words found!</span>}
    </div>
  );
};

export default Wordlist;
