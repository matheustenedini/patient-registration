import { Listbox } from '@headlessui/react';
import { Controller } from 'react-hook-form';
import { Control, FieldErrorsImpl } from 'react-hook-form/dist/types';
import { FiCheck, FiChevronDown } from 'react-icons/fi';
import { IPatient } from '../../types/IPatient';
import Label from '../Label/index.';

interface IInputSelect {
  name: keyof IPatient;
  label: string;
  isRequired?: boolean;
  control: Control<IPatient, any>;
  options: string[];
  errors: Partial<FieldErrorsImpl<IPatient>>;
}

const InputSelect = ({
  name,
  label,
  isRequired,
  control,
  options,
  errors,
}: IInputSelect) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: isRequired }}
      render={({ field }) => (
        <Listbox {...field} value="">
          <div className="relative w-full">
            <Label name="select" isRequired={isRequired}>
              {label}
            </Label>
            <Listbox.Button
              className={`relative mt-1 flex h-9 w-full items-center justify-between rounded-md border border-slate-300 px-3 text-sm text-slate-700
            focus:border-logo ${errors[name] && 'border-red-500'}`}
            >
              {field.value || (
                <span className="text-slate-400">
                  Selecione o {label.toLowerCase()}
                </span>
              )}
              <FiChevronDown className="text-slate-500"></FiChevronDown>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 w-full rounded-lg border border-slate-200 bg-slate-100 p-1 shadow-lg">
              {options.map(option => (
                <Listbox.Option
                  className="relative cursor-pointer rounded-md p-1.5 pl-3 text-sm text-slate-800 hover:bg-logo hover:text-white"
                  key={option}
                  value={option}
                >
                  {option}
                  {field.value === option && (
                    <FiCheck className="absolute top-1/2 right-3 -translate-y-1/2 text-base" />
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      )}
    ></Controller>
  );
};

export default InputSelect;
