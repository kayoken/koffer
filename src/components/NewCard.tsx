interface NewCardProps {
  dispatch: (action: { type: string }) => void;
}

const NewCard = ({ dispatch }: NewCardProps) => {
  function handleAdd() {
    dispatch({
      type: "added",
    });
  }

  return (
    <div onClick={() => handleAdd()} className={"card bright"}>
      <div className="text-container">+</div>
      <div className="button-container">
        <button
          className="button edit new"
          onClick={(e) => {
            e.stopPropagation();
            handleAdd();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewCard;
