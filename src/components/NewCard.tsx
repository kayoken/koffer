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
      <div className="text-container">+</div>
      <div className="button-container">
        <button
          className="button edit new"
          onClick={(e) => {
            handleAdd(e);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewCard;
