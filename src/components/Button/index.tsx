import { MouseEventHandler, ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  type: 'primary' | 'secondary';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, type, onClick }: IButton) => {
  return (
    <button
      className={`flex items-center gap-1.5 rounded-lg  px-3 py-2 text-sm font-medium ${
        (type === 'primary' && 'bg-logo text-white') ||
        (type === 'secondary' && 'border border-slate-300 text-slate-500')
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
