export const incrementCounter = payload => ({
  type: "INCREMENT"
});

export const nameChanger = payload => ({
  type: "CHANGE_NAME",
  name: payload
})