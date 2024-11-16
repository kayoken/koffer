import "./styles.css";
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

const AddDialog = forwardRef(function Dialog(
  { onSubmit }: { onSubmit: () => void },
  ref
) {
  return (
    <dialog ref={ref as React.Ref<HTMLDialogElement>}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <h3>Add new translations for both sides of the card.</h3>
        <div className="input-wrappter">
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
        <div className="input-wrapper">
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
        <Button type="submit" classes="add">
          Add
        </Button>
      </form>
    </dialog>
  );
});

//TODO: no hardcode
const NewCard = ({ dispatch }: NewCardProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    console.log(dialogOpen);
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
    dispatch({
      type: "added",
      values: {
        de: "Opa",
        dk: "farfar",
      },
    });
    setDialogOpen(false);
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
            setDialogOpen(true);
          }}
        >
          Add
        </Button>
      </div>
      <AddDialog onSubmit={handleAdd} ref={dialogRef} />
    </div>
  );
};

export default NewCard;
