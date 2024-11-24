import { Button } from './Button';
import type { Operation } from './ButtonsAndResult';

type ButtonProps = {
  buttonsContent: {
    label: string;
    operation: Operation
  }[];
  onClickHandler: (
    operation: Operation
  ) => void;
};

export const Buttons = ({ buttonsContent, onClickHandler }: ButtonProps) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 my-4">
      {buttonsContent.map((button) => (
        <Button
          key={button.label}
          onClick={() => onClickHandler(button.operation)}
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
};
