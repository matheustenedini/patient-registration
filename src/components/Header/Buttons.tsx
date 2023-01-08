import { ReactNode } from 'react';

interface IButtons {
  children: ReactNode;
  isActive?: boolean;
}

// eslint-disable-next-line no-unused-vars
const Buttons = ({ children, isActive }: IButtons) => {
  return (
    <button
      className={`text-sm font-medium text-slate-500 ${
        isActive &&
        'rounded-full border border-slate-200 px-6 py-1.5 !text-logo'
      }`}
    >
      {children}
    </button>
  );
};

export default Buttons;
