import { IPatient } from '../types/IPatient';

const getPatientsList = () => {
  if (!localStorage['@patients']) {
    localStorage['@patients'] = JSON.stringify([]);
  }

  let patients: IPatient[] = JSON.parse(localStorage['@patients']);
  return patients;
};

export default getPatientsList;
