export const incrementNumber = number => {
  return {
    type: 'INCREMENT',
    number,
  };
};

export const decrementNumber = number => {
  return {
    type: 'DECREMENT',
    number,
  };
};
