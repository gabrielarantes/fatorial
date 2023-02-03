const initialState = {
  number: 0,
};

export default function manageNumber(state = initialState, action) {
  switch (action.type) {
    case 'DECREMENT':
      return {...state, number: action.number--};
    case 'INCREMENT':
      return {...state, number: action.number++};
    default:
      return state;
  }
}
