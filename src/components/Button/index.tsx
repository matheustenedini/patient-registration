import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

const Button = ({ children, variant, ...props }: IButton) => {
  return (
    <button
      className={`flex items-center gap-1.5 rounded-lg  px-3 py-2.5 text-xs font-medium ${
        (variant === 'primary' && 'bg-logo text-white') ||
        (variant === 'secondary' && 'border border-slate-300 text-slate-500')
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
