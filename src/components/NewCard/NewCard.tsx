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
  function handleSubmit() {
    console.log("works");
  }

  return (
    <dialog
      style={{
        borderRadius: ".75rem",
      }}
      ref={ref as React.Ref<HTMLDialogElement>}
    >
      <form
        onSubmit={(e) => {
          console.log("works");
          e.preventDefault();
        }}
      >
        <h3>Please add new Translations for both sides of the card.</h3>
        <div style={{ width: "100%" }}>
          <label style={{ display: "block" }} htmlFor="german">
            German
          </label>
          <textarea
            style={{
              width: "100%",
            }}
            rows={5}
            id="german"
            name="german"
          />
        </div>
        <div style={{ width: "100%" }}>
          <label style={{ display: "block" }} htmlFor="danish">
            Danish
          </label>
          <textarea
            style={{
              width: "100%",
            }}
            rows={5}
            id="danish"
            name="danish"
          />
        </div>
      </form>
      <button
        style={{
          marginTop: "2rem",
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </dialog>
  );
});

//TODO: no hardcode
const NewCard = ({ dispatch }: NewCardProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialogOpen) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
    return () => {
      if (dialog?.open) {
        dialog.close();
      }
    };
  }, [dialogOpen]);

  function handleAdd() {
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
    <div className={"card bright new"}>
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
            e.stopPropagation();
            if (!dialogOpen) {
              handleAdd();
            }
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
