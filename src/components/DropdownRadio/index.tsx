import { RadioGroup } from '@headlessui/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import editStatus from '../../utils/editStatus';
import { IPatient } from '../../types/IPatient';
import DropdownRadioItem from './DropdownRadioItem';

interface IDropdownRadio {
  defaultValue: 'Ativo' | 'Inativo';
  options: string[];
  label: string;
  patient: IPatient;
}

const DropdownRadio = ({
  patient,
  defaultValue,
  options,
  label,
}: IDropdownRadio) => {
  const [enabled, setEnabled] = useState<'Ativo' | 'Inativo'>(defaultValue);
  useEffect(() => {
    if (enabled) {
      editStatus(patient, enabled);
    }
  }, [enabled]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <FiChevronDown className="ml-0.5 text-sm text-slate-400"></FiChevronDown>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 mt-2 w-32 divide-y rounded-md bg-white shadow-xl ring-1 ring-slate-200 
         focus:outline-none"
        >
          <RadioGroup
            className="py-1.5 px-3"
            defaultValue={defaultValue}
            value={enabled}
            onChange={value => setEnabled(value)}
          >
            <RadioGroup.Label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {label}
            </RadioGroup.Label>
            {options.map(option => (
              <DropdownRadioItem option={option} key={option} />
            ))}
          </RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownRadio;
