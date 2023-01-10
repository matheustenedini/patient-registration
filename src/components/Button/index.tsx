import { ButtonHTMLAttributes, forwardRef } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

const Button = forwardRef(({ variant, ...props }: IButton, ref) => {
  return (
    <button
      {...props}
      // @ts-ignore: cant find solution
      ref={ref}
      className={`${
        props.className
      } flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2.5 text-xs font-medium transition-all ${
        (variant === 'primary' &&
          'bg-logo text-white hover:border-logo hover:bg-white hover:text-logo') ||
        (variant === 'secondary' &&
          'border-slate-300 text-slate-500 hover:bg-slate-50')
      }`}
    ></button>
  );
});

Button.displayName = 'Button';

export default Button;
