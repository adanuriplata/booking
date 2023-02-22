import { type FC } from 'react';

interface buttonProps {
  text: string;
  cbClick?: () => void;
}

export const Button: FC<buttonProps> = ({ text, cbClick }) => {
  return (
    <button
      onClick={
        cbClick != null
          ? () => {
              cbClick();
            }
          : undefined
      }
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};
