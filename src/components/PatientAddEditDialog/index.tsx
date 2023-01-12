import * as Dialog from '@radix-ui/react-dialog';
import { forwardRef, SetStateAction, Dispatch } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { AiOutlineEdit, AiOutlineUserAdd } from 'react-icons/ai';
import addPatient from '../../utils/addPatient';
import editPatient from '../../utils/editPatient';
import { IPatient } from '../../types/IPatient';
import Button from '../Button';
import Input from '../Input';
import InputSelect from '../InputSelect';

interface IPatientAddDialog {
  setAddEditDialogOpen: Dispatch<SetStateAction<boolean>>;
  type: 'add';
  defaultValues?: never;
}

interface IPatientEditDialog {
  setAddEditDialogOpen: Dispatch<SetStateAction<boolean>>;
  type: 'edit';
  defaultValues: IPatient;
}
type IPatientAddEditDialog = IPatientAddDialog | IPatientEditDialog;

const PatientAddEditDialog = forwardRef(
  (
    {
      type,
      defaultValues,
      setAddEditDialogOpen,
      ...props
    }: IPatientAddEditDialog,
    ref
  ) => {
    const {
      register,
      handleSubmit,
      control,
      setError,
      formState: { errors },
    } = useForm<IPatient>({
      defaultValues,
    });

    const onSubmit: SubmitHandler<IPatient> = data => {
      if (type === 'add') {
        try {
          addPatient(data);
          setAddEditDialogOpen(false);
        } catch (err: any) {
          setError('cpf', {
            type: 'custom',
            message: err.message,
          });
        }
      } else if (type === 'edit') {
        try {
          editPatient(data);
          setAddEditDialogOpen(false);
        } catch (err: any) {
          setError('cpf', {
            type: 'custom',
            message: err.message,
          });
        }
      }
    };
    return (
      <div
        // @ts-ignore: cant find solution
        ref={ref}
        {...props}
      >
        <Dialog.Overlay className="DialogOverlay" />

        <Dialog.Content className="DialogContent">
          <Dialog.Title className="flex text-lg font-semibold text-slate-900">
            <span className="mr-2 text-2xl">
              {type === 'add' ? <AiOutlineUserAdd /> : <AiOutlineEdit />}
            </span>
            {type === 'add' ? 'Adicionar' : 'Editar'} paciente
          </Dialog.Title>
          <Dialog.Description className="pl-8 text-sm text-slate-500">
            Preencha as informações do paciente
          </Dialog.Description>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 flex flex-col gap-2"
          >
            <Input
              name="name"
              label="Nome"
              placeholder="Nome"
              isRequired={true}
              register={register}
              errors={errors}
              rules={{
                minLength: {
                  value: 3,
                  message: 'O nome deve ter mais de 3 caracteres',
                },
              }}
            />

            <div className="flex gap-10">
              <Input
                name="birth"
                label="Data Nascimento"
                placeholder="00/00/0000"
                isRequired={true}
                register={register}
                format="##/##/####"
                control={control}
                errors={errors}
                rules={{
                  pattern: {
                    value:
                      /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/,
                    message: 'Data de Nascimento inválida',
                  },
                }}
              />
              <Input
                name="cpf"
                label="CPF"
                placeholder="000.000.000-00"
                isRequired={true}
                register={register}
                format="###.###.###-##"
                control={control}
                errors={errors}
                rules={{
                  pattern: {
                    value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                    message: 'CPF inválido',
                  },
                }}
              />
            </div>

            <Input
              name="address"
              label="Endereço"
              placeholder="Endereço"
              register={register}
              errors={errors}
            />

            <div className="flex gap-10">
              <InputSelect
                label="Sexo"
                isRequired
                name="gender"
                options={['Masculino', 'Feminino']}
                control={control}
                errors={errors}
              />
              <InputSelect
                label="Status"
                isRequired
                name="status"
                options={['Ativo', 'Inativo']}
                control={control}
                errors={errors}
              />
            </div>

            <Button variant="primary" className="mt-4">
              {type === 'add' ? 'Adicionar' : 'Continuar'}
            </Button>
          </form>
        </Dialog.Content>
      </div>
    );
  }
);

PatientAddEditDialog.displayName = 'PatientAddEditDialog';

export default PatientAddEditDialog;
