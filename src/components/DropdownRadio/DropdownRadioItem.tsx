import { RadioGroup } from '@headlessui/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface IDropdownRadioItem {
  option: string;
}

const DropdownRadioItem = ({ option }: IDropdownRadioItem) => {
  return (
    <DropdownMenu.Item key={option}>
      <RadioGroup.Option value={option}>
        {({ checked }) => (
          <div className="flex w-full cursor-pointer items-center gap-1.5 py-1 text-sm outline-none">
            <div className="relative h-3.5 w-3.5 rounded-full border border-slate-400">
              {checked && (
                <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-logo"></div>
              )}
            </div>
            {option}
          </div>
        )}
      </RadioGroup.Option>
    </DropdownMenu.Item>
  );
};

export default DropdownRadioItem;
