import PatientAddEditDialog from '../PatientAddEditDialog';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { IPatient } from '../../types/IPatient';
import { AiOutlineEdit } from 'react-icons/ai';
import DropdownRadio from '../DropdownRadio';

interface ITableLine {
  patient: IPatient;
}

const TableLine = ({ patient }: ITableLine) => {
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);

  return (
    <>
      <Dialog.Root open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <div className="flex w-full items-center gap-4 border-b border-slate-300 px-4 py-3.5 last:border-0">
          {/* Column  */}
          {(Object.keys(patient) as Array<keyof IPatient>)
            .filter(key => (key === 'id' ? false : true))
            .map(key => (
              <div
                key={key}
                // className={`flex w-full flex-1 basis-[200px] items-center text-ellipsis whitespace-nowrap text-sm text-slate-700
                className={`flex w-full flex-1 basis-[200px] items-center overflow-hidden text-sm text-slate-700
                ${
                  (key === 'address' && 'basis-[250px]') ||
                  (key === 'gender' && 'basis-[150px]') ||
                  (key === 'status' && 'basis-[150px]')
                }
                `}
              >
                <div
                  className={`${
                    key === 'status' &&
                    'text-[11px] font-bold uppercase tracking-widest'
                  } 
                  ${
                    (patient[key] === 'Ativo' && '!text-emerald-500') ||
                    (patient[key] === 'Inativo' && '!text-neutral-300')
                  }`}
                >
                  {patient[key]}
                </div>

                {key === 'status' && (
                  <DropdownRadio
                    defaultValue={patient.status}
                    options={['Ativo', 'Inativo']}
                    label="Status"
                    patient={patient}
                  />
                )}
              </div>
            ))}
          <div className="flex-1 basis-[50px] text-center">
            <Dialog.Trigger asChild>
              <button className="h-full text-lg text-slate-700 focus:outline-none">
                <AiOutlineEdit />
              </button>
            </Dialog.Trigger>
          </div>
        </div>

        <Dialog.Portal>
          <PatientAddEditDialog
            type="edit"
            defaultValues={patient}
            setAddEditDialogOpen={setEditDialogOpen}
          />
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default TableLine;
