import { useMemo, useState } from 'react';
import { Input } from './Input';
import { ButtonsAndResult } from './ButtonsAndResult';

export const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState<number >(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);

  const inputs = useMemo(
    () => [
      { num: firstNumber, setNum: setFirstNumber },
      { num: secondNumber, setNum: setSecondNumber },
    ],
    [firstNumber, secondNumber],
  );

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        {inputs.map(({ num, setNum }, index) => (
          <Input
            key={index}
            value={num}
            onChangeHandler={(e) => setNum(parseFloat(e.target.value ))}
          />
        ))}
      </div>
      <ButtonsAndResult
        firstNumber={firstNumber}
        secondNumber={secondNumber}
      />
    </div>
  );
};
