import getPatientsList from './getPatientsList';
import { v4 as uuidv4 } from 'uuid';
import { IPatient } from '../types/IPatient';

const addPatient = (newPatient: IPatient) => {
  const patientsList = getPatientsList();

  const filterCpfUsed = patientsList.filter(patient =>
    patient.cpf === newPatient.cpf ? true : false
  );
  if (filterCpfUsed.length) {
    throw new Error('Esse CPF já está em uso');
  } else {
    newPatient.id = uuidv4();
    patientsList.push(newPatient);
    localStorage['@patients'] = JSON.stringify(patientsList);
    window.dispatchEvent(new Event('storage'));
  }
};

export default addPatient;
