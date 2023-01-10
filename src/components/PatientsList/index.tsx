import TableHeader from './TableHeader';
import TableLine from './TableLine';
import usePatientsListStore from '../../store/usePatientsListStore';
import { useStorageEffect } from '../../hooks/useStorageEffect';

const PatientsList = () => {
  const patientsList = usePatientsListStore(state => state.patientsList);

  useStorageEffect();

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {patientsList && (
        <div className="mt-6 w-full flex-1 overflow-auto rounded-lg border border-slate-300">
          <TableHeader />

          {/* Main  */}
          <>
            {patientsList?.map(patient => (
              // Line
              <TableLine key={patient.id} patient={patient} />
            ))}
          </>
        </div>
      )}
    </div>
  );
};

export default PatientsList;
