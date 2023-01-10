import { ReactNode, ButtonHTMLAttributes } from 'react';

interface IButtons extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive?: boolean;
}

// eslint-disable-next-line no-unused-vars
const Buttons = ({ children, isActive }: IButtons) => {
  return (
    <button
      className={`text-sm font-medium text-slate-500 transition-colors hover:text-logo ${
        isActive && 'rounded-full border border-slate-200 px-5 py-2 !text-logo'
      }`}
    >
      {children}
    </button>
  );
};

export default Buttons;
