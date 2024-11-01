interface State {
  id: number;
  values: {
    de: string;
    dk: string;
  };
  related?: number[];
}
type StateArray = State[];

type Action = {
  type: string;
};

export function vocabularyReducer(
  state: StateArray = [],
  action: Action
): StateArray {
  switch (action.type) {
    case "added": {
      return {
        ...state,
      };
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
