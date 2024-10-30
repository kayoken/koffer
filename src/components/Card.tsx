import { useState } from "react";

interface LanguageState {
  language: number;
  colored: boolean;
}

type CardProps = {
  item: {
    id: number;
    values: string[];
    // TODO: references to other items
    related?: number[];
  };
};

const Card = ({ item }: CardProps) => {
  const [activeLanguage, setActiveLanguage] = useState<LanguageState>({
    language: Math.round(Math.random()),
    colored: true,
  });

  function handleClick() {
    setActiveLanguage((prevLanguage: LanguageState) => ({
      language: prevLanguage.language === 1 ? 0 : 1,
      colored: !prevLanguage.colored,
    }));
  }

  return (
    <div
      onClick={() => handleClick()}
      className={"card " + (activeLanguage.colored ? "bright" : "dark")}
    >
      {item.values[activeLanguage.language]}
      {/* <button
          onClick={(e) => {
            e.stopPropagation();
            handleChange(item.values[activeLanguage]);
          }}
        >
          change
        </button> */}
    </div>
  );
};

export default Card;
