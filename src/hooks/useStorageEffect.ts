import { useEffect, useState } from 'react';
import { IPatient } from '../types/IPatient';
import usePatientsListStore from '../store/usePatientsListStore';
import getPatientsList from '../utils/getPatientsList';

// keeps patientsList updated
// gets filters info and combines with local-storage updates
export const useStorageEffect = () => {
  const setPatientsList = usePatientsListStore(state => state.setPatientsList);
  const sortBy = usePatientsListStore(state => state.sortBy);
  const [searchValue, setSearchValue] = useState('');

  useEffect(
    () =>
      usePatientsListStore.subscribe(state =>
        setSearchValue(state.searchValue)
      ),
    []
  );

  useEffect(() => {
    const patientsList = getPatientsList();

    const filteredPatientsList = filter(patientsList, searchValue);
    const sortedPatientsList = sort(filteredPatientsList, sortBy);
    setPatientsList(sortedPatientsList);

    const storageUpdate = () => {
      const updatedPatientsList = getPatientsList();
      const filteredPatientsList = filter(updatedPatientsList, searchValue);
      const sortedPatientsList = sort(filteredPatientsList, sortBy);
      setPatientsList(sortedPatientsList);
    };
    window.addEventListener('storage', storageUpdate);

    return () => {
      window.removeEventListener('storage', storageUpdate);
    };
  }, [setPatientsList, sortBy, searchValue]);
};

const sort = (list: IPatient[], sortBy: 'latest' | 'oldest') => {
  if (sortBy === 'latest') {
    const sortedList = list.reverse();
    return sortedList;
  } else {
    return list;
  }
};

const filter = (list: IPatient[], value: string) => {
  if (value) {
    const filteredPatientsList = list.filter(patient =>
      patient.name.toUpperCase().includes(value.toUpperCase())
    );
    if (filteredPatientsList) {
      return filteredPatientsList;
    } else {
      return [];
    }
  } else {
    return list;
  }
};
