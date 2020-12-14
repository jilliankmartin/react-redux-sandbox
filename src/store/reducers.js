export const counterReducer = (state = null, action) => {
  switch (action.type) {
    case "INCREMENT": 
    return state + 1

    default:
      return state;
  }
}

export const nameReducer = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_NAME": 
    console.log("ACTION: ", action)
    return action.name;

    default:
      return state;
  }
}