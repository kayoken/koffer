interface SearchBarProps {
  filterText: string;
  onFilterText: (text: string) => void;
}

const SearchBar = ({ filterText, onFilterText }: SearchBarProps) => {
  return (
    <form>
      <input
        className="form_input"
        type="text"
        onChange={(e) => {
          onFilterText(e.target.value);
        }}
        placeholder="Search..."
        value={filterText}
      />
    </form>
  );
};

export default SearchBar;
