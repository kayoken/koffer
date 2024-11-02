import { useState } from "react";

interface LanguageState {
  language: number;
  colored: boolean;
}

type CardProps = {
  dispatch: (action: { type: string; id: number }) => void;
  item: {
    id: number;
    values: {
      [key: string]: string;
    };
    // TODO: references to other items
    related?: number[];
  };
};

const Card = ({ item, dispatch }: CardProps) => {
  const [activeLanguage, setActiveLanguage] = useState<LanguageState>({
    language: Math.round(Math.random()),
    colored: true,
  });

  const [status, setStatus] = useState<string>("viewing");
  const currentLanguage = activeLanguage.language ? "de" : "dk";

  function handleClick() {
    setActiveLanguage((prevLanguage: LanguageState) => ({
      language: prevLanguage.language === 1 ? 0 : 1,
      colored: !prevLanguage.colored,
    }));
  }

  function handleChange() {
    setStatus((prevStatus) =>
      prevStatus === "changing" ? "viewing" : "changing"
    );
  }

  function handleDelete() {
    dispatch({ type: "deleted", id: item.id });
  }

  return (
    <div
      onClick={() => handleClick()}
      className={"card " + (activeLanguage.colored ? "bright" : "dark")}
    >
      <button
        className="button delete"
        onClick={(e) => {
          e.stopPropagation();
          handleDelete();
        }}
      >
        x
      </button>
      <div className="text-container">{item.values[currentLanguage]}</div>
      <div className="button-container">
        <button
          className="button edit"
          onClick={(e) => {
            e.stopPropagation();
            handleChange();
          }}
        >
          Edit
        </button>
        <button
          className="button flip"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          Flip
        </button>
      </div>
      {status === "changing" && <div>{status}</div>}
    </div>
  );
};

export default Card;
