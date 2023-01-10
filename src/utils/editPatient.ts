import { IPatient } from '../types/IPatient';
import getPatientsList from './getPatientsList';

const editPatient = (editedPatient: IPatient) => {
  const patientsList = getPatientsList();

  const filterCpfUsed = patientsList.filter(patient =>
    patient.cpf === editedPatient.cpf ? true : false
  );

  const isUsedOwnCpf = filterCpfUsed[0]?.id === editedPatient.id ? true : false;

  if (filterCpfUsed.length && !isUsedOwnCpf) {
    throw new Error('Esse CPF já está em uso');
  } else {
    const editedPatientIndex = patientsList.findIndex(
      patient => patient.id === editedPatient.id
    );
    patientsList[editedPatientIndex] = editedPatient;

    localStorage['@patients'] = JSON.stringify(patientsList);
    window.dispatchEvent(new Event('storage'));
  }
};

export default editPatient;
