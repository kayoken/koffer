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
      return state.filter((item: { id: number }) => {
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
