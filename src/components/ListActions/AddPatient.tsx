import PatientAddEditDialog from '../PatientAddEditDialog';
import Button from '../Button';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

const AddPatient = () => {
  const [addDialogOpen, setAddDialogOpen] = useState<boolean>(false);

  return (
    <Dialog.Root open={addDialogOpen} onOpenChange={setAddDialogOpen}>
      <Dialog.Trigger asChild>
        <Button variant="primary" onClick={() => setAddDialogOpen(true)}>
          Add paciente
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <PatientAddEditDialog
          type="add"
          setAddEditDialogOpen={setAddDialogOpen}
        />
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddPatient;
