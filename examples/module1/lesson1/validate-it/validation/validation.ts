import { INVALID_EMPTY_OR_NON_INTEGER, INVALID_NUMBER, VALID } from './messages';
import { emptyOrNonInteger, isNumberValid } from './methods';


export const validation = (value: string | undefined, result: HTMLDivElement) => {
  if (emptyOrNonInteger(value))
    return (result.innerHTML = INVALID_EMPTY_OR_NON_INTEGER);

  return isNumberValid(Number(value))
    ? result && (result.innerHTML = VALID)
    : result && (result.innerHTML = INVALID_NUMBER);
};