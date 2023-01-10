import { Controller } from 'react-hook-form';
import {
  Control,
  FieldErrorsImpl,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form/dist/types';
import { PatternFormat } from 'react-number-format';
import { IPatient } from '../../types/IPatient';
import Label from '../Label/index.';

interface IInput {
  name: keyof IPatient;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  register: UseFormRegister<IPatient>;
  format?: string;
  mask?: string;
  control?: Control<IPatient, any>;
  errors: Partial<FieldErrorsImpl<IPatient>>;
  rules?: Omit<
    RegisterOptions<IPatient, keyof IPatient>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

const Input = ({
  name,
  label,
  placeholder,
  isRequired,
  register,
  format,
  mask,
  control,
  errors,
  rules,
}: IInput) => {
  return (
    <fieldset className="w-full">
      <Label name={name} isRequired={isRequired}>
        {label}
      </Label>
      {format ? (
        <Controller
          name={name}
          control={control}
          rules={{ required: isRequired, ...rules }}
          render={({ field }) => (
            <PatternFormat
              {...field}
              placeholder={placeholder}
              className={`mt-1 block h-9 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-700
              outline-offset-0 placeholder:text-slate-400 focus:border-logo focus:outline-logo
              ${errors[name] && 'border-red-500'}`}
              format={format}
              mask={mask}
            />
          )}
        ></Controller>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          {...register(name, { required: isRequired, ...rules })}
          className={`
          mt-1 block h-9 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-700
          outline-offset-0 placeholder:text-slate-400 focus:border-logo focus:outline-logo 
          ${errors[name] && 'border-red-500'}
          `}
        />
      )}
      <div className="whitespace-no-wrap text-xs text-red-500">
        {errors[name]?.message}
      </div>
    </fieldset>
  );
};

Input.displayName = 'Input';
export default Input;
