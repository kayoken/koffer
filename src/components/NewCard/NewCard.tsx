import Button from "../Button";

interface NewCardProps {
  dispatch: (action: {
    type: string;
    values: {
      de: string;
      dk: string;
    };
  }) => void;
}

//TODO: hardcoded
const NewCard = ({ dispatch }: NewCardProps) => {
  function handleAdd(e: React.MouseEvent) {
    e.stopPropagation();
    dispatch({
      type: "added",
      values: {
        de: "Opa",
        dk: "farfar",
      },
    });
  }

  return (
    <div onClick={(e) => handleAdd(e)} className={"card bright new"}>
      <div className="header"></div>

      <div
        className="text-container"
        style={{
          fontSize: "3rem",
          fontWeight: "200",
        }}
      >
        +
      </div>
      <div className="button-container">
        <Button
          classes="button edit new"
          onClick={(e) => {
            handleAdd(e);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default NewCard;
