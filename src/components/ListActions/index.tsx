import AddPatient from './AddPatient';
import ExportTable from './ExportTable';

const ListActions = () => {
  return (
    <div className="flex gap-4">
      <ExportTable />

      <AddPatient />
    </div>
  );
};

export default ListActions;
