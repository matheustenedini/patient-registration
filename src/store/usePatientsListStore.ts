/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { IPatient } from '../types/IPatient';

interface IPatientsList {
  patientsList: IPatient[];
  searchValue: string;
  sortBy: 'latest' | 'oldest';
  setPatientsList: (list: IPatient[]) => void;
  setSearchValue: (value: string) => void;
  setSortBy: (value: 'latest' | 'oldest') => void;
}

// stores patients list to be shown in PatientsList component

const usePatientsListStore = create<IPatientsList>(set => ({
  patientsList: [],
  searchValue: '',
  sortBy: 'latest',
  setPatientsList: list => set(() => ({ patientsList: list })),
  setSearchValue: value => set(() => ({ searchValue: value })),
  setSortBy: value => set(() => ({ sortBy: value })),
}));

export default usePatientsListStore;
