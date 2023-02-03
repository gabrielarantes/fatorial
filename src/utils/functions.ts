export const calcFactorial = (number: number): number => {
  if (number <= 0) {
    return 1;
  }
  return number * calcFactorial(number - 1);
};
