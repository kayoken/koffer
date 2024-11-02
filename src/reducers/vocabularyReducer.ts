interface State {
  id: number;
  values: {
    de: string;
    dk: string;
  };
  related?: number[];
}
type StateArray = State[];

type AddAction = {
  type: "added";
  id: number;
  values: {
    de: string;
    dk: string;
  };
};

type DeleteAction = {
  type: "deleted";
  id: number;
};

type UnknownAction = {
  type: string;
};

type Action = AddAction | DeleteAction | UnknownAction;

export function vocabularyReducer(
  state: StateArray = [],
  action: Action
): StateArray {
  switch (action.type) {
    case "added": {
      const addAction = action as AddAction;
      return [
        {
          id: nextId++,
          values: {
            de: addAction.values.de,
            dk: addAction.values.dk,
          },
        },
        ...state,
      ];
    }
    case "deleted": {
      const deleteAction = action as DeleteAction;
      return state.filter((item) => {
        return item.id !== deleteAction.id;
      });
    }
    default: {
      const unknownAction = action as UnknownAction;
      throw Error(`Unknown action: ${unknownAction.type}`);
    }
  }
}

let nextId = 1000;
