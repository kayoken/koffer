declare interface State {
  id: number;
  values: {
    de: string;
    dk: string;
  };
  related?: number[];
}

declare type StateArray = State[];

declare type AddAction = {
  type: "added";
  id: number;
  values: {
    de: string;
    dk: string;
  };
};

declare type DeleteAction = {
  type: "deleted";
  id: number;
};

declare type UnknownAction = {
  type: string;
};

declare type Action = AddAction | DeleteAction | UnknownAction;
