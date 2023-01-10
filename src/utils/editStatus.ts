import { IPatient } from '../types/IPatient';
import getPatientsList from './getPatientsList';

const editStatus = (
  editedPatient: IPatient,
  newStatus: 'Ativo' | 'Inativo'
) => {
  const patientsList = getPatientsList();

  const editedPatientIndex = patientsList.findIndex(
    patient => patient.id === editedPatient.id
  );
  patientsList[editedPatientIndex] = {
    ...patientsList[editedPatientIndex],
    status: newStatus,
  };

  localStorage['@patients'] = JSON.stringify(patientsList);
  window.dispatchEvent(new Event('storage'));
};

export default editStatus;
