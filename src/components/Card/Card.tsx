import { useState } from "react";
import Button from "../Button/Button";
import RenderCounter from "../util/RenderCounter";

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
    <RenderCounter>
      <div className={"card " + (activeLanguage.colored ? "bright" : "dark")}>
        <div className="header">
          <Button
            classes="button delete"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="undefined"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </Button>
        </div>
        <div className="text-container">{item.values[currentLanguage]}</div>
        <div className="button-container">
          <Button
            classes="button edit"
            onClick={(e) => {
              e.stopPropagation();
              handleChange();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="undefined"
            >
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
            </svg>
          </Button>
          <Button
            classes="button flip"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="undefined"
            >
              <path d="M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z" />
            </svg>
          </Button>
        </div>
        {status === "changing" && <div>{status}</div>}
      </div>
    </RenderCounter>
  );
};

export default Card;
