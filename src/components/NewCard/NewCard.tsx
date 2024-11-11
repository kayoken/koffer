import { useRef, useState, forwardRef, useEffect } from "react";
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

const Dialog = forwardRef(function Dialog(props, ref) {
  return (
    <dialog ref={ref as React.Ref<HTMLDialogElement>}>
      <form>Add new stuff!</form>
      <button>Save</button>
    </dialog>
  );
});

//TODO: no hardcode
const NewCard = ({ dispatch }: NewCardProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    if (dialogRef.current) {
      if (dialogOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  });

  function handleAdd(e: React.MouseEvent) {
    console.log(dialogOpen);
    e.stopPropagation();
    setDialogOpen(() => !dialogOpen);

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
      <Dialog ref={dialogRef} />
    </div>
  );
};

export default NewCard;
