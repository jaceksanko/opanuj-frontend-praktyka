import { DIVISION_BY_ZERO_MESSAGE } from '../constants/messages';

export function add(addend1: number, addend2: number) {
  return { result: addend1 + addend2, error: null };
}
export function subtract(subtrahend: number, minuend: number) {
  return { result: subtrahend - minuend, error: null };
}
export function multiply(multiplicand: number, multiplier: number) {
  return { result: multiplicand * multiplier, error: null };
}

export function divide(dividend: number, divisor: number) {
  if (divisor === 0) {
    return { error: DIVISION_BY_ZERO_MESSAGE, result: 0 };
  }
  return { result: dividend / divisor, error: null };
}
