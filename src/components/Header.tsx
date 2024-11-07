import logo from "../../koffer.svg";
import SearchBar from "./Searchbar";

interface SearchBarProps {
  filterText: string;
  onFilterText: (text: string) => void;
}

interface HeaderProps extends SearchBarProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  const { title, filterText, onFilterText } = props;
  return (
    <header>
      <div className="header-left">
        <img src={logo} width={65} alt="Logo" />
        <h1>{title}</h1>
      </div>
      <div className="searchfield">
        <SearchBar filterText={filterText} onFilterText={onFilterText} />
      </div>
    </header>
  );
};

export default Header;
