export const isNotEmpty = (inputValue: string | undefined) => inputValue !== '';
export const isNumber = (inputValue: string | undefined) =>
  !isNaN(Number(inputValue));
export const isInteger = (inputValue: string | undefined) =>
  Number.isInteger(Number(inputValue));

export const isGreaterThan = (inputValue: number, min: number) =>
  inputValue > min;
export const isLessThan = (inputValue: number, max: number) =>
  inputValue < max;
export const isEven = (inputValue: number) => inputValue % 2 === 0;

export const emptyOrNonInteger = (inputValue: string | undefined) =>
  !isNotEmpty(inputValue) || !isNumber(inputValue) || !isInteger(inputValue);

export const isNumberValid = (inputValue: number) =>
  isGreaterThan(inputValue, 0) &&
  isLessThan(inputValue, 100) &&
  isEven(inputValue);
