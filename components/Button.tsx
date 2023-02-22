import { type FC } from 'react';

interface buttonProps {
  text: string;
  cbClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}

export const Button: FC<buttonProps> = ({ text, cbClick, type, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={
        cbClick != null
          ? () => {
              cbClick();
            }
          : undefined
      }
      className={`${
        disabled ?? false ? 'disabled:opacity-25 ' : ' '
      }bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded `}
    >
      {text}
    </button>
  );
};
