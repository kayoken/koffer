import Card from "./Card";

interface WordlistProps {
  content: {
    id: number;
    values: string[];
    related: number[];
  }[];
  filterText: string;
}

const Wordlist = ({ content, filterText }: WordlistProps) => {
  return (
    <div className="cards">
      {content
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
  );
};

export default Wordlist;
