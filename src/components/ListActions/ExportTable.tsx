import * as XLSX from 'xlsx';
import getPatientsList from '../../utils/getPatientsList';
import { FiUpload } from 'react-icons/fi';
import Button from '../Button';

const ExportTable = () => {
  const downloadExcel = () => {
    const data = getPatientsList();
    // @ts-ignore: ts wants to make id optional
    data.forEach(p => delete p.id);

    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.sheet_add_aoa(
      worksheet,
      [['Nome', 'Data Nascimento', 'CPF', 'Endereço', 'Sexo', 'Status']],
      {
        origin: 'A1',
      }
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Patients');
    XLSX.writeFile(workbook, 'Patients.xlsx');
  };
  return (
    <Button variant="secondary" onClick={() => downloadExcel()}>
      <FiUpload className="text-sm" />
      Exportar tabela
    </Button>
  );
};

export default ExportTable;
