import handlers from "./index.handlers";

export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  data?: any;
}

export const initialState = {
  data: []
};

function reducer(state: State = initialState, action: Action): State {
  try {
    return handlers[action.type](state, action);
  } catch {
    return state;
  }
}

export default reducer;
