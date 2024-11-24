import { useState } from 'react';
import { Buttons } from './Buttons';
import { BUTTONS_CONTENT } from '../constants/buttonsContent';

export type Operation = (
  a: number,
  b: number
) => {
  result: number;
  error: string | null;
};

export const ButtonsAndResult = ({
  firstNumber,
  secondNumber,
}: {
  firstNumber: number;
  secondNumber: number;
}) => {
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<string>('');

  const calculate = (operation: Operation) => {
    const operationResult = operation(
      isNaN(firstNumber) ? 0 : firstNumber,
      isNaN(secondNumber) ? 0 : secondNumber
    );
    operationResult.error
      ? setError(operationResult.error)
      : setResult(operationResult.result);
  };
  return (
    <>
      <Buttons buttonsContent={BUTTONS_CONTENT} onClickHandler={calculate} />
      {result && <div>Result: {result}</div>}
      {error && <div>{error}</div>}
    </>
  );
};
