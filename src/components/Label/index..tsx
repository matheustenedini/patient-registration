import { LabelHTMLAttributes } from 'react';

interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
  name: string;
  isRequired?: boolean;
}

const Label = ({ name, isRequired, ...props }: ILabel) => {
  return (
    <label
      {...props}
      htmlFor={name}
      className="text-xs font-semibold text-slate-900"
    >
      {props.children}
      {isRequired && <span className="font-bold">*</span>}
    </label>
  );
};

export default Label;
