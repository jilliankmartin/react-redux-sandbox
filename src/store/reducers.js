export const counterReducer = (state = null, action) => {
  switch (action.type) {
    case "INCREMENT": 
    return state.counter + 1;

    default:
      return state;
  }
}

export const nameReducer = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_NAME": 
    return {...state, name: action.payload};

    default:
      return state;
  }
}