import type { ChangeEventHandler } from 'react';

type InputProps = {
  value: number | '';
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

export const Input = ({ value, onChangeHandler }: InputProps) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={onChangeHandler}
    />
  );
};
