import { fromJS } from "immutable";

export const initialState = fromJS({});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default homeReducer;
